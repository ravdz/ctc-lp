import { twMerge } from "tailwind-merge";
import * as Headless from "@headlessui/react";

import React from "react";
import Link from "next/link";

import { AnimatedArrow } from "@/components/atoms/AnimatedArrow";
import { ButtonBridge } from "@/svg/ButtonBidge";

const variants = {
	primary:
		"rounded-3xl border border-gray-900 hover:border-gray-700 bg-white px-3 pb-1 pt-1.5 text-blue-600 gap-3 hover:text-blue-300",
	secondary:
		"text-white bg-gray-100 [&>*:first-child]:bg-gray-900 [&:hover>*:first-child]:bg-gray-700 [&>*:first-child]:rounded-3xl [&>*:first-child]:px-3 [&>*:first-child]:pb-0.5 [&>*:first-child]:pt-1 [&>*:last-child]:bg-gray-900 [&>*:last-child]:rounded-3xl [&>*:last-child]:w-7 [&>*:last-child]:h-6 [&:hover>*:last-child]:bg-gray-700",
};

type Props = {
	className?: string;
	variant?: keyof typeof variants;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	hasArrow?: boolean;
	children: React.ReactNode;
	href?: string | { pathname: string };
	scroll?: boolean;
	onClick?: () => void;
};

type ButtonProps = {
	className: Props["className"];
	href?: Props["href"];
	as: "button" | typeof Link;
	type: Props["type"];
	disabled: Props["disabled"];
	onClick: Props["onClick"];
	scroll?: Props["scroll"];
};

export const Button = ({
	className = "",
	variant = "primary",
	type = "button",
	disabled = false,
	hasArrow = false,
	children,
	href,
	scroll = false,
	onClick,
}: Props) => {
	const styles = twMerge(
		"flex items-center justify-center text-sm font-sometype-mono lowercase transition-colors group",
		variants[variant],
		className,
	);

	let props: ButtonProps = {
		className: styles,
		as: "button",
		type,
		disabled,
		onClick,
	};

	if (href) {
		props = { ...props, href, as: Link, scroll };
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
				{hasArrow && <AnimatedArrow />}
			</div>
		</Headless.Button>
	);
};
