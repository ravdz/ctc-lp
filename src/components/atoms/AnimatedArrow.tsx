import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@/svg/ArrowRightIcon";

const variants = {
	primary: "group-hover:bg-white [&>div>svg]:group-hover:fill-gray-900",
	secondary: "group-hover:bg-gray-700",
};

type Props = {
	variant: keyof typeof variants;
};

export const AnimatedArrow = ({ variant }: Props) => {
	return (
		<div
			className={twMerge(
				"relative flex h-5 w-6 items-center justify-center overflow-hidden rounded-3xl bg-gray-900 transition-colors",
				variants[variant],
			)}
		>
			<div className="absolute right-1/2 top-1/2 flex -translate-y-1/2 translate-x-1.5 items-center justify-center gap-4 transition-transform duration-500 ease-in-out group-hover:translate-x-[calc(100%-6px)]">
				<ArrowRightIcon className="fill-white" />
				<ArrowRightIcon className="fill-white" />
			</div>
		</div>
	);
};
