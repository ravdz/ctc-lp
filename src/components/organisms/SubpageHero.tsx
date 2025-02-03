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
			<Container className="py-28 md:py-40">
				<div className="flex flex-col gap-10 md:gap-14">
					<Heading
						is={titleTag}
						className="text-center font-abhaya-libre text-xl lowercase text-gray-700"
					>
						{title}
					</Heading>
					{children}
				</div>
			</Container>
		</section>
	);
};
