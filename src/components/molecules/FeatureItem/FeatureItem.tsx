"use client";

import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

type Props = {
	title: string;
	description: string;
	items: { id: number; label: string }[];
	url: string;
};

const Item = ({ id, label }: { id: number; label: string }) => {
	return (
		<li key={id} className="mr-2">
			<Text
				className={`text-3xs flex items-center justify-start gap-2 text-nowrap font-sometype-mono lowercase text-gray-500`}
			>
				{label}
				<span className={`text-3xs inline-blocl text-gray-500`}>✺</span>
			</Text>
		</li>
	);
};

export const FeatureItem = ({ title, description, items, url }: Props) => {
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
		<li className="flex flex-col items-stretch justify-center rounded-xl bg-white p-7">
			<header className="mb-12">
				<Heading
					is="h3"
					className="mb-3 font-sometype-mono text-md font-bold lowercase text-blue-600"
				>
					{title}
				</Heading>
				<Text className="text-sm" is="p">
					{description}
				</Text>
			</header>

			<div className="relative mb-2.5 flex w-full items-center justify-start overflow-hidden">
				<ul ref={firstListRef} className="relative flex items-center justify-start">
					{items.map(({ id, label }) => (
						<Item key={id} id={id} label={label} />
					))}
				</ul>
				<ul ref={secondListRef} className="realtive flex items-center justify-start">
					{items.map(({ id, label }) => (
						<Item key={id} id={id} label={label} />
					))}
				</ul>
				<ul ref={thirdListRef} className="realtive flex items-center justify-start">
					{items.map(({ id, label }) => (
						<Item key={id} id={id} label={label} />
					))}
				</ul>
			</div>

			<Button className="ml-auto lowercase" href={url} hasArrow>
				Read more
			</Button>
		</li>
	);
};
