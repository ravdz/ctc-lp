import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaqSection } from "@/components/organisms/FaqSection";
import { Text } from "@/components/atoms/Text";

type Props = {
	className?: string;
};

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

export const MembershipFaq = ({ className = "" }: Props) => {
	return (
		<FaqSection
			heading="Membership FAQ"
			className={twMerge("pb-40 pt-20", className)}
			items={faq}
		/>
	);
};
