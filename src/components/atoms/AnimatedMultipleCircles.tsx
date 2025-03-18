"use client";

import { useRef } from "react";
import { useAnimationFrame } from "motion/react";

import { twMerge } from "tailwind-merge";
import { Star } from "@/svg/Star";

type Props = {
	className?: string;
};

export const AnimatedMultipleCircles = ({ className = "" }: Props) => {
	const circle1Ref = useRef<SVGPathElement>(null);
	const circle2Ref = useRef<SVGPathElement>(null);
	const orbitingObject1Ref = useRef<HTMLDivElement>(null);
	const orbitingObject2Ref = useRef<HTMLDivElement>(null);

	const updateOrbitalObject = (
		time: number,
		path: SVGPathElement | null,
		orbitalObject: HTMLDivElement | null,
		orbitDirection: "clockwise" | "counterclockwise",
		orbitSpeed: number,
	) => {
		if (!path || !orbitalObject) return;
		orbitalObject.style.opacity = "1";
		const containerWidth = path.getBoundingClientRect().width;
		const containerHeight = path.getBoundingClientRect().height;
		const radiusX = containerWidth / 2;
		const radiusY = containerHeight / 2;
		const direction = orbitDirection === "clockwise" ? 1 : -1;

		const orbitingObjectWidth = orbitalObject.offsetWidth;
		const orbitingObjectHeight = orbitalObject.offsetHeight;
		const x =
			radiusX * Math.cos((time / orbitSpeed) * direction) + radiusX - orbitingObjectWidth / 2;
		const y =
			radiusY * Math.sin((time / orbitSpeed) * direction) + radiusY - orbitingObjectHeight / 2;
		orbitalObject.style.transform = `translate(${x}px, ${y}px)`;
	};

	useAnimationFrame((time) => {
		updateOrbitalObject(time, circle1Ref.current, orbitingObject1Ref.current, "clockwise", 1500);
		updateOrbitalObject(
			time,
			circle2Ref.current,
			orbitingObject2Ref.current,
			"counterclockwise",
			1000,
		);
	});

	return (
		<div className={twMerge("relative w-fit", className)}>
			<svg
				className="h-full"
				viewBox="0 0 303 208"
				preserveAspectRatio="xMidYMid meet"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					ref={circle2Ref}
					d="M168.667 103.996C168.667 132.657 163.113 158.58 154.155 177.32C145.179 196.095 132.876 207.496 119.451 207.496C106.025 207.496 93.7228 196.095 84.7471 177.32C75.7889 158.58 70.2344 132.657 70.2344 103.996C70.2344 75.3351 75.7889 49.4119 84.7471 30.6726C93.7228 11.8967 106.025 0.496094 119.451 0.496094C132.876 0.496094 145.179 11.8967 154.155 30.6726C163.113 49.4119 168.667 75.3351 168.667 103.996Z"
					stroke="#624049"
				/>
				<path
					ref={circle1Ref}
					d="M169.667 103.996C169.667 132.697 171.545 158.669 174.578 177.456C176.095 186.853 177.897 194.429 179.888 199.645C180.884 202.256 181.916 204.245 182.964 205.574C184.018 206.91 185.021 207.496 185.955 207.496C186.888 207.496 187.891 206.91 188.945 205.574C189.993 204.245 191.026 202.256 192.022 199.645C194.013 194.429 195.815 186.853 197.332 177.456C200.364 158.669 202.242 132.697 202.242 103.996C202.242 75.2955 200.364 49.3234 197.332 30.5367C195.815 21.1393 194.013 13.563 192.022 8.3472C191.026 5.73664 189.993 3.74685 188.945 2.41867C187.891 1.0823 186.888 0.496094 185.955 0.496094C185.021 0.496094 184.018 1.0823 182.964 2.41867C181.916 3.74685 180.884 5.73664 179.888 8.3472C177.897 13.563 176.095 21.1393 174.578 30.5367C171.545 49.3234 169.667 75.2955 169.667 103.996Z"
					stroke="#624049"
				/>
				<path
					d="M169.664 103.996C169.664 132.634 177.088 158.537 189.064 177.266C201.043 196 217.532 207.496 235.668 207.496C253.803 207.496 270.292 196 282.272 177.266C294.248 158.537 301.672 132.634 301.672 103.996C301.672 75.3582 294.248 49.4548 282.272 30.7264C270.292 11.9923 253.803 0.496094 235.668 0.496094C217.532 0.496094 201.043 11.9923 189.064 30.7264C177.088 49.4548 169.664 75.3582 169.664 103.996Z"
					stroke="#624049"
				/>
				<path
					d="M168.665 103.996C168.665 161.259 130.929 207.496 84.5827 207.496C38.2367 207.496 0.5 161.259 0.5 103.996C0.5 46.7331 38.2367 0.496094 84.5827 0.496094C130.929 0.496094 168.665 46.7331 168.665 103.996Z"
					stroke="#624049"
				/>
			</svg>
			<div className="absolute left-[23%] top-0 opacity-0" ref={orbitingObject2Ref}>
				<Star className="w-3 md:w-5" />
			</div>
			<div
				className="absolute left-[56%] top-0 h-2 w-2 rounded-full bg-brown-600 opacity-0 md:h-3 md:w-3"
				ref={orbitingObject1Ref}
			></div>
		</div>
	);
};
