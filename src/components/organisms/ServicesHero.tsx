import Image from "next/image";
import { AnimatedEllipsis } from "../atoms/AnimatedEllipsis";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { RedGradient } from "@/svg/RedGradient";
import { Star } from "@/svg/Star";
import services from "@/data/services.json";

export const ServicesHero = () => {
	return (
		<section>
			<Container className="relative overflow-hidden pb-14 pt-10 md:pb-24 md:pt-20">
				<div>
					<header className="mb-14 grid grid-cols-1 items-start gap-16 md:mb-24 md:grid-cols-3 md:gap-0 md:gap-y-0">
						<div className="relative z-10 md:col-span-1 md:row-span-1 md:mb-5">
							<Heading className="text-5xl/[4rem] font-extralight tracking-3 md:text-6xl/[5rem] lg:text-7xl/[7rem]">
								{services.hero.title}
							</Heading>
						</div>
						<div className="relative z-10 flex flex-col gap-9 border-t border-green-800 pt-12 md:col-span-2 md:col-start-2 md:row-span-1 md:row-start-2 md:mb-16 md:pt-10">
							<Star className="absolute left-0 top-3 w-5 fill-green-400 md:-left-10 md:top-5" />
							<Text is="span" className="block text-sm sm:text-base/6">
								<p dangerouslySetInnerHTML={{ __html: services.hero.description }} />
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
					<div className="relative z-10 grid grid-cols-1 gap-4 lg:grid-cols-11">
						<div className="grid grid-cols-1 grid-rows-1 lg:col-span-2">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-blue-300 pb-[100%]">
								<AnimatedEllipsis className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2" />
								<Image
									src="/img/28.png"
									alt="image 28"
									fill
									className="relative z-10 object-cover"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 grid-rows-1 lg:col-span-3">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/29.png" alt="image 29" fill className="object-cover" />
							</div>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 lg:col-span-3">
							<div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[60%] grayscale">
								<Image src="/img/32.png" alt="image 32" fill className="object-cover" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/30.png" alt="image 30" fill className="object-cover" />
							</div>
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-green-500 pb-[100%]">
								<Image src="/img/31.png" alt="image 31" fill className="object-cover" />
							</div>
						</div>
						<div className="grid grid-cols-1 grid-rows-1 lg:col-span-3">
							<div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl bg-gray-300 pb-[100%]">
								<Image src="/img/27.png" alt="image 27" fill className="object-cover" />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
