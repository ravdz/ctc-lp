import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";
import common from "@/data/common.json";

export const JoinUsSection = () => {
	return (
		<section id="join-us" className="overflow-hidden">
			<Container className="py-16 md:py-20">
				<div className="grid w-full gap-20 lg:grid-cols-5 xl:gap-28">
					<header className="flex flex-col items-start justify-start lg:col-span-2">
						<Heading is="h2" className="mb-12 text-3xl">
							{common.join_us.title}
						</Heading>
						<ul className="mb-14 flex flex-col gap-6">
							{common.join_us.steps.map((step, index) => (
								<li className="flex items-start justify-start gap-3" key={index}>
									<span className="inline-block font-sometype-mono text-2xl text-blue-600">
										{index + 1}.
									</span>
									<Text className="text-xl">{step}</Text>
								</li>
							))}
						</ul>
						<Button className="uppercase" variant="secondary" href="/community#membership" hasArrow>
							Become a member
						</Button>
					</header>
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3">
						{common.join_us.tiles.map(({ prefix, title, description, button }, index) => (
							<CtcOfferTile
								key={index}
								prefix={prefix}
								title={title}
								description={description}
								link={button}
								className={index > 1 ? "md:col-span-2" : "md:col-span-1"}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
