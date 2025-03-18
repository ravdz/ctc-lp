import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { FeatureItem } from "@/components/molecules/FeatureItem";
import { Galaxy } from "@/svg/AnimatedGalaxy";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";
import { PinkGradient } from "@/svg/PinkGradient";
import homepage from "@/data/homepage.json";

export const FeatureSection = () => {
	return (
		<section>
			<Container className="overflow-hidden pb-14 pt-20 md:pb-28 md:pt-36">
				<div className="grid w-full gap-20 lg:grid-cols-2 xl:gap-28">
					<div>
						<header className="relative mb-12">
							<Heading className="text-4xl font-light md:text-5xl lg:text-6xl" is="h2">
								{homepage.features.title}
							</Heading>
							<Galaxy className="absolute -right-4 -top-16 z-10 lg:-right-10" />
						</header>

						<div className="flex flex-col items-stretch justify-start gap-6">
							<Text is="span" className="font-montserrat text-base">
								<p dangerouslySetInnerHTML={{ __html: homepage.features.description }} />
							</Text>
						</div>
					</div>
					<div className="relative flex flex-col justify-end">
						<ul className="relative z-20 mb-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">
							{homepage.features.tiles.map(({ title, description, items, button }, index) => (
								<FeatureItem
									key={index}
									title={title}
									description={description}
									items={items}
									button={button}
								/>
							))}
						</ul>
						<PinkGradient className="absolute left-1/2 top-1/2 -z-10 w-[150%] -translate-x-1/2 -translate-y-1/2" />
						<AnimatedCircle className="absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-12 md:w-76" />
					</div>
				</div>
			</Container>
		</section>
	);
};
