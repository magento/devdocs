---
layout: default
group: config-guide
subgroup: 04_CLI
title: Code compiler
menu_title: Code compiler
menu_node:
menu_order: 175
version: 2.1
github_link: config-guide/cli/config-cli-subcommands-compiler.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of code compilation {#config-cli-subcommands-compile-overview}
This section discusses the basics of code compilation. Code compilation consists of all of the following in no particular order:

-   Application code generation (factories, proxies, and so on)
-   Area configuration aggregation (that is, optimized {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configurations per area)
-   Interceptor generation (that is, optimized code generation of interceptors)
-   Interception {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} generation
-   Repositories code generation (that is, generated code for APIs)
-   Service data attributes generation (that is, generated {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} classes for data objects)

You can find code compilation in classes in the <a href="{{ site.mage2100url }}setup/src/Magento/Setup/Module/Di/App/Task/Operation" target="\_blank">\Magento\Setup\Module\Di\App\Task\Operation</a> {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %}.

<div class="bs-callout bs-callout-warning" markdown="1">
In this release, the Magento software doesn't support the multi-tenant compiler (that is, the `bin/magento setup:di:compile-multi-tenant` command).
</div>

## Run the single-tenant compiler {#config-cli-subcommands-single}
Run the command as follows (there are no options):

	bin/magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

## Optional. Compile code before installing the Magento application {#config-cli-subcommands-single-before}
In some cases, you might want to compile code before you install the Magento application. To do that, you must first enable modules; otherwise, the compiler has nothing to do. To compile code for only some modules, enable only those modules.

The following command enables all modules:

	php bin/magento module:enable --all [-c|--clear-static-content]

Use the optional `[-c|--clear-static-content]` option to clear {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %}. This is necessary if you've previously enabled or disabled modules and you must clear static content previously generated for them.

[More information about enabling modules]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-enable.html).

## Compile code {#config-cli-subcommands-single}
Use this command to compile code.

Run the command as follows (there are no options):

	bin/magento setup:di:compile

The following message displays to confirm success:

	Generated code and dependency injection configuration successfully.

#### Related topics

-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
-   <a href="{{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
