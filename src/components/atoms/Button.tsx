import { twMerge } from "tailwind-merge";
import * as Headless from "@headlessui/react";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const variants = {
	primary:
		"rounded-3xl bg-white border border-gray-500 text-gray-700 font-montserrat text-base px-5 pb-1 pt-1.5",
	secondary:
		"rounded-3xl bg-gray-900 border border-gray-900 text-white font-montserrat uppercase text-base px-5 pb-1 pt-1.5",
};

type Props = {
	variant?: keyof typeof variants;
	className?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	hasArrow?: boolean;
	children: React.ReactNode;
	href?: string | { pathname: string };
	onClick?: () => void;
};

export const Button = ({
	variant = "primary",
	className = "",
	type = "button",
	disabled = false,
	hasArrow = false,
	children,
	href,
	onClick,
}: Props) => {
	if (href) {
		return (
			<Headless.Button
				as={Link}
				href={href}
				onClick={onClick}
				disabled={disabled}
				aria-disabled={disabled}
				className={twMerge("flex items-center justify-center", variants[variant], className)}
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
			className={twMerge("flex items-center justify-center", variants[variant], className)}
		>
			{children}
			{hasArrow && (
				<Image src={"/img/arrow.png"} alt={"arrow"} width={24} height={24} className="ml-2" />
			)}
		</Headless.Button>
	);
};
