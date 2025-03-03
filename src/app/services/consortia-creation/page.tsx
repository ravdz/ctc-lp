import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCallSection } from "@/components/organisms/ScheduleCallSection";
import { ServicesConsortiaCreationHero } from "@/components/organisms/ServicesConsortiaCreationHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { Text } from "@/components/atoms/Text";

const steps = [
	{
		id: 1,
		label: "Discovery call",
		list: [
			"we learn about your organization's expertise, goals, and ideal partners;",
			"identify “non-negotiables” (e.g., geographic focus, ethical boundaries).",
		],
	},
	{
		id: 2,
		label: "Opportunity mapping",
		list: [
			"we scan global grants, tenders, and calls aligned with your capabilities;",
			"shortlist 2-3 high-impact opportunities with clear timelines.",
		],
	},
	{
		id: 3,
		label: "Partner curation",
		list: [
			"we use our network to pre-vet and match organizations that fill gaps in your consortium (e.g., technical expertise, regional presence);",
			"we facilitate introductory workshops to align visions and roles.",
		],
	},
	{
		id: 4,
		label: "Proposal co-creation",
		list: [
			"we provide templates, workflows, and milestone tracking;",
			"we draft narratives that highlight collective impact.",
		],
	},
	{
		id: 5,
		label: "Submission & follow-up",
		list: [
			"we finalize compliance checks and submit proposals;",
			"debrief with partners post-deadline—win or lose—to refine future collaborations;",
			"(optionally) we assist with consortium management, reporting, and stakeholder communication.",
		],
	},
];

const benefits = [
	{
		id: 1,
		title: "Precision partner matching",
		description:
			"We identify and connect organizations with complementary strengths, ensuring your consortium combines expertise, resources, and geographic reach in ways that stand out to funders.",
	},
	{
		id: 2,
		title: "Neutral conflict resolution",
		description:
			"As an impartial coordinator, we mediate power imbalances, align competing priorities, and streamline decision-making—keeping the focus on collective success, not internal politics.",
	},
	{
		id: 3,
		title: "Proactive opportunity discovery",
		description:
			"Our team continuously scans global grants and tenders, filtering out noise to deliver only the most relevant, high-impact opportunities aligned with your mission.",
	},
	{
		id: 4,
		title: "End-to-end efficiency",
		description:
			"From proposal drafting to post-award governance, we handle the logistical heavy lifting, saving partners hundreds of hours while maximizing funding success rates.",
	},
];

const ServicesConsortiaCreation = () => {
	return (
		<div>
			<ServicesConsortiaCreationHero />
			<StepsSection heading="How it works" steps={steps} />
			<BenefitsSection heading="What are the benefits" benefits={benefits} />
			<ScheduleCallSection>
				<Text is="p" className="text-base text-gray-900 md:text-xl lg:text-2xl">
					Are you a <b>founder looking to for a strategic partner</b>? Or an investor looking to
					back a business that aligns with your goals? Schedule a free call and see how we can
					support you.
				</Text>
			</ScheduleCallSection>
			<ServicesFaq />
		</div>
	);
};

export default ServicesConsortiaCreation;
