export const Manage = (props) => {
	return (
		<svg
			width={540}
			height={500}
			{...props}
			viewBox="0 0 540 500"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
			<rect width={540} height={500} fill="#FFEFEC" />
			<mask
				id="mask0_0_1908"
				style={{ maskType: "luminance" }}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={540}
				height={500}>
				<rect width={540} height={500} fill="white" />
			</mask>
			<g mask="url(#mask0_0_1908)">
				<g filter="url(#filter0_d_0_1908)">
					<rect x={54} y={50} width={432} height={790} fill="url(#pattern0)" />
				</g>
			</g>
			<defs>
				<filter
					id="filter0_d_0_1908"
					x={8}
					y={6}
					width={524}
					height={882}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={2} />
					<feGaussianBlur stdDeviation={23} />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.952941 0 0 0 0 0.376471 0 0 0 0 0.235294 0 0 0 0.0962085 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1908" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_0_1908"
						result="shape"
					/>
				</filter>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
					<use xlinkHref="#image0_0_1908" transform="scale(0.000347222 0.000189466)" />
				</pattern>
				<image
					id="image0_0_1908"
					width={2880}
					height={5278}
				/>
			</defs>
		</svg>
	);
};