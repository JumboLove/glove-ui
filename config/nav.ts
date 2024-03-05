export const mainNavConfig = {
	links: [
		{
			title: "Setup",
			href: "/setup",
		},
		{
			title: "Components",
			href: "/components",
		},
	],
} as const;

export const sidebarConfig = {
	items: [
		{
			title: "Components",
			items: [
				{
					title: "Button",
					href: "/components/button",
				},
				{
					title: "Checkbox",
					href: "/components/checkbox",
				},
			],
		},
	],
} as const;