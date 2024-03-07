import { Slider } from "@/registry/default/glove-ui/slider";

export default function SliderDemo() {
	return <Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />;
}
