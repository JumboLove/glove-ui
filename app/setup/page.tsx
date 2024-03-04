import CodeBlock from "@/components/code-block";
import { Code } from "@/components/code-inline";
import { PageHeader } from "@/components/page-header";
import { Step, Steps } from "@/components/steps";
import Link from "next/link";

export default function SetupPage() {
	return (
		<div>
			<PageHeader>Setup</PageHeader>
			<Steps>
				<Step>Install Shadcn via CLI</Step>
				<div>
					<p>
						Run the <Code>shadcn-ui</Code> init command to setup your project:
					</p>
					<CodeBlock value={"npx shadcn-ui@latest init"} className="my-4" />
					<p>Glove UI currently works for Typescript projects.</p>
					<p>JSX components coming soon...</p>
				</div>
				<Step>
					Create a <Code>glove-ui</Code> folder
				</Step>
				<p>
					This folder should be a sibling of the <Code>ui</Code> folder, as
					these components will coexist together, but never overwrite each other
				</p>
				<Step>Copy components into your project</Step>
				<p>
					All components are single files that will inherit shadcn/ui themes
				</p>
				<p>
					<Link
						href="/components"
						className="underline underline-offset-2 hover:underline-offset-4 transition-all"
					>
						Browse Components
					</Link>
				</p>
			</Steps>
		</div>
	);
}
