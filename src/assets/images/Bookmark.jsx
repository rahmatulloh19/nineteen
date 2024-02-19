export const Bookmark = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={540}
		height={500}
		viewBox="0 0 540 500"
		fill="none"
		{...props}>
		<rect width={540} height={500} fill="#4F63D8" />
		<mask
			id="mask0_0_1947"
			style={{ maskType: "luminance" }}
			maskUnits="userSpaceOnUse"
			x={0}
			y={0}
			width={540}
			height={500}>
			<rect width={540} height={500} fill="white" />
		</mask>
		<g mask="url(#mask0_0_1947)">
			<g filter="url(#filter0_d_0_1947)">
				<rect x={54} y={50} width={432} height="1084.8" fill="url(#pattern0)" />
			</g>
		</g>
		<defs>
			<filter
				id="filter0_d_0_1947"
				x={54}
				y={50}
				width={452}
				height="1104.8"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx={20} dy={20} />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.147563 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1947" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1947" result="shape" />
			</filter>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
				<use xlinkHref="#image0_0_1947" transform="scale(0.000694444 0.000276549)" />
			</pattern>
			<image
				id="image0_0_1947"
				width={1440}
				height={3616}
			/>
		</defs>
	</svg>
);