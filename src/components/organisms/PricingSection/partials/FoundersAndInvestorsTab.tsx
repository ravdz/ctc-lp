import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import community from "@/data/community.json";

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th className="w-1/4"></th>
				{community.pricing.for_founders_and_investors_tab.options.map(
					({ title, subtitle, price }, index) => (
						<th className="w-1/4 p-2.5 text-center" key={index}>
							<Text className="block text-base/4 text-gray-900 md:text-xl/5">{title}</Text>
							<Text className="block text-sm text-gray-900 md:text-base">{subtitle}</Text>
							<Text className="bold mt-2 block text-base/4 text-white md:text-xl">{price}</Text>
						</th>
					),
				)}
			</tr>
		</thead>
	);
};

export const FoundersAndInvestorsTab = () => {
	return (
		<div className="w-full overflow-x-auto pb-5">
			<div className="w-full min-w-110">
				<div className="mb-5 w-full rounded-lg bg-green-600 p-6 lg:px-12">
					<table className="w-full table-fixed border-collapse">
						<TableHead />
						<tbody>
							{community.pricing.for_founders_and_investors_tab.features.map(
								({ name, description, options }, index) => (
									<tr key={index}>
										<td className="w-1/4 py-2.5 pr-2.5 text-left">
											<Text className="text-sm text-gray-900 md:text-base/3">{name}</Text>
											{description && (
												<Text className="block text-3xs text-gray-900">{description}</Text>
											)}
										</td>
										{options.map((featureOption, featureOptionIndex) => (
											<td
												className={`w-1/4 border-white p-2.5 text-center ${index === community.pricing.for_founders_and_investors_tab.features.length - 1 ? "border-b-0" : "border-b"}`}
												key={featureOptionIndex}
											>
												<Text className="text-sm text-gray-900 md:text-base/3">
													{featureOption.name}
												</Text>
												{featureOption.description && (
													<Text className="block text-3xs text-gray-900">
														{featureOption.description}
													</Text>
												)}
											</td>
										))}
									</tr>
								),
							)}
						</tbody>
					</table>
				</div>
				<div className="grid grid-cols-4 px-6 lg:px-12">
					<div className="px-2.5"></div>
					{community.pricing.for_founders_and_investors_tab.options.map(({ button }, index) => (
						<div key={index} className="px-2.5">
							<Button
								variant="secondary"
								href={button.url}
								className="mx-auto w-fit uppercase"
								hasArrow
							>
								{button.label}
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
