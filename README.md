# Glove UI

Components for gloved fingers, build with shadcn UI

## TODO

- [ ] Improve homepage
- [ ] Fix mousedown events not moving the hand cursor
- [ ] Update logo

## Why

Many of the components available for [shadcn/ui](https://ui.shadcn.com/) assume precise mouse and tap interactions. This is not always ideal when users might have shaky hands or wear gloves.

This project attempts to bring the beauty and utility of these components into a more accessible and usable space.

Some of our UX strategies include:

- Using larger (invisible) touch areas
- Showing what element is under your cursor on long press
- Providing full alternatives to mouse centric components

## Usage

This project extends the design system of [shadcn/ui](https://ui.shadcn.com/).

All `glove-ui` components are copy/paste-able into any project where `shadcn/ui` has been setup.

"Why copy/paste components?"

<blockquote cite="https://ui.shadcn.com/docs">
  <p>The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.</p>

<p>Start with some sensible defaults, then customize the components to your needs.</p>

<p>One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.</p>
  <footer>— <cite>shadcn</cite></footer>
</blockquote>

## Documentation

You can find out more about the API and implementation in the [Documentation](https://glove-ui.davidwitt.me).

## Developer Flow

1. Create a component in `registry/default/glove-ui`
1. Update the registry with your new component
1. Update `nav.ts` `sidebarConfig`
1. Create a new MDX file in `content/components`

## Contributing

Contributions are welcome.

Please see `CONTRIBUTING.md` for more details

## Attribution

This project is insipired by [shadcn-tag-input](https://github.com/JaleelB/shadcn-tag-input).
