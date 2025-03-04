import type { Metadata } from "next";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { AboutUsHero } from "@/components/organisms/AboutUsHero";

export const metadata: Metadata = {
	title: "About Us | Climate Tech Connect",
	description:
		"Learn more about Climate Tech Connect, our mission, our team, and how we are driving innovation in climate technology. Join us in making a difference.",
};

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
			<AboutUsHero />
			<AboutUsContentSection />
			<LogosSection heading="Our partners" logos={partnersLogos} />
			<OurTeamSection />
			<JoinUsSection />
		</div>
	);
};

export default AboutUs;
