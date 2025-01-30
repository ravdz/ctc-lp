import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

type Props = {
	badge?: string;
	title: string;
	description: string;
	link: {
		url: string;
		label: string;
	};
};

export const FeedTile = ({ badge, title, description, link }: Props) => {
	return (
		<li className="flex w-full flex-col items-stretch justify-between rounded-xl bg-gray-300 px-6 py-5">
			<div className="mb-24 flex flex-col items-start justify-start gap-6">
				<div className="flex flex-col items-start justify-start">
					{badge && <Badge>{badge}</Badge>}
				</div>
				<Heading is="h3" className="w-full text-3xl text-gray-900">
					{title}
				</Heading>
				<Text className="w-full pr-4 text-gray-700" is="p">
					{description}
				</Text>
			</div>
			<div>
				<Button className="ml-auto pr-1" hasArrow>
					{link.label}
				</Button>
			</div>
		</li>
	);
};
