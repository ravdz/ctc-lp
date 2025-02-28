import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { FeatureItem } from "@/components/molecules/FeatureItem";
import { Galaxy } from "@/svg/Galaxy";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";
import { PinkGradient } from "@/svg/PinkGradient";

const features = [
	{
		id: 1,
		title: "Community",
		description:
			"Forge powerful partnerships within a community of top +150 climate minds of the Benelux",
		items: [
			{ id: 1, label: "climate tech summit" },
			{ id: 2, label: "events" },
			{ id: 3, label: "community" },
			{ id: 4, label: "knowledge-sharing" },
			{ id: 5, label: "resources" },
			{ id: 6, label: "advisory" },
		],
		url: "/join-us",
	},
	{
		id: 2,
		title: "Services",
		description:
			"Find the best climate-tech talents & propel your company's growth leveraging on the knowledge capital of the community",
		items: [
			{ id: 1, label: "quality, manual founder-investor matchmaking" },
			{ id: 2, label: "access to talent pool" },
			{ id: 3, label: "consortia" },
		],
		url: "/services",
	},
];

export const FeatureSection = () => {
	return (
		<section>
			<Container className="overflow-hidden pb-14 pt-20 md:pb-28 md:pt-36">
				<div className="grid w-full gap-20 lg:grid-cols-2 xl:gap-28">
					<div>
						<header className="relative mb-12">
							<Heading is="h2">A place where your ideas will be shaped to their best</Heading>
							<Galaxy className="absolute -right-4 -top-16 z-10 lg:-right-10" />
						</header>

						<div className="flex flex-col items-stretch justify-start gap-6">
							<Text is="p">
								<b>CTC is a community</b> of innovators, founders, change-makers, stakeholders &
								impact investors, all within climate tech industry in the Benelux region.
							</Text>
							<Text is="p" className="font-montserrat text-base">
								<b>How CTC can help you?</b> We organize community get-togethers & knowledge sharing
								activities; we host events ranging from intimate, exclusive meetups to large-scale
								conferences. Our services includes
								<b>AI-powered and manual investor-founder matchmaking</b>, access to a curated
								talent pool & consortia creation.
							</Text>
							<Text is="p" className="font-montserrat text-base">
								Against a backdrop of digital & AI age, a community with a sense of connection is
								poised to spread new ideas & drive real-world change.
							</Text>
						</div>
					</div>
					<div className="relative flex flex-col justify-end">
						<ul className="relative z-20 mb-10 flex flex-col items-stretch justify-start gap-7">
							{features.map(({ id, title, description, items, url }) => (
								<FeatureItem
									key={id}
									title={title}
									description={description}
									items={items}
									url={url}
								/>
							))}
						</ul>
						<PinkGradient className="absolute left-1/2 top-1/2 z-0 w-[150%] -translate-x-1/2 -translate-y-1/2" />
						<AnimatedCircle className="absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-12 md:w-76" />
					</div>
				</div>
			</Container>
		</section>
	);
};
