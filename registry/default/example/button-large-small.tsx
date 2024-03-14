import { Button } from "@/registry/default/glove-ui/button";
import GloveUiIcon from "@/components/icons/glove-ui";

export default function ButtonLargeSmall() {
	return (
		<div className="flex gap-6 items-center">
			<Button size={"icon"}>
				<GloveUiIcon className="w-4" />
			</Button>
			<Button size={"sm"}>Small</Button>
			<Button>Default</Button>
			<Button size={"lg"}>Large</Button>
		</div>
	);
}
