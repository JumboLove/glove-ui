import { defineNestedType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeComponent } from "./lib/rehype-component";

import { defineDocumentType } from "contentlayer/source-files";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: "dracula-soft",
};

const LinksProperties = defineNestedType(() => ({
	name: "LinksProperties",
	fields: {
		doc: {
			type: "string",
		},
		api: {
			type: "string",
		},
	},
}));

export const Component = defineDocumentType(() => ({
	name: "Component",
	filePathPattern: `components/**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		published: {
			type: "boolean",
			default: true,
		},
		links: {
			type: "nested",
			of: LinksProperties,
		},
		featured: {
			type: "boolean",
			default: false,
			required: false,
		},
		component: {
			type: "boolean",
			default: false,
			required: false,
		},
		toc: {
			type: "boolean",
			default: true,
			required: false,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
		},
		slugAsParams: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Component],
	mdx: {
		rehypePlugins: [rehypeComponent, [rehypePrettyCode, prettyCodeOptions]],
	},
});
