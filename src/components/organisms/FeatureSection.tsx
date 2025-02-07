import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { FeatureItem } from "@/components/molecules/FeatureItem";
import { Star } from "@/svg/Star";

const features = [
	{
		id: 1,
		title: "Events",
		description:
			"Be a part of the new cultural currency of unforgettable, unscalable, exclusive experiences - an avenue for intellectual and emotional growth, ",
		items: [
			{ id: 1, label: "climate tech summit" },
			{ id: 2, label: "regional events" },
			{ id: 3, label: "exclusive dinners & field trip experiences" },
			{ id: 4, label: "award shows" },
		],
	},
	{
		id: 2,
		title: "Community",
		description: "Forge powerful partnerships within the tech-savvy, experience-driven community",
		items: [
			{ id: 1, label: "quality, manual founder-investor matchmaking" },
			{ id: 2, label: "access to talent pool" },
			{ id: 3, label: "consortia" },
		],
	},
	{
		id: 3,
		title: "Advisory",
		description:
			"A gateway to a wealth of wisdom and support to propel your ideas forward. Secure consistent & sustainable capital with the community’s strategic support",
		items: [
			{ id: 1, label: "legal" },
			{ id: 2, label: "GTM" },
			{ id: 3, label: "AI" },
		],
	},
];

export const FeatureSection = () => {
	return (
		<section>
			<Container className="md:py-22 py-16">
				<div className="grid w-full gap-20 lg:grid-cols-2 xl:gap-28">
					<div>
						<header className="relative mb-12">
							<Heading is="h2">A place where your ideas will be shaped to their best</Heading>
							<Star className="absolute -right-4 -top-16 z-10 lg:-right-10" />
						</header>

						<div className="flex flex-col items-stretch justify-start gap-6">
							<Text is="p">
								CTC is a community, born to empower all of you: founders, changemakers, stakeholders
								& impact investors. A network with a sense of connection is poised to spread new
								ideas & drive change.
							</Text>
							<Text is="p" className="font-montserrat text-base text-gray-700">
								How CTC can help you? We host events ranging from intimate, exclusive meetups to
								large-scale conferences. Our services include AI-powered and manual investor-founder
								matchmaking, access to a curated talent pool, and expert advisory support.
							</Text>
							<Text is="p" className="font-montserrat text-base text-gray-700">
								Against a backdrop of digital & AI age, we invite you to embark on a journey of
								connectedness and real-world purpose.
							</Text>
						</div>
					</div>
					<div className="flex flex-col justify-end">
						<ul className="mb-10 flex flex-col items-stretch justify-start gap-7">
							{features.map(({ id, title, description, items }) => (
								<FeatureItem key={id} title={title} description={description} items={items} />
							))}
						</ul>
						<Button className="ml-auto pr-1" href="/services" hasArrow>
							read more about our services
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};
