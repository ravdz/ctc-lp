import { BenefitsSection } from "@/components/organisms/BenefitsSection";

const benefits = [
	{
		id: 1,
		title: "Strategic fit & growth potential",
		description:
			"Not all startups are the right match. The best investments align with your sector expertise, investment thesis, and long-term strategy. Choosing the right startup means backing a team and business model you believe in—one that can scale efficiently and deliver strong returns.",
	},
	{
		id: 2,
		title: "Better risk management & due diligence",
		description:
			"By ensuring alignment from the start, you reduce the risk of investing in companies that lack the right traction, governance, or scalability potential. We provide pre-vetted startups so you can focus on opportunities that meet your expectations, saving time on due diligence.",
	},
	{
		id: 3,
		title: "Efficient deal flow & time savings",
		description:
			"Sourcing high-quality deals takes time and effort. Instead of sifting through hundreds of mismatched opportunities, our matchmaking service connects you directly with startups that fit your criteria—whether that's industry, stage, ticket size, or market focus.",
	},
	{
		id: 4,
		title: "Access to high-quality founders & innovation",
		description:
			"Investing isn't just about who needs money—it's about finding visionary founders with breakthrough ideas. We introduce you to high-potential startups in climate-tech that fit your portfolio's needs and offer scalable, impactful solutions.",
	},
	{
		id: 5,
		title: "Stronger founder-investor relationships",
		description:
			"A successful investment isn't just about capital—it's about partnership. Working with a startup that values your input and expertise leads to a more collaborative, productive relationship. The wrong match can result in misalignment, frustration, or even loss of investment.",
	},
	{
		id: 6,
		title: "A smarter, more targeted investment approach",
		description:
			"By refining your deal flow, ensuring strategic fit, and helping you build long-term relationships with the right founders, we make your investment process more efficient, focused, and rewarding.",
	},
];

export const BenefitsForInvestors = () => {
	return <BenefitsSection benefits={benefits} className="py-0 md:py-0" />;
};
