import { Button } from "@/registry/default/glove-ui/button";

export default function ButtonVariants() {
	return (
		<div className="flex flex-wrap gap-4 items-center justify-center">
			<Button variant={"default"}>default</Button>
			<Button variant={"secondary"}>secondary</Button>
			<Button variant={"ghost"}>ghost</Button>
			<Button variant={"outline"}>outline</Button>
			<Button variant={"link"}>link</Button>
			<Button variant={"destructive"}>destructive</Button>
		</div>
	);
}
