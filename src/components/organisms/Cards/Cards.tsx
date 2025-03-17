"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Card, type ICard } from "@/components/organisms/Cards/partials/Card";
import { Text } from "@/components/atoms/Text";

import { motion, useMotionValueEvent, useMotionValue } from "motion/react";

const MAX_CARDS = 4;

type Props = {
	cards: ICard[];
};

export const Cards = (props: Props) => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const x = useMotionValue(0);

	useMotionValueEvent(x, "animationStart", () => {
		console.log("animation started on x");
	});

	useMotionValueEvent(x, "change", (latest) => {
		console.log("x changed to", latest);
	});

	const [cursorVariant, setCursorVariant] = useState("default");
	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener("mousemove", mouseMove);
		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x,
			y: mousePosition.y,
			// scale: 0,
			opacity: 0,
		},
		text: {
			x: mousePosition.x,
			y: mousePosition.y,
			// scale: 1,
			opacity: 1,
		},
	};

	const mouseEnter = () => setCursorVariant("text");
	const mouseLeave = () => setCursorVariant("default");

	const [activeCard, setActiveCard] = useState<number>(1);
	const [containerWidth, setContainerWidth] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const cards = useMemo(() => {
		return props.cards.slice(0, MAX_CARDS);
	}, [props.cards]);

	const closedCardWidth = useMemo(() => {
		return (containerWidth - (cards.length - 1) * 20) / (cards.length + 2);
	}, [containerWidth, cards.length]);

	const openCardWidth = useMemo(() => {
		return 3 * closedCardWidth;
	}, [closedCardWidth]);

	useEffect(() => {
		const updateContainerWidth = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};
		updateContainerWidth();
		window.addEventListener("resize", updateContainerWidth);

		return () => {
			window.removeEventListener("resize", updateContainerWidth);
		};
	}, []);

	return (
		<div
			className="relative flex flex-col items-stretch justify-start gap-5 lg:flex-row"
			ref={containerRef}
		>
			{cards.map((card, index) => (
				<Card
					key={card.id}
					onOpen={() => setActiveCard(index + 1)}
					card={card}
					open={activeCard === card.id}
					openWidth={openCardWidth}
					closedWidth={closedCardWidth}
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				/>
			))}
			{/* <motion.div variants={variants} animate={cursorVariant} className="fixed left-0 top-0">
				<Text className="rounded-3xl border border-gray-900 bg-white px-4 py-2 font-sometype-mono text-xl lowercase text-gray-700">
					Show
				</Text>
			</motion.div> */}
			<div className="absolute">
				<span className="block">{mousePosition.x}</span>
				<span className="block">{mousePosition.y}</span>
			</div>
		</div>
	);
};
