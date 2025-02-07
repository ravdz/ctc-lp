import { twMerge } from "tailwind-merge";
import { Text } from "@/components/atoms/Text";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

export const Badge = ({ children, className = "" }: Props) => {
	return (
		<div
			className={twMerge(
				"flex items-center justify-center rounded-3xl bg-gray-900 px-4 py-1",
				className,
			)}
		>
			<Text is="span" className="m-0 p-0 font-sometype-mono text-md lowercase text-white">
				{children}
			</Text>
		</div>
	);
};
