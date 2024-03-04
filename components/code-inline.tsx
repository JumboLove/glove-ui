import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Code({ className, ...props }: ComponentProps<"code">) {
	return (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
				className
			)}
			{...props}
		/>
	);
}
