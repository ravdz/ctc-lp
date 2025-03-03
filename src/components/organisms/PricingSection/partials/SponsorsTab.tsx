import { SponsorsVariant } from "@/components/organisms/PricingSection/partials/SponsorsVariant";
import { Cards } from "@/components/organisms/Cards";

const cards = [
	{
		id: 1,
		title: "Annual CTC sponsorship",
		content: (
			<SponsorsVariant
				title="Annual CTC sponsorship"
				subtitle="one year commitment"
				price="€ 25-100K"
				benefits={[
					"Council invitation, every 6 months",
					"Access to network & community database",
					"Speaker delegation to the events",
					"Visibility on the events",
					"Visibility on the website",
					"Complimentary tickets to all of our events",
					"No active involvement required",
				]}
			/>
		),
	},
	{
		id: 2,
		title: "Per event sponsorship",
		content: (
			<SponsorsVariant
				title="Per event sponsorship"
				subtitle="depending on the event type"
				price="€ 4-40K"
				additionalInfo="*conditions vary per event; schedule a call with us to access complete benefits list per event."
				benefits={[
					"Council invitation, every 6 months",
					"Access to network & community database",
					"Speaker delegation to the events",
					"Visibility on the events",
					"Visibility on the website",
					"Complimentary tickets to all of our events",
					"No active involvement required",
				]}
			/>
		),
	},
];

export const SponsorsTab = () => {
	return <Cards cards={cards} />;
};
