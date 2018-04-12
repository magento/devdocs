---
layout: default
group: perf-best-practices
title: Development environment recommendations
version: 2.2
github_link: performance-best-practices/development-environment.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Clean the caches instead of disabling

Magento runs more efficiently when you [clean the caches] instead of disabling them; however, if you [disable the caches] for pages and blocks, you must enable them during testing.

## Commands to avoid in the development mode
 
**Do not run** the following commands in development mode:

```bash
magento setup:di:compile
```
```bash
magento setup:static-content
```

## Normal page load time on a virtual machine

If you develop on a VM and it takes longer than 2 seconds to load a Magento page, review your environment settings.
<!-- Link definitions -->

[clean the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean
{:target="_blank"}
[disable the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en
{:target="_blank"}