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
				<Heading is="h3" className="mb-2 text-base font-bold lowercase text-gray-700">
					{title}
				</Heading>
				<Text className="mb-10 font-montserrat text-base text-gray-700" is="p">
					{description}
				</Text>
			</header>
			<ul className="flex flex-wrap items-center justify-start gap-2">
				{items.map((item, index) => (
					<li
						className="flex items-center justify-start font-montserrat text-xs lowercase text-gray-700"
						key={item.id}
					>
						{index !== 0 && <span className="mr-2 block text-sm text-gray-700">✺</span>}

						{item.label}
					</li>
				))}
			</ul>
		</li>
	);
};
