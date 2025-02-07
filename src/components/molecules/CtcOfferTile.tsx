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
				"flex w-full flex-col items-stretch justify-between rounded-xl bg-white px-5 py-4",
				className,
			)}
		>
			<div className="mb-24 flex flex-col items-start justify-start">
				<header className="mb-6">
					{prefix && <Text className="text-md text-gray-900">{prefix}</Text>}
					<Heading is="h3" className="text-xl font-semibold uppercase text-gray-700">
						{title}
					</Heading>
				</header>

				<Text className="w-full text-md xl:pr-10" is="p">
					{description}
				</Text>
			</div>
			<div className="flex justify-end">
				<Button className="ml-auto pr-1" href={link.url} hasArrow>
					{link.label}
				</Button>
			</div>
		</div>
	);
};
