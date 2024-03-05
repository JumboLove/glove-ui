import { getFileData } from "@/utils/fileUtils";
import Pre from "@/components/pre";
import { codeToHtml } from "shiki";
import { Code } from "./code-inline";

export async function FileCodeBlock({ fileName }: { fileName: string }) {
	const language = fileName.split(".")[1];
	const fileData = await getFileData(fileName);

	if (!fileData) {
		return (
			<span>
				No file <Code>{fileName}</Code> found.
			</span>
		);
	}
	const html = await codeToHtml(fileData, {
		lang: language,
		theme: "dracula-soft",

		transformers: [
			{
				pre(node) {
					node.tagName = "div";
				},
			},
		],
	});

	return <Pre dangerouslySetInnerHTML={{ __html: html }} />;
}
