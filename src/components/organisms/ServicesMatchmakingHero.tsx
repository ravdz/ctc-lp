import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { TwoGlobes } from "@/svg/TwoGlobes";
import { GreenGradient } from "@/svg/GreenGradient";

export const ServicesMatchmakingHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:mb-24 md:grid-cols-4 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-3 md:row-span-1 md:mb-16">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								Investor—founder<br></br>matchmaking
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-5 pl-10 md:col-span-3 md:row-span-1 md:row-start-2 md:mb-14">
							<Star className="absolute left-0 top-0 w-5 -rotate-6 fill-green-400" />
							<Text is="p" className="block text-sm sm:text-base/6">
								Identifying the perfect investor is paramount, as this relationship transcends
								simple capital acquisition.{" "}
								<b>
									The right investor becomes a catalyst for your startup&apos;s expansion, shapes
									its strategic trajectory
								</b>
								, and plays a pivotal role in determining its enduring success.
							</Text>
							<Text is="p" className="block text-sm sm:text-base/6">
								Our extensive network within the Benelux climate-tech ecosystem sets us apart -
								<b>we&apos;ve cultivated deep connections with key stakeholders</b>, allowing us to
								offer unparalleled founder-investor matchmaking.
							</Text>
							<Text is="p" className="block text-sm sm:text-base/6">
								This targeted approach ensures we&apos;ll connect you with the most relevant of
								investors; this way every introduction will have the potential to be a game-changer
								for your venture, saving you time and maximizing your chances of{" "}
								<b>securing not just funding, but a true strategic partner.</b>
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								time saved
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> you&apos;re connected only with potential
								partners that are actually highly interested in your company&apos;s profile, and you
								don&apos;t need to scout for them yourself.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-4 md:mb-10">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								high-quality deals
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> alignment on the most crucial aspects, all
								carefully collected and revised.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-8 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-5 md:mb-16">
							<Heading
								is="h2"
								className="mb-4 text-xl lowercase sm:text-3xl md:text-2xl lg:text-3xl"
							>
								meaningful connections
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> connections beyond simple database
								matching—building real relationships for long-term & possible future opportunities.
								Network is your net-worth!
							</Text>
						</div>
						<div className="relative z-10 md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-6">
							<Button variant="secondary" hasArrow className="text-base uppercase md:text-2xl">
								Schedule a call
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
