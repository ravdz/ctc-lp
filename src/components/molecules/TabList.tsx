import { twMerge } from "tailwind-merge";
import { Button } from "@/components/atoms/Button";

type Props = {
	className?: string;
	tabs: {
		id: number;
		label: string;
	}[];
	activeTab: number;
	onTabChange: (tabId: number) => void;
};

export const TabList = ({ tabs, activeTab, onTabChange, className = "" }: Props) => {
	return (
		<div className={twMerge("flex items-center justify-start gap-3", className)}>
			{tabs.map((tab) => (
				<Button
					className="text-sm sm:text-base"
					onClick={() => onTabChange(tab.id)}
					key={tab.id}
					variant={activeTab === tab.id ? "primary-reverse" : "primary"}
				>
					{tab.label}
				</Button>
			))}
		</div>
	);
};
