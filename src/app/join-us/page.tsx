import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { Text } from "@/components/atoms/Text";
import { InfoItem } from "@/components/molecules/InfoItem";
import { Container } from "@/components/atoms/Container";
import { LogosSection } from "@/components/organisms/LogosSection";
import { CtcOfferTile } from "@/components/molecules/CtcOfferTile";
import { ComparisonSection } from "@/components/organisms/ComparisonSection";
const membersLogos = [
	{ id: 1, src: "/img/logos/logo1.svg", alt: "Partner 1", width: 100, height: 100 },
	{ id: 2, src: "/img/logos/logo2.svg", alt: "Partner 2", width: 50, height: 50 },
	{ id: 3, src: "/img/logos/logo3.svg", alt: "Partner 3", width: 100, height: 100 },
	{ id: 4, src: "/img/logos/logo4.svg", alt: "Partner 4", width: 100, height: 100 },
	{ id: 5, src: "/img/logos/logo5.svg", alt: "Partner 5", width: 100, height: 100 },
	{ id: 6, src: "/img/logos/logo6.svg", alt: "Partner 6", width: 100, height: 100 },
	{ id: 7, src: "/img/logos/logo1.svg", alt: "Partner 7", width: 100, height: 100 },
	{ id: 8, src: "/img/logos/logo3.svg", alt: "Partner 8", width: 100, height: 100 },
	{ id: 9, src: "/img/logos/logo2.svg", alt: "Partner 9", width: 50, height: 50 },
	{ id: 10, src: "/img/logos/logo4.svg", alt: "Partner 10", width: 100, height: 100 },
	{ id: 11, src: "/img/logos/logo6.svg", alt: "Partner 6", width: 100, height: 100 },
	{ id: 12, src: "/img/logos/logo1.svg", alt: "Partner 7", width: 100, height: 100 },
	{ id: 13, src: "/img/logos/logo3.svg", alt: "Partner 8", width: 100, height: 100 },
	{ id: 14, src: "/img/logos/logo5.svg", alt: "Partner 9", width: 100, height: 100 },
	{ id: 15, src: "/img/logos/logo1.svg", alt: "Partner 10", width: 100, height: 100 },
];

const JoinUs = () => {
	return (
		<div>
			<SubpageHero title="The power of niche appeal">
				<div className="flex flex-col items-center justify-start gap-14 md:gap-20">
					<Heading is="h2" className="max-w-2xl text-center font-abhaya-libre text-gray-700">
						We believe the real world value can be created through high quality social ties &
						relationships.
					</Heading>
					<Button href="/sign-up" className="pr-1 lowercase" hasArrow>
						Get access
					</Button>
				</div>
			</SubpageHero>
			<section>
				<Container className="py-32 md:py-44">
					<div>
						<div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 xl:gap-40">
							<header>
								<Heading is="h2" className="mb-14">
									why join us?
								</Heading>
								<Text is="p" className="text-xl text-gray-700">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
							</header>
							<div className="flex flex-col gap-14">
								<div className="grid grid-cols-2 gap-14 border-t border-gray-900 pt-8">
									<InfoItem title="reason 1" info="more" />
									<InfoItem title="reason 2" info="more" />
								</div>

								<div className="grid grid-cols-2 gap-14 border-t border-gray-900 pt-8">
									<InfoItem title="reason 3" info="more" />
									<InfoItem title="reason 4" info="more" />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<LogosSection heading="Members, among others:" logos={membersLogos} />
			<ComparisonSection />
			<section>
				<Container className="pb-32 pt-28 md:pb-44 md:pt-24">
					<div className="grid gap-10 md:grid-cols-2">
						<CtcOfferTile
							className="lg:min-h-96"
							title="CTC for members"
							description="CTC was born to empower all of you: founders & changemakers, stakeholders, impact investors & angels."
							link={{
								url: "/sign-up",
								label: "request to join",
							}}
						/>
						<CtcOfferTile
							className="lg:min-h-96"
							title="CTC for sponsors"
							description="CTC was born to empower all of you: founders & changemakers, stakeholders, impact investors & angels."
							link={{
								url: "/sign-up",
								label: "apply",
							}}
						/>
					</div>
				</Container>
			</section>

			<section>
				<Container className="pb-32 pt-28 md:pb-44 md:pt-24">
					<div className="flex flex-col gap-20">
						<div>
							<Heading is="h3" className="text-3xl lowercase">
								Our services
							</Heading>
							<div className="mt-5 grid gap-5 md:grid-cols-5 md:gap-3">
								<Text is="p" className="text-gray-700 md:col-span-3">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
								<div className="flex items-start justify-end border-t border-gray-900 pt-5 md:col-span-2 md:pt-3">
									<Button hasArrow className="pr-1 lowercase" href="/services">
										Check all our services
									</Button>
								</div>
							</div>
						</div>

						<div>
							<Heading is="h3" className="text-3xl lowercase">
								Events
							</Heading>
							<div className="mt-5 grid gap-5 md:grid-cols-5 md:gap-3">
								<Text is="p" className="text-gray-700 md:col-span-3">
									We are fascinated by the intersection of the climate-change action, community
									capital and hospitality. We believe the real world value can be created through
									high quality social ties & relationships.
								</Text>
								<div className="flex items-start justify-end border-t border-gray-900 pt-5 md:col-span-2 md:pt-3">
									<Button hasArrow className="pr-1 lowercase" href="/#events" scroll>
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
