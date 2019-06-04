---
group: configuration-guide
title: Code compiler
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of code compilation {#config-cli-subcommands-compile-overview}

This section discusses the basics of code compilation. Code compilation consists of all of the following in no particular order:

- Application code generation (factories, proxies, and so on)
- Area configuration aggregation (that is, optimized [dependency injection](https://glossary.magento.com/dependency-injection) configurations per area)
- Interceptor generation (that is, optimized code generation of interceptors)
- Interception [cache](https://glossary.magento.com/cache) generation
- Repositories code generation (that is, generated code for APIs)
- Service data attributes generation (that is, generated [extension](https://glossary.magento.com/extension) classes for data objects)

You can find code compilation in classes in the [`\Magento\Setup\Module\Di\App\Task\Operation`]({{ site.mage2bloburl }}/{{ page.guide_version }}/setup/src/Magento/Setup/Module/Di/App/Task/Operation) [namespace](https://glossary.magento.com/namespace).

{:.bs-callout .bs-callout-warning
In this release, the Magento software doesn't support the multi-tenant compiler (that is, the `bin/magento setup:di:compile-multi-tenant` command).

## Run the single-tenant compiler {#config-cli-subcommands-single}

Run the command as follows (there are no options):

```bash
bin/magento setup:di:compile
```

The following message displays to confirm success:

```terminal
Generated code and dependency injection configuration successfully.
```

## Optional. Compile code before installing the Magento application {#config-cli-subcommands-single-before}

In some cases, you might want to compile code before you install the Magento application. To do that, you must first enable modules; otherwise, the compiler has nothing to do. To compile code for only some modules, enable only those modules.

The following command enables all modules:

```bash
bin/magento module:enable --all [-c|--clear-static-content]
```

Use the optional `[-c|--clear-static-content]` option to clear [static content](https://glossary.magento.com/static-content). This is necessary if you've previously enabled or disabled modules and you must clear static content previously generated for them.

[More information about enabling modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).

## Compile code {#config-cli-subcommands-single}

Use this command to compile code.

Run the command as follows (there are no options):

```bash
bin/magento setup:di:compile
```

The following message displays to confirm success:

```terminal
Generated code and dependency injection configuration successfully.
```
