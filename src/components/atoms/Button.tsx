import { twMerge } from "tailwind-merge";
import * as Headless from "@headlessui/react";

import React from "react";
import Link from "next/link";

import { AnimatedArrow } from "@/components/atoms/AnimatedArrow";
import { ButtonBridge } from "@/svg/ButtonBidge";

const variants = {
	primary:
		"rounded-3xl border border-gray-900 hover:bg-gray-900 bg-white px-3 py-1 text-blue-600 gap-3 hover:text-white transition-[background-color] duration-200 ease-in-out",
	secondary:
		"text-white bg-gray-100 [&>*:first-child]:bg-gray-900 transition-colors [&:hover>*:first-child]:bg-gray-700 [&>*:first-child]:rounded-3xl [&>*:first-child]:px-3 [&>*:first-child]:py-1 [&>*:last-child]:bg-gray-900 [&>*:last-child]:rounded-3xl [&>*:last-child]:w-7 [&>*:last-child]:h-6 [&:hover>*:last-child]:bg-gray-700",
};

type Props = {
	className?: string;
	variant?: keyof typeof variants;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	hasArrow?: boolean;
	children: React.ReactNode;
	href?: string | { pathname: string };
	onClick?: () => void;
};

type ButtonProps = {
	className: Props["className"];
	href?: Props["href"];
	as: "button" | typeof Link;
	type: Props["type"];
	disabled: Props["disabled"];
	onClick: Props["onClick"];
};

export const Button = ({
	className = "",
	variant = "primary",
	type = "button",
	disabled = false,
	hasArrow = false,
	children,
	href,
	onClick,
}: Props) => {
	const styles = twMerge(
		"flex items-center justify-center text-sm font-sometype-mono lowercase group disabled:opacity-50 disabled:text-gray-500 disabled:cursor-not-allowed",
		variants[variant],
		disabled && "opacity-50 cursor-not-allowed text-gray-500 hover:text-gray-500",
		className,
	);

	let props: ButtonProps = {
		className: styles,
		as: "button",
		type,
		disabled,
		onClick: disabled ? undefined : onClick,
	};

	if (href) {
		props = { ...props, href, as: Link };
	}

	return (
		<Headless.Button {...props}>
			<div className="transition-colors">{children}</div>

			{variant === "secondary" && (
				<div className="relative flex w-2 items-center justify-center">
					<ButtonBridge className="absolute w-3 fill-gray-900 transition-colors group-hover:fill-gray-700" />
				</div>
			)}

			<div className="flex items-center justify-center transition-colors">
				{hasArrow && <AnimatedArrow variant={variant} />}
			</div>
		</Headless.Button>
	);
};
