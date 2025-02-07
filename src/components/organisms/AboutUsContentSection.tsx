import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ArrowDown } from "@/svg/ArrowDown";

const infoItems = [
	{ id: 1, title: "Foundation name", info: "Climate `Tech Connect" },
	{ id: 2, title: "Representative director", info: "Leopold van Oosten" },
	{ id: 3, title: "Office", info: "Amsterdam, Posthoornkerk" },
	{ id: 4, title: "Fields of activities", info: "Events, advisory, consortia creation, legal, " },
];

export const AboutUsContentSection = () => {
	return (
		<section>
			<Container className="pb-32 pt-16 md:pb-44 md:pt-20">
				<div className="border-t border-gray-500 pt-24">
					<div className="mb-32 flex flex-wrap items-center justify-end gap-y-20 md:mb-44">
						{infoItems.map(({ id, title, info }) => (
							<div key={id} className="basis-full md:basis-1/2 lg:basis-1/3">
								<Heading
									is="h3"
									className="font-sometype-mono mb-6 text-base uppercase text-green-200"
								>
									{title}
								</Heading>
								<Text is="p" className="text-xl text-gray-900">
									{info}
								</Text>
							</div>
						))}
					</div>
					<div className="mb-52 flex flex-col items-start justify-start gap-20 md:mb-64">
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

						<div className="grid w-full grid-cols-4 lg:grid-cols-8">
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:h-60">
								<Image src="/img/about-us-grid/1.png" alt="image 1" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:h-60">
								<Image src="/img/about-us-grid/2.png" alt="image 2" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:col-span-3 sm:h-60">
								<Image src="/img/about-us-grid/3.png" alt="image 3" fill className="object-cover" />
							</div>
							<div className="relative col-span-2 h-40 overflow-hidden rounded-3xl sm:col-span-1 sm:h-60">
								<Image src="/img/about-us-grid/4.png" alt="image 4" fill className="object-cover" />
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 xl:gap-40">
						<header className="relative">
							<ArrowDown className="absolute bottom-full left-0 w-6 -translate-y-6 md:w-8 lg:w-auto lg:-translate-y-10" />
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
										className="font-sometype-mono mb-4 text-xl text-gray-500 sm:text-3xl"
									>
										+200
									</Heading>
									<Text className="text-base sm:text-xl">members & growing</Text>
								</div>
								<div>
									<Heading
										is="h3"
										className="font-sometype-mono mb-4 text-xl text-gray-500 sm:text-3xl"
									>
										&gt;8 events
									</Heading>
									<Text className="text-base sm:text-xl">per year</Text>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-14 border-t border-green-200 pt-8">
								<div>
									<Heading
										is="h3"
										className="font-sometype-mono mb-4 text-xl text-gray-500 sm:text-3xl"
									>
										150k eur
									</Heading>
									<Text className="text-base sm:text-xl">reinvested</Text>
								</div>
								<div>
									<Heading
										is="h3"
										className="font-sometype-mono mb-4 text-xl text-gray-500 sm:text-3xl"
									>
										+10
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
