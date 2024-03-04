import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "./site-config";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Glove UI",
	description: `Beautiful components for gloved fingers that you can copy and paste into your project.`,
	keywords: ["shadcn", "tag input", "shadcn/ui", "input", "radix ui"],
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
		<html className="smooth-scroll" lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SiteHeader />
					<div className="container max-w-5xl py-4 flex justify-between">
						<main className="w-full flex min-h-screen flex-col justify-between scroll-smooth">
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
				<Analytics />
				<Toaster />
			</body>
		</html>
	);
}
