import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/svg/Badge";

type Props = {
	title: string;
	description: string;
	items: string[];
	link: {
		label: string;
		href: string;
	};
	badge: string;
};

export const ServiceVariant = ({ title, description, items, link, badge }: Props) => {
	return (
		<div className="flex w-full flex-col items-start justify-stretch px-6 pb-12 pt-4">
			<div className="mb-8 flex w-full items-center justify-between">
				<Heading is="h3">{title}</Heading>
				<div className="relative flex h-14 items-center justify-center">
					<Badge className="absolute left-1/2 top-1/2 z-0 h-full -translate-x-1/2 -translate-y-1/2" />
					<Text className="z-10 w-3/4 text-center font-sometype-mono text-3xs/3 text-white">
						{badge}
					</Text>
				</div>
			</div>
			<Text is="p" className="pr-8 text-base/6 font-normal text-gray-900">
				{description}
			</Text>
			<ul className="mt-8 flex flex-wrap items-center justify-start gap-2">
				{items.map((item, index) => (
					<li
						className="flex items-center justify-start font-sometype-mono text-3xs lowercase text-gray-500"
						key={index}
					>
						<span className="mr-2 block text-3xs text-gray-500">✺</span>
						{item}
						{index + 1 === items.length && (
							<span className="ml-2 block text-3xs text-gray-500">✺</span>
						)}
					</li>
				))}
			</ul>
			<Button className="ml-auto mt-6 bg-white lowercase" href={link.href} hasArrow>
				{link.label}
			</Button>
		</div>
	);
};
