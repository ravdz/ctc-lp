import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

type Props = {
	title: string;
	description: string;
	items: { id: number; label: string }[];
	url: string;
};

export const FeatureItem = ({ title, description, items, url }: Props) => {
	return (
		<li className="flex flex-col items-stretch justify-center rounded-xl bg-white p-7">
			<header className="mb-12">
				<Heading
					is="h3"
					className="mb-3 font-sometype-mono text-md font-bold lowercase text-blue-600"
				>
					{title}
				</Heading>
				<Text className="text-sm" is="p">
					{description}
				</Text>
			</header>
			<ul className="mb-5 flex flex-wrap items-center justify-start gap-2">
				{items.map((item, index) => (
					<li
						className="flex items-center justify-start font-sometype-mono text-3xs lowercase text-gray-500"
						key={item.id}
					>
						{index !== 0 && <span className="mr-2 block text-3xs text-gray-500">✺</span>}
						{item.label}
					</li>
				))}
			</ul>
			<Button className="ml-auto lowercase" href={url} hasArrow>
				Read more
			</Button>
		</li>
	);
};
