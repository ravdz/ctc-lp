import type { Metadata } from "next";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Container } from "@/components/atoms/Container";
import { CommunityHero } from "@/components/organisms/CommunityHero";
import { SliderSection } from "@/components/organisms/SliderSection";
import { StepsSection } from "@/components/organisms/StepsSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { MembershipFaq } from "@/components/organisms/MembershipFaq";
import community from "@/data/community.json";

export const metadata: Metadata = {
	title: community.meta_title,
	description: community.meta_description,
};

const slides = [
	{
		id: 1,
		image: "/img/7.png",
		title: "Slide 7",
	},
	{
		id: 2,
		image: "/img/14.png",
		title: "Slide 14",
	},
	{
		id: 3,
		image: "/img/12.png",
		title: "Slide 12",
	},
	{
		id: 4,
		image: "/img/13.png",
		title: "Slide 13",
	},
	{
		id: 5,
		image: "/img/15.png",
		title: "Slide 15",
	},
	{
		id: 6,
		image: "/img/8.png",
		title: "Slide 8",
	},
	{
		id: 7,
		image: "/img/18.png",
		title: "Slide 18",
	},
	{
		id: 8,
		image: "/img/11.png",
		title: "Slide 11",
	},
	{
		id: 9,
		image: "/img/5.png",
		title: "Slide 5",
	},
	{
		id: 10,
		image: "/img/6.png",
		title: "Slide 6",
	},
	{
		id: 11,
		image: "/img/9.png",
		title: "Slide 9",
	},
];

const JoinUs = () => {
	return (
		<div>
			<CommunityHero />
			<section>
				<Container className="py-10">
					<div className="relative z-10 flex flex-col items-stretch justify-start gap-14">
						<div className="flex flex-col items-start justify-start gap-10 md:flex-row md:gap-5 xl:gap-20">
							<Heading is="h2" className="shrink-0 md:basis-1/3 lg:basis-1/5">
								{community.content.block1.title}
							</Heading>
							<div className="flex grow flex-col items-start justify-start gap-4">
								<Text is="span">
									<p dangerouslySetInnerHTML={{ __html: community.content.block1.description }} />
								</Text>
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-10 md:flex-row md:gap-5 xl:gap-20">
							<Heading is="h2" className="shrink-0 md:basis-1/3 lg:basis-1/5">
								{community.content.block2.title}
							</Heading>
							<div className="flex grow flex-col items-start justify-start gap-4">
								<Text is="span">
									<p dangerouslySetInnerHTML={{ __html: community.content.block2.description }} />
								</Text>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<SliderSection slides={slides} />
			<StepsSection
				heading={community.steps.title}
				steps={community.steps.steps}
				boldedHeadings={false}
			/>
			<PricingSection />
			<MembershipFaq />
		</div>
	);
};

export default JoinUs;
