import fs from "fs";
import path from "path";

export async function getFileData(fileName: string) {
	try {
		const filePath = path.join(process.cwd(), fileName);
		const contents = await fs.promises.readFile(filePath, "utf-8");
		return contents;
	} catch (error) {
		console.error("Error reading file:", error);
	}
}
