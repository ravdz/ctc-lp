import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";

type Props = {
	heading: string;
	logos: {
		id: number;
		src: string;
		alt?: string;
		width: number;
		height: number;
	}[];
};

export const LogosSection = ({ heading, logos }: Props) => {
	return (
		<section>
			<Container className="py-12 md:py-16">
				<div>
					<Heading is="h2" className="mb-12">
						{heading}
					</Heading>
					<ul className="flex flex-wrap items-center justify-center gap-12">
						{logos.map(({ id, src, alt = "", width, height }) => (
							<li key={id}>
								<Image src={src} alt={alt} width={width} height={height} />
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
