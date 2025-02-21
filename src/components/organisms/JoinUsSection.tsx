import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";
import { MultipleCircles } from "@/svg/MultipleCircles";

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
		<section className="overflow-hidden">
			<Container className="py-16 md:py-20">
				<div className="grid w-full gap-20 lg:grid-cols-5 xl:gap-28">
					<header className="relative lg:col-span-2">
						<Heading is="h2" className="mb-12 font-light lg:text-6xl">
							Unite, inspire,<br></br>transform
						</Heading>
						<Text is="p" className="mb-16">
							Sharpen your additive impact — become a member & gain access to exclusive experiences.
							Give back, educate, inspire & enjoy!
						</Text>
						<Button className="relative z-10 inline-flex pr-1" href="/services" hasArrow>
							read more about the community
						</Button>
						<MultipleCircles className="-translate-1/2 absolute bottom-0 left-full w-44 -translate-x-1/2 translate-y-1/2 lg:left-0 lg:w-60 lg:translate-x-0 lg:translate-y-0 xl:w-72" />
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
