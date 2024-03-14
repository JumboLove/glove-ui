import type { SVGAttributes } from "react";

export default function TooltipAboveIcon(props: SVGAttributes<SVGSVGElement>) {
	const { className, ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 22 22"
			{...restProps}
			className={className}
		>
			<path
				fill="currentColor"
				d="M2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1V1m1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3H3Z"
			></path>
		</svg>
	);
}
