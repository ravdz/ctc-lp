import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { FeedTile } from "@/components/molecules/FeedITile";

const events = [
	{
		id: 1,
		badge: "founders",
		title: "Climate future & roadblocks",
		description:
			"Here's a description of the topic and the speaker of this amazing upcoming event that we'll be hosting very soon.",
		link: {
			url: "",
			label: "request a membership invite",
		},
	},
	{
		id: 2,
		badge: "investors",
		title: "AI driven climate change action",
		description:
			"Here's a description of the topic and the speaker of this amazing upcoming event that we'll be hosting very soon.",
		link: {
			url: "",
			label: "request a membership invite",
		},
	},
];

export const UpcomingEventsFeed = () => {
	return (
		<section>
			<Container className="md:py-22 py-16">
				<div>
					<Heading is="h2" className="mb-12 text-3xl">
						Upcoming events
					</Heading>
					<ul className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
						{events.map(({ id, badge, title, description, link }) => (
							<FeedTile
								key={id}
								badge={badge}
								title={title}
								description={description}
								link={link}
							/>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
