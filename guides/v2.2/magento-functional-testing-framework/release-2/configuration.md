---
layout: default
group: mftf
title: Configuration
version: 2.2
github_link: magento-functional-testing-framework/release-2/configuration.md
functional_areas:
 - Testing
mftf-release: 2.1.2
---

# .env file

## MODULE_WHITELIST

The `MODULE_WHITELIST` env variable can be used if you are working on a new module. When adding a new directory under `Magento/FunctionalTest`, you must add the directory name to `MODULE_WHITELIST` or MFTF will not see it.
