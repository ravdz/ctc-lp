import { ArrowRightIcon } from "@/svg/ArrowRightIcon";

export const AnimatedArrow = () => {
	return (
		<div className="relative flex h-5 w-6 items-center justify-center overflow-hidden rounded-3xl bg-gray-900 transition-colors group-hover:bg-gray-700">
			<div className="absolute right-1/2 top-1/2 flex -translate-y-1/2 translate-x-1.5 items-center justify-center gap-4 transition-transform duration-500 ease-in-out group-hover:translate-x-[calc(100%-6px)]">
				<ArrowRightIcon className="fill-white" />
				<ArrowRightIcon className="fill-white" />
			</div>
		</div>
	);
};
