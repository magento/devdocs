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

Many developers tend to disable all caches on their developer instances. We recommend only cleaning caches, without disabling all caches. Magento runs more efficiently when you [clean the caches] instead of disabling them completely. Most types of caches are rarely invalidated during development.

If you [disable the caches], we recommend only disabling Page and Block caches in development instances. Remember to enable all caches during testing.

## Commands to avoid in the development mode

In development mode, do not run commands for compilation, code generation and static content deployment. These commands were built for use in production mode only.

**Do not run** the following commands in development mode:  

* ```setup:di:compile``` generates auto-generated classes and optimized configuration caches. In development mode, Magento runs this command on-demand; you do not need to run it. If you modified a signature of a class and need to re-generate its auto-generated factories/proxies/interceptors, you can remove those classes or the ```generated``` folder.
```bash
magento setup:di:compile
```

* ```setup:static-content:deploy``` deploys static content for a store. In development mode, Magento runs this command on-demand; you do not need to run it.
```bash
magento setup:static-content:deploy
```

## Normal page load time on a virtual machine

If you develop on a VM and it takes longer than 2 seconds to load a Magento page, review your environment settings.
<!-- Link definitions -->

[clean the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean
{:target="_blank"}
[disable the caches]: {{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en
{:target="_blank"}
