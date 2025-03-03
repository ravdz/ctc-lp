import { Button } from "@/components/atoms/Button";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type Props = {
	title: string;
	subtitle: string;
	price: string;
	benefits: string[];
	additionalInfo?: string;
};

export const SponsorsVariant = ({ title, subtitle, price, benefits, additionalInfo }: Props) => {
	return (
		<div className="flex w-full flex-col items-start justify-stretch px-9 py-10 md:px-11 md:py-12">
			<div className="mb-9 flex w-full items-start justify-stretch gap-5">
				<div>
					<Heading is="h3" className="font-normal">
						{title}
					</Heading>
					<Text className="text-base font-normal text-gray-900">{subtitle}</Text>
				</div>
				<div className="flex grow items-center justify-stretch gap-5">
					<div className="h-[1px] grow bg-gray-900" />
					<Text className="text-5xl font-normal text-gray-900">{price}</Text>
				</div>
			</div>
			<div className="mb-9 flex w-full items-start justify-stretch gap-10">
				<Text className="shrink-0 text-xl text-gray-900">What you get</Text>
				<ul className="flex grow flex-col items-stretch justify-start gap-2">
					{benefits.map((benefit, index) => (
						<li key={index} className="w-full border-b border-gray-100 pb-2 text-start">
							<Text className="text-base text-gray-900">{benefit}</Text>
						</li>
					))}
				</ul>
			</div>
			<div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row">
				{additionalInfo && (
					<Text is="p" className="block max-w-96 text-3xs text-gray-900">
						{additionalInfo}
					</Text>
				)}
				<Button className="ml-auto uppercase" hasArrow variant="secondary">
					Book a call
				</Button>
			</div>
		</div>
	);
};
