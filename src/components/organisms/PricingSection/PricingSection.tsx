"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { FoundersAndInvestorsTab } from "@/components/organisms/PricingSection/partials/FoundersAndInvestorsTab";
import { SponsorsTab } from "@/components/organisms/PricingSection/partials/SponsorsTab";
import { FallingCircle } from "@/svg/FallingCircle";
import Loading from "@/app/loading";
import { TabList } from "@/components/molecules/TabList";

const tabs = [
	{
		id: 1,
		query: "investors",
		label: "For founders & investors",
	},
	{
		id: 2,
		query: "sponsors",
		label: "For sponsors",
	},
];

export const PricingSection = () => {
	const searchParams = useSearchParams();
	const membership = searchParams.get("membership");
	const pricingSectionRef = useRef<HTMLElement>(null);
	const [activeTab, setActiveTab] = useState<number>(1);
	useEffect(() => {
		const tab = tabs.find((tab) => tab.query === membership);
		if (tab) {
			setActiveTab(tab.id);
			pricingSectionRef.current?.scrollIntoView({ behavior: "instant" });
		}
	}, [membership]);
	return (
		<Suspense fallback={<Loading />}>
			<section id="membership" ref={pricingSectionRef}>
				<Container className="py-10">
					<div>
						<div className="mb-7 flex flex-col-reverse items-start justify-between gap-7 md:flex-row md:items-end md:gap-4">
							<div>
								<Heading is="h2" className="mb-7">
									Membership options
								</Heading>
								<TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
							</div>
							<div className="self-end md:self-auto">
								<FallingCircle className="w-36 md:w-44 lg:w-52" />
							</div>
						</div>
						{activeTab === 1 ? <FoundersAndInvestorsTab /> : <SponsorsTab />}
					</div>
				</Container>
			</section>
		</Suspense>
	);
};
