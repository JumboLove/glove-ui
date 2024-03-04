import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { mainNavConfig } from "@/config/nav";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MobileNav />
				<Link href={"/"} className="mr-4">
					Glove UI
				</Link>
				<MainNav />
				<div className="ml-auto">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

function MainNav() {
	return (
		<div className="mr-4 hidden md:flex">
			{mainNavConfig.links.map((link) => {
				return (
					<Link
						href={link.href}
						key={link.href}
						className="flex items-center p-2"
					>
						{link.title}
					</Link>
				);
			})}
		</div>
	);
}
