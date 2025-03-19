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
			<div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-green-200 sm:h-60 sm:w-60 lg:h-64 lg:w-64">
				<Image src={image.src} alt={image.alt} fill className="object-cover" />
			</div>
			<div className="flex flex-col items-start justify-start pt-10">
				<Text className="mb-1 font-sometype-mono text-md uppercase">{position}</Text>
				<Text className="font-montserrat text-xl font-semibold">{name}</Text>
				<Link
					className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-montserrat text-md text-white transition-colors hover:bg-gray-900"
					target="_blank"
					href={linkedin}
				>
					Li
				</Link>
			</div>
		</li>
	);
};
