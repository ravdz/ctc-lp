import { twMerge } from "tailwind-merge";
import { Galaxy } from "@/svg/Galaxy";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	className?: string;
	heading?: string;
	benefits: {
		id: number;
		title: string;
		description: string;
	}[];
};

export const BenefitsSection = ({ benefits, heading, className = "" }: Props) => {
	return (
		<section>
			<Container className={twMerge("py-10 md:py-14", className)}>
				<div>
					{heading && (
						<Heading className="mb-8 block text-3xl font-normal text-gray-900" is="h2">
							{heading}
						</Heading>
					)}
					<div className="w-full rounded-lg bg-green-600 px-8 py-10 md:px-12 md:py-14">
						<ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
							{benefits.map(({ id, title, description }) => (
								<li key={id} className="flex w-full items-start justify-stretch gap-3">
									<Galaxy className="relative w-7 shrink-0" />
									<div>
										<Heading is="h3" className="mb-1 block text-base font-bold text-gray-500">
											{title}
										</Heading>
										<Text is="p" className="text-base/6 font-normal">
											{description}
										</Text>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};
