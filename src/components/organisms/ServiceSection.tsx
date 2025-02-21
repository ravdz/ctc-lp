import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	name: string;
	description: string;
	list: string[];
};

export const ServiceSection = ({ name, description, list }: Props) => {
	return (
		<section>
			<Container className="pb-14 pt-10 md:pb-16 md:pt-14">
				<div className="flex flex-col items-start justify-start gap-10 md:gap-12">
					<header>
						<Heading className="mb-10 md:mb-12" is="h2">
							{name}
						</Heading>
						<Text is="p" className="max-w-1/2 text-base sm:text-xl">
							{description}
						</Text>
					</header>

					<ul className="mt-5 flex flex-wrap items-center justify-start gap-2">
						{list.map((item, index) => (
							<li
								key={index}
								className="flex items-center justify-start font-montserrat text-base lowercase text-blue-600"
							>
								{index !== 0 && <span className="mr-2 block text-xs text-blue-600">✺</span>}
								{item}
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
