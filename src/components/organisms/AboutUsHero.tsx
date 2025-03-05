import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Star } from "@/svg/Star";

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
							Establishing Benelux as the Europe&rsquo;s climate tech leader
						</Heading>
						<div className="flex flex-col items-start justify-between gap-6 lg:mt-1 lg:pt-5 xl:mt-4">
							<div className="flex flex-col items-start justify-start gap-4">
								<Text is="p" className="text-gray-500">
									Our collective efforts in the next decades will determine the fate of a large
									portion of the planet — it&rsquo;s about time we shift our role from nature takers
									to nature stewards.
								</Text>
								<Text is="p" className="text-gray-500">
									Our environment shapes us probably more thank we think. That&rsquo;s why we
									created CTC —{" "}
									<b>
										we believe the real-world, transformative movement can be created through high
										quality social ties & relationships.
									</b>{" "}
									Everyday we are immersed in different networks, that can have both negative and
									positive impact on us.
								</Text>
								<Text is="p" className="text-gray-500">
									In a sustainability context, community is not only for solving the basic human
									need of connection — it&rsquo;s about education, storytelling, contributing to the
									solutions of different systemic issues.
								</Text>
							</div>

							<div>
								<Text is="p" className="relative w-fit font-bold text-gray-500">
									Sharpen your impact with CTC.
									<Star className="absolute bottom-full left-full w-5 fill-green-600" />
								</Text>
								<Button
									variant="secondary"
									className="mt-4 text-base lg:-ml-4 lg:text-xl xl:text-2xl"
									href="/community"
									hasArrow
								>
									Become a member
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
