import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/atoms/Text";

type Props = {
	name: string;
	position: string;
	linkedin: string;
	image: {
		src: string;
		alt: string;
	};
};

export const TeamMemberTile = ({ name, position, linkedin, image }: Props) => {
	return (
		<li>
			<div className="relative flex w-full items-center justify-center rounded-xl bg-gray-300 pb-[90%]">
				<Image src={image.src} alt={image.alt} fill className="object-cover" />
			</div>
			<div className="flex flex-col items-start justify-start p-4">
				<Text className="mb-1 font-montserrat text-base text-gray-700">{position}</Text>
				<Text className="font-montserrat text-xl font-semibold text-gray-700">{name}</Text>
				<Link
					className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-montserrat text-base font-normal text-white transition-colors hover:bg-gray-700"
					target="_blank"
					href={linkedin}
				>
					Li
				</Link>
			</div>
		</li>
	);
};
