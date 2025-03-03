type Props = {
	className?: string;
};

export const BlueGradient = ({ className = "" }: Props) => {
	return (
		<svg
			className={className}
			viewBox="0 0 394 1149"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse
				cx="-17.7993"
				cy="577.564"
				rx="577.295"
				ry="411.479"
				transform="rotate(90 -17.7993 577.564)"
				fill="url(#paint0_radial_325_202)"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_325_202"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-17.7993 577.564) rotate(90) scale(411.479 577.295)"
				>
					<stop stopColor="#A8ADF1" />
					<stop offset="1" stopColor="#EDEDED" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	);
};
