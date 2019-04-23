---
title: Release policy
group: release
---

{{site.data.var.ee}} uses [semantic versioning](https://semver.org/). For example:

- **MAJOR**—2
- **MINOR**—2.3
- **PATCH**—2.3.1

## MINOR release

Magento releases a large, minor version of {{site.data.var.ee}} about once a year.

The following guidelines apply to minor releases:

- Breaking changes are possible; code written for 2.2.x may no longer work with 2.3.x. For example, minor releases can introduce support for major system requirements and dependencies, such as PHP.
- Module versions can vary. For example, some module changes are introduced in a new patch whereas others are introduced in a major release.
- Minor releases can include new features that may require additional work from partners during upgrade to ensure compatibility.
- Minor releases can include fixes for security and compliance issues.

## PATCH release

Patch releases are primarily focused on delivering security and quality enhancements on a regular basis to help you keep your sites performing at their peak. Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

The following guidelines apply to patch releases:

- All supported versions receive security fixes.
- Newer versions receive full functional fixes and enhancements.
- Changes that could break extensions or code compatibility are avoided. For example, code written for 2.2.0 should still work on 2.2.7.
- On an exceptional basis, breaking changes or additional patches or hotfixes may be released to address security or compliance issues. On the module level, these are mostly PATCH-level changes; sometimes MINOR-level changes.
- Patches may include new features as long as they are not expected to break other code. The new feature can be included in the core code or as an extension, such as Page Builder.

{:.bs-callout .bs-callout-info}
See [Magento Software Lifecycle Policy](https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf) and [Versioning](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/versioning/).
