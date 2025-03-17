import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Star } from "@/svg/Star";
import aboutUs from "@/data/about-us.json";

export const AboutUsHero = () => {
	return (
		<section>
			<Container className="py-16 md:py-20">
				<div className="relative flex flex-col gap-10 md:gap-14">
					<Heading className="text-center text-xl lowercase text-brown-600">Our mission</Heading>

					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-20">
						<Heading
							is="h2"
							className="text-left text-5xl/[3.5rem] font-extralight sm:text-6xl/[4.5rem] md:text-7xl/[5rem] lg:text-right lg:text-6.5xl/[5rem] xl:text-7.5xl/[7rem]"
						>
							{aboutUs.hero.title}
						</Heading>
						<div className="flex flex-col items-start justify-between gap-6 lg:mt-1 lg:pt-5 xl:mt-4">
							<div className="flex flex-col items-start justify-start gap-4">
								<Text is="p" className="text-gray-500">
									<span dangerouslySetInnerHTML={{ __html: aboutUs.hero.description }} />
								</Text>
							</div>

							<div>
								<Text is="p" className="relative w-fit font-bold text-gray-500">
									{aboutUs.hero.info}
									<Star className="absolute bottom-full left-full w-5 fill-green-600" />
								</Text>
								<Button
									variant="secondary"
									className="mt-4 text-base lg:-ml-4 lg:text-xl xl:text-2xl"
									href={aboutUs.hero.button.url}
									hasArrow
								>
									{aboutUs.hero.button.label}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
