"use client";

import { useState } from "react";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";
import { FoundersAndInvestorsTab } from "@/components/organisms/PricingSection/partials/FoundersAndInvestorsTab";
import { SponsorsTab } from "@/components/organisms/PricingSection/partials/SponsorsTab";
import { Balls } from "@/svg/Balls";

const tabs = [
	{
		id: 1,
		label: "For founders & investors",
	},
	{
		id: 2,
		label: "For sponsors",
	},
];

export const PricingSection = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	return (
		<section>
			<Container className="py-10">
				<div>
					<div className="mb-7 flex flex-col-reverse items-start justify-between gap-7 md:flex-row md:items-end md:gap-4">
						<div>
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
						<div className="self-end md:self-auto">
							<Balls className="w-36 md:w-52" />
						</div>
					</div>
					{activeTab === 1 ? <FoundersAndInvestorsTab /> : <SponsorsTab />}
				</div>
			</Container>
		</section>
	);
};
