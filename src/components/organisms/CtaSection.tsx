import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

export const CtaSection = () => {
	return (
		<section>
			<Container className="py-32 md:py-44">
				<div>
					<Text className="mb-2 block font-montserrat text-sm text-gray-700 sm:text-base md:whitespace-nowrap lg:mb-4">
						Hello, we are
					</Text>
					<div className="relative grid w-full grid-cols-1 items-start md:grid-cols-2 xl:grid-cols-5">
						<Heading className="mb-10 whitespace-nowrap text-4xl font-extralight uppercase tracking-3 sm:text-5xl md:mb-0 md:text-6xl lg:text-7xl xl:col-span-2 xl:text-8xl">
							Climate tech<br></br>connect
						</Heading>
						<div className="xl:mt-34 flex flex-col items-start justify-end md:mt-20 lg:mt-32 xl:col-span-3 xl:pl-20">
							<Text className="mb-3 font-montserrat text-base md:mb-12" is="p">
								A non-profit foundation dedicated to fostering connections and unlocking
								opportunities for climate tech founders, investors, and talent across the Benelux
								region.
							</Text>
							<Button className="pr-1" hasArrow>
								read more about our mission
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
