"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";
import type { SVGAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const checkboxVariants = cva(
	"relative peer p-0 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
	{
		variants: {
			size: {
				default: "h-4 w-4",
				lg: "h-6 w-6",
			},
		},
		defaultVariants: {
			size: "default",
		},
	}
);

// Invisible Box Sizes should absolutely position around
// the visible box and sit center over it
// (invisible box size - visible box size) / 2
type Sizes = NonNullable<VariantProps<typeof checkboxVariants>["size"]>;
const invisibleBoxSizeMap: Record<Sizes, string> = {
	default: "-top-4 -left-4",
	lg: "-top-3 -left-3",
};

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
		VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, size, ...props }, ref) => {
	const invisibleBoxSizeClasses = invisibleBoxSizeMap[size ?? "default"];
	return (
		<CheckboxPrimitive.Root
			ref={ref}
			className={cn(checkboxVariants({ size }), className)}
			{...props}
		>
			{/* Invisible box that makes click target bigger than the visible checkbox */}
			<div
				className={cn("h-12 w-12 absolute", invisibleBoxSizeClasses)}
				aria-hidden="true"
			></div>
			<CheckboxPrimitive.Indicator
				className={cn("flex items-center justify-center text-current")}
			>
				<CheckBoxIcon className="w-full h-full" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const CheckboxLabel = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, children, ...props }, ref) => (
	<label
		ref={ref}
		{...props}
		className={cn(
			"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
			className
		)}
	>
		{children}
	</label>
));
CheckboxLabel.displayName = "CheckboxLabel";

function CheckBoxIcon(props: SVGAttributes<SVGSVGElement>) {
	const { className, ...restProps } = props;
	return (
		<svg
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
			<path d="M20 6L9 17l-5-5" />
		</svg>
	);
}

export { Checkbox, CheckboxLabel };
