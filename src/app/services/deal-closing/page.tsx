import type { Metadata } from "next";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import { ServicesDealClosingHero } from "@/components/organisms/ServicesDealClosingHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { Container } from "@/components/atoms/Container";
import servicesDealClosing from "@/data/services-deal-closing.json";

export const metadata: Metadata = {
	title: servicesDealClosing.meta_title,
	description: servicesDealClosing.meta_description,
};

const ServicesDealClosing = () => {
	return (
		<div>
			<ServicesDealClosingHero />
			<StepsSection
				heading={servicesDealClosing.steps.heading}
				steps={servicesDealClosing.steps.steps}
			/>
			<BenefitsSection
				heading={servicesDealClosing.benefits.heading}
				benefits={servicesDealClosing.benefits.content}
			/>
			<Container>
				<ScheduleCall
					button={{
						url: servicesDealClosing.schedule_call.button.url,
						label: servicesDealClosing.schedule_call.button.label,
					}}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: servicesDealClosing.schedule_call.text,
						}}
					/>
				</ScheduleCall>
			</Container>
			<ServicesFaq />
		</div>
	);
};

export default ServicesDealClosing;
