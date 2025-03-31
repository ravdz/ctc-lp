"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { BenefitsForFounders } from "@/components/organisms/MatchmakingBenefitsSection/partials/BenefitsForFounders";
import { BenefitsForInvestors } from "@/components/organisms/MatchmakingBenefitsSection/partials/BenefitsForInvestors";
import { Heading } from "@/components/atoms/Heading";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import servicesMatchmaking from "@/data/services-matchmaking.json";

const tabs = [
	{
		id: 1,
		label: "For founders",
	},
	{
		id: 2,
		label: "For investors",
	},
];

export const MatchmakingBenefitsSection = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	return (
		<section>
			<Container className="mb-8 pt-14 md:pt-24">
				<div>
					<Heading is="h2" className="mb-7">
						What are the benefits
					</Heading>
					<div className="flex items-center justify-start gap-3">
						{tabs.map((tab) => (
							<Button
								className="text-sm sm:text-base"
								onClick={() => setActiveTab(tab.id)}
								key={tab.id}
								variant={activeTab === tab.id ? "primary-reverse" : "primary"}
							>
								{tab.label}
							</Button>
						))}
					</div>
				</div>
			</Container>
			<div className="pb-12 md:pb-14">
				{activeTab === 1 ? <BenefitsForFounders /> : <BenefitsForInvestors />}
			</div>
			<Container>
				<ScheduleCall
					button={{
						url: servicesMatchmaking.benefits.schedule_call.button.url,
						label: servicesMatchmaking.benefits.schedule_call.button.label,
					}}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: servicesMatchmaking.benefits.schedule_call.text,
						}}
					/>
				</ScheduleCall>
			</Container>
		</section>
	);
};
