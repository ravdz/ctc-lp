import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";

type Props = {
	title: string;
	children?: React.ReactNode;
};

export const SubpageHero = ({ title, children }: Props) => {
	return (
		<section>
			<Container className="py-16 md:py-20">
				<div className="relative flex flex-col gap-12 md:gap-20">
					<Heading className="text-3xl font-extralight tracking-3 sm:text-5xl/[4rem] md:text-6xl/[5rem]">
						{title}
					</Heading>
					{children && <div>{children}</div>}
				</div>
			</Container>
		</section>
	);
};
