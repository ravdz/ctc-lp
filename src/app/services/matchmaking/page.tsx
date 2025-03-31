import type { Metadata } from "next";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { ServicesMatchmakingHero } from "@/components/organisms/ServicesMatchmakingHero";
import { StepsSection } from "@/components/organisms/StepsSection";
import { MatchmakingBenefitsSection } from "@/components/organisms/MatchmakingBenefitsSection";
import servicesMatchmaking from "@/data/services-matchmaking.json";

export const metadata: Metadata = {
	title: servicesMatchmaking.meta_title,
	description: servicesMatchmaking.meta_description,
};

const ServicesMatchmaking = () => {
	return (
		<div>
			<ServicesMatchmakingHero />
			<StepsSection
				heading={servicesMatchmaking.steps.heading}
				steps={servicesMatchmaking.steps.steps}
			/>
			<MatchmakingBenefitsSection />
			<ServicesFaq />
		</div>
	);
};

export default ServicesMatchmaking;
