type Props = {
	className?: string;
};

export const ArrowDown = ({ className = "" }: Props) => (
	<svg className={className} viewBox="0 0 50 71" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 45L25 68L48 45" strokeWidth="3" strokeLinecap="round" />
		<path d="M25 67.5V2" strokeWidth="3" strokeLinecap="round" />
	</svg>
);
