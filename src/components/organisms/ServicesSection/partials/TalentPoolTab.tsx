import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/svg/Badge";
import { Star } from "@/svg/Star";
import services from "@/data/services.json";

type Item = {
	title: string;
	badge: string;
	description: string;
	steps: string[];
	button: {
		label: string;
		url: string;
	};
};

const FeatureItem = ({ item }: { item: Item }) => {
	const { title, description, steps, badge, button } = item;
	return (
		<div className="flex w-full max-w-100 flex-col justify-between gap-6 rounded-lg bg-green-600 p-5 pt-20">
			<div className="flex flex-col gap-6">
				<div className="relative w-full pr-24">
					<Heading is="h3" className="text-3xl font-normal tracking-wide">
						<span dangerouslySetInnerHTML={{ __html: title }} />
					</Heading>
					<div className="absolute bottom-1/2 right-0 flex h-20 w-20 items-center justify-center">
						<Badge className="absolute left-0 top-0 h-full" />
						<Text className="relative z-10 mt-0.5 w-3/4 text-center font-sometype-mono text-3xs text-white">
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

							<Star className="w-6 shrink-0 fill-green-500" />
							<Text className="pl-4 text-base text-gray-900">{step}</Text>
						</li>
					))}
				</ul>
			</div>
			<Button href={button.url} hasArrow className="w-fit self-end" variant="secondary">
				{button.label}
			</Button>
		</div>
	);
};

export const TalentPoolTab = () => {
	return (
		<div className="flex flex-col gap-10">
			<Text className="text-base/6">
				<p dangerouslySetInnerHTML={{ __html: services.services.talent_pool_tab.description }} />
			</Text>
			<div className="flex flex-col items-stretch justify-start gap-5 md:flex-row md:items-stretch md:justify-start">
				{services.services.talent_pool_tab.cards.map((item, index) => (
					<FeatureItem key={index} item={item} />
				))}
			</div>
		</div>
	);
};
