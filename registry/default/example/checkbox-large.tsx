import { Checkbox, CheckboxLabel } from "@/registry/default/glove-ui/checkbox";

export default function CheckBoxLarge() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox size={"lg"} id="checkbox-large" />
			<CheckboxLabel htmlFor="checkbox-large">
				A much larger checkbox
			</CheckboxLabel>
		</div>
	);
}
