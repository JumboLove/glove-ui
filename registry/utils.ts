import { gloveUi, example } from "@/registry/registry";

export function getRegistryEntriesForComponent(componentName: string) {
	const uiRegistryItem = gloveUi.filter((item) => item.name === componentName);

	if (uiRegistryItem.length === 0) {
		throw `Component ${componentName} not found in registry`;
	}

	const examples = example.filter((item) =>
		item.registryDependencies?.includes(componentName)
	);

	return {
		item: uiRegistryItem[0],
		examples: examples,
	};
}

export function getComponent(name: string) {
	const uiItems = gloveUi.filter((item) => item.name === name);
	if (uiItems.length) {
		return uiItems[0];
	}
	const exampleItems = example.filter((item) => item.name === name);

	if (exampleItems.length) {
		return exampleItems[0];
	}
}
