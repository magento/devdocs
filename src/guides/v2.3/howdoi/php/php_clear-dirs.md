---
group: php-developer-guide
subgroup: 99_Module Development
title: Clear directories during development
menu_title: Clear directories during development
menu_node:
menu_order: 200
---

#### Contents

*  [Overview of directory clearing](#howdoi-clear-over)
*  [What directories to clear](#howdoi-clear-what)
*  [How to clear the directories](#howdoi-clear-how)

## Overview of directory clearing {#howdoi-clear-over}

While you're developing Magento components (modules, themes, and language packages), your rapidly changing environment requires you to periodically clear certain directories and caches. Otherwise, your code runs with exceptions and won't function properly.

This topic provides guidelines on what directories to clear and when to clear them.
All directories discussed in this topic are default locations. It's possible to customize these locations but doing so is beyond the scope of this topic.

When you're developing Magento components (modules, themes, and language packages), the following directories contain temporary or generated files you can clear periodically:

Directory | Description
--- | ---
`generated/code` | Contains [generated code][]
`generated/metadata`| Contains the compiled dependency injection configuration for all modules.
`pub/static`| Contains `js` and `html` files for each store view.
`var/cache` | All cacheable objects _except the page cache_. This directory is empty if you use a third-party cache storage such as Redis.
`var/composer_home` | Home directory for Setup Wizard artifacts. Do not touch this directory unless you are an experienced developer familiar with the Magento plug-in system.
`var/page_cache` | Cached pages from the full page cache mechanism. This directory is empty if you use a third-party HTTP accelerator such as Varnish.
`var/view_preprocessed` | Contains minified templates and compiled LESS (meaning LESS, CSS, and HTML).

## What directories to clear {#howdoi-clear-what}

The following table provides guidelines on what you should clear and when.

Action | Directories to clear
--- | ---
Change a class if there is a plugin related to it | `generated/metadata`, `generated/code`
A change that results in generated factories or proxies | `generated/metadata`, `generated/code`
A change in `di.xml` | `generated/metadata`, `generated/code` (also need to run the code compiler again)
Add, remove, enable, or disable modules | `generated/metadata`, `generated/code`, `var/cache`, `var/page_cache`
Add or edit a layout or theme | `var/view_preprocessed`, `var/cache`, `var/page_cache`
Change LESS or templates | `var/view_preprocessed`, `var/cache`, `var/page_cache`, `pub/static`
Change `*.js` or `*.html` files | `pub/static`
Add or edit a CMS page, cacheable block, or use the Magento Admin to change the configuration |`var/cache`, `var/page_cache`

## How to clear the directories {#howdoi-clear-how}

To only clear directories and not perform other actions, log in to the Magento server as the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a> and clear directories using a command like the following:

```bash
rm -rf <magento_root>/generated/metadata/* <magento_root>/generated/code/*
```

You can also use the following command-line tools clear some directories for you. These commands perform other tasks as well; consult the linked documentation for more details.

| Tool name | Brief description | What it clears |
| --- | --- | --- |
| [`magento setup:upgrade`][]| Update Magento database schema and data | `generated/metadata` and `generated/code` |
| [`magento setup:di:compile`][]|Generates code | `generated/code` prior to compiling |
| [`magento deploy:mode:set {mode}`][]|Switch between `developer` and `production` mode | `generated/metadata`, `generated/code`, `var/view_preprocessed`|
| [`magento cache:clean {type}`][]|Clears the cache | `var/cache` and `var/page_cache`|

[`magento setup:upgrade`]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html
[`magento setup:di:compile`]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html
[`magento deploy:mode:set {mode}`]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html
[`magento cache:clean {type}`]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html
[generated code]: {{ page.baseurl }}/extension-dev-guide/code-generation.html
