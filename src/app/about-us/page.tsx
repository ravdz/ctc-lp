import { AboutUsCtaSection } from "@/components/organisms/AboutUsCtaSection";
import { AboutUsContentSection } from "@/components/organisms/AboutUsContentSection";
import { OurTeamSection } from "@/components/organisms/OurTeamSection";
import { LogosSection } from "@/components/organisms/LogosSection";

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

const AboutUs = () => {
	return (
		<div>
			<AboutUsCtaSection />
			<AboutUsContentSection />
			<OurTeamSection />
			<LogosSection heading="Partners" logos={partnersLogos} />
			<LogosSection heading="Sponsors" logos={sponsorsLogos} />
		</div>
	);
};

export default AboutUs;
