<div markdown="1">
This package contains patch files that are specific to Cloud. Patches are separate from tools, allowing you to apply patch updates without requiring a full upgrade and install of all Cloud code and the patch. Using `compuser update` automatically runs tools to check for available patches and to run them with build and deploy scripts.

For {{site.data.var.ee}}, versions are specified as `2.<x>.<y>`.

Patch versions are specified as: `<100 + x>.<y>.*`. For example, {{site.data.var.ee}} 2.2.0 is associated with `ece-patches` 102.0.0. Subsequently, a new patch will be released that corresponds to the same {{site.data.var.ee}} version, and it would be 102.0.1.

Code released in `ece-patches` is strictly for updates to {{site.data.var.ece}}. Patches are available in the `vendor/ece-patches` folder.

To check for available patches, you can check in the `vendor/ece-patches` folder.
