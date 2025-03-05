import Image from "next/image";
import { AnimatedCounter } from "@/components/molecules/AnimatedCounter";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Galaxy } from "@/svg/AnimatedGalaxy";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";
import { WhiteGradient } from "@/svg/WhiteGradient";
import { Heading } from "@/components/atoms/Heading";
import { FallingCircle } from "@/svg/FallingCircle";
import { GreenGradient } from "@/svg/GreenGradient";

export const AboutUsContentSection = () => {
	return (
		<section id="our-mission">
			<Container className="relative overflow-hidden pb-14 pt-4 md:pb-24 md:pt-6">
				<header>
					<div className="relative z-10 mb-14 grid grid-cols-1 gap-4 md:mb-24 lg:grid-cols-7">
						<div className="grid grid-cols-3 grid-rows-2 gap-4 lg:col-span-3">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[130%]">
								<Image src="/img/10.png" alt="image 10" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-gray-300 pb-[130%]">
								<Image src="/img/19.jpg" alt="image 19" fill className="object-cover" />
								<Text className="absolute left-0 top-5 block max-w-full rounded-r-xl bg-white py-1 pl-4 pr-3 text-right font-sometype-mono text-2xs uppercase lg:text-3xs xl:text-2xs">
									Benelux focused
								</Text>
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-800 p-4 pb-[130%]">
								<Text className="text-lg md:text-xl lg:text-lg xl:text-xl">Events annualy</Text>
								<Text className="absolute bottom-4 right-4 flex items-center justify-start text-5xl font-normal text-blue-300">
									+
									<AnimatedCounter
										target={8}
										duration={2}
										className="font-montserrat font-normal"
									/>
								</Text>
								<AnimatedCircle className="absolute bottom-0 left-0 z-0 w-[130%] translate-x-[-40%] translate-y-[-16%] rotate-[254deg]" />
							</div>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 lg:col-span-2">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-green-500 pb-[100%]">
								<Galaxy className="absolute right-4 top-4 z-10 w-1/3" />
								<div className="absolute bottom-4 left-0 z-10 flex flex-col items-start justify-center px-4">
									<Text className="items-cente font-normarl flex justify-start text-5xl text-gray-900">
										+
										<AnimatedCounter
											target={150}
											duration={2}
											className="font-montserrat font-normal"
										/>
									</Text>
									<Text className="pl-7 text-xl lg:pl-6 lg:text-base xl:pl-7 xl:text-xl">
										Members
									</Text>
								</div>
								<WhiteGradient className="absolute bottom-0 left-0 z-0 w-full" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/17.png" alt="image 17" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[50%]">
								<Image src="/img/20.jpg" alt="image 20" fill className="object-cover" />
								<Text className="absolute bottom-5 left-0 block max-w-full rounded-r-xl bg-white py-1 pl-4 pr-3 text-right font-sometype-mono text-2xs uppercase lg:text-3xs xl:text-2xs">
									Climate tech innovation
								</Text>
							</div>
						</div>
						<div className="grid grid-cols-1 grid-rows-1 lg:col-span-2">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/16.jpeg" alt="image 16" fill className="object-cover" />
								<Text className="absolute left-0 top-5 block max-w-full rounded-r-xl bg-white py-1 pl-4 pr-3 text-right font-sometype-mono text-2xs uppercase lg:text-3xs xl:text-2xs">
									Quality, unscalable experience
								</Text>
							</div>
						</div>
					</div>
					<div className="relative z-10 flex flex-col items-stretch justify-start gap-14">
						<div className="flex flex-col items-start justify-start gap-10 md:flex-row md:gap-5 xl:gap-20">
							<Heading is="h2" className="shrink-0 md:basis-1/3 lg:basis-1/5">
								Who we are
							</Heading>
							<div className="flex grow flex-col items-start justify-start gap-4">
								<Text is="p">
									A non-profit foundation, Benelux-focused; our community consists of climate tech
									founders, investors, and talent. We actively seek ways to help foster connections
									& unlock opportunities.
								</Text>
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-10 md:flex-row md:gap-5 xl:gap-20">
							<Heading is="h2" className="shrink-0 md:basis-1/3 lg:basis-1/5">
								Why we do it
							</Heading>
							<div className="flex grow flex-col items-start justify-start gap-4">
								<Text is="p">
									Using our <b>network and strategic support</b>, we want to propel growth of the
									most innovative climate tech Benelux companies, help them secure consistent,
									sustainable capital, access community & knowledge.
								</Text>
								<Text is="p">
									CTC&apos;s part is acting
									<b>as a missing link - an overlooked role of connector and facilitator</b>; having
									strong connections & direct access to key climate-tech stakeholders, we make it
									easier for the right people to meet and create opportunities.
								</Text>
								<Text is="p">
									We see sustainability as a call to action; we want to help those who actively
									strive towards building a more regenerative lifestyle & a better world for all.
								</Text>
								<Text is="p">
									Science shows that{" "}
									<b>
										community and a sense of belonging can boost our cognitive functions & emotional
										intelligence, and shape us into more empathetic beings
									</b>
									; we can use this human programming to collectively expand our knowledge and
									awareness, and ultimately - drive real world change.
								</Text>
							</div>
						</div>
						<FallingCircle className="absolute bottom-0 z-0 hidden w-36 md:left-0 md:block 3xl:-right-8 3xl:left-auto 3xl:w-48 3xl:translate-x-full" />
					</div>
					<GreenGradient className="absolute right-0 top-3/4 z-0 w-[200%] -translate-y-1/2 translate-x-1/2 opacity-70 lg:top-1/2 lg:w-full" />
				</header>
			</Container>
		</section>
	);
};
