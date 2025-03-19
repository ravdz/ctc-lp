import type { Metadata } from "next";
import { MembershipFaq } from "@/components/organisms/MembershipFaq";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { SubpageHero } from "@/components/organisms/SubpageHero";
import { Text } from "@/components/atoms/Text";
import { ContactUsFormSection } from "@/components/organisms/ContactUsFormSection";

export const metadata: Metadata = {
	title: "Join the Climate Tech Connect community | Climate Tech Connect",
	description:
		"Become a part of the Climate Tech Connect community. Join us to collaborate, innovate, and drive change in climate technology.",
};

const ContactUs = () => {
	return (
		<div>
			<SubpageHero title="Contact Us">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<Text className="text-base md:text-xl">
						Contact us via the contact form below, we&apos;ll reach out shortly & schedule a
						discovery call & explore <b>how you can get the most value out of the community.</b>
					</Text>
				</div>
			</SubpageHero>
			<ContactUsFormSection />
			<MembershipFaq className="pb-20" />
			<ServicesFaq />
		</div>
	);
};

export default ContactUs;
