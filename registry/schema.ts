import { z } from "zod";

export const registryItem = z.object({
	name: z.string(),
	dependencies: z.array(z.string()).optional(),
	devDependencies: z.array(z.string()).optional(),
	registryDependencies: z.array(z.string()).optional(),
	files: z.array(z.string()),
	component: z.function().returns(z.any()),
	type: z.enum(["components:ui", "components:component", "components:example"]),
});

export type RegistryItem = z.infer<typeof registryItem>;

export const registrySchema = z.array(registryItem);

export type Registry = z.infer<typeof registrySchema>;
