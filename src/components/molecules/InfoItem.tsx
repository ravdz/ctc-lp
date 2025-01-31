import { twMerge } from "tailwind-merge";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	title: string;
	info: string;
	className?: string;
	titleClassName?: string;
};

export const InfoItem = ({ title, info, className = "", titleClassName = "" }: Props) => {
	return (
		<div className={className}>
			<Heading is="h3" className={twMerge("mb-4 text-3xl", titleClassName)}>
				{title}
			</Heading>
			<Text is="p" className="text-xl text-gray-700">
				{info}
			</Text>
		</div>
	);
};
