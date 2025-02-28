import { twMerge } from "tailwind-merge";
import * as Headless from "@headlessui/react";

import React, { useMemo } from "react";
import Link from "next/link";

import { AnimatedArrow } from "@/components/atoms/AnimatedArrow";

const variants = {
	primary: "bg-transparent border border-gray-900 text-gray-500 hover:border-gray-700",
	secondary:
		"text-white bg-gray-900 border border-gray-900 hover:border-gray-700 hover:bg-gray-700 ",
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
	const styles = useMemo(() => {
		return twMerge(
			`flex items-center justify-center pl-5 gap-3 py-1 ${hasArrow ? "pr-1" : "pr-5"} text-base uppercase font-montserrat group transition-colors rounded-3xl disabled:opacity-50 disabled:text-gray-500 disabled:cursor-not-allowed`,
			variants[variant],
			disabled && "opacity-50 cursor-not-allowed text-gray-500 hover:text-gray-500",
			className,
		);
	}, [className, disabled, hasArrow, variant]);

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
			{children}
			{hasArrow && (
				<div className="flex items-center justify-center transition-colors">
					<AnimatedArrow variant={variant} />
				</div>
			)}
		</Headless.Button>
	);
};
