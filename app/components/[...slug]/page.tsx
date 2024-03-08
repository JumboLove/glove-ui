import { notFound } from "next/navigation";
import { allComponents } from "contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";

interface ComponentPageProps {
	params: {
		slug: string[];
	};
}

async function getComponentFromParams({ params }: ComponentPageProps) {
	const slug = params.slug?.join("/") || "";
	const component = allComponents.find((comp) => comp.slugAsParams === slug);

	if (!component) {
		return null;
	}

	return component;
}

export async function generateStaticParams(): Promise<
	ComponentPageProps["params"][]
> {
	return allComponents.map((component) => ({
		slug: component.slugAsParams.split("/"),
	}));
}

export default async function ComponentsPage({ params }: ComponentPageProps) {
	const doc = await getComponentFromParams({ params });

	if (!doc) {
		notFound();
	}

	return (
		<div>
			<h1 className="font-heading mt-2 scroll-m-20 text-4xl font-bold">
				{doc.title}
			</h1>
			{doc.description && (
				<p className="text-lg text-muted-foreground">{doc.description}</p>
			)}
			{doc.links ? (
				<div className="flex items-center space-x-2 pt-4">
					{doc.links?.doc && (
						<Link
							href={doc.links.doc}
							target="_blank"
							rel="noreferrer"
							className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
						>
							Docs
							<ExternalLinkIcon className="h-3 w-3" />
						</Link>
					)}
					{doc.links?.api && (
						<Link
							href={doc.links.api}
							target="_blank"
							rel="noreferrer"
							className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
						>
							API Reference
							<ExternalLinkIcon className="h-3 w-3" />
						</Link>
					)}
				</div>
			) : null}
			<div className="pt-8 pb-12">
				<Mdx code={doc.body.code} />
			</div>
		</div>
	);
}
