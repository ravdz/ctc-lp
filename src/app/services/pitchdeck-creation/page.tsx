import type { Metadata } from "next";
import { ServicesPitchdeckCreationHero } from "@/components/organisms/ServicesPitchdeckCreationHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCallSection } from "@/components/organisms/ScheduleCallSection";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
	title: "Pitchdeck Creation Service | Climate Tech Connect",
	description:
		"Learn about our Pitchdeck Creation Service at Climate Tech Connect. Create compelling pitch decks to attract investors and partners for your climate technology projects.",
};

const steps = [
	{
		id: 1,
		label: "Application & first strategy session",
		list: [
			"defining your unique value proposition & competitive edge;",
			"identifying key investment hooks that resonate with VCs and angels;",
			"understanding your traction, growth story, and scalability.",
		],
	},
	{
		id: 2,
		label: "Crafting a narrative",
		list: ["based on the strategic input, we plan out or refine your pitch deck structure"],
	},
	{
		id: 3,
		label: "Clear design",
		list: [
			"minimal, focused & clear to read, on-brand design & visuals;",
			"using data vizualization.",
		],
	},
	{
		id: 4,
		label: "Pitch delivery coaching",
		list: [
			"1:1 pitch refining of the storytelling & delivery;",
			"investor Q&A prep to help you answer tough questions with ease;",
			"feedback & iteration based on real investor insights;.",
		],
	},
	{
		id: 5,
		label: "Investor positioning & fundraising support (optional)",
		description: "Beyond the pitch deck, we can help with:",
		list: [
			"identifying the right investors based on your stage & industry (Investor matchmaking)",
			"making warm introductions to relevant VCs, angels, and funds",
			"supporting with deal negotiation & closing (Deal closing & Legal support)",
		],
	},
];

const benefits = [
	{
		id: 1,
		title: "Investor psychology insights",
		description:
			"We understand how investors think and we'll help you structure your pitch so it speaks directly to investor decision-making process.",
	},
	{
		id: 2,
		title: "Public speaking & pitching",
		description:
			"Great ideas fail if they're not communicated well. We offer dedicated pitch coaching, public speaking training, and even technical sessions on structuring your slides. Whether it's handling tough investor questions or owning the stage, we'll help you deliver your pitch with clarity and confidence.",
	},
	{
		id: 3,
		title: "Exclusive meetups & hands-on workshops",
		description:
			"We organize regular events focused on pitching & fundraising, where you can learn from top VCs, see real-life pitch deck breakdowns, and practice your delivery. These sessions are designed to help sharpen messaging and overcome common mistakes.",
	},
	{
		id: 4,
		title: "Professional-drade deck",
		description:
			"A clear, data-driven, visually compelling, and professionally designed presentation that makes the message stand out.",
	},
];
const ServicesPitchdeckCreation = () => {
	return (
		<div>
			<ServicesPitchdeckCreationHero />
			<StepsSection heading="How it works" steps={steps} />
			<BenefitsSection heading="What are the benefits" benefits={benefits} />
			<ScheduleCallSection>
				<Text is="p" className="text-base text-gray-900 md:text-xl lg:text-2xl">
					Are you a <b>founder looking to fundraise and in need of a winning deck?</b> Schedule a
					free call and see how we can support you.
				</Text>
			</ScheduleCallSection>
			<ServicesFaq />
		</div>
	);
};

export default ServicesPitchdeckCreation;
