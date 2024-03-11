export const mainNavConfig = {
	links: [
		{
			title: "Setup",
			href: "/setup",
		},
		{
			title: "Components",
			href: "/components/button",
		},
	],
} as const;

export const mobileNavConfig = {
	links: [
		{
			title: "Setup",
			href: "/setup",
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
				{
					title: "Slider",
					href: "/components/slider",
				},
			],
		},
	],
} as const;
