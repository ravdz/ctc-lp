import { twMerge } from "tailwind-merge";
import * as Headless from "@headlessui/react";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	hasArrow?: boolean;
	children: React.ReactNode;
	href?: string | { pathname: string };
	scroll?: boolean;
	onClick?: () => void;
};

export const Button = ({
	className = "",
	type = "button",
	disabled = false,
	hasArrow = false,
	children,
	href,
	scroll = false,
	onClick,
}: Props) => {
	const styles = twMerge(
		"flex items-center justify-center rounded-3xl border border-gray-500 bg-white px-5 pb-1 pt-1.5 font-montserrat text-base text-gray-700 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white",
		className,
	);

	if (href) {
		return (
			<Headless.Button
				as={Link}
				href={href}
				scroll={scroll}
				onClick={onClick}
				disabled={disabled}
				aria-disabled={disabled}
				className={styles}
			>
				{children}
				{hasArrow && (
					<Image src={"/img/arrow.png"} alt={"arrow"} width={24} height={24} className="ml-2" />
				)}
			</Headless.Button>
		);
	}
	return (
		<Headless.Button
			onClick={onClick}
			disabled={disabled}
			type={type}
			aria-disabled={disabled}
			className={styles}
		>
			{children}
			{hasArrow && (
				<Image src={"/img/arrow.png"} alt={"arrow"} width={24} height={24} className="ml-2" />
			)}
		</Headless.Button>
	);
};
