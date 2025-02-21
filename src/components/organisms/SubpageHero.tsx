import { Container } from "@/components/atoms/Container";
import { Heading, type HeadingTag } from "@/components/atoms/Heading";

type Props = {
	title?: string;
	customTitle?: React.ReactNode;
	titleTag?: HeadingTag;
	children?: React.ReactNode;
};

export const SubpageHero = ({ title, customTitle, children, titleTag }: Props) => {
	return (
		<section>
			<Container className="py-16 md:py-20">
				<div className="relative flex flex-col gap-10 md:gap-14">
					{customTitle ? (
						customTitle
					) : (
						<Heading is={titleTag} className="text-center text-xl lowercase text-brown-600">
							{title}
						</Heading>
					)}
					{children}
				</div>
			</Container>
		</section>
	);
};
