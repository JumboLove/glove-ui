import { PageHeader } from "@/components/page-header";
import { sidebarConfig } from "@/config/nav";
import Link from "next/link";

export default function ComponentsPage() {
	const componentItems = sidebarConfig.items[0].items;

	return (
		<>
			<PageHeader>Components</PageHeader>
			<div className="flex flex-col gap-4 py-6">
				{componentItems.map((component) => {
					return (
						<Link href={component.href} key={component.title}>
							{component.title}
						</Link>
					);
				})}
			</div>
		</>
	);
}
