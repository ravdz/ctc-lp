import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { Text } from "@/components/atoms/Text";
import { Container } from "@/components/atoms/Container";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";
import { Serpent } from "@/svg/Serpent";
import { Balls } from "@/svg/Balls";

const JoinUs = () => {
	return (
		<div>
			<SubpageHero
				customTitle={
					<Heading className="text-center text-xl lowercase text-blue-300">
						The power of niche<br></br>appeal
					</Heading>
				}
			>
				<div className="flex flex-col items-center justify-start gap-10 md:gap-14">
					<Text is="p" className="max-w-2xl text-center text-xl/8 sm:text-3xl/10">
						We believe the real world value can be created through high quality social ties &
						relationships.
					</Text>
					<Button href="/sign-up" className="pr-1 lowercase" hasArrow>
						Get access
					</Button>
				</div>
				<Serpent className="absolute left-0 top-full mt-5 w-48 md:mt-0 lg:w-64" />
			</SubpageHero>
			<section>
				<Container className="py-32 md:py-44">
					<div>
						<div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 xl:gap-40">
							<header>
								<Heading is="h2" className="mb-11">
									why join us?
								</Heading>
								<Text is="p" className="text-xl/8">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
							</header>
							<div className="flex flex-col gap-14">
								<div className="grid grid-cols-2 gap-14 border-t border-green-800 pt-8">
									<div>
										<Heading is="h3" className="mb-4 text-xl sm:text-3xl">
											small groups
										</Heading>
										<Text className="text-base sm:text-xl">& relevant topics</Text>
									</div>
									<div>
										<Heading is="h3" className="mb-4 text-xl sm:text-3xl">
											real experiences
										</Heading>
										<Text className="text-base sm:text-xl">& new powerful relationships</Text>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-14 border-t border-green-800 pt-8">
									<div>
										<Heading is="h3" className="mb-4 text-xl sm:text-3xl">
											community
										</Heading>
										<Text className="text-base sm:text-xl">& their collective wisdom</Text>
									</div>
									<div>
										<Heading is="h3" className="mb-4 text-xl sm:text-3xl">
											matchmaking
										</Heading>
										<Text className="text-base sm:text-xl">
											within the ecosystem, curated, AI & manual
										</Text>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<section>
				<Container className="pb-20 pt-28 md:pb-36 md:pt-24">
					<div>
						<div className="grid gap-10 pb-20 md:pb-36 lg:grid-cols-2">
							<CtcOfferTile
								variant="secondary"
								className="lg:min-h-96"
								title="CTC for members"
								description="Request to join the community to become a member and gain access to events, programs & the community."
								link={{
									url: "/sign-up",
									label: "request to join",
								}}
							/>
							<CtcOfferTile
								variant="secondary"
								className="lg:min-h-96"
								title="CTC for sponsors"
								description="Apply if you’re interested in becoming a partner/sponsor to one of our events or a regular support."
								link={{
									url: "/sign-up",
									label: "apply",
								}}
							/>
						</div>
						<Balls className="ml-auto w-32 sm:w-56" />
					</div>
				</Container>
			</section>

			<section>
				<Container className="pb-32 pt-28 md:pb-44 md:pt-24">
					<div className="flex flex-col gap-20">
						<div>
							<Heading is="h3" className="text-3xl">
								Our services
							</Heading>
							<div className="mt-5 grid gap-5 md:grid-cols-5 md:gap-28">
								<Text is="p" className="md:col-span-3">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
								<div className="flex items-start justify-end border-t border-blue-300 pt-5 md:col-span-2 md:pt-3">
									<Button hasArrow className="pr-1 lowercase" href="/services">
										Check all our services
									</Button>
								</div>
							</div>
						</div>

						<div>
							<Heading is="h3" className="text-3xl">
								Events
							</Heading>
							<div className="mt-5 grid gap-5 md:grid-cols-5 md:gap-28">
								<Text is="p" className="md:col-span-3">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
								<div className="flex items-start justify-end border-t border-blue-300 pt-5 md:col-span-2 md:pt-3">
									<Button hasArrow className="pr-1 lowercase" href="/#events">
										Check upcoming services
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default JoinUs;
