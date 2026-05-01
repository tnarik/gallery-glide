# build

I am still trying to understand how the whole go modules and non-module repos work.

I keep the references in `hugo.toml`, and the build happens via `package.json`.

To use this shortcode, just inject:

`{{< gallery >}}`

in your content, for the default `gallery.yaml` configuration. Otherwise you can refer to you own gallery configuration by using:

`{{< gallery "gallery2" >}}`

, oe

`{{< gallery name="gallery2" >}}`
