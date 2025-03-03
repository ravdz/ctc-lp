type Props = {
	className?: string;
};

export const RedGradient = ({ className }: Props) => {
	return (
		<svg className={className} viewBox="0 0 901 872" fill="none" xmlns="http://www.w3.org/2000/svg">
			<ellipse
				cx="450.411"
				cy="436.001"
				rx="450.021"
				ry="435.309"
				fill="url(#paint0_radial_292_94)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_292_94"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(450.411 436.001) rotate(90) scale(435.309 450.021)"
				>
					<stop stopColor="#FFE1E9" />
					<stop offset="1" stopColor="#EDEDED" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};
