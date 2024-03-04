import { notFound } from "next/navigation";
import { allComponents } from "contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx";

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
			<div className="pt-8 pb-12">
				<Mdx code={doc.body.code} />
			</div>
		</div>
	);
}
