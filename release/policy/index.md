---
title: Release policy
group: release
---

Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

The following guidelines apply to patch releases:

- All supported versions receive security fixes.
- Newer versions receive full functional fixes and any enhancements. Fixes for high-severity functional issues are back-ported to older supported versions, but fixes for lower-severity issues are not necessarily back-ported.
- Changes that could break extensions or code compatibility are avoided. For example, code written for 2.2.0 should still work on 2.2.7.
- On an exceptional basis, breaking changes or additional patches or hotfixes may be released to address security issues. On the module level, these are mostly PATCH level changes, sometimes MINOR level changes.
- Patches may include new features as long as they are not expected to break other code. The new feature can be included in the core code or as an extension, such as Page Builder.

Magento releases a large (minor version change – 2.2.0 -> 2.3.0) update about once a year.

The following guidelines apply to minor releases:

- Breaking changes are possible; code written for 2.2.x may no longer work with 2.3.x. For example, minor releases can introduce support for major system requirements and dependencies, such as PHP.
- Module versions can vary. For example, some module changes are introduced in a new patch whereas others are introduced in a major release.
- Minor release can include new features that may require additional work from partners during upgrade to ensure compatibility.

{:.bs-callout .bs-callout-info}
See [Magento Software Lifecycle Policy](https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf) and [Versioning](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/versioning/).
