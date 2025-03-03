import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/svg/Badge";
import { Star } from "@/svg/Star";

type Item = {
	id: number;
	title: React.ReactNode;
	badge: string;
	description: string;
	steps: string[];
	link: {
		label: string;
		url: string;
	};
};

const FeatureItem = ({ item }: { item: Item }) => {
	const { title, description, steps, link, badge } = item;
	return (
		<div className="flex w-full max-w-100 flex-col justify-between gap-6 rounded-lg bg-green-600 p-5 pt-20">
			<div className="flex flex-col gap-6">
				<div className="relative w-full pr-24">
					<Heading is="h3" className="text-3xl font-normal tracking-wide">
						{title}
					</Heading>
					<div className="absolute bottom-1/2 right-0 flex h-20 w-20 items-center justify-center">
						<Badge className="absolute left-0 top-0 h-full" />
						<Text className="text-3xs relative z-10 w-3/4 text-center font-sometype-mono text-white">
							{badge}
						</Text>
					</div>
				</div>
				<Text className="text-base/6 text-gray-900">{description}</Text>
				<ul className="flex flex-col items-stretch justify-start">
					{steps.map((step, index) => (
						<li key={step} className="relative flex items-start justify-start pb-8">
							{index + 1 !== steps.length && (
								<div className="absolute left-3 top-3 h-full w-[1px] bg-green-500" />
							)}

							<Star className="w-6 shrink-0 -rotate-6 fill-green-500" />
							<Text className="pl-4 text-base text-gray-900">{step}</Text>
						</li>
					))}
				</ul>
			</div>
			<Button href={link.url} hasArrow className="w-fit self-end" variant="secondary">
				{link.label}
			</Button>
		</div>
	);
};

const items: Item[] = [
	{
		id: 1,
		title: (
			<>
				Looking for <b>a role</b>
			</>
		),
		badge: "free for candidates",
		description:
			"Are you looking for a role in climate tech sector? Fill out a simple form, you'll be added to our database & matched with a relevant employer:",
		steps: [
			"Fill out a simple form",
			"We assess your inquiry & add your profile to our database",
			"You'll be matched with the employer (founder or investors) from the community & get the most relevant offers (free of charge)",
		],
		link: {
			label: "Fill out form",
			url: "/",
		},
	},
	{
		id: 2,
		title: (
			<>
				Looking for <b>talent</b>
			</>
		),
		badge: "success fee",
		description:
			"Are you a founder or investor looking to hire talent in climate tech sector? Book a free call so we can discuss the talent matchmaking possibilities for you: ",
		steps: [
			"Book a call with us, free of charge",
			"Let us know your needs",
			"Get matched with our curated database of top climate tech talents",
		],
		link: {
			label: "Book a call",
			url: "/",
		},
	},
];
export const TalentPoolTab = () => {
	return (
		<div className="flex flex-col gap-10">
			<Text className="text-base/6">
				The Talent Pool is an exclusive database connecting top professionals with climate-tech
				startups, scale-ups, and investors seeking the right talent. Our{" "}
				<b>
					widespread network & deep understanding of the ecosystem allows us to facilitate finding
					the best possible matches
				</b>
				between talent and climate-tech companies. We ensure high quality of the matches by
				carefully evaluating each application.
			</Text>
			<div className="flex flex-col items-stretch justify-start gap-5 md:flex-row md:items-stretch md:justify-start">
				{items.map((item) => (
					<FeatureItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};
