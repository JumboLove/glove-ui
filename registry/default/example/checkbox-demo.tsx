import { Checkbox, CheckboxLabel } from "@/registry/default/glove-ui/checkbox";

export default function CheckboxDemo() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="checkbox-demo" />
			<CheckboxLabel htmlFor="checkbox-demo">
				Accept terms and conditions
			</CheckboxLabel>
		</div>
	);
}
