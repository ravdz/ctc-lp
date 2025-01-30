import { twMerge } from "tailwind-merge";

export const Container = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className={twMerge("px-6 lg:px-8", className)}>
			<div className="mx-auto max-w-3xl lg:max-w-7xl">{children}</div>
		</div>
	);
};
