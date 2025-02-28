import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@/svg/ArrowRightIcon";

const variants = {
	primary: {
		container: "h-6 w-8",
		arrow: "[&>svg]:w-3 translate-x-1.5 gap-6 group-hover:translate-x-[calc(100%-6px)]",
	},
	secondary: {
		container: "w-10 h-8 group-hover:bg-gray-700",
		arrow: "[&>svg]:w-4 translate-x-2 gap-8 group-hover:translate-x-[calc(100%-8px)]",
	},
};

type Props = {
	variant: keyof typeof variants;
};

export const AnimatedArrow = ({ variant }: Props) => {
	return (
		<div
			className={twMerge(
				"relative flex items-center justify-center overflow-hidden rounded-3xl bg-gray-600 transition-colors",
				variants[variant].container,
			)}
		>
			<div
				className={twMerge(
					"absolute right-1/2 top-1/2 flex -translate-y-1/2 items-center justify-center transition-transform duration-500 ease-in-out",
					variants[variant].arrow,
				)}
			>
				<ArrowRightIcon className="fill-white" />
				<ArrowRightIcon className="fill-white" />
			</div>
		</div>
	);
};
