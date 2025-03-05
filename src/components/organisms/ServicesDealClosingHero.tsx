import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { BlueGradient } from "@/svg/BlueGradient";
import { StarsWithCircles } from "@/svg/StarsWithCircles";

export const ServicesDealClosingHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:grid-cols-4 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-2 md:row-span-1 md:mb-16">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								Deal closing
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-5 pl-10 md:col-span-2 md:row-span-1 md:row-start-2 md:mb-16">
							<Star className="absolute left-0 top-0 w-5 fill-green-400" />
							<Text is="p" className="block text-sm sm:text-base/6">
								For startups and scale-ups, securing investment is often a make-or-break moment.
								Yet, many founders find themselves navigating this critical process without the
								expertise it demands.
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:row-span-1 md:row-start-3">
							<StarsWithCircles className="w-40 max-w-full md:w-72" />
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								navigating complexity
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> we help making the legal complexities and
								strategic nuances manageable
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-4 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								risk mitigation
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> with our support you&apos;re more likely
								to avoid costly mistakes, safeguard your company against future pitfalls and ensure
								regulatory compliance
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-5 md:mb-16">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								strategic alignment
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> / we ensure that the terms of investment
								align with the startup&apos;s long-term vision and goals
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-6">
							<Button
								variant="secondary"
								disabled
								hasArrow
								className="text-base uppercase md:text-2xl"
							>
								Schedule a call
							</Button>
						</div>
						<BlueGradient className="absolute left-0 top-1/2 z-0 w-full max-w-md -translate-y-1/2 opacity-80" />
					</header>
				</div>
			</Container>
		</section>
	);
};
