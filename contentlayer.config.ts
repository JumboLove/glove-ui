import { defineNestedType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

import { defineDocumentType } from "contentlayer/source-files";

export const Snippet = defineDocumentType(() => ({
	name: "Snippet",
	filePathPattern: `snippets/**/*.mdx`,
	contentType: "mdx",
	fields: {
		file: {
			type: "string",
			description: "The name of the snippet",
			required: true,
		},
		order: {
			type: "number",
			description: "The order of the snippet",
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
		},
	},
}));

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
	documentTypes: [Snippet, Component],
	//   mdx: {
	//     rehypePlugins: [
	//       [
	//         rehypePrettyCode,
	//         {
	//           keepBackground: false,
	//           theme: {
	//             dark: "github-dark",
	//             light: "github-light",
	//           },
	//         },
	//       ],
	//     ],
	//   },
});
