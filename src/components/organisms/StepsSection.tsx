import { twMerge } from "tailwind-merge";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Star } from "@/svg/Star";

type Props = {
	className?: string;
	boldedHeadings?: boolean;
	steps: {
		id: number;
		label: string;
		description?: string;
		list?: string[];
	}[];
};

export const StepsSection = ({ steps, className = "", boldedHeadings = true }: Props) => {
	return (
		<section>
			<Container className={twMerge("py-10", className)}>
				<Heading className="mb-14 text-3xl font-normal md:mb-20" is="h2">
					How to join the community
				</Heading>
				<ul className="flex flex-col items-start justify-start">
					{steps.map(({ id, label, description, list }, index) => (
						<li
							key={id}
							className="relative flex flex-col items-start justify-start pb-20 last:pb-0"
						>
							{steps.length !== index + 1 && (
								<div className="absolute left-2.5 top-3 h-full w-[1px] bg-green-500"></div>
							)}
							<div className="relative pl-10">
								<Star className="absolute left-0 top-1 w-5 -rotate-6 fill-green-500" />
								<Heading
									className={`block text-base md:text-xl ${boldedHeadings ? "font-bold" : "font-normal"} text-gray-500`}
									is="h3"
								>
									<span className="font-sometype-mono font-normal text-blue-600">{index + 1}.</span>{" "}
									{label}
								</Heading>
							</div>

							{(description || list?.length) && (
								<div className="mt-1 pl-16">
									{description && (
										<Text className="text-base md:text-xl" is="p">
											{description}
										</Text>
									)}
									{list?.length && (
										<ul className="flex flex-col items-start justify-start">
											{list.map((item, index) => (
												<li key={index} className="text-base md:text-xl">
													— {item}
												</li>
											))}
										</ul>
									)}
								</div>
							)}
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
};
