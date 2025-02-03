import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";

const ctcOffers = [
	{
		id: 1,
		prefix: "CTC",
		title: "Free membership",
		description:
			"Access to 1 event per year, advisory programs available only after 1 full year of membership. Access to resources & invitation to consortias. Limited matchmaking.",
		link: {
			url: "/join-us",
			label: "request invite",
		},
	},
	{
		id: 2,
		prefix: "CTC for",
		title: "Paid members",
		description:
			"Full access to events, advisory programs, consortias, founder-investor matchmaking, exclusive member content.",
		link: {
			url: "/join-us",
			label: "become a member",
		},
	},
	{
		id: 3,
		prefix: "CTC for",
		title: "Sponsors",
		description:
			"Access to 1 event per year, advisory programs available only after 1 full year of membership. Access to resources & invitation to consortias. Limited matchmaking.",
		link: {
			url: "/join-us",
			label: "become a sponsor",
		},
	},
];

export const JoinUsSection = () => {
	return (
		<section>
			<Container className="py-24 md:py-36">
				<div className="grid w-full gap-20 lg:grid-cols-5 xl:gap-28">
					<header className="lg:col-span-2">
						<Heading is="h2" className="mb-12 text-3xl font-light lg:text-6xl">
							Unite, inspire,<br></br>transform
						</Heading>
						<Text is="p" className="mb-16 text-gray-700">
							Sharpen your additive impact — become a member & gain access to exclusive experiences.
							Give back, educate, inspire & enjoy!
						</Text>
						<Button className="inline-flex pr-1" href="/services" hasArrow>
							read more about the community
						</Button>
					</header>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3">
						{ctcOffers.map(({ id, prefix, title, description, link }, index) => (
							<CtcOfferTile
								key={id}
								prefix={prefix}
								title={title}
								description={description}
								link={link}
								className={index > 1 ? "md:col-span-2" : "md:col-span-1"}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
