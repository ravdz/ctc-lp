import { twMerge } from "tailwind-merge";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	title: string;
	info: string;
	className?: string;
	titleClassName?: string;
	infoClassName?: string;
};

export const InfoItem = ({
	title,
	info,
	className = "",
	titleClassName = "",
	infoClassName = "",
}: Props) => {
	return (
		<div className={className}>
			<Heading
				is="h3"
				className={twMerge("mb-4 font-sometype-mono text-3xl text-gray-900", titleClassName)}
			>
				{title}
			</Heading>
			<Text is="p" className={twMerge("text-xl text-gray-500", infoClassName)}>
				{info}
			</Text>
		</div>
	);
};
