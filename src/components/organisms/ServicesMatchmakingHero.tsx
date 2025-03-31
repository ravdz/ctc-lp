import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { TwoGlobes } from "@/svg/TwoGlobes";
import { GreenGradient } from "@/svg/GreenGradient";
import servicesMatchmaking from "@/data/services-matchmaking.json";

export const ServicesMatchmakingHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:mb-24 md:grid-cols-4 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-3 md:row-span-1 md:mb-16">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								<span dangerouslySetInnerHTML={{ __html: servicesMatchmaking.hero.title }} />
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-5 pl-10 md:col-span-3 md:row-span-1 md:row-start-2 md:mb-14">
							<Star className="absolute left-0 top-0 w-5 fill-green-400" />
							<Text className="block text-sm sm:text-base/6">
								<p dangerouslySetInnerHTML={{ __html: servicesMatchmaking.hero.description }} />
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								{servicesMatchmaking.hero.feature1.title}
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span>{" "}
								{servicesMatchmaking.hero.feature1.description}
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-4 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								{servicesMatchmaking.hero.feature2.title}
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span>{" "}
								{servicesMatchmaking.hero.feature2.description}
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-5 md:mb-16">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								{servicesMatchmaking.hero.feature3.title}
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span>{" "}
								{servicesMatchmaking.hero.feature3.description}
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-6">
							<Button
								variant="secondary"
								href={servicesMatchmaking.hero.button.url}
								hasArrow
								className="text-base uppercase md:text-2xl"
							>
								{servicesMatchmaking.hero.button.label}
							</Button>
						</div>

						<GreenGradient className="absolute left-0 top-1/2 z-0 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2" />
					</header>
					<TwoGlobes className="w-56 md:w-96" />
				</div>
			</Container>
		</section>
	);
};
