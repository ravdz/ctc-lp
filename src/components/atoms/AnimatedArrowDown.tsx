"use client";
import { motion } from "motion/react";
import { ArrowDown } from "@/svg/ArrowDown";

export const AnimatedArrowDown = ({ className }: { className?: string }) => {
	return (
		<motion.div
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
		>
			<ArrowDown className="w-8 stroke-green-600 md:w-10 lg:w-14" />
		</motion.div>
	);
};
