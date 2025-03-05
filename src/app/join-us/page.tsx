import type { Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export const metadata: Metadata = {
	title: "Join the Climate Tech Connect community | Climate Tech Connect",
	description:
		"Become a part of the Climate Tech Connect community. Join us to collaborate, innovate, and drive change in climate technology.",
};

const JoinUs = () => {
	return (
		<div>
			<section>
				<Container className="py-16 md:py-20">
					<div className="relative flex flex-col gap-10 md:gap-14">
						<Heading className="text-center text-xl lowercase text-brown-600">Join us</Heading>
					</div>
				</Container>
			</section>
			<section>
				<Container>
					<div className="flex items-start justify-center">
						<Text className="block py-72 text-center text-gray-400">Soon</Text>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default JoinUs;
