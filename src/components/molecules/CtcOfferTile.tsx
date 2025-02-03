import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

type Props = {
	className?: string;
	prefix?: string;
	title: string;
	description: string;
	link: {
		url: string;
		label: string;
	};
};

export const CtcOfferTile = ({ prefix, title, description, link, className = "" }: Props) => {
	return (
		<div
			className={twMerge(
				"flex w-full flex-col items-stretch justify-between rounded-xl bg-gray-300 px-5 py-4",
				className,
			)}
		>
			<div className="mb-24 flex flex-col items-start justify-start">
				<header className="mb-6">
					{prefix && <Text className="font-montserrat text-sm text-gray-700">{prefix}</Text>}
					<Heading is="h3" className="text-xl font-semibold text-gray-700">
						{title}
					</Heading>
				</header>

				<Text className="w-full font-montserrat text-base text-gray-700 xl:pr-10" is="p">
					{description}
				</Text>
			</div>
			<div className="flex justify-end">
				<Button className="ml-auto" href={link.url}>
					{link.label}
				</Button>
			</div>
		</div>
	);
};
