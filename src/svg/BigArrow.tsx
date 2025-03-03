type Props = {
	className?: string;
};

export const BigArrow = ({ className = "" }: Props) => {
	return (
		<svg className={className} viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M72.375 149.791H149.797V72.3685"
				stroke="#29E794"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<path
				d="M148.954 148.952L38.7109 38.709"
				stroke="#29E794"
				strokeWidth="3"
				strokeLinecap="round"
			/>
		</svg>
	);
};
