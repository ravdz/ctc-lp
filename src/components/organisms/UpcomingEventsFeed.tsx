import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { EventTile } from "@/components/molecules/EventTile";
import { ArrowDown } from "@/svg/ArrowDown";

const events = [
	{
		id: 1,
		badge: "founders",
		prefix: "CTS exclusive deepdive:",
		title: "War stories from the Dealroom",
		description: "with Philip de Roos (founder De Roos)",
		date: "4 march 2025",
		link: {
			url: "/join-us",
			label: "request a membership invite",
		},
	},
];

export const UpcomingEventsFeed = () => {
	return (
		<section id="events">
			<Container className="md:py-22 py-16">
				<div className="relative">
					<ArrowDown className="absolute bottom-full left-0 w-8 -translate-y-6 md:w-10 lg:w-auto lg:-translate-y-10" />
					<Heading is="h2" className="mb-12">
						Upcoming events
					</Heading>
					<ul className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
						{events.map((event) => (
							<EventTile key={event.id} event={event} />
						))}
						<EventTile />
					</ul>
				</div>
			</Container>
		</section>
	);
};
