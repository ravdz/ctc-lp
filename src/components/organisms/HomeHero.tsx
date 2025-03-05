import Image from "next/image";

import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";
import { Star } from "@/svg/Star";
import { GreenGradient } from "@/svg/GreenGradient";

export const HomeHero = () => {
	return (
		<section className="overflow-hidden">
			<Container className="pb-24 pt-14 md:pb-36 xl:pt-7">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-7 lg:gap-20 xl:gap-40">
					<header className="flex flex-col items-start justify-between gap-8 md:col-span-3">
						<div>
							<Heading className="mb-8 text-3xl font-extralight tracking-3 lg:text-4xl xl:text-6xl/[4.5rem]">
								Climate tech community, events & resources
							</Heading>
							<Text is="p">We are a Benelux based climate tech community.</Text>
						</div>
						<div className="flex flex-col items-start justify-start gap-4">
							<Text is="p" className="text-2xs font-sometype-mono">
								Connect with +150 visionaires working on climate in Benelux
							</Text>
							<Button
								variant="secondary"
								className="text-base lg:text-xl xl:text-2xl"
								href="/community"
								hasArrow
							>
								Become a member
							</Button>
						</div>
					</header>
					<div className="sm:h-200 lg:h-200 grid grid-cols-1 gap-3.5 sm:grid-cols-3 md:col-span-4 md:h-96">
						<div className="grid grid-rows-5 gap-3.5">
							<div className="relative row-span-3 w-full overflow-hidden rounded-2xl bg-gray-300 pb-[66%] sm:pb-0">
								<Image src="/img/1.png" alt="image 1" fill className="object-cover" />
								<Text className="text-2xs md:text-4xs lg:text-3xs xl:text-2xs absolute bottom-5 left-0 block max-w-full rounded-r-xl bg-white py-1 pl-4 pr-3 text-right font-sometype-mono uppercase">
									Climate tech summit
								</Text>
							</div>
							<div className="row-span-2 w-full rounded-2xl bg-green-500 p-6 pb-[66%] sm:p-4 sm:pb-0 md:p-2 lg:p-3 xl:p-4">
								<Text className="md:text-2xs text-xl sm:text-base lg:text-sm xl:text-base 2xl:text-lg">
									Investor <span className="text-green-600"> / </span> founder<br></br>
									matchmaking
								</Text>
							</div>
						</div>
						<div className="grid grid-rows-2 gap-3.5">
							<div className="relative row-span-1 w-full overflow-hidden rounded-2xl bg-gray-800 p-6 pb-[66%] sm:p-4 sm:pb-0 md:p-2 lg:p-3 xl:p-4">
								<Text className="md:text-2xs text-xl sm:text-base lg:text-sm xl:text-base 2xl:text-lg">
									Curated, exclusive events
								</Text>
								<div className="absolute -right-10 top-0 w-full pb-[100%] sm:bottom-0 sm:top-auto lg:-right-5">
									<AnimatedCircle
										orbitSpeed={2500}
										className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[30deg]"
										orbitingObject={<Star className="h-4 w-4 text-brown-600" />}
									/>
									<AnimatedCircle
										className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
										orbitDirection="counterclockwise"
										orbitingObject={<div className="h-2 w-2 rounded-full bg-brown-600" />}
									/>
								</div>
							</div>
							<div className="relative row-span-1 w-full overflow-hidden rounded-2xl bg-gray-300 pb-[66%] sm:pb-0">
								<Image src="/img/2.png" alt="image 2" fill className="object-cover" />
								<Text className="text-2xs md:text-4xs lg:text-3xs xl:text-2xs absolute bottom-5 left-0 block max-w-full rounded-r-xl bg-white px-2 py-1 text-right font-sometype-mono uppercase">
									Community & Talent Pool
								</Text>
							</div>
						</div>
						<div className="grid grid-rows-10 gap-3.5">
							<div className="relative row-span-4 w-full overflow-hidden rounded-2xl bg-gray-300 pb-[66%] sm:pb-0">
								<Image src="/img/3.png" alt="image 3" fill className="object-cover" />
							</div>
							<div className="relative row-span-3 w-full overflow-hidden rounded-2xl bg-gray-300 pb-[66%] sm:pb-0">
								<Image src="/img/4.png" alt="image 4" fill className="object-cover" />
								<Text className="text-2xs md:text-4xs lg:text-3xs xl:text-2xs absolute bottom-5 left-0 block max-w-full rounded-r-xl bg-white py-1 pl-4 pr-3 text-right font-sometype-mono uppercase">
									Consortia
								</Text>
							</div>
							<div className="sm:pb-auto relative row-span-3 flex w-full items-end justify-start rounded-2xl bg-pink-500 p-6 pb-[66%] sm:p-4 md:p-2 lg:p-3 xl:p-4">
								<GreenGradient className="absolute right-0 top-0 z-0 w-3/4 lg:w-40" />
								<Text className="md:text-2xs absolute bottom-6 left-6 text-xl sm:relative sm:bottom-auto sm:left-auto sm:text-base lg:text-sm xl:text-base 2xl:text-lg">
									Resources<br></br>& advisory
								</Text>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
