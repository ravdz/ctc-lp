import type { Metadata } from "next";
import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Container } from "@/components/atoms/Container";
import { CommunityHero } from "@/components/organisms/CommunityHero";
import { SliderSection } from "@/components/organisms/SliderSection";
import { StepsSection } from "@/components/organisms/StepsSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { FaqSection } from "@/components/organisms/FaqSection";
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

const faq = [
	{
		id: 1,
		question: "Who can join the community?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Our community is designed for climate-tech founders, investors, and key industry
				stakeholders. We offer different membership levels based on your role and stage.
			</Text>
		),
	},
	{
		id: 2,
		question: "What are the benefits of joining?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Members get access to exclusive networking opportunities, matchmaking with investors or
				partners, industry events, advisory programs, and specialized support like pitch deck
				creation and deal closing assistance.
			</Text>
		),
	},
	{
		id: 3,
		question: "How do I apply for membership?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Simply fill out our membership application form on our website. We will review your
				application to ensure it aligns with our membership criteria.
			</Text>
		),
	},
	{
		id: 4,
		question: "How does the investor matchmaking work?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				We use a mix of AI-driven and manual matchmaking to connect startups with the most relevant
				investors based on funding stage, sector, strategic fit and other. We hold an extensive
				database & use custom-built software.
			</Text>
		),
	},
	{
		id: 5,
		question: "What are the different membership levels?",
		answer: (
			<div>
				<Text is="p" className="mb-2 text-base text-gray-900">
					We offer three membership tiers (for more information, check{" "}
					<Link
						href="/community#membership"
						className="font-bold transition-colors hover:text-green-600"
					>
						Membership options
					</Link>
					):
				</Text>
				<ul className="flex flex-col gap-1">
					<li>
						<Text is="p" className="text-base text-gray-900">
							Free membership (founders only) - access to 1 event per year;
						</Text>
					</li>
					<li>
						<Text is="p" className="text-base text-gray-900">
							Paid membership (€950/year) (founders & c-level) - access to all events and exclusive
							matchmaking;
						</Text>
					</li>
					<li>
						<Text is="p" className="text-base text-gray-900">
							Late-stage membership (€1,295/year) (for companies with €1M+ revenue) - premium access
							and additional services.
						</Text>
					</li>
				</ul>
			</div>
		),
	},
	{
		id: 6,
		question: "How do I know which membership is right for me?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				If you&apos;re a startup founder, the free or paid membership is ideal. If you&apos;re a
				later-stage company, the premium Late-Stage Membership provides additional benefits.
				Investors and stakeholders can also apply for a membership that suits their engagement
				level.
			</Text>
		),
	},
	{
		id: 7,
		question: "What does exactly happen when I apply?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Your application will be reviewed manually to ensure it meets our criteria, we do this to
				keep the community highly relevant. If approved, you&apos;ll receive access to respective
				benefits. You become a part of our databases and event scheduling, which is how we&apos;ll
				be able to match you with the most relevant partners from our network and events that
				we&apos;re organizing.
			</Text>
		),
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
			<FaqSection heading="Membership FAQ" className="pb-40 pt-20" items={faq} />
		</div>
	);
};

export default JoinUs;
