"use client";
import { useState, useMemo } from "react";
import { AnimatedArrowDown } from "../atoms/AnimatedArrowDown";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { EventTile } from "@/components/molecules/EventTile";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";

const events = [
	{
		id: 1,
		badges: ["founders", "scale-ups", "A/B stage"],
		isFlagship: false,
		color: "bg-green-500",
		prefix: "CTS exclusive deepdive:",
		title: "War stories from the Dealroom",
		description: "with Philip de Roos (founder De Roos)",
		image: "/img/16.jpeg",
		date: new Date(Date.UTC(2025, 2, 4)),
		location: {
			place: "De Roos office",
			city: "Amsterdam",
			country: "Netherlands",
		},
		link: {
			url: "/",
			label: "read more",
		},
	},
	{
		id: 2,
		badges: ["founders", "investors"],
		isFlagship: true,
		color: "bg-green-600",
		prefix: "Flagship event:",
		title: "Climate Tech Summit 2025",
		description: "Ghent (Belgium)",
		image: "/img/1.png",
		date: new Date(Date.UTC(2025, 9, 9)),
		location: {
			place: "Wintercircus",
			city: "Ghent",
			country: "Belgium",
		},
		link: {
			url: "/",
			label: "read more",
		},
	},
	{
		id: 3,
		badges: ["founders", "investors"],
		isFlagship: true,
		color: "bg-blue-400",
		prefix: "Flagship event:",
		title: "CLIMATE TECH SUMMIT 2024",
		description: "Amsterdam (the Netherlands)",
		image: "/img/26.png",
		date: new Date(Date.UTC(2022, 9, 22)),
		location: {
			place: "POSTHOORNKERK",
			city: "Amsterdam",
			country: "Netherlands",
		},
		link: {
			url: "/",
			label: "read more",
		},
	},
];

const tabs = [
	{
		id: 1,
		label: "2025",
	},
	{
		id: 2,
		label: "Past events",
	},
];

export const UpcomingEventsFeed = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const filteredEvents = useMemo(() => {
		return events.filter((event) => {
			if (activeTab === 1) {
				return event.date.getFullYear() === 2025;
			} else if (activeTab === 2) {
				return event.date < new Date();
			}
			return false;
		});
	}, [activeTab]);

	return (
		<section id="events">
			<Container className="md:py-22 overflow-hidden py-16 pt-24 md:pt-32">
				<div className="relative">
					<AnimatedArrowDown className="absolute bottom-full left-0 -translate-y-6" />
					<Heading is="h2" className="mb-7">
						Upcoming events
					</Heading>
					<div className="mb-7 flex items-center justify-start gap-3">
						{tabs.map((tab) => (
							<Button
								onClick={() => setActiveTab(tab.id)}
								key={tab.id}
								variant={activeTab === tab.id ? "secondary" : "primary"}
							>
								{tab.label}
							</Button>
						))}
					</div>
					{filteredEvents.length ? (
						<ul className="grid grid-cols-1 items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
							{filteredEvents.map((event) => (
								<EventTile key={event.id} event={event} />
							))}
						</ul>
					) : (
						<Text className="block w-full text-center">No events found</Text>
					)}
				</div>
			</Container>
		</section>
	);
};
