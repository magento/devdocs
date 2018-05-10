---
group: cloud
title: vendor/magento/ece-patches
version: 2.2
github_link: cloud/composer-packages/ece-patches.md
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

<div class="bs-callout bs-callout-warning" markdown="1">
We merged `vendor/magento/ece-patches` with [`vendor/magento/ece-tools v2002.0.8`](http://devdocs.magento.com/guides/v2.2/cloud/composer-packages/ece-tools.html#v200208). You no longer need to update the `vendor/magento/ece-patches` package separately.
</div>

{% include cloud/ece-patches.md %}

## v102.0.4

### Fixed issues

-   <!--  MAGECLOUD-1567  -->We fixed an issue preventing you from exporting the configuration files using `app:config:dump` more than once.

-   <!--  MAGECLOUD-1582  -->We fixed a Redis session _locking_ issue that caused an _Admin_ login delay.

## v102.0.3

### Fixed issues
<!--MAGECLOUD-1450-->We fixed an implementation issue related to versioning in `ece-patches` that was causing a conflict with other Composer-based patching modules.

## v102.0.2

### New features
<!--MAGECLOUD-1090-->We implemented smart patching. Now the package applies patches based not on {{site.data.var.ece}} version, but on patched package version.

### Fixed issues
<!--MAGECLOUD-1310-->We fixed an issue that was causing PHP memory issues during import.

## v102.0.1

### New features
Implemented version-based patching. Now the package is compatible with {{site.data.var.ece}} 2.2.0 and higher.

### Fixed issues
<!--MAGECLOUD-1033-->* Removed patch; fixing bug in `colinmollenhour/credis` v1.6 to enable support for {{site.data.var.ece}} 2.2.1.

## v102.0.0
<div class="bs-callout bs-callout-warning" markdown="1">
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.
</div>

### Initial release
Initial release of `ece-tools` for {{site.data.var.ece}} 2.2.0.
