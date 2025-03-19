import type { Metadata } from "next";

import { SubpageHero } from "@/components/organisms/SubpageHero";
import { Text } from "@/components/atoms/Text";

import { TalentPoolFormSection } from "@/components/organisms/TalentPoolFormSection";

export const metadata: Metadata = {
	title: "Join the Climate Tech Connect community | Climate Tech Connect",
	description:
		"Become a part of the Climate Tech Connect community. Join us to collaborate, innovate, and drive change in climate technology.",
};

const TalentPool = () => {
	return (
		<div>
			<SubpageHero title="Join the talent pool">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<Text className="text-base md:text-xl">
						Apply to join talent pool via the contact form below. We&apos;ll evaluate your inquiry
						and you&apos;ll be added to our database & matched with a relevant employer.
					</Text>
				</div>
			</SubpageHero>
			<TalentPoolFormSection />
		</div>
	);
};

export default TalentPool;
