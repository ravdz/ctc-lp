import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="pt-32 md:pt-48">
			<div className="mb-5 flex items-center justify-end px-6 lg:px-8">
				<a
					className="m-0 ml-auto break-all p-0 font-montserrat text-2xl font-light text-gray-900 md:text-3xl lg:text-4xl xl:text-6xl xl:tracking-3"
					href="mailto:contact@climatetechconnect.nl"
				>
					contact@climatetechconnect.nl
				</a>
			</div>
			<div className="bg-gray-300 px-6 py-8 lg:px-8 lg:py-10">
				<ul className="flex items-center justify-start">
					<li>
						<Link
							className="font-montserrat text-base font-light lowercase text-gray-900 sm:text-xl lg:text-3xl"
							href={""}
						>
							linkedin
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
