import Image from "next/image";
import { Text } from "@/components/atoms/Text";

type Props = {
	name: string;
	position: string;
	image: {
		src: string;
		alt: string;
	};
};

export const TeamMemberTile = ({ name, position, image }: Props) => {
	return (
		<li>
			<div className="relative flex w-full items-center justify-center rounded-xl bg-gray-300 pb-[90%]">
				<Image src={image.src} alt={image.alt} fill className="object-cover" />
			</div>
			<div className="flex flex-col items-start justify-start p-4">
				<Text className="mb-1 font-montserrat text-base text-gray-700">{position}</Text>
				<Text className="font-montserrat text-xl font-semibold text-gray-700">{name}</Text>
			</div>
		</li>
	);
};
