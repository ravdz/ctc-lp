import { SubpageHero } from "@/components/organisms/SubpageHero";
import { CtaSection } from "@/components/organisms/CtaSection";
import { ServiceSection } from "@/components/organisms/ServiceSection";
import { Container } from "@/components/atoms/Container";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";

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
			<div>
				{services.map(({ id, name, description, list }) => (
					<ServiceSection key={id} name={name} description={description} list={list} />
				))}
				<Container>
					<div className="relative">
						<div className="absolute -bottom-10 right-0 z-10 h-44 w-44 md:bottom-0 md:h-64 md:w-64 lg:h-96 lg:w-96">
							<AnimatedCircle
								orbitSpeed={2500}
								className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45"
							/>
							<AnimatedCircle
								className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2"
								orbitDirection="counterclockwise"
								orbitingObject={<div className="h-3 w-3 rounded-full bg-brown-600" />}
							/>
						</div>
						{/* <CrossedCircles className="absolute bottom-0 right-0 w-44 sm:-translate-y-1/3 md:w-64 lg:w-96" /> */}
					</div>
				</Container>
			</div>
			<CtaSection data={cta} />
		</div>
	);
};

export default Services;
