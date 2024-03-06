import { Button } from "@/registry/default/glove-ui/button";

export default function ButtonDisabled() {
	return (
		<div className="flex gap-4 items-center">
			<Button disabled variant={"default"}>
				default
			</Button>
			<Button disabled variant={"secondary"}>
				secondary
			</Button>
			<Button disabled variant={"ghost"}>
				ghost
			</Button>
			<Button disabled variant={"outline"}>
				outline
			</Button>
			<Button disabled variant={"link"}>
				link
			</Button>
			<Button disabled variant={"destructive"}>
				destructive
			</Button>
		</div>
	);
}