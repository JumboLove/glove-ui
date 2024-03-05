# Glove UI

TODO

## Attribution

This project is insipired by [shadcn-tag-input](https://github.com/JaleelB/shadcn-tag-input).

## Site Setup TODO

- [x] Create Layout for pages
- [x] Setup `/components` page
- [x] Setup `sidebar` navigation
- [ ] Fix sidebar staying open when navigation. ShadCN has a `mobileLink` component
- [ ] Fix navigation on `/components` - mobile user is stuck

## TODO

- [ ] Remove references to shadcn-tag-input
- [ ] Scope out analytics and see if it makes sense for this site (assuming Vercel hosting)
- [x] Figure out any contentLayer needs
- [x] Setup sidebar (look to Shadcn's version, maybe another version)
- [ ] Setup Remote repo
- [ ] Setup hosting
- [ ] Setup domain
- [ ] Add credits/colophon
- [x] Setup live preview area
- [ ] Setup debugging
- [ ] Setup gloved hand
- [ ] Port over button and checkbox
- [ ] Port over button and checkbox demos
- [ ] Customized `notFound()` for components and general pages
- [ ] Hydration error - themes related?
- [x] Add `glove-ui.ts` copy/paste over for setup instructions
- [x] Replace `tabs` with better, more visible version - checkout Flowbyte?

## Everything below this line is subject to deletion

[Shadcn Tag Input](https://shadcn-tag-input.vercel.app/) is a tag input component built as part of the Shadcn design system. It offers a blend of customization and out-of-the-box styling, adhering to Shadcn's sleek and modern design principles.

## Why

I needed a tagging component for a project. I looked around for any tagging components that used Shadcn's design system, but I couldn't find any. So, I decided to make one myself. I hope you find it useful!

## Usage

Here's a sample implementation that initializes the component with a list of initial tags and suggestions list. Apart from this, there are multiple events, handlers for which need to be set.

```tsx
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Tag, TagInput } from "@/components/tag-input";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	topics: z.array(
		z.object({
			id: z.string(),
			text: z.string(),
		})
	),
});

export default function Hero() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const [tags, setTags] = React.useState<Tag[]>([]);

	const { setValue } = form;

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<section className="z-10 max-w-5xl w-full flex flex-col items-center text-center gap-5">
			<div className="z-10 w-full flex flex-col items-center text-center gap-5">
				<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
					Shadcn Tag Input
				</h1>
				<p className="text-muted-foreground max-w-[450px]">
					An implementation of a Tag Input component built on top of Shadcn
					UI&apos;s input component.
				</p>
				<div className="flex gap-2 mt-1">
					<Link
						href="#try"
						className={`${buttonVariants({
							variant: "default",
							size: "lg",
						})} min-w-[150px] shadow-sm`}
					>
						Try it out
					</Link>
					<Link
						href="https://github.com/JaleelB/shadcn-tag-input"
						className={`${buttonVariants({
							variant: "secondary",
							size: "lg",
						})} shadow-sm`}
					>
						Github
					</Link>
				</div>
			</div>

			<div id="try" className="w-full py-8">
				<div className="w-full relative my-4 flex flex-col space-y-2">
					<div className="preview flex min-h-[350px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8 flex flex-col items-start"
							>
								<FormField
									control={form.control}
									name="topics"
									render={({ field }) => (
										<FormItem className="flex flex-col items-start">
											<FormLabel className="text-left">Topics</FormLabel>
											<FormControl>
												<TagInput
													{...field}
													placeholder="Enter a topic"
													tags={tags}
													className="sm:min-w-[450px]"
													setTags={(newTags) => {
														setTags(newTags);
														setValue("topics", newTags as [Tag, ...Tag[]]);
													}}
												/>
											</FormControl>
											<FormDescription>
												These are the topics that you&apos;re interested in.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</section>
	);
}
```

## Documentation

You can find out more about the API and implementation in the [Documentation](https://shadcn-tag-input.vercel.app/#setup).
