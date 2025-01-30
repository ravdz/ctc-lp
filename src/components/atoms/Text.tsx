import { twMerge } from "tailwind-merge";

type Props = {
	is?: "p" | "span";
	children: React.ReactNode;
	className?: string;
};

export const Text = ({ is = "span", children, className = "" }: Props) => {
	const Tag = is;

	return (
		<Tag className={twMerge("font-abhaya-libre text-xl text-gray-900", className)}>{children}</Tag>
	);
};
