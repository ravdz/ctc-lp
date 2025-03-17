import type { Metadata } from "next";
import { ServicesHero } from "@/components/organisms/ServicesHero";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { ScheduleCallSection } from "@/components/organisms/ScheduleCallSection";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { Text } from "@/components/atoms/Text";
import services from "@/data/services.json";

export const metadata: Metadata = {
	title: services.meta_title,
	description: services.meta_description,
};

const Services = () => {
	return (
		<div>
			<ServicesHero />
			<ServicesSection />
			<ScheduleCallSection>
				<Text is="p" className="text-base text-gray-900 md:text-xl lg:text-2xl">
					Are you a <b>founder looking to fundraise and in need of a winning deck?</b> Schedule a
					free call and see how we can support you.
				</Text>
			</ScheduleCallSection>
			<ServicesFaq />
		</div>
	);
};

export default Services;
