import { ServiceVariant } from "./ServiceVariant";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import { Text } from "@/components/atoms/Text";
import services from "@/data/services.json";

export const ConsortiaTab = () => {
	return (
		<div>
			<div className="flex flex-col gap-10">
				<Text className="text-base/6">
					<p
						dangerouslySetInnerHTML={{
							__html: services.services.consortia_creation_tab.description,
						}}
					/>
				</Text>
				<div className="grid grid-cols-1 md:grid-cols-2">
					{services.services.consortia_creation_tab.cards.map(
						({ title, badge, description, items, button }, index) => (
							<div className="rounded-lg bg-green-600" key={index}>
								<ServiceVariant
									title={title}
									description={description}
									items={items}
									link={button}
									badge={badge}
								/>
							</div>
						),
					)}
				</div>
			</div>
			<ScheduleCall
				button={{
					url: services.services.consortia_creation_tab.schedule_call.button.url,
					label: services.services.consortia_creation_tab.schedule_call.button.label,
				}}
			>
				<p
					dangerouslySetInnerHTML={{
						__html: services.services.consortia_creation_tab.schedule_call.text,
					}}
				/>
			</ScheduleCall>
		</div>
	);
};
