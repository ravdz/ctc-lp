"use client";
import { motion } from "motion/react";

export const ArrowDown = ({ className }: { className?: string }) => (
	<motion.svg
		className={className}
		animate={{
			translateY: [-24, 0, -24, 0, -24],
		}}
		transition={{
			duration: 2,
			ease: "easeInOut",
			times: [0, 0.1, 0.2, 0.3, 0.4],
			repeat: Infinity,
			repeatDelay: 1,
		}}
		width="50"
		height="71"
		viewBox="0 0 50 71"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M2 45L25 68L48 45" stroke="#29E794" strokeWidth="3" strokeLinecap="round" />
		<path d="M25 67.5V2" stroke="#29E794" strokeWidth="3" strokeLinecap="round" />
	</motion.svg>
);
