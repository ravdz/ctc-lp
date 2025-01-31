import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export const AboutUsCtaSection = () => {
	return (
		<section>
			<Container className="py-28 md:py-44">
				<div>
					<Heading
						is="h1"
						className="mb-10 text-center font-abhaya-libre text-xl lowercase text-gray-700 md:mb-14"
					>
						Our mission
					</Heading>
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
						<Heading
							is="h2"
							className="text-left text-5xl font-extralight sm:text-6xl md:text-7xl lg:col-span-3 lg:text-right xl:text-7.5xl"
						>
							Establishing Benelux as the Europe&rsquo;s climate tech leader
						</Heading>
						<div className="flex flex-col items-start justify-start gap-4 lg:col-span-2 lg:pt-5">
							<Text is="p" className="text-xl text-gray-700">
								Our collective efforts in the next decades will determine the fate of a large
								portion of the planet — it&rsquo;s about time we shift our role from nature takers
								to stewards.
							</Text>
							<Text is="p" className="text-xl text-gray-700">
								Our environment shapes us probably more thank we think. That&rsquo;s why we created
								CTC — we believe the real-world, transformative movement can be created through high
								quality social ties & relationships. Everyday we are immersed in different networks,
								that can have both negative and positive impact on us.
							</Text>
							<Text is="p" className="text-xl text-gray-700">
								In a sustainability context, community is not only for solving the basic human need
								of connection - it&rsquo;s about education, storytelling, contirbuting to the
								solutions of different systemic issues.
							</Text>
							<Text is="p" className="text-xl font-bold text-gray-700">
								Sharpen your impact with CTC.
							</Text>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
