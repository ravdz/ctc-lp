import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { RedGradient } from "@/svg/RedGradient";
import { Atom } from "@/svg/Atom";

export const ServicesPitchdeckCreationHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:mb-24 md:grid-cols-4 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-3 md:row-span-1 md:mb-16">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								Pitch deck creation<br></br>& training
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-5 pl-10 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-2 md:mb-14">
							<Star className="absolute left-0 top-0 w-5 -rotate-6 fill-green-400" />
							<Text is="p" className="block text-sm sm:text-base/6">
								A compelling pitch deck is non-negotiable when fundraising. It&apos;s a chance to
								stand out, and the key to securing investor interest. Yet, many founders struggle to
								craft a deck that is clear, concise, and persuasive.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								investor-backed insights
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> we know what works because we collaborate
								with investors daily.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:row-span-1 md:row-start-4 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								more than design
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> we refine your story, strategy, and
								delivery to maximize fundraising success.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:row-span-1 md:row-start-5 md:mb-16">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								tailored for climate-tech
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> we understand the specific challenges &
								opportunities of the industry.
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:row-span-1 md:row-start-6">
							<Button variant="secondary" hasArrow className="text-base uppercase md:text-2xl">
								Schedule a call
							</Button>
						</div>
						<RedGradient className="absolute right-0 top-1/2 z-0 w-full max-w-7xl -translate-y-1/2 translate-x-1/2" />
					</header>
					<Atom className="ml-auto w-28 md:w-52" />
				</div>
			</Container>
		</section>
	);
};
