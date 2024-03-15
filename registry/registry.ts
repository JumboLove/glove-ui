// @ts-nocheck
import { type Registry } from "@/registry/schema";
import { lazy } from "react";

export const gloveUi: Registry = [
	{
		name: "button",
		title: "Button",
		type: "components:ui",
		dependencies: ["@radix-ui/react-slot"],
		files: ["glove-ui/button.tsx"],
		component: lazy(() => import("@/registry/default/glove-ui/button")),
	},
	{
		name: "checkbox",
		title: "Checkbox",
		type: "components:ui",
		dependencies: ["@radix-ui/react-checkbox"],
		files: ["glove-ui/checkbox.tsx"],
		component: lazy(() => import("@/registry/default/glove-ui/checkbox")),
	},
	{
		name: "radio-group",
		title: "Radio Group",
		type: "components:ui",
		dependencies: ["@radix-ui/react-radio-group"],
		files: ["glove-ui/radio-group.tsx"],
		component: lazy(() => import("@/registry/default/glove-ui/radio-group")),
	},
	{
		name: "slider",
		title: "Slider",
		type: "components:ui",
		dependencies: [" @radix-ui/react-slider"],
		files: ["glove-ui/slider.tsx"],
		component: lazy(() => import("@/registry/default/glove-ui/slider")),
	},
];

export const example: Registry = [
	{
		name: "button-demo",
		type: "components:example",
		registryDependencies: ["button"],
		files: ["example/button-demo.tsx"],
		component: lazy(() => import("@/registry/default/example/button-demo")),
	},
	{
		name: "button-large-small",
		type: "components:example",
		registryDependencies: ["button"],
		files: ["example/button-large-small.tsx"],
		component: lazy(
			() => import("@/registry/default/example/button-large-small")
		),
	},
	{
		name: "button-variants",
		type: "components:example",
		registryDependencies: ["button"],
		files: ["example/button-variants.tsx"],
		component: lazy(() => import("@/registry/default/example/button-variants")),
	},
	{
		name: "button-disabled",
		type: "components:example",
		registryDependencies: ["button"],
		files: ["example/button-disabled.tsx"],
		component: lazy(() => import("@/registry/default/example/button-disabled")),
	},
	{
		name: "checkbox-demo",
		type: "components:example",
		registryDependencies: ["checkbox"],
		files: ["example/checkbox-demo.tsx"],
		component: lazy(() => import("@/registry/default/example/checkbox-demo")),
	},
	{
		name: "checkbox-large",
		type: "components:example",
		registryDependencies: ["checkbox"],
		files: ["example/checkbox-large.tsx"],
		component: lazy(() => import("@/registry/default/example/checkbox-large")),
	},
	{
		name: "checkbox-disabled",
		type: "components:example",
		registryDependencies: ["checkbox"],
		files: ["example/checkbox-disabled.tsx"],
		component: lazy(
			() => import("@/registry/default/example/checkbox-disabled")
		),
	},
	{
		name: "radio-group-demo",
		type: "components:example",
		registryDependencies: ["radio-group"],
		files: ["example/radio-group-demo.tsx"],
		component: lazy(
			() => import("@/registry/default/example/radio-group-demo")
		),
	},
	{
		name: "radio-group-disabled",
		type: "components:example",
		registryDependencies: ["radio-group"],
		files: ["example/radio-group-disabled.tsx"],
		component: lazy(
			() => import("@/registry/default/example/radio-group-disabled")
		),
	},
	{
		name: "slider-demo",
		type: "components:example",
		registryDependencies: ["slider"],
		files: ["example/slider-demo.tsx"],
		component: lazy(() => import("@/registry/default/example/slider-demo")),
	},
	{
		name: "slider-custom-label",
		type: "components:example",
		registryDependencies: ["slider"],
		files: ["example/slider-custom-label.tsx"],
		component: lazy(
			() => import("@/registry/default/example/slider-custom-label")
		),
	},
	{
		name: "slider-multiple-thumbs",
		type: "components:example",
		registryDependencies: ["slider"],
		files: ["example/slider-multiple-thumbs.tsx"],
		component: lazy(
			() => import("@/registry/default/example/slider-multiple-thumbs")
		),
	},
];

export const registry: Registry = [...gloveUi, ...example];
