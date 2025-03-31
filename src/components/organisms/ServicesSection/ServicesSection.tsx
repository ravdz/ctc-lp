"use client";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { InvestorTab } from "./partials/InvestorTab";
import { TalentPoolTab } from "./partials/TalentPoolTab";
import { ConsortiaTab } from "./partials/ConsortiaTab";
import { Container } from "@/components/atoms/Container";
import Loading from "@/app/loading";
import { TabList } from "@/components/molecules/TabList";
const tabs = [
	{
		id: 1,
		query: "investors",
		label: "Investors ready",
	},
	{
		id: 2,
		query: "talent-pool",
		label: "Talent pool",
	},
	{
		id: 3,
		query: "consortia",
		label: "Consortia creation",
	},
];

export const ServicesSection = () => {
	const searchParams = useSearchParams();
	const service = searchParams.get("service");
	const servicesSectionRef = useRef<HTMLElement>(null);
	const [activeTab, setActiveTab] = useState<number>(1);
	useEffect(() => {
		const tab = tabs.find((tab) => tab.query === service);
		if (tab) {
			setActiveTab(tab.id);
			servicesSectionRef.current?.scrollIntoView({ behavior: "instant" });
		}
	}, [service]);
	return (
		<Suspense fallback={<Loading />}>
			<section ref={servicesSectionRef} id="services">
				<Container className="py-10">
					<TabList tabs={tabs} className="mb-10" activeTab={activeTab} onTabChange={setActiveTab} />
					{activeTab === 1 ? (
						<InvestorTab />
					) : activeTab === 2 ? (
						<TalentPoolTab />
					) : (
						<ConsortiaTab />
					)}
				</Container>
			</section>
		</Suspense>
	);
};
