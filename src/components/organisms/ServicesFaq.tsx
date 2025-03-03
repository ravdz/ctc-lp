import { FaqSection } from "@/components/organisms/FaqSection";
import { Text } from "@/components/atoms/Text";
import { SmileyFace } from "@/svg/SmileyFace";

const faq = [
	{
		id: 1,
		question: "How do I get started with your services?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				The first step is to schedule a call with us. During this consultation, we&apos;ll discuss
				your needs, goals, and challenges to determine how we can best support you.
			</Text>
		),
	},
	{
		id: 2,
		question: "Are your services included in the membership?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				No, our services are paid separately from the membership, however, paid membership (annual,
				late-stage or sponsor) come with custom discounted fees or “no cure no pay” terms (please
				check Membership options). Generally, membership provides access to events, networking &
				member content (knowledge) but services like matchmaking, pitch deck creation, deal closing,
				and consortia support are offered individually.
			</Text>
		),
	},
	{
		id: 3,
		question: "How are your services priced?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Pricing depends on the scope and complexity of your needs. We provide customized offers
				based on your specific situation, which we define together during our initial consultation
				call.
			</Text>
		),
	},
	{
		id: 4,
		question: "How does the collaboration process work?",
		answer: (
			<div>
				<ul className="flex flex-col gap-1">
					<li>
						<Text is="p" className="text-base text-gray-900">
							Book a call - we assess your needs and determine how we can help.
						</Text>
					</li>
					<li>
						<Text is="p" className="text-base text-gray-900">
							Customized offer - we create a tailored proposal with clear terms and pricing.
						</Text>
					</li>
					<li>
						<Text is="p" className="text-base text-gray-900">
							Agreement & kick-off - once we align on scope and budget, we start working with you to
							deliver results.
						</Text>
					</li>
				</ul>
			</div>
		),
	},
	{
		id: 5,
		question: "Do you work on a success-fee basis?",
		answer: (
			<Text is="p" className="text-base text-gray-900">
				Some services, like consortia creation, may be offered on a no cure, no pay model, meaning
				you only pay if funding is secured. Other services are priced based on the agreed-upon
				scope.
			</Text>
		),
	},
	{
		id: 6,
		question: "What if I'm not sure which service I need?",
		answer: (
			<div className="flex items-center justify-start gap-2">
				<Text is="p" className="text-base text-gray-900">
					No problem! Book a call
				</Text>
				<SmileyFace className="w-5" />
			</div>
		),
	},
];

export const ServicesFaq = () => {
	return <FaqSection heading="Services FAQ" className="pb-40 pt-20" items={faq} />;
};
