import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import { CtaSection } from "@/components/organisms/CtaSection";
import { SmallStar } from "@/svg/SmallStar";

const partnersLogos = [
	{ id: 1, src: "/img/logo1.svg", alt: "Partner 1", width: 100, height: 100 },
	{ id: 2, src: "/img/logo2.svg", alt: "Partner 2", width: 50, height: 50 },
	{ id: 3, src: "/img/logo3.svg", alt: "Partner 3", width: 100, height: 100 },
	{ id: 4, src: "/img/logo4.svg", alt: "Partner 4", width: 100, height: 100 },
	{ id: 5, src: "/img/logo5.svg", alt: "Partner 5", width: 100, height: 100 },
	{ id: 6, src: "/img/logo6.svg", alt: "Partner 6", width: 100, height: 100 },
];

const sponsorsLogos = [
	{ id: 1, src: "/img/logo3.svg", alt: "Partner 1", width: 100, height: 100 },
	{ id: 2, src: "/img/logo2.svg", alt: "Partner 2", width: 50, height: 50 },
	{ id: 3, src: "/img/logo5.svg", alt: "Partner 3", width: 100, height: 100 },
	{ id: 4, src: "/img/logo4.svg", alt: "Partner 4", width: 100, height: 100 },
	{ id: 5, src: "/img/logo6.svg", alt: "Partner 5", width: 100, height: 100 },
	{ id: 6, src: "/img/logo1.svg", alt: "Partner 6", width: 100, height: 100 },
];

const cta = {
	title: "Become a member",
	description:
		"CTC was born to empower all of you: founders & changemakers, stakeholders, impact investors & angels. It’s a place where your ideas will be shaped to their best & drive meaningful impact.",
	link: {
		url: "/join-us",
		label: "Become a member",
	},
};

const AboutUs = () => {
	return (
		<div>
			<SubpageHero title="Our mission">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
					<Heading
						is="h2"
						className="text-left text-5xl font-extralight sm:text-6xl md:text-7xl lg:col-span-3 lg:text-right xl:text-7.5xl/[7rem]"
					>
						Establishing Benelux as the Europe&rsquo;s climate tech leader
					</Heading>
					<div className="flex flex-col items-start justify-start gap-4 lg:col-span-2 lg:pt-5">
						<Text is="p" className="text-gray-500">
							Our collective efforts in the next decades will determine the fate of a large portion
							of the planet — it&rsquo;s about time we shift our role from nature takers to
							stewards.
						</Text>
						<Text is="p" className="text-gray-500">
							Our environment shapes us probably more thank we think. That&rsquo;s why we created
							CTC — we believe the real-world, transformative movement can be created through high
							quality social ties & relationships. Everyday we are immersed in different networks,
							that can have both negative and positive impact on us.
						</Text>
						<Text is="p" className="text-gray-500">
							In a sustainability context, community is not only for solving the basic human need of
							connection - it&rsquo;s about education, storytelling, contirbuting to the solutions
							of different systemic issues.
						</Text>
						<Text is="p" className="relative mt-6 font-bold text-gray-500">
							Sharpen your impact with CTC.
							<SmallStar className="absolute bottom-full left-full" />
						</Text>
					</div>
				</div>
			</SubpageHero>
			<AboutUsContentSection />
			<OurTeamSection />
			<LogosSection heading="Partners" logos={partnersLogos} />
			<LogosSection heading="Sponsors" logos={sponsorsLogos} />
			<CtaSection data={cta} />
		</div>
	);
};

export default AboutUs;
