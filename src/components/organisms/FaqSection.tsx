"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { BigArrow } from "@/svg/BigArrow";
import { Text } from "@/components/atoms/Text";

type Props = {
	className?: string;
	heading: string;
	items: {
		id: number;
		question: string;
		answer: React.ReactNode;
	}[];
};

export const FaqSection = ({ heading, items, className = "" }: Props) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<section>
			<Container className={`py-10 ${className}`}>
				<div>
					<Heading is="h2" className="mb-7 font-normal">
						{heading}
					</Heading>
					<dl className="flex w-full flex-col gap-4">
						{items.map(({ question, answer, id }, index) => (
							<div key={id} className="w-full border-b border-green-200 pt-6">
								<dt
									className="flex items-center justify-between"
									onClick={() => toggleItem(index)}
									style={{ cursor: "pointer" }}
								>
									<Heading is="h3" className="mb-3 font-normal">
										{question}
									</Heading>
									<BigArrow className={`w-16 ${openIndex === index ? "rotate-180" : ""}`} />
								</dt>
								<AnimatePresence initial={false}>
									{openIndex === index && (
										<motion.dd
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											style={{ overflow: "hidden" }}
											transition={{ duration: 0.3 }}
										>
											<Text className="block py-7 text-base text-gray-900">{answer}</Text>
										</motion.dd>
									)}
								</AnimatePresence>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</section>
	);
};
