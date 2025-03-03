import { BenefitsSection } from "@/components/organisms/BenefitsSection";

const benefits = [
	{
		id: 1,
		title: "Strategic alignment",
		description:
			"Not all investors bring the same value. The right investor will understand your industry, provide relevant expertise, and offer strategic guidance that makes you grow. The wrong one may push for changes that don't align with your vision.",
	},
	{
		id: 2,
		title: "Favorable deal terms & control",
		description:
			"Investors have different approaches to control, governance, and exit expectations. A misaligned investor might demand too much equity, aggressive growth targets, or restrictive terms, limiting your decision-making power. The right investor aligns with your long-term vision while offering fair terms.",
	},
	{
		id: 3,
		title: "Long-term partnership",
		description:
			"Investment relationships often last years, sometimes longer even than co-founder relationships. Choosing the wrong investor can lead to misaligned expectations, conflicts, or pressure for premature exits, which can derail your company's future. And waste your time.",
	},
	{
		id: 4,
		title: "Stability & follow-on funding",
		description:
			"Some investors are one-time backers, while others provide follow-on investments in later rounds. The right investor supports your company through multiple stages, reducing the pressure to constantly fundraise from scratch.",
	},
	{
		id: 5,
		title: "Network & opportunities",
		description:
			"The right investor opens doors to potential customers, partners, co-investors, and top talent. It's more than just that one person/company. An investor with no industry connections might provide money but little else, missing out on opportunities that could move you forward.",
	},
	{
		id: 6,
		title: "Cultural & ethical fit",
		description:
			"A strong personal and cultural fit ensures smoother collaboration. If an investor doesn't align with your values or work style, it can create friction that slows down progress.",
	},
];

export const BenefitsForFounders = () => {
	return <BenefitsSection benefits={benefits} className="py-0 md:py-0" />;
};
