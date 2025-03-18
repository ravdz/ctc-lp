import { AnimatedCircle } from "./AnimatedCircle";
import { SingleCircle } from "@/svg/SingleCircle";
import { Star } from "@/svg/Star";

type Props = {
	className?: string;
};

export const AnimatedEllipsis = ({ className = "" }: Props) => {
	return (
		<div className={className}>
			<AnimatedCircle
				orbitSpeed={2500}
				className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[27deg]"
				orbitingObject={<Star className="w-6 lg:w-3" />}
			/>
			<AnimatedCircle
				strokeWidth={1.3}
				className="absolute left-1/2 top-1/2 w-10/12 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg]"
				orbitDirection="counterclockwise"
				orbitingObject={<Star className="w-6 lg:w-3" />}
			/>
			<SingleCircle
				strokeWidth={1.5}
				className="absolute left-1/2 top-1/2 w-8/12 -translate-x-1/2 -translate-y-1/2 -rotate-[29deg]"
			/>
		</div>
	);
};
