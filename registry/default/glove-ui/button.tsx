"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useLongPress } from "@/lib/glove-ui";
import { useId } from "react";

export const buttonVariants = cva(
	"items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

type Sizes = NonNullable<VariantProps<typeof buttonVariants>["size"]>;
const invisibleBoxSizeMap: Record<Sizes, string> = {
	default: "-top-2 -left-2 -bottom-2 -right-2",
	sm: "-top-3 -left-3 -bottom-3 -right-3",
	lg: "-top-2 -left-2 -bottom-2 -right-2",
	icon: "-top-3 -left-3 -bottom-3 -right-3",
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	popovertarget?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, asChild = false, children, id, ...props },
		ref
	) => {
		const Comp = asChild ? Slot : "button";
		const uniqueId = useId();
		const popoverId = `glove-ui-popover-${uniqueId}`;
		const btnId = id || `glove-ui-btn-${uniqueId}`;
		const popoverRef = React.useRef<HTMLDivElement>(null);
		const invisibleBoxSizeClasses = invisibleBoxSizeMap[size ?? "default"];

		// Only show popover during a long press
		const attrs = useLongPress(
			() => {
				popoverRef?.current?.showPopover();
			},
			{
				onStart: (event) => popoverRef?.current?.hidePopover(),
				onFinish: (event) => popoverRef?.current?.hidePopover(),
				onCancel: (event) => popoverRef?.current?.hidePopover(),
				onRelease: (event) =>
					setTimeout(() => {
						popoverRef?.current?.hidePopover();
					}, 0),
			}
		);

		return (
			<>
				<Comp
					className={cn(
						"relative inline-flex",
						buttonVariants({ variant, size, className })
					)}
					ref={ref}
					popovertarget={popoverId}
					id={btnId}
					{...props}
					{...attrs}
				>
					{/* Invisible box that makes click target bigger than the visible checkbox */}
					<div
						className={cn("absolute debug-bg", invisibleBoxSizeClasses)}
						aria-hidden="true"
					></div>
					{children}
				</Comp>

				<div
					id={popoverId}
					ref={popoverRef}
					// @ts-ignore
					popover="auto"
					anchor={btnId}
					className={cn(
						buttonVariants({ variant }),
						"shadow-md",
						"dark:border-border",
						"dark:border",
						"my-4",
						"-translate-x-1/2"
					)}
				>
					{children}
				</div>
			</>
		);
	}
);
Button.displayName = "Button";
