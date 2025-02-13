import Link from "next/link";
import { Star } from "@/svg/Star";
import { SmileyFace } from "@/svg/SmileyFace";

export const Footer = () => {
	return (
		<footer className="overflow-hidden pt-28 md:pt-44">
			<div className="mb-12 flex items-center justify-end px-6 lg:px-8">
				<div className="relative flex items-end justify-end gap-2 md:gap-4 lg:gap-6">
					<Star className="absolute bottom-full right-full w-12 md:w-16 xl:w-24" />
					<a
						className="relative m-0 ml-auto break-all p-0 font-montserrat text-2xl font-light text-gray-900 underline decoration-1 underline-offset-2 transition-colors hover:text-gray-700 md:text-3xl md:decoration-2 md:underline-offset-4 lg:text-4xl xl:text-6xl xl:tracking-3 xl:decoration-3 xl:underline-offset-8"
						href="mailto:contact@climatetechconnect.nl"
					>
						contact@climatetechconnect.nl
					</a>
					<SmileyFace className="hidden animate-spin-slow ease-in sm:block sm:w-8 md:w-10 xl:w-14" />
				</div>
			</div>
			<div className="bg-white px-6 py-8 lg:px-8 lg:py-10">
				<ul className="flex items-center justify-start">
					<li>
						<Link
							className="font-sometype-mono text-base text-gray-900 underline transition-colors hover:text-gray-700 md:text-xl"
							href={""}
							target="_blank"
						>
							Linkedin
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
