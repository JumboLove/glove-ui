import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ComponentPreview } from "@/components/component-preview";
import Pre from "../pre";

interface MdxProps {
	code: string;
}

const components = {
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"font-heading mt-12 mb-4 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
				className
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"font-heading mt-8 mb-4 scroll-m-20 text-xl font-semibold tracking-tight",
				className
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"font-heading mt-8 mb-4 scroll-m-20 text-lg font-semibold tracking-tight",
				className
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				"mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
				className
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				"mt-8 scroll-m-20 text-base font-semibold tracking-tight",
				className
			)}
			{...props}
		/>
	),
	ComponentPreview,
	pre: Pre,
};

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
