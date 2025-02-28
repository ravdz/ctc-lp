import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

const variants = {
	primary: {
		container: "bg-white px-5 py-4",
		prefix: "text-md text-gray-900",
		title: "text-xl font-semibold uppercase text-gray-700",
		description: "w-full text-md xl:pr-10",
	},
	secondary: {
		container: "bg-green-500 py-11 px-9",
		prefix: "",
		title: "text-white text-2xl sm:text-4xl font-light",
		description: "text-gray-700 text-base/7 sm:text-xl/8 mt-4",
	},
};

type Props = {
	variant?: keyof typeof variants;
	className?: string;
	prefix?: string;
	title: string;
	description: string;
	link: {
		url: string;
		label: string;
	};
};

export const CtcOfferTile = ({
	variant = "primary",
	prefix,
	title,
	description,
	link,
	className = "",
}: Props) => {
	return (
		<div
			className={twMerge(
				"flex w-full flex-col items-stretch justify-between rounded-xl",
				variants[variant].container,
				className,
			)}
		>
			<div className="mb-5 flex flex-col items-start justify-start">
				<header className="mb-6">
					{prefix && <Text className={variants[variant].prefix}>{prefix}</Text>}
					<Heading is="h3" className={variants[variant].title}>
						{title}
					</Heading>
				</header>
				<Text className={variants[variant].description} is="p">
					{description}
				</Text>
			</div>
			<div className="flex justify-end">
				<Button className="ml-auto lowercase" href={link.url} hasArrow>
					{link.label}
				</Button>
			</div>
		</div>
	);
};
