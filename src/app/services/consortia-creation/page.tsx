import type { Metadata } from "next";
import { BenefitsSection } from "@/components/organisms/BenefitsSection";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import { ServicesConsortiaCreationHero } from "@/components/organisms/ServicesConsortiaCreationHero";
import { ServicesFaq } from "@/components/organisms/ServicesFaq";
import { StepsSection } from "@/components/organisms/StepsSection";
import { Container } from "@/components/atoms/Container";
import servicesConsortiaCreation from "@/data/services-consortia-creation.json";

export const metadata: Metadata = {
	title: servicesConsortiaCreation.meta_title,
	description: servicesConsortiaCreation.meta_description,
};

const ServicesConsortiaCreation = () => {
	return (
		<div>
			<ServicesConsortiaCreationHero />
			<StepsSection
				heading={servicesConsortiaCreation.steps.heading}
				steps={servicesConsortiaCreation.steps.steps}
			/>
			<BenefitsSection
				heading={servicesConsortiaCreation.benefits.heading}
				benefits={servicesConsortiaCreation.benefits.content}
			/>
			<Container>
				<ScheduleCall
					button={{
						url: servicesConsortiaCreation.schedule_call.button.url,
						label: servicesConsortiaCreation.schedule_call.button.label,
					}}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: servicesConsortiaCreation.schedule_call.text,
						}}
					/>
				</ScheduleCall>
			</Container>
			<ServicesFaq />
		</div>
	);
};

export default ServicesConsortiaCreation;
