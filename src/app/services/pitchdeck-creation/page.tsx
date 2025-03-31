import type { Metadata } from "next";
import { ServicesPitchdeckCreationHero } from "@/components/organisms/ServicesPitchdeckCreationHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import { Container } from "@/components/atoms/Container";
import servicesPitchdeckCreation from "@/data/services-pitchdeck-creation.json";

export const metadata: Metadata = {
	title: servicesPitchdeckCreation.meta_title,
	description: servicesPitchdeckCreation.meta_description,
};

const ServicesPitchdeckCreation = () => {
	return (
		<div>
			<ServicesPitchdeckCreationHero />
			<StepsSection
				heading={servicesPitchdeckCreation.steps.heading}
				steps={servicesPitchdeckCreation.steps.steps}
			/>
			<BenefitsSection
				heading={servicesPitchdeckCreation.benefits.heading}
				benefits={servicesPitchdeckCreation.benefits.content}
			/>
			<Container>
				<ScheduleCall
					button={{
						url: servicesPitchdeckCreation.schedule_call.button.url,
						label: servicesPitchdeckCreation.schedule_call.button.label,
					}}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: servicesPitchdeckCreation.schedule_call.text,
						}}
					/>
				</ScheduleCall>
			</Container>
			<ServicesFaq />
		</div>
	);
};

export default ServicesPitchdeckCreation;
