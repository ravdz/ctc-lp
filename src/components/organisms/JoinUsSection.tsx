import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";

const ctcOffers = [
	{
		id: 1,
		prefix: "CTC for",
		title: "Members",
		description:
			"Are you a climate tech founder, investor or stakeholder? Read more about the benefits of joining.",
		link: {
			url: "/community",
			label: "read more",
		},
	},
	{
		id: 2,
		prefix: "CTC",
		title: "Talent pool",
		description: "Are you looking for climate tech talent/job opportunity? Join our talent pool.",
		link: {
			url: "/services",
			label: "read more",
		},
	},
	{
		id: 3,
		prefix: "CTC for",
		title: "Sponsors",
		description:
			"Are you interested in becoming a CTC annual or event sponsor? Read more about our sponsorship options & fill in a simple form.",
		link: {
			url: "/community",
			label: "read more",
		},
	},
];

export const JoinUsSection = () => {
	return (
		<section className="overflow-hidden">
			<Container className="py-16 md:py-20">
				<div className="grid w-full gap-20 lg:grid-cols-5 xl:gap-28">
					<header className="flex flex-col items-start justify-start lg:col-span-2">
						<Heading is="h2" className="mb-12 text-3xl">
							How to join the community
						</Heading>
						<ul className="mb-14 flex flex-col gap-6">
							<li className="flex items-start justify-start gap-3">
								<span className="inline-block font-sometype-mono text-2xl text-blue-600">1.</span>
								<Text className="text-xl">Fill in a simple form & choose membership</Text>
							</li>
							<li className="flex items-start justify-start gap-3">
								<span className="inline-block font-sometype-mono text-2xl text-blue-600">2.</span>
								<Text className="text-xl">
									We evaluate your inquiry & confirm via email & schedule an intake call
								</Text>
							</li>
							<li className="flex items-start justify-start gap-3">
								<span className="inline-block font-sometype-mono text-2xl text-blue-600">3.</span>
								<Text className="text-xl">
									You&apos;re in the database can now receive access to events
								</Text>
							</li>
						</ul>
						<Button className="uppercase" variant="secondary" href="/community" hasArrow>
							Become a member
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
