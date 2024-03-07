"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

/**
 * TODO
 * - [ ] add extra click/drag area
 * - [ ] add popover that travels with the thumb
 * - [x] borrow popover in/out animations
 * - [ ] component for the popover label?
 */
const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
	const [popoverVisible, setPopoverVisible] = React.useState(false);
	const [proxiedValue, setProxiedValue] = React.useState(
		props.defaultValue ?? 0
	);
	return (
		<SliderPrimitive.Root
			onPointerDown={() => setPopoverVisible(true)}
			onPointerUp={() => setPopoverVisible(false)}
			onValueChange={(value) => setProxiedValue(value)}
			ref={ref}
			className={cn(
				"relative flex w-full touch-none select-none items-center",
				className
			)}
			{...props}
		>
			<SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
				<SliderPrimitive.Range className="absolute h-full bg-primary" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
				{/* Invisible box that makes click target bigger than the visible thumb */}
				<div
					className="h-12 w-12 -top-4 -left-4 absolute debug-bg"
					aria-hidden="true"
				></div>
				{/* Popover visible while dragging */}
				<div
					className={cn(
						"z-50 absolute bottom-10 left-2 -translate-x-1/2 pointer-events-none text-lg"
					)}
				>
					<div
						className={cn(
							popoverVisible && "animate-in slide-in-from-bottom-6",
							!popoverVisible && "invisible"
						)}
					>
						{proxiedValue}
					</div>
				</div>
			</SliderPrimitive.Thumb>
		</SliderPrimitive.Root>
	);
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
