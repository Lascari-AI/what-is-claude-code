---
url: "https://sli.dev/guide/write-theme"
title: "Writing Themes | Slidev"
---

[Skip to content](https://sli.dev/guide/write-theme#VPContent)

On this page

# Writing Themes [​](https://sli.dev/guide/write-theme\#writing-themes)

> Please read 📖 Theme & Addons
>
> [📖 Theme & Addons](https://sli.dev/guide/theme-addon)
>
>  first.

Each slides project can only have one theme. Themes should focus on providing the appearance of slides. If the feature isn't related to the appearance and can be used separately, it should be implemented as an [addon](https://sli.dev/guide/write-addon).

To get started, we recommend you use our generator for scaffolding your first theme

pnpmnpmyarnbun

bash

```
$ pnpm create slidev-theme
```

bash

```
$ npm init slidev-theme@latest
```

bash

```
$ yarn create slidev-theme
```

bash

```
$ bun create slidev-theme
```

Then you can modify and play with it. You can also refer to the [official themes](https://sli.dev/resources/theme-gallery#official-themes) as examples.

## Capability [​](https://sli.dev/guide/write-theme\#capability)

A theme can contribute to the following points:

- Global styles
- Provide default configurations
- Provide custom layouts or override the existing ones
- Provide custom components
- Configure tools like UnoCSS, Shiki, etc.

However, the following points are **not** recommended to be done in a theme, and may be better implemented as an [addon](https://sli.dev/guide/write-addon):

- New code snippets
- New code runners
- Other things that can be used separately

Basically, the way to provide global styles, layouts, components and configure tools is the same as doing these in a slides project. For example, to configure Shiki, you can create a `./setup/shiki.ts` as described in [Configure Highlighter](https://sli.dev/custom/config-highlighter). You can refer to the [customization guide](https://sli.dev/custom/) for more information.

To provide default Slidev configurations, you can add a `slidev.defaults` field in the `package.json` file, which will be merged with the user's configurations:

package.json

json

```
{
  "slidev": {
    "defaults": {
      "transition": "slide-left",
      "aspectRatio": "4/3"
    }
  }
}
```

### Require Slidev Version [​](https://sli.dev/guide/write-theme\#require-slidev-version)

If the theme is relying on a specific feature of Slidev that is newly introduced, you can set the minimal Slidev version required to have your theme working properly:

json

```
{
  "engines": {
    "slidev": ">=0.48.0"
  }
}
```

An error message will be shown when the an incompatible version is used.

### Theme Metadata [​](https://sli.dev/guide/write-theme\#theme-metadata)

By default, Slidev assumes themes support both light mode and dark mode. If you only want your theme to be presented in a specific color schema, you need to specify it explicitly in the `package.json`:

package.json

json

```
{
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

## Previewing [​](https://sli.dev/guide/write-theme\#previewing)

You can preview your theme when developing by using a demo slide deck. To do so, create a `./slides.md` file with the following headmatter:

slides.md

md

```
---
theme: ./  # Use the theme in the current directory
---
```

Then you can start the demo slides as usual.

## Publishing [​](https://sli.dev/guide/write-theme\#publishing)

When publishing the theme, non-JS files like `.vue` and `.ts` files can be published directly without compiling. Slidev will automatically compile them when using the theme.

Themes should follow the following conventions:

- Package name should start with `slidev-theme-`. For example, `slidev-theme-name` or `@scope/slidev-theme-name`
- Add `"slidev-theme"` and `"slidev"` in the `keywords` field of your `package.json`

Theme can be used locally without publishing to NPM. If your theme is only for personal use, you can simply use it as a local theme, or publish it as a private scoped package. However, it is recommended to publish it to the NPM registry if you want to share it with others.