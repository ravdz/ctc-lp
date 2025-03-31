import { ServiceVariant } from "@/components/organisms/ServicesSection/partials/ServiceVariant";
import { Cards } from "@/components/organisms/Cards";
import { Text } from "@/components/atoms/Text";
import { ScheduleCall } from "@/components/organisms/ScheduleCall";
import services from "@/data/services.json";

const cards = services.services.investors_ready_tab.cards.map(
	({ closed_card_title, title, description, badge, items, button }, index) => ({
		id: index + 1,
		title: closed_card_title,
		content: (
			<ServiceVariant
				title={title}
				badge={badge}
				className={badge === "paid service" ? "[&>div>div>span]:mt-0" : ""}
				description={description}
				items={items}
				link={button}
			/>
		),
	}),
);

export const InvestorTab = () => {
	return (
		<div>
			<div className="flex flex-col gap-10">
				<Text className="text-base/6">
					<p
						dangerouslySetInnerHTML={{ __html: services.services.investors_ready_tab.description }}
					/>
				</Text>
				<Cards cards={cards} />
			</div>
			<ScheduleCall
				button={{
					url: services.services.investors_ready_tab.schedule_call.button.url,
					label: services.services.investors_ready_tab.schedule_call.button.label,
				}}
			>
				<p
					dangerouslySetInnerHTML={{
						__html: services.services.investors_ready_tab.schedule_call.text,
					}}
				/>
			</ScheduleCall>
		</div>
	);
};
