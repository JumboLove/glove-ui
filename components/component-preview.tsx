"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getComponent } from "@/registry/utils";
import {
	Suspense,
	useMemo,
	Children,
	HTMLAttributes,
	useState,
	useRef,
	LegacyRef,
	MouseEventHandler,
} from "react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Inspect, Hand } from "lucide-react";
import { useMouse } from "@uidotdev/usehooks";
import { clamp } from "@/utils/math";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface ComponentPreviewProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
}

export default function ComponentPreview({
	name,
	children,
}: ComponentPreviewProps) {
	const Codes = Children.toArray(children) as React.ReactElement[];
	// TODO configure syles to load from local state
	const Code = Codes[0];

	// const codeString = useMemo(() => {
	// 	if (
	// 		typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
	// 	) {
	// 		const [, Button] = Children.toArray(
	// 			Code.props.children
	// 		) as React.ReactElement[];
	// 		return Button?.props?.value || Button?.props?.__rawString__ || null;
	// 	}
	// }, [Code]);

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
	const [debugActive, setDebugActive] = useState(false);
	const [handActive, setHandActive] = useState(false);
	const [mouse, ref] = useMouse();
	const parentRef = useRef<HTMLDivElement>(null);

	function toggleDebug() {
		setDebugActive(!debugActive);
	}

	function toggleHand() {
		setHandActive(!handActive);
	}

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
		<div
			className={cn(handActive && "custom-cursor-active")}
			ref={parentRef}
			onMouseLeave={() => setHandActive(false)}
		>
			<div
				ref={ref as LegacyRef<HTMLDivElement> | undefined}
				className={cn(
					"p-4 flex items-center justify-center min-h-[340px] border rounded-md relative",
					debugActive && "debug-active"
				)}
			>
				<Suspense fallback={<div>Loading...</div>}>{Preview}</Suspense>
				<div className="absolute bottom-2 left-2 flex flex-col gap-2">
					<GloveToggle onClick={toggleHand} />
					<DebugToggle onClick={toggleDebug} />
				</div>
				{handActive && (
					<CustomCursor
						{...mouse}
						parentWidth={parentRef?.current?.offsetWidth ?? 0}
						parentHeight={parentRef?.current?.offsetHeight ?? 0}
					/>
				)}
			</div>
		</div>
	);
}

function GloveToggle({ onClick }: { onClick: MouseEventHandler }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span>
						<Toggle onClick={onClick} aria-label="toggle glove cursor">
							{/* TODO replace with custom glove icon */}
							<Hand className="h-4 w-4" />
						</Toggle>
					</span>
				</TooltipTrigger>
				<TooltipContent>
					<p>Try the UI with gloves on</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

function DebugToggle({ onClick }: { onClick: MouseEventHandler }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span>
						<Toggle onClick={onClick} aria-label="toggle debug">
							<Inspect className="h-4 w-4" />
						</Toggle>
					</span>
				</TooltipTrigger>
				<TooltipContent>
					<p>Show interaction area</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

type CustomCursorProps = {
	x: number;
	y: number;
	elementX: number;
	elementY: number;
	elementPositionX: number;
	elementPositionY: number;
	parentWidth: number;
	parentHeight: number;
};

function CustomCursor({
	elementX,
	elementY,
	parentWidth,
	parentHeight,
}: CustomCursorProps) {
	const topPos = clamp(elementY, 0, parentHeight - 32);
	const leftPos = clamp(elementX, 0, parentWidth - 32);
	return (
		<div
			className="test-cursor"
			style={{ position: "absolute", top: topPos, left: leftPos }}
		>
			<Hand className="w-8 h-8 -ml-4 -mt-4 pointer-events-none" />
		</div>
	);
}
