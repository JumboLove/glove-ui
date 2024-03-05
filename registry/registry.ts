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
];

export const registry: Registry = [...gloveUi, ...example];
