import type { Metadata } from "next";
import { HomeHero } from "@/components/organisms/HomeHero";
import { FeatureSection } from "@/components/organisms/FeatureSection";
import { UpcomingEventsFeed } from "@/components/organisms/UpcomingEventsFeed";
import { JoinUsSection } from "@/components/organisms/JoinUsSection";
import { LogosSection } from "@/components/organisms/LogosSection";
import homepage from "@/data/homepage.json";

export const metadata: Metadata = {
	title: homepage.meta_title,
	description: homepage.meta_description,
};

const partnersLogos = [
	{
		id: 1,
		src: "/img/logos/endeit.png",
		alt: "endeit logo",
		width: 137,
		height: 137,
		href: "https://www.linkedin.com/company/endeitcapital/about/",
	},
	{
		id: 2,
		src: "/img/logos/deroos.png",
		alt: "deroos logo",
		width: 121,
		height: 121,
		href: "https://www.linkedin.com/company/de-rooseu/about/",
	},
	{
		id: 3,
		src: "/img/logos/amsterdam-standard.png",
		alt: "amsterdam standard logo",
		width: 230,
		height: 230,
		href: "https://www.linkedin.com/company/amsterdam-standard/about/",
	},
	{
		id: 4,
		src: "/img/logos/junction.png",
		alt: "junction logo",
		width: 133,
		height: 133,
		href: "https://www.linkedin.com/company/junction-growth-investors/about/",
	},
	{
		id: 5,
		src: "/img/logos/sfpim.png",
		alt: "sfpim logo",
		width: 94,
		height: 94,
		href: "https://www.linkedin.com/company/sfpi-fpim/",
	},
];

const Home = () => {
	return (
		<div>
			<HomeHero />
			<LogosSection heading={homepage.logos.title} logos={partnersLogos} />
			<FeatureSection />
			<UpcomingEventsFeed />
			<JoinUsSection />
		</div>
	);
};

export default Home;
