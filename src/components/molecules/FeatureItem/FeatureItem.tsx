import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { AnimatedList } from "@/components/molecules/AnimatedList";

type Props = {
	title: string;
	description: string;
	items: string[];
	button: {
		label: string;
		url: string;
	};
};

export const FeatureItem = ({ title, description, items, button }: Props) => {
	return (
		<li className="flex flex-col items-stretch justify-center rounded-xl bg-white p-7">
			<header className="mb-12">
				<Heading
					is="h3"
					className="mb-3 font-sometype-mono text-3xl font-normal uppercase text-blue-600"
				>
					{title}
				</Heading>
				<Text className="text-base" is="p">
					{description}
				</Text>
			</header>
			<AnimatedList items={items} className="mb-4" />
			<Button className="ml-auto lowercase" href={button.url} hasArrow>
				{button.label}
			</Button>
		</li>
	);
};
