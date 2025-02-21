"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
	target: number;
	duration?: number;
	className?: string;
};

export const AnimatedCounter = ({ target, duration = 5, className = "" }: Props) => {
	const counterRef = useRef<HTMLPreElement | null>(null);
	const isInView = useInView(counterRef);
	const count = useMotionValue(0);
	const rounded = useTransform(() => Math.round(count.get()));

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, target, { duration });
			controls.play();
			return () => controls.stop();
		} else {
			count.set(0);
		}
	}, [count, target, duration, isInView]);

	return (
		<motion.pre ref={counterRef} className={className}>
			{rounded}
		</motion.pre>
	);
};
