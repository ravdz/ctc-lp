import type { Metadata } from "next";
import { MembershipFaq } from "@/components/organisms/MembershipFaq";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { MembershipFormSection } from "@/components/organisms/MembershipFormSection";
import { Badge } from "@/svg/Badge";
import { Text } from "@/components/atoms/Text";
export const metadata: Metadata = {
	title: "Join the Climate Tech Connect community | Climate Tech Connect",
	description:
		"Become a part of the Climate Tech Connect community. Join us to collaborate, innovate, and drive change in climate technology.",
};

const Membership = () => {
	return (
		<div>
			<SubpageHero title="Become a member / sponsor">
				<ul className="flex flex-col items-start justify-start gap-10 md:max-w-[80%] md:gap-14">
					<li className="flex items-start justify-start gap-5 md:gap-10 lg:items-end">
						<div className="flex items-start justify-start gap-5">
							<span className="font-sometype-mono text-2xl text-blue-600 sm:text-4xl md:text-5xl">
								1.
							</span>
							<Text className="text-base md:text-xl">
								We evaluate your inquiry and you first become <b>a free member</b> (you&apos;ll be
								added to the our ecosystem database & get access to 1 free event, community platform
								& resources).
							</Text>
						</div>
						<div className="relative flex h-24 w-24 shrink-0 items-center justify-center lg:h-32 lg:w-32 2xl:h-40 2xl:w-40">
							<div className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2">
								<Badge className="w-full animate-spin-very-slow" />
							</div>
							<Text className="service-badge z-10 mt-1 w-3/4 -rotate-[20deg] text-center font-sometype-mono text-3xs/3 text-white lg:text-sm/4 2xl:text-base">
								100% free application & discovery call
							</Text>
						</div>
					</li>
					<li className="flex items-start justify-start gap-5">
						<span className="font-sometype-mono text-2xl text-blue-600 sm:text-4xl md:text-5xl">
							2.
						</span>
						<Text className="text-base md:text-xl">
							We&apos;ll then <b>schedule an intake call</b> to understand your needs and challenges
							better & explore how you can get the most value out of the community.
						</Text>
					</li>
				</ul>
			</SubpageHero>
			<MembershipFormSection />
			<MembershipFaq />
		</div>
	);
};

export default Membership;
