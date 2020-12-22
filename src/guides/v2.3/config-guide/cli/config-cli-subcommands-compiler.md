---
group: configuration-guide
title: Code compiler
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

Code compilation includes the following (in no particular order):

-  Application code generation (factories, proxies)
-  Area configuration aggregation (optimized [dependency injection](https://glossary.magento.com/dependency-injection) configurations per area)
-  Interceptor generation (optimized code generation of interceptors)
-  Interception [cache](https://glossary.magento.com/cache) generation
-  Repositories code generation (generated code for APIs)
-  Service data attributes generation (generated [extension](https://glossary.magento.com/extension) classes for data objects)

You can find code compilation classes in the [\Magento\Setup\Module\Di\App\Task\Operation]({{ site.mage2bloburl }}/{{ page.guide_version }}/setup/src/Magento/Setup/Module/Di/App/Task/Operation) [namespace](https://glossary.magento.com/namespace).

#### To run the single-tenant compiler: {#config-cli-subcommands-single}

```bash
bin/magento setup:di:compile
```

```terminal
Generated code and dependency injection configuration successfully.
```

#### To compile code before installing the Magento application: {#config-cli-subcommands-single-before}

In some cases, you might want to compile code before you install the Magento application.

1. Enable the modules.

   ```bash
   bin/magento module:enable --all [-c|--clear-static-content]
   ```

   Use the `[-c|--clear-static-content]` option to clear [static content](https://glossary.magento.com/static-content). This is necessary if you previously enabled or disabled modules and you must clear the static content previously generated for them.

   See [Enable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).

1. Compile the code.

   ```bash
   bin/magento setup:di:compile
   ```

   ```terminal
   Generated code and dependency injection configuration successfully.
   ```

To compile code without a database, see [Deploy static view files without installing Magento]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#deploy_without_db).
