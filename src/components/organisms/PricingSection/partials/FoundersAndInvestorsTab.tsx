import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th className="w-1/4"></th>
				<th className="w-1/4 p-2.5 text-center">
					<Text className="block text-base/4 text-gray-900 md:text-xl/5">Free Member</Text>
					<Text className="block text-sm text-gray-900 md:text-base">(founder only)</Text>
					<Text className="bold mt-2 block text-base/4 text-white md:text-xl">€ 0,-</Text>
				</th>
				<th className="w-1/4 p-2.5 text-center">
					<Text className="block text-base/4 text-gray-900 md:text-xl/5">Paid Member</Text>
					<Text className="block text-sm text-gray-900 md:text-base">
						(founder or C-level only)
					</Text>
					<Text className="bold mt-2 block text-base/4 text-white md:text-xl">
						€ 950,- annually
					</Text>
				</th>
				<th className="w-1/4 p-2.5 text-center">
					<Text className="block text-base/4 text-gray-900 md:text-xl/5">Late Stage Member</Text>
					<Text className="block text-sm text-gray-900 md:text-base">(&gt;1 million rev)</Text>
					<Text className="bold mt-2 block text-base/4 text-white md:text-xl">
						€ 1295,- annually
					</Text>
				</th>
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
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Advisory programs</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">
										Only after attending the first event
									</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Full</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Full</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Access to events</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">1 per year</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">All</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">All</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">
										Invitation to consortia
									</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">
										Educational resources
									</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Benchmarking</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Member content</Text>
									<Text className="block text-3xs text-gray-900">(Legal, AI, GTM, etc.)</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">
										(incl. access to free consultation hours by the experts)
									</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">
										(incl. access to free consultation hours by the experts)
									</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Investor ready</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">(fee applies)</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">(fee applies)</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Investor matchmaking</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">(success fee applies)</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">(success fee applies)</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Deal closing</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">
										(custom discounted fees apply)
									</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
									<Text className="block text-3xs text-gray-900">
										(custom discounted fees apply)
									</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">Exposure</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 border-b border-white p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
							</tr>
							<tr>
								<td className="w-1/4 py-2.5 pr-2.5 text-left">
									<Text className="text-sm text-gray-900 md:text-base/3">
										Late Stage Peer Coaching Circle
									</Text>
									<Text className="block text-3xs text-gray-900">
										(monthly meetup, groups 6-12)
									</Text>
								</td>
								<td className="w-1/4 p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">No</Text>
								</td>
								<td className="w-1/4 p-2.5 text-center">
									<Text className="text-sm text-gray-900 md:text-base/3">Yes</Text>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="grid grid-cols-4 px-6 lg:px-12">
					<div className="px-2.5"></div>
					<div className="px-2.5">
						<Button variant="secondary" className="mx-auto uppercase" hasArrow>
							Fill out form
						</Button>
					</div>
					<div className="px-2.5">
						<Button variant="secondary" className="mx-auto uppercase" hasArrow>
							Fill out form
						</Button>
					</div>
					<div className="px-2.5">
						<Button variant="secondary" className="mx-auto uppercase" hasArrow>
							Fill out form
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
