import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { InfoItem } from "@/components/molecules/InfoItem";

const infoItems = [
	{ id: 1, title: "Foundation name", info: "Climate `Tech Connect" },
	{ id: 2, title: "Representative director", info: "Leopold van Oosten" },
	{ id: 3, title: "Office", info: "Amsterdam, Posthoornkerk" },
	{ id: 4, title: "Fields of activities", info: "Events, advisory, consortia creation, legal, " },
];

export const AboutUsContentSection = () => {
	return (
		<section>
			<Container className="pb-32 pt-16 md:pb-44 md:pt-20">
				<div className="border-t border-gray-900 pt-24">
					<div className="mb-32 flex flex-wrap items-center justify-end gap-y-20 md:mb-44">
						{infoItems.map(({ id, title, info }) => (
							<InfoItem
								key={id}
								title={title}
								info={info}
								titleClassName="text-xl"
								className="basis-full md:basis-1/2 lg:basis-1/3"
							/>
						))}
					</div>
					<div className="mb-44 flex flex-col items-start justify-start gap-10 md:mb-56 md:flex-row xl:gap-20">
						<Heading is="h2" className="shrink-0">
							Why?
						</Heading>
						<div className="flex grow flex-col items-start justify-start gap-4">
							<Text is="p" className="text-xl text-gray-700">
								Using our network and strategic support, we want to propel growth of the most
								innovative climate tech Benelux companies, help them secure consistent, sustainable
								capital, access community & knowledge.
							</Text>
							<Text is="p" className="text-xl text-gray-700">
								In the world full of instability, we strive towards a regenerative lifestyle — we
								see sustainability as a call to action.
							</Text>
							<Text is="p" className="text-xl text-gray-700">
								Science shows how community and a sense of belonging can boost our cognitive
								functions & emotional intelligence, and shape us into more empathetic beings; we can
								use this human programing to collectively expand our knowledge and awaraness, and
								ultimately - drive real world change.
							</Text>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 xl:gap-40">
						<header>
							<Heading is="h2" className="mb-14">
								A non-profit business model
							</Heading>
							<Text is="p" className="text-xl text-gray-700">
								Reinvesting all profits, creating a ripple of shared growth
							</Text>
						</header>
						<div className="flex flex-col gap-14">
							<div className="grid grid-cols-2 gap-14 border-t border-gray-900 pt-8">
								<InfoItem title="392 bn" info="reinvested" />
								<InfoItem title="392 bn" info="reinvested" />
							</div>

							<div className="grid grid-cols-2 gap-14 border-t border-gray-900 pt-8">
								<InfoItem title="392 bn" info="reinvested" />
								<InfoItem title="392 bn" info="reinvested" />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
