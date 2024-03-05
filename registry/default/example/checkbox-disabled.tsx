import { Checkbox, CheckboxLabel } from "@/registry/default/glove-ui/checkbox";

export default function CheckboxDisabled() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="checkbox-disabled" disabled />
			<CheckboxLabel htmlFor="checkbox-disabled">
				This one's disabled
			</CheckboxLabel>
		</div>
	);
}
