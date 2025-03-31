import type { Metadata } from "next";
import { ServicesHero } from "@/components/organisms/ServicesHero";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
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
			<ServicesFaq />
		</div>
	);
};

export default Services;
