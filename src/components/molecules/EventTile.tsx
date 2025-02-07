import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";

type Props = {
	event?: {
		id: number;
		badge: string;
		prefix: string;
		title: string;
		description: string;
		date: string;
		link: {
			url: string;
			label: string;
		};
	};
};

export const EventTile = ({ event }: Props) => {
	return (
		<li>
			<article
				className={`flex h-full w-full flex-col items-stretch justify-between gap-14 rounded-xl px-6 pb-10 pt-5 ${event ? "bg-green-500" : "bg-gray-50"}`}
			>
				<div className="flex flex-wrap items-start justify-start gap-4">
					{event ? (
						<Badge>{event.badge}</Badge>
					) : (
						<>
							<Badge className="h-7.5 w-28 bg-gray-400" />
							<Badge className="h-7.5 w-14 bg-gray-400" />
						</>
					)}
				</div>

				<header className="flex flex-col items-start justify-start gap-2">
					{event && (
						<Text className="text-md text-gray-900" is="p">
							{event.prefix}
						</Text>
					)}
					<div>
						<Heading is="h3" className={`text-3xl ${event ? "text-gray-900" : "text-gray-400"}`}>
							{event?.title || (
								<>
									To be <br></br>announced...
								</>
							)}
						</Heading>
					</div>
					{event && (
						<Text className="text-md text-gray-900" is="p">
							{event.description}
						</Text>
					)}
				</header>

				<div className={`flex flex-col items-end justify-start ${event ? "gap-4" : "gap-2"}`}>
					<Text
						className={`ml-auto font-sometype-mono text-md lowercase ${event ? "tecxt-brown-600" : "text-gray-400"}`}
					>
						Invite only
					</Text>
					{event && <Text className="text-3xl uppercase text-gray-900">{event.date}</Text>}
					<Button className="pr-1" href={event?.link.url} hasArrow disabled={!event}>
						{event?.link.label || "request a membership invite"}
					</Button>
				</div>
			</article>
		</li>
	);
};
