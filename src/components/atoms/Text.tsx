import { twMerge } from "tailwind-merge";

type Props = {
	is?: "p" | "span";
	children: React.ReactNode;
	className?: string;
};

export const Text = ({ is = "span", children, className = "" }: Props) => {
	const Tag = is;

	return (
		<Tag className={twMerge("font-montserrat text-base/7 font-normal text-gray-500", className)}>
			{children}
		</Tag>
	);
};
