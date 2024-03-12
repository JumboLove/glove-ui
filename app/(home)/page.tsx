"use client";
import Hero from "@/app/(home)/sections/hero";
import Props from "@/app/(home)/sections/props";
import Setup from "@/app/(home)/sections/setup";
import Variants from "@/app/(home)/sections/variants";
import React from "react";

export default function Home() {
	return (
		<>
			<Hero />
			<Setup />
			<Variants />
			<Props />
			<aside className="ml-20 hidden text-sm xl:block">
				<div className="sticky top-10 text-sm">
					<h3 className="font-medium mb-6 whitespace-nowrap">On this page</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<a href="#setup" className="text-muted-foreground font-light">
								Setup
							</a>
						</li>
						<li>
							<a href="#usage" className="text-muted-foreground font-light">
								Usage
							</a>
						</li>
						<li>
							<a href="#variants" className="text-muted-foreground font-light">
								Variants
							</a>
						</li>
						<li>
							<a href="#props" className="text-muted-foreground font-light">
								Props
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	);
}
