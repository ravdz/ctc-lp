import { Container } from "@/components/atoms/Container";
import { Heading, type HeadingTag } from "@/components/atoms/Heading";

type Props = {
	title: string;
	titleTag?: HeadingTag;
	children?: React.ReactNode;
};

export const SubpageHero = ({ title, children, titleTag }: Props) => {
	return (
		<section>
			<Container className="py-20 md:py-28">
				<div className="flex flex-col gap-10 md:gap-14">
					<Heading is={titleTag} className="text-center text-xl lowercase text-brown-600">
						{title}
					</Heading>
					{children}
				</div>
			</Container>
		</section>
	);
};
