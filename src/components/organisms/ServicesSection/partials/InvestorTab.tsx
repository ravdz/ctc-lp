import { ServiceVariant } from "@/components/organisms/ServicesSection/partials/ServiceVariant";
import { Cards } from "@/components/organisms/Cards";

const cards = [
	{
		id: 1,
		title: "Investor matchmaking",
		content: (
			<ServiceVariant
				title="Investor matchmaking"
				badge="success fee"
				description="Leveraging our extensive network of leading impact investors in the Benelux-including venture capitalists, angel investors, and funding partners-we connect you with the right investors for your business. Through a combination of AI-driven insights and expert matchmaking, we ensure tailored introductions to the most relevant partners who align with your vision and growth stage."
				items={[
					"AI & manual investor-founder matchmaking",
					"quality introductions",
					"unlocking capital",
				]}
				link={{
					label: "Read more",
					url: "/services/matchmaking",
				}}
			/>
		),
	},
	{
		id: 2,
		title: "Pitchdeck creation & training",
		content: (
			<ServiceVariant
				title="Pitchdeck creation"
				badge="paid service"
				description="A compelling pitch deck and delivery are essential, non-negotiable elements of successful fundraising-yet many founders struggle to get them right. With deep expertise in investor psychology, we help you craft and design a powerful narrative that captures attention and secures funding."
				items={[
					"strategic pitch delivery",
					"high-impact narrative",
					"engaging storytelling",
					"sleek design",
				]}
				link={{
					label: "Read more",
					url: "/services/pitchdeck-creation",
				}}
			/>
		),
	},
	{
		id: 3,
		title: "Deal closing",
		content: (
			<ServiceVariant
				title="Deal closing"
				badge="success fee"
				description="Negotiating and closing a deal is a complex process that involves legal intricacies, strategic decision-making, and high-stakes negotiations-challenges that often overwhelm startups and scale-ups. We provide expert guidance to help you secure the best possible terms and close deals with confidence."
				items={["securing capital", "cap table management", "psychological & tactital positioning"]}
				link={{
					label: "Read more",
					url: "/services/deal-closing",
				}}
			/>
		),
	},
];

export const InvestorTab = () => {
	return <Cards cards={cards} />;
};
