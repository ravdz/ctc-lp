import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import { Star } from "@/svg/Star";
import { Button } from "@/components/atoms/Button";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";

const partnersLogos = [
	{ id: 1, src: "/img/logos/endeit.png", alt: "endeit logo", width: 137, height: 137 },
	{ id: 2, src: "/img/logos/deroos.png", alt: "deroos logo", width: 121, height: 121 },
	{
		id: 3,
		src: "/img/logos/amsterdam-standard.png",
		alt: "amsterdam standard logo",
		width: 230,
		height: 230,
	},
	{ id: 4, src: "/img/logos/junction.png", alt: "junction logo", width: 133, height: 133 },
	{ id: 5, src: "/img/logos/sfpim.png", alt: "sfpim logo", width: 94, height: 94 },
];

const AboutUs = () => {
	return (
		<div>
			<SubpageHero title="Our mission">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-20">
					<Heading
						is="h2"
						className="text-left text-5xl/[3.5rem] font-extralight sm:text-6xl/[4.5rem] md:text-7xl/[5rem] lg:text-right lg:text-6.5xl/[5rem] xl:text-7.5xl/[7rem]"
					>
						Establishing Benelux as the Europe&rsquo;s climate tech leader
					</Heading>
					<div className="flex flex-col items-start justify-between gap-6 lg:pt-5">
						<div className="flex flex-col items-start justify-start gap-4">
							<Text is="p" className="text-gray-500">
								Our collective efforts in the next decades will determine the fate of a large
								portion of the planet — it&rsquo;s about time we shift our role from nature takers
								to stewards.
							</Text>
							<Text is="p" className="text-gray-500">
								Our environment shapes us probably more thank we think. That&rsquo;s why we created
								CTC —
								<b>
									we believe the real-world, transformative movement can be created through high
									quality social ties & relationships.
								</b>
								Everyday we are immersed in different networks, that can have both negative and
								positive impact on us.
							</Text>
							<Text is="p" className="text-gray-500">
								In a sustainability context, community is not only for solving the basic human need
								of connection - it&rsquo;s about education, storytelling, contirbuting to the
								solutions of different systemic issues.
							</Text>
						</div>

						<div>
							<Text is="p" className="relative w-fit font-bold text-gray-500">
								Sharpen your impact with CTC.
								<Star className="absolute bottom-full left-full w-5 -rotate-6 fill-green-600" />
							</Text>
							<Button
								variant="secondary"
								className="mt-4 text-base lg:text-xl xl:text-2xl"
								href="/join-us"
								hasArrow
							>
								Become a member
							</Button>
						</div>
					</div>
				</div>
			</SubpageHero>
			<AboutUsContentSection />
			<LogosSection heading="Our partners" logos={partnersLogos} />
			<OurTeamSection />
			<JoinUsSection />
		</div>
	);
};

export default AboutUs;
