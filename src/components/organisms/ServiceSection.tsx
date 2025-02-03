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
			<Container className="pb-32 pt-16 md:pb-44 md:pt-20">
				<div className="flex flex-col items-start justify-start gap-10 md:gap-12">
					<header>
						<Heading className="mb-10 text-3xl font-light md:mb-12 md:text-4xl lg:text-6xl" is="h2">
							{name}
						</Heading>
						<Text is="p" className="max-w-100 text-gray-700">
							{description}
						</Text>
					</header>

					<ul className="mt-5 flex flex-wrap items-start justify-start gap-10">
						{list.map((item, index) => (
							<li key={index} className="flex items-center justify-start gap-2">
								<Text is="p" className="lowercase text-gray-700">
									{item}
								</Text>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
