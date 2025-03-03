import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCallSection } from "@/components/organisms/ScheduleCallSection";
import { ServicesDealClosingHero } from "@/components/organisms/ServicesDealClosingHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { Text } from "@/components/atoms/Text";

const steps = [
	{
		id: 1,
		label: "Initial consultation",
		list: [
			"assesing stage & needs;",
			"reviewing existing term sheets/investor interest;",
			"identifying potential legal and strategic challenges.",
		],
	},
	{
		id: 2,
		label: "Deal refinement",
		list: [
			"reviewing & advising on standard and negotiable terms, ensuring alignement of the long-term goals",
		],
	},
	{
		id: 3,
		label: "Negotiation support",
		list: [
			"providing expertise in addressing investor objections, value-based closing techniques, investor psychology & balancing demands.",
		],
	},
	{
		id: 4,
		label: "Closing coordination",
		list: [
			"support setting closing timeline, coordinating communication between company counsel, lead investor, and other participants",
		],
	},
	{
		id: 5,
		label: "Post-closing support",
		list: ["advising on implementing any new governance structures."],
	},
];

const benefits = [
	{
		id: 1,
		title: "Streamlined process",
		description:
			"You get a faster and more efficient deal-closing process, with expert management of administrative tasks and real-time visibility into your financing round.",
	},
	{
		id: 2,
		title: "Risk protection",
		description:
			"You benefit from risk mitigation strategies that minimize errors and misaligned expectations, ensuring compliance with regulatory requirements and safeguarding your company's interests.",
	},
	{
		id: 3,
		title: "Expert Guidance",
		description:
			"You receive seasoned expertise to navigate complex negotiations and legal intricacies, ensuring you secure optimal terms and avoid costly mistakes.",
	},
	{
		id: 4,
		title: "Strategic opportunities",
		description:
			"You gain access to strategic partnerships that unlock valuable industry connections, potential customers, and top talent, propelling your venture forward beyond just securing capital.",
	},
];

const ServicesDealClosing = () => {
	return (
		<div>
			<ServicesDealClosingHero />
			<StepsSection heading="How it works" steps={steps} />
			<BenefitsSection heading="What are the benefits" benefits={benefits} />
			<ScheduleCallSection>
				<Text is="p" className="text-base text-gray-900 md:text-xl lg:text-2xl">
					Are you a fundraising{" "}
					<b>founder & need expertise support on how to securely close a deal?</b>
					Schedule a free call and see how we can support you.
				</Text>
			</ScheduleCallSection>
			<ServicesFaq />
		</div>
	);
};

export default ServicesDealClosing;
