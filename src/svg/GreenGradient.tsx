type Props = {
	className?: string;
};
export const GreenGradient = ({ className = "" }: Props) => {
	return (
		<svg
			className={className}
			viewBox="0 0 1124 792"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_231_98"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="1124"
				height="792"
			>
				<rect y="0.0507812" width="1124" height="791.395" fill="#29E794" />
			</mask>
			<g mask="url(#mask0_231_98)">
				<ellipse
					cx="571.81"
					cy="396.598"
					rx="527.544"
					ry="313.285"
					fill="url(#paint0_radial_231_98)"
				/>
			</g>
			<defs>
				<radialGradient
					id="paint0_radial_231_98"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(571.81 396.598) rotate(90) scale(313.285 527.544)"
				>
					<stop stopColor="#A2FFD5" />
					<stop offset="1" stopColor="#EDEDED" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};
