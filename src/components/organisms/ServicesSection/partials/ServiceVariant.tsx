import { twMerge } from "tailwind-merge";
import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { AnimatedList } from "@/components/molecules/AnimatedList";
import { Badge } from "@/svg/Badge";

type Props = {
	className?: string;
	title: string;
	description: string;
	items: string[];
	link: {
		label: string;
		url: string;
	};
	badge: string;
};

export const ServiceVariant = ({
	title,
	description,
	items,
	link,
	badge,
	className = "",
}: Props) => {
	return (
		<div
			className={twMerge(
				"flex w-full flex-col items-start justify-stretch px-6 pb-6 pt-4",
				className,
			)}
		>
			<div className="mb-9 flex w-full items-center justify-between md:mb-12">
				<Heading className="text-2xl md:text-3xl" is="h3">
					{title}
				</Heading>
				<div className="relative flex h-14 items-center justify-center">
					<Badge className="absolute left-1/2 top-1/2 z-0 h-full -translate-x-1/2 -translate-y-1/2" />
					<Text className="service-badge z-10 mt-0.5 w-3/4 text-center font-sometype-mono text-3xs/3 text-white">
						{badge}
					</Text>
				</div>
			</div>
			<Text is="p" className="pr-8 text-base/6 font-normal text-gray-900">
				{description}
			</Text>
			<AnimatedList items={items} className="mt-9 md:mt-12" />
			<Button className="ml-auto mt-8 bg-white lowercase md:mt-10" href={link.url} hasArrow>
				{link.label}
			</Button>
		</div>
	);
};
