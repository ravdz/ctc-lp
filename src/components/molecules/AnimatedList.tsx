"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "@/components/atoms/Text";

type Props = {
	items: string[];
	className?: string;
};

const Item = ({ id, label }: { id: number; label: string }) => {
	return (
		<li key={id} className="mr-4 w-full">
			<Text
				className={`flex items-center justify-start gap-4 truncate text-nowrap font-sometype-mono text-base lowercase text-gray-500`}
			>
				{label}
				<span className={`inline-blocl text-base text-gray-500`}>✺</span>
			</Text>
		</li>
	);
};

export const AnimatedList = ({ items, className = "" }: Props) => {
	const firstListRef = useRef<HTMLUListElement>(null);
	const secondListRef = useRef<HTMLUListElement>(null);
	const thirdListRef = useRef<HTMLUListElement>(null);
	useAnimationFrame((time) => {
		if (!firstListRef.current || !secondListRef.current || !thirdListRef.current) return;

		const speed = time / 100;
		const x = (speed * -1) % 100;
		firstListRef.current.style.transform = `translateX(${x}%)`;
		secondListRef.current.style.transform = `translateX(${x}%)`;
		thirdListRef.current.style.transform = `translateX(${x}%)`;
		if (x <= -100) {
			firstListRef.current.style.transform = `translateX(0%)`;
			secondListRef.current.style.transform = `translateX(0%)`;
			thirdListRef.current.style.transform = `translateX(0%)`;
		}
	});

	return (
		<div
			className={twMerge(
				"relative flex w-full items-center justify-start overflow-hidden",
				className,
			)}
		>
			<ul ref={firstListRef} className="relative flex items-center justify-start">
				{items.map((label, index) => (
					<Item key={index} id={index} label={label} />
				))}
			</ul>
			<ul ref={secondListRef} className="realtive flex items-center justify-start">
				{items.map((label, index) => (
					<Item key={index} id={index} label={label} />
				))}
			</ul>
			<ul ref={thirdListRef} className="realtive flex items-center justify-start">
				{items.map((label, index) => (
					<Item key={index} id={index} label={label} />
				))}
			</ul>
		</div>
	);
};
