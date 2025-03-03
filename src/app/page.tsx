import type { Metadata } from "next";
import { HomeHero } from "@/components/organisms/HomeHero";
import { FeatureSection } from "@/components/organisms/FeatureSection";
import { UpcomingEventsFeed } from "@/components/organisms/UpcomingEventsFeed";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { LogosSection } from "@/components/organisms/LogosSection";

export const metadata: Metadata = {
	title: "Climate tech community, events & resources | Climate Tech Connect Benelux",
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

const Home = () => {
	return (
		<div>
			<HomeHero />
			<LogosSection heading="Our partners" logos={partnersLogos} />
			<FeatureSection />
			<UpcomingEventsFeed />
			<JoinUsSection />
		</div>
	);
};

export default Home;
