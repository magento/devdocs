---
group: cloud-guide
title: vendor/magento/ece-patches
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{:.bs-callout-warning}
We merged `vendor/magento/ece-patches` with [`vendor/magento/ece-tools v2002.0.8`]({{ site.baseurl }}/cloud/release-notes/cloud-release-archive.html#v200208). You no longer need to update the `vendor/magento/ece-patches` package separately.

{% include cloud/ece-patches.md %}

## v102.0.4

### Fixed issues

-  <!--  MAGECLOUD-1567  -->We fixed an issue preventing you from exporting the configuration files using `app:config:dump` more than once.

-  <!--  MAGECLOUD-1582  -->We fixed a Redis session _locking_ issue that caused an _Admin_ login delay.

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

<!--MAGECLOUD-1033-->

-  Removed patch; fixing bug in `colinmollenhour/credis` v1.6 to enable support for {{site.data.var.ece}} 2.2.1.

## v102.0.0

{:.bs-callout-warning}
This package is no longer compatible with other versions of {{site.data.var.ece}} and **should not** be used.

### Initial release

Initial release of `{{site.data.var.ct}}` for {{site.data.var.ece}} 2.2.0.
