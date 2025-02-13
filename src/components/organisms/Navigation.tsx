import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Heading } from "@/components/atoms/Heading";
import { LogoIcon } from "@/svg/LogoIcon";

const links = [
	{
		id: 1,
		label: "About us",
		url: "/about-us",
	},
	{
		id: 2,
		label: "Services",
		url: "/services",
	},
	{
		id: 3,
		label: "Events",
		url: "/#events",
	},
	{
		id: 4,
		label: "Community",
		url: "/join-us",
	},
];

export const Navigation = () => {
	return (
		<header className="relative z-10 h-16 lg:h-18">
			<div className="fixed flex h-16 w-full items-center justify-between bg-gray-100/80 px-6 lg:h-18 lg:px-8">
				<Heading className="text-base font-bold tracking-3">
					<Link className="text-gray-900 transition-colors hover:text-gray-700" href="/">
						CTC
					</Link>
				</Heading>
				<Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<LogoIcon className="w-10 fill-blue-600" />
				</Link>
				<Menu>
					<MenuButton className="rounded-3xl border border-gray-900 bg-gray-900 px-4 pb-0.5 pt-1 font-montserrat text-md uppercase text-white transition-colors hover:bg-gray-700">
						Menu
					</MenuButton>
					<MenuItems
						as="nav"
						transition
						anchor="bottom"
						className="z-20 mt-2 flex min-w-32 origin-top flex-col items-start justify-center gap-4 rounded-3xl bg-gray-900 px-6 py-7 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
					>
						{links.map(({ id, url, label }) => (
							<MenuItem key={id}>
								<Link
									className="font-sometype-mono text-base lowercase text-white transition-colors hover:text-gray-300"
									href={url}
									scroll={true}
								>
									{label}
								</Link>
							</MenuItem>
						))}
					</MenuItems>
				</Menu>
			</div>
		</header>
	);
};
