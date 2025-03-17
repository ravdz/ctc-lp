import { SponsorsVariant } from "@/components/organisms/PricingSection/partials/SponsorsVariant";
import { Cards } from "@/components/organisms/Cards";
import community from "@/data/community.json";

const cards = [
	{
		id: 1,
		title: community.pricing.for_sponsors_tab.card1.card_title,
		content: (
			<SponsorsVariant
				title={community.pricing.for_sponsors_tab.card1.card_title}
				subtitle={community.pricing.for_sponsors_tab.card1.content.subtitle}
				price={community.pricing.for_sponsors_tab.card1.content.price}
				benefits={community.pricing.for_sponsors_tab.card1.content.benefits}
			/>
		),
	},
	{
		id: 2,
		title: community.pricing.for_sponsors_tab.card2.card_title,
		content: (
			<SponsorsVariant
				title={community.pricing.for_sponsors_tab.card2.card_title}
				subtitle={community.pricing.for_sponsors_tab.card2.content.subtitle}
				price={community.pricing.for_sponsors_tab.card2.content.price}
				additionalInfo={community.pricing.for_sponsors_tab.card2.content.additional_info}
				benefits={community.pricing.for_sponsors_tab.card2.content.benefits}
			/>
		),
	},
];

export const SponsorsTab = () => {
	return <Cards cards={cards} />;
};
