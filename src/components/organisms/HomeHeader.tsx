import Image from "next/image";

import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { SingleCircle } from "@/svg/SingleCircle";

export const HomeHeader = () => {
	return (
		<section className="overflow-hidden">
			<Container className="py-32 md:py-44">
				<header>
					<Text className="mb-2 block text-sm sm:text-base md:whitespace-nowrap lg:mb-4 lg:text-xl">
						Hello, we are
					</Text>
					<div className="relative grid w-full grid-cols-1 items-start md:grid-cols-2 xl:grid-cols-5">
						<Heading className="mb-10 text-4xl font-extralight uppercase tracking-3 sm:text-5xl md:mb-0 md:whitespace-nowrap md:text-6xl lg:text-7xl xl:col-span-2 xl:text-8xl">
							Climate tech<br></br>connect
						</Heading>

						<div className="xl:mt-34 flex flex-col items-start justify-end md:mt-20 lg:mt-32 xl:col-span-3 xl:pl-20">
							<Text className="mb-3 md:mb-12" is="p">
								A non-profit foundation dedicated to fostering connections and unlocking
								opportunities for climate tech founders, investors, and talent across the Benelux
								region.
							</Text>
							<Button variant="secondary" href="/about-us" hasArrow>
								read more about our mission
							</Button>
						</div>
					</div>
				</header>
				<div className="relative mt-32 grid grid-cols-2-3 lg:mt-20 lg:grid-cols-3-5-2-5">
					<SingleCircle className="absolute right-10 top-0 z-10 w-52 -translate-y-1/2 md:w-auto lg:w-52 xl:w-auto" />
					<div className="relative h-64 overflow-hidden rounded-3xl sm:h-96">
						<Image src="/img/hero-grid/1.png" alt="image 1" fill className="object-cover" />
					</div>
					<div className="relative h-64 overflow-hidden rounded-3xl sm:h-96">
						<Image src="/img/hero-grid/2.png" alt="image 2" fill className="object-cover" />
					</div>
					<div className="grid h-64 grid-rows-5 sm:h-96">
						<div className="relative row-span-3 w-full overflow-hidden rounded-3xl">
							<Image src="/img/hero-grid/3.png" alt="image 3" fill className="object-cover" />
						</div>
						<div className="relative row-span-2 w-full overflow-hidden rounded-3xl">
							<Image src="/img/hero-grid/4.png" alt="image 4" fill className="object-cover" />
						</div>
					</div>
					<div className="relative h-64 overflow-hidden rounded-3xl sm:h-96">
						<Image src="/img/hero-grid/5.png" alt="image 5" fill className="object-cover" />
					</div>
				</div>
			</Container>
		</section>
	);
};
