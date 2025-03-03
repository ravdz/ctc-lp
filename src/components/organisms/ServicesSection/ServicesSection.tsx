"use client";
import { useState } from "react";

import { InvestorTab } from "./partials/InvestorTab";
import { TalentPoolTab } from "./partials/TalentPoolTab";
import { ConsortiaTab } from "./partials/ConsortiaTab";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";

const tabs = [
	{
		id: 1,
		label: "Investors ready",
	},
	{
		id: 2,
		label: "Talent pool",
	},
	{
		id: 3,
		label: "Consortia creation",
	},
];

export const ServicesSection = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	return (
		<section>
			<Container className="py-10">
				<div>
					<div className="mb-7">
						<Heading is="h2" className="mb-7">
							Membership options
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
