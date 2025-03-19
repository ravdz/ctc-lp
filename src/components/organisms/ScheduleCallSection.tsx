import { Container } from "@/components/atoms/Container";
import { ArrowDown } from "@/svg/ArrowDown";
import { Button } from "@/components/atoms/Button";
import { AnimatedCircle } from "@/components/atoms/AnimatedCircle";

type Props = {
	children: React.ReactNode;
};

export const ScheduleCallSection = ({ children }: Props) => {
	return (
		<section>
			<Container className="pb-24 pt-10 md:pb-28 md:pt-20">
				<div>
					<div className="flex flex-col items-start justify-start gap-8 border-b border-green-200 pb-10">
						<div className="realtive flex items-start justify-start gap-8">
							<ArrowDown className="w-10 shrink-0 -rotate-90 stroke-green-200 md:w-12" />
							<div>{children}</div>
						</div>
						<Button
							variant="secondary"
							hasArrow
							disabled
							className="self-end text-base md:text-2xl"
						>
							Schedule a call
						</Button>
					</div>
					<div className="relative ml-auto mt-24 w-52 md:mt-36 md:w-80">
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
			</Container>
		</section>
	);
};
