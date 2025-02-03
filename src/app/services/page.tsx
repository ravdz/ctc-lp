import { SubpageHero } from "@/components/organisms/SubpageHero";
import { CtaSection } from "@/components/organisms/CtaSection";
import { ServiceSection } from "@/components/organisms/ServiceSection";

const services = [
	{
		id: 1,
		name: "Events",
		description:
			"We are fascinated by the intersection of the climate-change action, community capital and hospitality. We believe the real world value can be created through high quality social ties & relationships.",
		list: ["event matchmaking", "event matchmaking"],
	},
	{
		id: 2,
		name: "Community",
		description:
			"We are fascinated by the intersection of the climate-change action, community capital and hospitality. We believe the real world value can be created through high quality social ties & relationships.",
		list: ["event matchmaking", "event matchmaking"],
	},
	{
		id: 3,
		name: "Advisory",
		description:
			"We are fascinated by the intersection of the climate-change action, community capital and hospitality. We believe the real world value can be created through high quality social ties & relationships.",
		list: ["investor ready", "pitchdeck creation", "deal closing support"],
	},
];

const cta = {
	title: "Become a member",
	description:
		"CTC was born to empower all of you: founders & changemakers, stakeholders, impact investors & angels. It’s a place where your ideas will be shaped to their best & drive meaningful impact.",
	link: {
		url: "/join-us",
		label: "Learn more",
	},
};

const Services = () => {
	return (
		<div>
			<SubpageHero title="Services" />
			{services.map(({ id, name, description, list }) => (
				<ServiceSection key={id} name={name} description={description} list={list} />
			))}
			<CtaSection data={cta} />
		</div>
	);
};

export default Services;
