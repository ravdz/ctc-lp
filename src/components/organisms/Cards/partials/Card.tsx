"use client";

import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
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

	return (
		<div
			className={twMerge(
				`relative overflow-hidden rounded-lg transition-all duration-500`,
				className,
			)}
			style={{ width: cardWidth }}
		>
			<div
				className={`relative h-full rounded-lg transition-colors duration-300 ${open ? "bg-green-600" : "bg-green-500"}`}
				style={{ width: `${openWidth}px` }}
			>
				<div
					className={`relative transition-opacity ${open ? "z-10 overflow-hidden rounded-lg opacity-100" : "z-0 opacity-0"}`}
				>
					{card.content}
				</div>
				<button
					onClick={onOpen}
					className={`absolute left-0 top-0 flex h-full cursor-pointer flex-col items-start justify-between overflow-hidden rounded-lg transition-opacity ${open ? "z-0 opacity-0" : "z-10 opacity-100"}`}
					style={{ width: `${closedWidth}px` }}
				>
					<Text className="w-full break-words px-9 py-10 text-left text-3xl font-normal text-gray-900 md:px-11 md:py-12">
						{card.title}
					</Text>
					<BigArrow className="absolute bottom-0 right-0 w-44 self-end" />
				</button>
			</div>
		</div>
	);
};
