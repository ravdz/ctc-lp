type Props = {
	className?: string;
};

export const PinkGradient = ({ className = "" }: Props) => {
	return (
		<svg className={className} viewBox="0 0 901 872" fill="none" xmlns="http://www.w3.org/2000/svg">
			<ellipse
				cx="450.411"
				cy="435.997"
				rx="450.021"
				ry="435.309"
				fill="url(#paint0_radial_231_97)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_231_97"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(450.411 435.997) rotate(90) scale(435.309 450.021)"
				>
					<stop stopColor="#FFE1E9" />
					<stop offset="1" stopColor="#EDEDED" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};
