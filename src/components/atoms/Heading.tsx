import { twMerge } from "tailwind-merge";
import { useMemo } from "react";

type Props = {
	is?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
	className?: string;
};

export const Heading = ({ is = "h1", children, className = "" }: Props) => {
	const classes = useMemo(() => {
		let defaultClasses = "text-base font-normal text-gray-900 font-montserrat";
		switch (is) {
			case "h1":
				defaultClasses = twMerge(defaultClasses, "text-4xl");
				break;
			case "h2":
				defaultClasses = twMerge(defaultClasses, "text-3xl");
				break;
			case "h3":
				defaultClasses = twMerge(defaultClasses, "text-2xl");
				break;
			case "h4":
				defaultClasses = twMerge(defaultClasses, "text-xl");
				break;
			case "h5":
				defaultClasses = twMerge(defaultClasses, "text-lg");
				break;
			case "h6":
				defaultClasses = twMerge(defaultClasses, "text-base");
				break;
		}
		return twMerge(defaultClasses, className);
	}, [is, className]);

	const Tag = is;

	return <Tag className={classes}>{children}</Tag>;
};
