import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { BigStarInsideCircle } from "@/svg/BigStarInsideCircle";

export const ServicesConsortiaCreationHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:grid-cols-4 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-3 md:row-span-1 md:mb-16">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								Consortia creation
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-5 pl-10 md:col-span-3 md:row-span-1 md:row-start-2 md:mb-14">
							<Star className="absolute left-0 top-0 w-5 -rotate-6 fill-green-400" />
							<Text is="p" className="block text-sm sm:text-base/6">
								Forming successful consortia often fails due to misaligned goals, fragmented
								communication, or mismatched expertise—even among capable organizations. We solve
								this by acting as the neutral coordinator,{" "}
								<b>bridging gaps between partners while streamlining the entire process</b>, from
								opportunity identification to proposal success.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								strategic alignment
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> matching partners based on complementary
								strengths
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-4 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								high-potential opportunities
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> we proactively identifies high-potential
								funding opportunities
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-5 md:mb-16">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								trusted intermediary
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> as a non-profit, we act as intermediary,
								resolving power dynamics & managing timelines
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:row-span-1 md:row-start-6">
							<BigStarInsideCircle className="w-32 md:w-48" />
						</div>
						<div className="relative z-10 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-6">
							<Button variant="secondary" hasArrow className="text-base uppercase md:text-2xl">
								Schedule a call
							</Button>
						</div>
					</header>
				</div>
			</Container>
		</section>
	);
};
