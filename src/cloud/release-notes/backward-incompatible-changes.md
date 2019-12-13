---
group: release-notes
title: Backward Incompatible Changes
---

### Minimum php version increased

Php version requirements increased to 7.1.3+

### Removed cloud variables

- SCD_EXCLUDE_THEMES - use SCD_MATRIX instead.
- STATIC_CONTENT_THREADS - use SCD_THREADS instead.
- DO_DEPLOY_STATIC_CONTENT - use SKIP_SCD instead.
- STATIC_CONTENT_SYMLINK - now `pub/static` directory will be always symlink if static was generated on the build phase

### Dropped support of old cli commands

- `m2-ece-build`  - use `vendor/bin/ece-tools build` instead
- `m2-ece-deploy` - use `vendor/bin/ece-tools deploy` instead
- `m2-ece-scd-dump` - use `vendor/bin/ece-tools config:dump` instead

### Removed support if build_options.ini file

Use `.magento.env.yaml` instead. Build phase will fail if `build_options.ini` file present.

### Patches moved to separate repository

Patches and related functionality were moved to the separate package `magento/magento-cloud-patches`.

### Docker moved to separate repository

Docker functionality was moved to the separate package `magento/magento-cloud-docker`.