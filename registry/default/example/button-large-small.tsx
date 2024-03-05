import { Button } from "@/registry/default/glove-ui/button";

export default function ButtonLargeSmall() {
	return (
		<div className="flex gap-4 items-center">
			<Button size={"sm"}>Button</Button>
			<Button>Button</Button>
			<Button size={"lg"}>Button</Button>
		</div>
	);
}
