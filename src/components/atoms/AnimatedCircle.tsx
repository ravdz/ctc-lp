"use client";

import { useRef } from "react";
import { useAnimationFrame } from "motion/react";

import { SingleCircle } from "@/svg/SingleCircle";
import { Star } from "@/svg/Star";

type Props = {
	className?: string;
	orbitingObject?: React.ReactNode;
	orbitDirection?: "clockwise" | "counterclockwise";
	orbitSpeed?: number;
};

export const AnimatedCircle = ({
	className = "",
	orbitingObject = <Star className="w-5 rotate-6" />,
	orbitDirection = "clockwise",
	orbitSpeed = 1500,
}: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const orbitingObjectRef = useRef<HTMLDivElement>(null);

	useAnimationFrame((time) => {
		if (!containerRef.current || !orbitingObjectRef.current) return;
		orbitingObjectRef.current.style.opacity = "1";
		const containerWidth = containerRef.current.offsetWidth;
		const containerHeight = containerRef.current.offsetHeight;
		const radiusX = containerWidth / 2;
		const radiusY = containerHeight / 2;
		const direction = orbitDirection === "clockwise" ? 1 : -1;

		const orbitingObjectWidth = orbitingObjectRef.current.offsetWidth;
		const orbitingObjectHeight = orbitingObjectRef.current.offsetHeight;
		const x =
			radiusX * Math.cos((time / orbitSpeed) * direction) + radiusX - orbitingObjectWidth / 2;
		const y =
			radiusY * Math.sin((time / orbitSpeed) * direction) + radiusY - orbitingObjectHeight / 2;
		orbitingObjectRef.current.style.transform = `translate(${x}px, ${y}px)`;
	});
	return (
		<div ref={containerRef} className={className}>
			<SingleCircle className="w-full" />
			<div className="absolute left-0 top-0 opacity-0" ref={orbitingObjectRef}>
				{orbitingObject}
			</div>
		</div>
	);
};
