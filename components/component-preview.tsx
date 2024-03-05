import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getComponent } from "@/registry/utils";
import { Suspense, useMemo, Children, HTMLAttributes } from "react";

interface ComponentPreviewProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
}

export function ComponentPreview({ name, children }: ComponentPreviewProps) {
	const Codes = Children.toArray(children) as React.ReactElement[];
	// TODO configure syles to load from local state
	const Code = Codes[0];

	const codeString = useMemo(() => {
		if (
			typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
		) {
			const [, Button] = Children.toArray(
				Code.props.children
			) as React.ReactElement[];
			return Button?.props?.value || Button?.props?.__rawString__ || null;
		}
	}, [Code]);

	return (
		<Tabs defaultValue="preview">
			<TabsList>
				<TabsTrigger value="preview">Preview</TabsTrigger>
				<TabsTrigger value="code">Code</TabsTrigger>
			</TabsList>
			<TabsContent value="preview">
				<Preview name={name} />
			</TabsContent>
			<TabsContent value="code">
				<div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
					{Code}
				</div>
			</TabsContent>
		</Tabs>
	);
}

function Preview({ name }: { name: string }) {
	const Preview = useMemo(() => {
		const registryItem = getComponent(name);
		const Component = registryItem?.component;

		if (!Component) {
			return (
				<p className="">
					Component{" "}
					<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
						{name}
					</code>{" "}
					not found in registry.
				</p>
			);
		}

		return <Component />;
	}, [name]);

	return (
		<div className="p-4 flex items-center justify-center min-h-[340px] border rounded-md ">
			<Suspense fallback={<div>Loading...</div>}>{Preview}</Suspense>
		</div>
	);
}
