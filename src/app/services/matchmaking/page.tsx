import { ScheduleCallSection } from "@/components/organisms/ScheduleCallSection";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { ServicesMatchmakingHero } from "@/components/organisms/ServicesMatchmakingHero";
import { StepsSection } from "@/components/organisms/StepsSection";
import { Text } from "@/components/atoms/Text";
import { MatchmakingBenefitsSection } from "@/components/organisms/MatchmakingBenefitsSection";

const steps = [
	{
		id: 1,
		label: "Application & intake call",
		list: [
			"startups & investors can apply through our website form, providing basic details;",
			"we schedule an intake call to gather further data & insights.",
		],
	},
	{
		id: 2,
		label: "Data collection ",
		list: [
			"we gather key information to assess compatibility— like funding stage, sector focus, investment preferences, strategic goals, etc;",
			"all the data is securely stored in our internal database and used strictly for matchmaking purposes.",
		],
	},
	{
		id: 3,
		label: "AI + manual matchmaking",
		list: [
			"our custom AI tool scans our network and identifies potential matches based on predefined criteria;",
			"simultaneously, our team manually assesses compatibility, ensuring a strategic fit beyond just financial metrics;",
			"this hybrid approach helps us make introductions that are not only data-driven but also relationship-focused.",
		],
	},
	{
		id: 4,
		label: "Match introduction & facilitation",
		list: [
			"once we identify promising matches, we introduce startups to relevant investors through warm introductions;",
			"depending on preferences, we can facilitate initial meetings or guide the conversation to ensure productive discussions;",
			"we ensure that both parties are well-prepared for the introduction, aligning expectations and maximizing the chance of success.",
		],
	},
	{
		id: 5,
		label: "Pitch preparation & investor readiness (optional)",
		list: [
			"if needed, we help startups refine their pitch decks, investor narratives, and negotiation strategies before meetings (see Services).",
		],
	},
	{
		id: 6,
		label: "Follow-ups & ongoing support",
		list: [
			"we check in with both investors and startups post-introduction to gather feedback and support the next steps;",
			"if the startup progresses toward closing a deal, we can assist with negotiation, legal guidance, and term sheet;",
			"if a match isn't the right fit, we continue the search to find a better-aligned opportunity.",
		],
	},
];

const ServicesMatchmaking = () => {
	return (
		<div>
			<ServicesMatchmakingHero />
			<StepsSection heading="How it works" steps={steps} />
			<MatchmakingBenefitsSection />
			<ScheduleCallSection>
				<Text is="p" className="text-base text-gray-900 md:text-xl lg:text-2xl">
					Are you a{" "}
					<b>
						founder looking to for a strategic partner? Or an investor looking to back a business
						that aligns with your goals?
					</b>{" "}
					Schedule a free call and see how we can support you.
				</Text>
			</ScheduleCallSection>
			<ServicesFaq />
		</div>
	);
};

export default ServicesMatchmaking;
