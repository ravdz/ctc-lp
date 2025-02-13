import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	title: string;
	description: string;
	items: { id: number; label: string }[];
};

export const FeatureItem = ({ title, description, items }: Props) => {
	return (
		<li className="flex flex-col items-stretch justify-center rounded-xl bg-gray-300 p-5">
			<header>
				<Heading
					is="h3"
					className="mb-2 font-sometype-mono text-md font-bold lowercase text-blue-600"
				>
					{title}
				</Heading>
				<Text className="mb-10 text-sm" is="p">
					{description}
				</Text>
			</header>
			<ul className="flex flex-wrap items-center justify-start gap-2">
				{items.map((item, index) => (
					<li
						className="flex items-center justify-start font-sometype-mono text-xs lowercase text-gray-500"
						key={item.id}
					>
						{index !== 0 && <span className="mr-2 block text-xs text-gray-500">✺</span>}

						{item.label}
					</li>
				))}
			</ul>
		</li>
	);
};
