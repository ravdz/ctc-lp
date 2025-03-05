import { type Metadata } from "next";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";

export const metadata: Metadata = {
	title: "404 | Climate Tech Connect",
	description: "Page not found",
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFound() {
	return (
		<Container className="pb-44 pt-20">
			<div className="text-center">
				<Text is="p" className="text-base font-semibold text-green-600">
					404
				</Text>
				<Heading className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
					Page not found
				</Heading>
				<Text className="mt-6 block text-pretty">
					Sorry, we couldn&apos;t find the page you&apos;re looking for.
				</Text>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Button hasArrow className="lowercase" href="/">
						Go back home
					</Button>
				</div>
			</div>
		</Container>
	);
}
