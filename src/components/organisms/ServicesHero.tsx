import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { RedGradient } from "@/svg/RedGradient";
import { Star } from "@/svg/Star";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";
import { Galaxy } from "@/svg/AnimatedGalaxy";
import { WhiteGradient } from "@/svg/WhiteGradient";

export const ServicesHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:mb-24 md:grid-cols-3 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-1 md:row-span-1 md:mb-5">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								Services
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-9 border-t border-green-800 pt-12 md:col-span-2 md:col-start-2 md:row-span-1 md:row-start-2 md:mb-6 md:pt-10">
							<Star className="absolute left-0 top-3 w-5 fill-green-400 md:-left-10 md:top-5" />
							<Text is="p" className="block text-sm sm:text-base/6">
								Beyond our membership and sponsorship options, we offer a range of{" "}
								<b>paid services designed specifically to support founders.</b> While these services
								are available to everyone, members may receive exclusive discounts.
							</Text>
							<Text is="p" className="block text-sm sm:text-base/6">
								By working closely with startups and investors,{" "}
								<b>
									we&apos;ve identified the biggest challenges in the ecosystem and crafted
									solutions to target & bridge those gaps
								</b>
								—helping founders navigate obstacles and achieve their goals faster.
							</Text>
							<Text is="p" className="block text-sm sm:text-base/6">
								Acting as a <b>strategic connector</b>, we leverage our widespread network & direct
								access to key industry players to create opportunities for growth.
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-4 md:col-span-1 md:row-span-1 md:row-start-3 md:mb-10">
							<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
								all profits reinvested
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> 100% of profit will be further reinvested
								into the foundation & ecosystem
							</Text>
						</div>
						<div className="relative z-10 border-t border-green-800 pt-4 md:col-span-1 md:row-span-1 md:row-start-4">
							<Heading is="h2" className="mb-4 text-xl sm:text-3xl md:text-2xl lg:text-3xl">
								success fee terms
							</Heading>
							<Text className="text-base sm:text-xl">
								<span className="text-green-400">/</span> most of our services are offered on
								success fee terms — you pay only after the result is achieved
							</Text>
						</div>
						<RedGradient className="absolute left-0 top-1/2 z-0 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2" />
					</header>
					<div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-7">
						<div className="grid grid-cols-3 grid-rows-2 gap-4 lg:col-span-3">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-800 p-4 pb-[130%]">
								<Text className="text-lg text-gray-100 md:text-xl lg:text-lg xl:text-xl">
									Events annualy
								</Text>
								<Galaxy className="absolute bottom-4 right-4 z-10 w-1/3" />
							</div>
							<div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-gray-300 pb-[130%]">
								<Image src="/img/22.jpg" alt="image 22" fill className="object-cover" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[130%]">
								<Image src="/img/21.jpg" alt="image 21" fill className="object-cover" />
							</div>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 lg:col-span-2">
							<div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[50%] grayscale">
								<Image src="/img/23.jpg" alt="image 23" fill className="object-cover" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/24.jpg" alt="image 24" fill className="object-cover" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-green-500 pb-[100%]">
								<Text className="absolute bottom-8 left-0 z-10 flex px-5 text-lg md:text-xl lg:text-lg xl:text-xl">
									Events annualy
								</Text>
								<WhiteGradient className="absolute right-0 top-0 z-0 w-full rotate-180" />
								<AnimatedCircle
									orbitDirection="counterclockwise"
									className="absolute right-0 top-0 z-0 w-[150%] translate-x-[45%] rotate-[78deg]"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 grid-rows-1 lg:col-span-2">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/25.jpg" alt="image 25" fill className="object-cover" />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
