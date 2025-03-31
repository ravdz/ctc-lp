import { ArrowDown } from "@/svg/ArrowDown";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";

type Props = {
	children: React.ReactNode;
	button: {
		url: string;
		label: string;
	};
};

export const ScheduleCall = ({ children, button }: Props) => {
	return (
		<div className="pt-10 md:pt-16">
			<div className="flex flex-wrap items-start justify-start gap-6 border-b border-green-200 pb-14 md:pb-16 lg:flex-nowrap">
				<div className="flex items-center justify-start gap-8">
					<ArrowDown className="w-10 shrink-0 -rotate-90 stroke-green-200 md:w-12" />
					<Text className="text-base text-gray-900 md:text-xl lg:text-2xl">{children}</Text>
				</div>
				<Button
					variant="secondary"
					hasArrow
					href={button.url}
					className="shrink-0 self-end text-base md:text-2xl"
				>
					{button.label}
				</Button>
			</div>
			<div className="relative ml-auto mt-28 w-52 md:mt-40 md:w-80">
				<AnimatedCircle
					orbitSpeed={2500}
					className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-[30deg]"
				/>
				<AnimatedCircle
					className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
					orbitDirection="counterclockwise"
					orbitingObject={<div className="h-3 w-3 rounded-full bg-brown-600" />}
				/>
			</div>
		</div>
	);
};
