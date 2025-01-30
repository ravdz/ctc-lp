import { Text } from "@/components/atoms/Text";

type Props = {
	children: React.ReactNode;
};

export const Badge = ({ children }: Props) => {
	return (
		<div className="flex items-center justify-center rounded-3xl bg-gray-900 px-4 py-1">
			<Text is="span" className="m-0 p-0 font-montserrat text-sm lowercase text-white">
				{children}
			</Text>
		</div>
	);
};
