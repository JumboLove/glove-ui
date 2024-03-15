import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/default/glove-ui/radio-group";

export default function RadioGroupDisabled() {
	return (
		<RadioGroup defaultValue="option-a">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="a" id="option-a" />
				<label htmlFor="option-a">Option A</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem disabled value="b" id="option-b" />
				<label htmlFor="option-b">Disabled option B</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="c" id="option-c" />
				<label htmlFor="option-c">Option C</label>
			</div>
		</RadioGroup>
	);
}
