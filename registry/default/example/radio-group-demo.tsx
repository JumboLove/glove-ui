import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/default/glove-ui/radio-group";

export default function RadioGroupDemo() {
	return (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="one" id="option-one" />
				<label htmlFor="option-one">Option One</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="two" id="option-two" />
				<label htmlFor="option-two">Option Two</label>
			</div>
		</RadioGroup>
	);
}
