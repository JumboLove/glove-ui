import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Inspect } from "lucide-react";
import TooltipAboveIcon from "@/components/icons/tooltip-above";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
	return (
		<section className="z-10 max-w-5xl w-full flex flex-col items-center text-center gap-5">
			<div className="z-10 w-full flex flex-col items-center text-center gap-5">
				<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
					Glove UI
				</h1>
				<p className="text-muted-foreground max-w-[450px]">
					Components for gloved fingers, build with{" "}
					<a href="https://ui.shadcn.com/" className="link-underline">
						shadcn UI
					</a>
				</p>
				<div className="mt-1 text-muted-foreground">
					<ul className="flex flex-col items-center gap-4">
						<li className="flex items-center gap-2">
							<Inspect className="w-6 h-6" /> Larger click/touch areas
						</li>
						<li className="flex items-center gap-2">
							<TooltipAboveIcon className="w-6 h-6" /> Popovers on long press
						</li>
						<li>
							<Badge variant={"secondary"}>Soon</Badge> Fully custom components
							for touch interactions
						</li>
					</ul>
				</div>
				<div className="flex gap-2 mt-1">
					<Link
						href="/setup"
						className={`${buttonVariants({
							variant: "default",
							size: "lg",
						})} min-w-[150px] shadow-sm`}
					>
						Get Started
					</Link>
					<Link
						href="https://github.com/Jumbolove/glove-ui"
						className={`${buttonVariants({
							variant: "secondary",
							size: "lg",
						})} shadow-sm`}
					>
						Github
					</Link>
				</div>
			</div>
		</section>
	);
}
