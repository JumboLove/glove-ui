"use client";

import { sidebarConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarNav() {
	const pathname = usePathname();
	return (
		<nav>
			<h3 className="sr-only">Sidebar</h3>

			{sidebarConfig.items.map((parent) => {
				return (
					<div key={parent.title} className="flex flex-col text-sm">
						<h4 className="font-semibold pb-2">{parent.title}</h4>
						{parent.items.map((link) => {
							return (
								<Link
									href={link.href}
									key={link.href}
									className={cn(
										"my-1 hover:underline",
										pathname === link.href
											? "font-medium text-foreground"
											: "text-muted-foreground"
									)}
								>
									{link.title}
								</Link>
							);
						})}
					</div>
				);
			})}
		</nav>
	);
}
