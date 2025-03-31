import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import servicesMatchmaking from "@/data/services-matchmaking.json";

export const BenefitsForFounders = () => {
	return (
		<BenefitsSection
			benefits={servicesMatchmaking.benefits.for_founders_tab}
			className="py-0 md:py-0"
		/>
	);
};
