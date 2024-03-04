import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Step({ className, ...props }: ComponentProps<"h3">) {
	return (
		<h3
			className={cn(
				"font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-4",
				className
			)}
			{...props}
		/>
	);
}

export function Steps({ ...props }) {
	return (
		<div
			className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
			{...props}
		/>
	);
}
