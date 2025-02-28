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
			<Container className="bg-white pb-28 pt-20 md:pb-44 md:pt-24">
				<div>
					<Heading is="h2" className="mb-20">
						{heading}
					</Heading>
					<ul className="flex flex-wrap items-center justify-around gap-12 sm:justify-between">
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
