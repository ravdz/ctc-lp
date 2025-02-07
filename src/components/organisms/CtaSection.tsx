import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

type Props = {
	data: {
		title: string;
		description: string;
		link: {
			url: string;
			label: string;
		};
	};
};
export const CtaSection = ({ data: { title, description, link } }: Props) => {
	return (
		<section>
			<Container className="py-16 md:py-20">
				<div className="flex flex-col items-start justify-start gap-10 border-t border-green-200 pt-24 md:gap-12">
					<Heading className="font-light md:text-4xl lg:text-6xl" is="h2">
						{title}
					</Heading>
					<Text is="p" className="max-w-100 text-base sm:text-xl">
						{description}
					</Text>
					<Button className="pr-1" hasArrow href={link.url}>
						{link.label}
					</Button>
				</div>
			</Container>
		</section>
	);
};
