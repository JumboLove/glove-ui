import { Slider } from "@/registry/default/glove-ui/slider";

export default function SliderMultipleThumbs() {
	return (
		<Slider
			defaultValue={[20, 60]}
			max={100}
			step={1}
			minStepsBetweenThumbs={10}
			className="w-[60%]"
		/>
	);
}
