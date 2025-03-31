import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { LogoIcon } from "@/svg/LogoIcon";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { AnimatedMultipleCircles } from "@/components/atoms/AnimatedMultipleCircles";
import { SmileyFace } from "@/svg/SmileyFace";
import { GreenGradient } from "@/svg/GreenGradient";
import common from "@/data/common.json";
import { DownloadIcon } from "@/svg/DownloadIcon";

export const Footer = () => {
	return (
		<footer className="relative">
			<Container className="relative z-20">
				<AnimatedMultipleCircles className="relative z-10 h-32 md:h-48" />
			</Container>
			<Container className="absolute left-0 top-0 -z-10 h-full w-full">
				<GreenGradient className="z-0 ml-auto hidden w-2/3 md:block lg:-translate-y-[10%]" />
			</Container>
			<div className="relative z-10 bg-blue-400 pb-20 pt-24 md:pb-28 md:pt-36">
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<div className="md:col-span-1">
							<Link href="/" className="flex items-center justify-start gap-8">
								<LogoIcon className="w-20 fill-brown-600" />
								<Heading
									is="h2"
									className="text-base/5 font-medium tracking-3 text-gray-500 transition-colors"
								>
									Climate<br></br>Tech<br></br>Connect
								</Heading>
							</Link>
						</div>
						<nav className="mt-12 border-b border-green-200 pb-7 md:col-span-1 md:mt-0 lg:col-span-2">
							<ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
								{common.footer.navigation.map(({ label, links }, index) => (
									<li key={index}>
										<Heading is="h3" className="mb-5 text-xl font-semibold text-gray-900 lg:mb-9">
											{label}
										</Heading>
										<ul className="flex flex-col items-start justify-start gap-5">
											{links.map((link, linkIndex) => (
												<li key={linkIndex}>
													<Link href={link.url}>
														<Text
															className={`font-sometype-mono text-md transition-colors ${link.url === "/community" ? "text-green-400" : "text-gray-500 hover:text-gray-500/70"}`}
														>
															{link.label}
														</Text>
													</Link>
												</li>
											))}
										</ul>
									</li>
								))}
								<li>
									<Heading is="h3" className="mb-5 text-xl font-semibold text-gray-900 lg:mb-9">
										{common.footer.linkedin.label}
									</Heading>
									<ul className="flex flex-col items-start justify-start gap-5">
										<li>
											<Link
												target="_blank"
												href={common.footer.linkedin.link}
												className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-montserrat text-md text-white transition-colors hover:bg-gray-900"
											>
												Li
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
						<div className="mt-7 flex flex-col items-start justify-start md:col-span-1">
							<Heading is="h3" className="text-2xl font-normal text-gray-900">
								Contact us:
							</Heading>
							<div className="mt-3 flex items-center justify-start gap-2">
								<a
									href={`mailto:${common.footer.contact_email}`}
									className="font-montserrat text-base text-gray-900 underline decoration-1 underline-offset-2 transition-colors hover:text-gray-700"
								>
									{common.footer.contact_email}
								</a>
								<SmileyFace className="hidden w-5 animate-spin-slow ease-in sm:block" />
							</div>
						</div>
						<div className="mt-7 flex flex-col items-end justify-start gap-2 md:col-span-1 lg:col-span-2">
							<Text className="font-sometype-mono text-3xs">
								Institution name: {common.footer.details.institution_name}
							</Text>
							<Text className="font-sometype-mono text-3xs">
								RSIN/tax number: {common.footer.details.rsin_tax_number}
							</Text>
							<Text className="font-sometype-mono text-3xs">
								KVK number: {common.footer.details.kvk_number}
							</Text>
							<Text className="flex items-center justify-end gap-1 font-sometype-mono text-3xs">
								Institution contact details:
								<a
									href={`mailto:${common.footer.contact_email}`}
									className="underline decoration-1 underline-offset-2 transition-colors hover:text-gray-700"
								>
									{common.footer.contact_email}
								</a>
							</Text>
							<a
								href="/pdf/ctc-policy-plan.pdf"
								download
								className="group mt-2 flex items-center justify-end gap-2"
							>
								<Text className="font-sometype-mono text-3xs font-bold text-gray-500 underline decoration-1 underline-offset-2 transition-colors group-hover:text-gray-700">
									Beleidsplan / Policy Plan PDF
								</Text>
								<div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400">
									<DownloadIcon className="w-2.5 text-white" />
								</div>
							</a>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};
