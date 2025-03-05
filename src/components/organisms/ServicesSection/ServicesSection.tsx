"use client";
import { useEffect, useRef, useState } from "react";

import { useSearchParams } from "next/navigation";
import { InvestorTab } from "./partials/InvestorTab";
import { TalentPoolTab } from "./partials/TalentPoolTab";
import { ConsortiaTab } from "./partials/ConsortiaTab";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";

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
		<section ref={servicesSectionRef} id="services">
			<Container className="py-10">
				<div>
					<div className="mb-10">
						<Heading is="h2" className="mb-7">
							Services
						</Heading>
						<div className="flex items-center justify-start gap-3">
							{tabs.map((tab) => (
								<Button
									className="text-sm sm:text-base"
									onClick={() => setActiveTab(tab.id)}
									key={tab.id}
									variant={activeTab === tab.id ? "secondary" : "primary"}
								>
									{tab.label}
								</Button>
							))}
						</div>
					</div>
					{activeTab === 1 ? (
						<InvestorTab />
					) : activeTab === 2 ? (
						<TalentPoolTab />
					) : (
						<ConsortiaTab />
					)}
				</div>
			</Container>
		</section>
	);
};
