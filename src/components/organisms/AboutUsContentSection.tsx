import Image from "next/image";
import { AnimatedCounter } from "../molecules/AnimatedCounter";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ArrowDown } from "@/svg/ArrowDown";
import { FallingCircle } from "@/svg/FallingCircle";

const infoItems = [
	{ id: 1, title: "Foundation name", info: "Climate Tech Connect" },
	{ id: 2, title: "Representative director", info: "Leopold van Oosten" },
	{ id: 3, title: "Office", info: "Amsterdam, Posthoornkerk" },
	{ id: 4, title: "Fields of activities", info: "Events, advisory, consortia creation, legal, " },
];

export const AboutUsContentSection = () => {
	return (
		<section>
			<Container className="pb-12 md:pb-16">
				<div className="border-t border-gray-500 pt-16 md:pt-20">
					<div className="relative mb-48 flex flex-wrap items-center justify-end gap-y-20 md:mb-52">
						{infoItems.map(({ id, title, info }) => (
							<div key={id} className="relative z-10 basis-full md:basis-1/2 lg:basis-1/3">
								<Heading
									is="h3"
									className="mb-6 font-sometype-mono text-base uppercase text-green-200"
								>
									{title}
								</Heading>
								<Text is="p" className="text-xl text-gray-900">
									{info}
								</Text>
							</div>
						))}
						<FallingCircle className="absolute -bottom-4 left-0 z-0 w-32 translate-y-full md:-bottom-12 md:translate-y-2/3 lg:bottom-0 lg:w-48" />
					</div>

					<div className="mb-32 flex flex-col items-start justify-start gap-20 sm:mb-36 md:mb-44 lg:mb-48">
						<div className="flex flex-col items-start justify-start gap-10 md:flex-row xl:gap-20">
							<Heading is="h2" className="shrink-0">
								Why?
							</Heading>
							<div className="flex grow flex-col items-start justify-start gap-4">
								<Text is="p">
									Using our network and strategic support, we want to propel growth of the most
									innovative climate tech Benelux companies, help them secure consistent,
									sustainable capital, access community & knowledge.
								</Text>
								<Text is="p">
									In the world full of instability, we strive towards a regenerative lifestyle — we
									see sustainability as a call to action.
								</Text>
								<Text is="p">
									Science shows how community and a sense of belonging can boost our cognitive
									functions & emotional intelligence, and shape us into more empathetic beings; we
									can use this human programing to collectively expand our knowledge and awaraness,
									and ultimately - drive real world change.
								</Text>
							</div>
						</div>

						<div className="grid w-full grid-cols-4 lg:grid-cols-12">
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:h-60 lg:col-span-3 xl:h-80">
								<Image src="/img/8.jpg" alt="image 1" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:h-60 lg:col-span-3 xl:h-80">
								<Image src="/img/4.png" alt="image 2" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:col-span-3 sm:h-60 lg:col-span-4 xl:h-80">
								<Image src="/img/9.jpg" alt="image 3" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:col-span-1 sm:h-60 lg:col-span-2 xl:h-80">
								<Image src="/img/6.png" alt="image 4" fill className="object-cover" />
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 xl:gap-40">
						<header className="relative">
							<ArrowDown className="absolute bottom-full left-0 w-6 -translate-y-6 md:w-8 lg:w-auto" />
							<Heading is="h2" className="mb-10 sm:mb-14">
								A non-profit business model
							</Heading>
							<Text is="p" className="text-base sm:text-xl">
								Reinvesting all profits, creating a ripple of shared growth
							</Text>
						</header>
						<div className="flex flex-col gap-14">
							<div className="grid grid-cols-2 gap-14 border-t border-green-200 pt-8">
								<div>
									<Heading
										is="h3"
										className="mb-4 flex items-center justify-start font-sometype-mono text-xl text-gray-500 sm:text-3xl"
									>
										+<AnimatedCounter target={200} duration={2} />
									</Heading>
									<Text className="text-base sm:text-xl">members & growing</Text>
								</div>
								<div>
									<Heading
										is="h3"
										className="mb-4 flex items-center justify-start font-sometype-mono text-xl text-gray-500 sm:text-3xl"
									>
										&gt;
										<AnimatedCounter className="mr-3" target={8} duration={2} /> events
									</Heading>
									<Text className="text-base sm:text-xl">per year</Text>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-14 border-t border-green-200 pt-8">
								<div>
									<Heading
										is="h3"
										className="mb-4 flex items-center justify-start font-sometype-mono text-xl text-gray-500 sm:text-3xl"
									>
										<AnimatedCounter target={150} duration={2} />k eur
									</Heading>
									<Text className="text-base sm:text-xl">reinvested</Text>
								</div>
								<div>
									<Heading
										is="h3"
										className="mb-4 flex items-center justify-start font-sometype-mono text-xl text-gray-500 sm:text-3xl"
									>
										+<AnimatedCounter target={10} duration={2} />
									</Heading>
									<Text className="text-base sm:text-xl">annual sponsorsrships</Text>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
