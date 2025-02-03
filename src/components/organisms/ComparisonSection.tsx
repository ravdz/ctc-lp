import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

const membersFeatures = [
	{
		id: 1,
		title: {
			header: "Free members",
			description: "more info",
		},
		value: {
			header: "no access",
			description: "reinvested",
		},
	},
	{
		id: 2,
		title: {
			header: "Community member",
			description: "more info",
		},
		value: {
			header: "40 annually",
			description: "reinvested",
		},
	},
	{
		id: 3,
		title: {
			header: "Late stage member",
			description: "more info",
		},
		value: {
			header: "500 annually",
			description: "reinvested",
		},
	},
];

const sponsorsFeatures = [
	{
		id: 1,
		title: {
			header: "Event sponsor",
			description: "more info",
		},
		value: {
			header: "no access",
			description: "reinvested",
		},
	},
	{
		id: 2,
		title: {
			header: "Yearround sponsors",
			description: "more info",
		},
		value: {
			header: "40 annually",
			description: "reinvested",
		},
	},
];

export const ComparisonSection = () => {
	return (
		<section>
			<Container className="py-32 md:py-44">
				<div className="grid gap-24 lg:grid-cols-2 lg:gap-10">
					<div className="flex flex-col gap-5">
						<Heading is="h2">
							CTC for<br></br>members
						</Heading>
						{membersFeatures.map(({ id, title, value }) => (
							<div key={id} className="grid grid-cols-2 gap-10 border-t border-gray-900 pt-8">
								<div>
									<Heading is="h3" className="text-3xl">
										{title.header}
									</Heading>
									<Text className="lowercase text-gray-700">{title.description}</Text>
								</div>
								<div>
									<Heading is="h3" className="text-3xl">
										{value.header}
									</Heading>
									<Text className="lowercase text-gray-700">{value.description}</Text>
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-5">
						<Heading is="h2">
							CTC for<br></br>sponsors
						</Heading>
						{sponsorsFeatures.map(({ id, title, value }) => (
							<div key={id} className="grid grid-cols-2 gap-10 border-t border-gray-900 pt-8">
								<div>
									<Heading is="h3" className="text-3xl">
										{title.header}
									</Heading>
									<Text className="lowercase text-gray-700">{title.description}</Text>
								</div>
								<div>
									<Heading is="h3" className="text-3xl">
										{value.header}
									</Heading>
									<Text className="lowercase text-gray-700">{value.description}</Text>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
