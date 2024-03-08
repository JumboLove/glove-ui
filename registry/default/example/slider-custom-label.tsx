import { Slider } from "@/registry/default/glove-ui/slider";

export default function SliderCustomLabel() {
	return (
		<Slider
			defaultValue={[33]}
			max={100}
			step={1}
			className="w-[60%]"
			popupLabel={(value) => (
				<span className="whitespace-nowrap text-green-400">{value} kgs</span>
			)}
		/>
	);
}
