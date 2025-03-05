"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Card, type ICard } from "@/components/organisms/Cards/partials/Card";

const MAX_CARDS = 4;

type Props = {
	cards: ICard[];
};

export const Cards = (props: Props) => {
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
		<div className="flex flex-col items-stretch justify-start gap-5 lg:flex-row" ref={containerRef}>
			{cards.map((card, index) => (
				<Card
					key={card.id}
					onOpen={() => setActiveCard(index + 1)}
					card={card}
					open={activeCard === card.id}
					openWidth={openCardWidth}
					closedWidth={closedCardWidth}
				/>
			))}
		</div>
	);
};
