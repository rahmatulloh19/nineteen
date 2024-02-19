export const Insure = (props) => {
	return (
		<svg
			width={540}
			height={500}
			{...props}
			viewBox="0 0 540 500"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink">
			<rect width={540} height={500} fill="#9A99AB" />
			<mask
				id="mask0_0_1923"
				style={{ maskType: "luminance" }}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={540}
				height={500}>
				<rect width={540} height={500} fill="white" />
			</mask>
			<g mask="url(#mask0_0_1923)">
				<rect x={54} y={50} width={432} height={723} fill="url(#pattern0)" />
			</g>
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
					<use xlinkHref="#image0_0_1923" transform="scale(0.000694444 0.000414938)" />
				</pattern>
				<image
					id="image0_0_1923"
					width={1440}
					height={2410}
				/>
			</defs>
		</svg>
	);
};