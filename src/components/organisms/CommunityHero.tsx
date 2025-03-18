import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { AnimatedSerpent } from "@/components/atoms/AnimatedSerpent";
import { RedGradient } from "@/svg/RedGradient";
import { Sparkle } from "@/svg/Sparkle";

export const CommunityHero = () => {
	return (
		<section>
			<Container className="overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<header className="relative grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-0 md:gap-y-3">
					<div className="relative z-10 md:row-span-1">
						<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
							The power of niche appeal
						</Heading>
						<Sparkle className="absolute bottom-full left-full w-16 stroke-green-600" />
					</div>
					<div className="relative z-10 flex flex-col gap-14 md:col-start-2 md:row-span-1 md:row-start-2">
						<div className="grid grid-cols-2 gap-14 border-t border-green-800 pt-8">
							<div>
								<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
									strategic introductions
								</Heading>
								<Text className="text-base">
									<span className="text-green-400">/</span> get introductions with strategic
									partners carefully matched with your current needs
								</Text>
							</div>
							<div>
								<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
									curated experiences
								</Heading>
								<Text className="text-base">
									<span className="text-green-400">/</span> join exclusive events with top speakers
									& only the most relevant topics, crafted for the specific target group
								</Text>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-14 border-t border-green-800 pt-8">
							<div>
								<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
									collective wisdom
								</Heading>
								<Text className="text-base">
									<span className="text-green-400">/</span> leverage on the community&apos;s
									collective knowledge & support, get invaluable insight of each others&apos;
									experiences & challenges
								</Text>
							</div>
							<div>
								<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
									expert access & advisory
								</Heading>
								<Text className="text-base">
									<span className="text-green-400">/</span> get easy connections with subject-matter
									experts on the most burning topics
								</Text>
							</div>
						</div>
					</div>
					<AnimatedSerpent className="relative mx-auto w-64 md:absolute md:bottom-0 md:left-0 md:translate-y-1/2" />
					<RedGradient className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 opacity-70" />
				</header>
			</Container>
		</section>
	);
};
