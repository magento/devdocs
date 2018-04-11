---
layout: default
group: perf-best-practices
title: Development environment
version: 2.2
github_link: performance-best-practices/development-environment.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Clean the caches instead of disabling

Magento works much better when you [clean the caches] instead of disabling them.
Though, you may [disable the caches] for pages and blocks.
But you will still need to enable them during testing.

## Commands to avoid in the development mode
 
**Do not run** in the development mode these commands:

```bash
magento setup:di:compile
```
```bash
magento setup:static-content
```

## Normal page load time on a virtual machine

If you develop on a VM and a Magento page is loading for more than 2 seconds, review your environment settings.

<!-- Link definitions -->

[clean the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean
{:target="_blank"}
[disable the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en
{:target="_blank"}