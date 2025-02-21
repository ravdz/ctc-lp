"use client";
import { motion, type Variants } from "motion/react";
import { Star } from "@/svg/Star";

type Props = {
	className?: string;
};

export const AnimatedSerpent = ({ className = "" }: Props) => {
	const transition = { duration: 3.5, yoyo: Infinity, ease: "easeInOut" };
	const offsetPath =
		"M191.513 31.9877C132.683 16.9751 14.573 -3.49691 12.7816 34.715C10.5423 82.4799 178.845 51.9002 188.085 84.3444C197.325 116.789 8.37008 94.6567 8.35146 138.26C8.33285 181.863 246.505 170.129 236.608 142.742";

	const serpentVartiants: Variants = {
		offscreen: { pathLength: 0.001 },
		onscreen: {
			pathLength: 1,
		},
	};

	const movingObjectVariants: Variants = {
		offscreen: { offsetDistance: "0%" },
		onscreen: {
			offsetDistance: "100%",
		},
	};

	return (
		<motion.div
			className={className}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ margin: "-50px" }}
		>
			<svg className="w-full" viewBox="0 0 257 180" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d={offsetPath}
					fill="transparent"
					stroke="#624049"
					variants={serpentVartiants}
					transition={transition}
				/>
			</svg>

			<motion.div
				variants={movingObjectVariants}
				transition={transition}
				className="absolute left-0 top-0"
				style={{
					offsetPath: `path("${offsetPath}")`,
				}}
			>
				<Star className="w-5" />
			</motion.div>
		</motion.div>
	);
};
