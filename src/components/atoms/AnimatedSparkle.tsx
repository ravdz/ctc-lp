"use client";

import { motion, type Variants } from "motion/react";

type Props = {
	className?: string;
};

export const AnimatedSparkle = ({ className }: Props) => {
	const sparkleVariants: Variants = {
		offscreen: {
			opacity: 0,
			scale: 0,
		},
		onscreen: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
	return (
		<motion.svg
			className={className}
			width="81"
			height="46"
			viewBox="0 0 81 46"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ amount: 0.8, margin: "-100px" }}
			variants={sparkleVariants}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M41 45.8372L41 0" stroke="#624049" />
			<path d="M0.000671396 24.086L80.9922 23.6406" stroke="#624049" />
			<path d="M11.8599 7.77563L69.1328 39.9453" stroke="#624049" />
			<path d="M69.0147 7.70826L11.9844 40.0137" stroke="#624049" />
		</motion.svg>
	);
};
