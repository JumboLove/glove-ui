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
	description: "Components for gloved fingers, build with shadcn UI",
	url: "https://TODO.com",
	links: {
		twitter: "https://twitter.com/davidwittness",
		github: "https://github.com/JumboLove/glove-ui",
	},
};
