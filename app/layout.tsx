import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "./site-config";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/sidebar-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Glove UI",
	description: `Components for gloved fingers, build with shadcn UI`,
	keywords: ["shadcn", "shadcn/ui", "radix ui", "tailwind"],
	authors: [
		{
			name: "David Witt",
			url: "https://davidwitt.me",
		},
	],
	creator: "David Witt",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: {
			url: "https://glove-ui.davidwitt.me/opengraph-image.jpg",
			height: 279,
			width: 408,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@davidwittness",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="smooth-scroll" lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					<div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
						<aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
							<ScrollArea className="h-full py-6 pr-6 lg:py-8">
								<SidebarNav />
							</ScrollArea>
						</aside>
						<main className="flex min-h-[calck(100vh-3.5rem)] flex-col justify-between scroll-smooth pt-6">
							{children}
						</main>
					</div>
					<footer className="py-6 md:px-8 md:py-0 border-t">
						<div className="container max-w-5xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
							<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
								Built by{" "}
								<a
									href={"https://twitter.com/davidwittness"}
									target="_blank"
									rel="noreferrer"
									className="font-medium underline underline-offset-4"
								>
									David Witt
								</a>
								.
							</p>
						</div>
					</footer>
				</ThemeProvider>
				{/* TODO replace with custom analytics */}
				{/* <Analytics /> */}
				<Toaster />
			</body>
		</html>
	);
}
