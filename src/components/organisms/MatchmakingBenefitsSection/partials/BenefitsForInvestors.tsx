import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import servicesMatchmaking from "@/data/services-matchmaking.json";

export const BenefitsForInvestors = () => {
	return (
		<BenefitsSection
			benefits={servicesMatchmaking.benefits.for_investors_tab}
			className="py-0 md:py-0"
		/>
	);
};
