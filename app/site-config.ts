export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	links: {
		twitter: string;
		github: string;
	};
};

export const siteConfig: SiteConfig = {
	name: "Glove UI",
	description:
		"Beautiful shadcn UI components for gloved fingers that you can copy and paste into your project.",
	url: "https://TODO.com",
	links: {
		twitter: "https://twitter.com/davidwittness",
		github: "https://github.com/JumboLove/glove-ui",
	},
};
