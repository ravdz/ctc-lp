import { CtaSection } from "@/components/organisms/CtaSection";
import { FeatureSection } from "@/components/organisms/FeatureSection";
import { UpcomingEventsFeed } from "@/components/organisms/UpcomingEventsFeed";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { LogosSection } from "@/components/organisms/LogosSection";

const partnersLogos = [
	{ id: 1, src: "/img/logo1.svg", alt: "Partner 1", width: 100, height: 100 },
	{ id: 2, src: "/img/logo2.svg", alt: "Partner 2", width: 50, height: 50 },
	{ id: 3, src: "/img/logo3.svg", alt: "Partner 3", width: 100, height: 100 },
	{ id: 4, src: "/img/logo4.svg", alt: "Partner 4", width: 100, height: 100 },
	{ id: 5, src: "/img/logo5.svg", alt: "Partner 5", width: 100, height: 100 },
	{ id: 6, src: "/img/logo6.svg", alt: "Partner 6", width: 100, height: 100 },
];

const Home = () => {
	return (
		<div>
			<CtaSection />
			<FeatureSection />
			<UpcomingEventsFeed />
			<JoinUsSection />
			<LogosSection heading="Our partners" logos={partnersLogos} />
		</div>
	);
};

export default Home;
