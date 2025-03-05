"use client";

import { twMerge } from "tailwind-merge";
import { useMemo, useEffect, useState } from "react";
import { Text } from "@/components/atoms/Text";
import { BigArrow } from "@/svg/BigArrow";
export interface ICard {
	id: number;
	title: string;
	content: React.ReactNode;
}

type Props = {
	card: ICard;
	open: boolean;
	onOpen: () => void;
	className?: string;
	openWidth: number;
	closedWidth: number;
};

export const Card = ({ card, open, onOpen, className = "", openWidth, closedWidth }: Props) => {
	const cardWidth = useMemo(() => {
		return open ? `${openWidth}px` : `${closedWidth}px`;
	}, [open, openWidth, closedWidth]);
	const [isLargeScreen, setIsLargeScreen] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1024px)");
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsLargeScreen(event.matches);
		};
		setIsLargeScreen(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	return (
		<div
			className={twMerge(
				`relative overflow-hidden rounded-lg transition-all duration-500`,
				className,
			)}
			style={{ width: isLargeScreen ? cardWidth : "100%" }}
		>
			<div
				className={`relative h-full rounded-lg transition-colors duration-300 ${open ? "bg-green-600" : "bg-green-500"}`}
				style={{ width: isLargeScreen ? `${openWidth}px` : "100%" }}
			>
				<div
					className={`relative transition-all ${open ? "z-10 h-auto overflow-hidden rounded-lg opacity-100 lg:h-auto" : "z-0 h-32 opacity-0 lg:h-auto"}`}
				>
					{card.content}
				</div>
				<button
					onClick={onOpen}
					className={`absolute left-0 top-0 flex h-full cursor-pointer flex-col items-start justify-between overflow-hidden rounded-lg transition-opacity ${open ? "z-0 opacity-0" : "z-10 opacity-100"}`}
					style={{ width: isLargeScreen ? `${closedWidth}px` : "100%" }}
				>
					<Text className="w-full hyphens-auto break-words px-4 py-5 text-left text-xl font-normal text-gray-900 md:px-6 md:py-7 md:text-2xl lg:text-xl xl:px-9 xl:py-10 xl:text-3xl">
						{card.title}
					</Text>
					<BigArrow className="absolute bottom-0 right-0 w-16 self-end md:w-24 lg:w-32 xl:w-44" />
				</button>
			</div>
		</div>
	);
};
