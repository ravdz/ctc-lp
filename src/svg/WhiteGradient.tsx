type Props = {
	className?: string;
};

export const WhiteGradient = ({ className }: Props) => {
	return (
		<svg viewBox="0 0 138 152" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path
				d="M136.683 131.82C144.348 211.718 85.2155 282.756 4.6085 290.489C-75.9985 298.222 -147.558 239.721 -155.223 159.824C-162.888 79.926 -103.755 8.88738 -23.1483 1.1545C57.4587 -6.57837 129.019 51.9225 136.683 131.82Z"
				fill="url(#paint0_radial_231_592)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_231_592"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-12.0847 149.536) rotate(84.5202) scale(145.332 146.623)"
				>
					<stop stopColor="#FFE1E9" />
					<stop offset="1" stopColor="#EDEDED" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};
