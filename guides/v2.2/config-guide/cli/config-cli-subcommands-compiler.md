---
group: config-guide
title: Code compiler
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-compiler.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

Code compilation includes the following (in no particular order):

-   Application code generation (factories, proxies)
-   Area configuration aggregation (optimized {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configurations per area)
-   Interceptor generation (optimized code generation of interceptors)
-   Interception {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} generation
-   Repositories code generation (generated code for APIs)
-   Service data attributes generation (generated {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} classes for data objects)

You can find code compilation classes in the <a href="{{ site.mage2000url }}setup/src/Magento/Setup/Module/Di/App/Task/Operation" target="\_blank">\Magento\Setup\Module\Di\App\Task\Operation</a> {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}namespace{% endglossarytooltip %}.

<div class="bs-callout bs-callout-warning" markdown="1">
The Magento software does not support the multi-tenant compiler, which includes the `bin/magento setup:di:compile-multi-tenant` command.
</div>

#### To run the single-tenant compiler: {#config-cli-subcommands-single}

```
bin/magento setup:di:compile

Generated code and dependency injection configuration successfully.
```

#### To compile code before installing the Magento application: {#config-cli-subcommands-single-before}
In some cases, you might want to compile code before you install the Magento application.

1.  Enable the modules.

    ```
    php bin/magento module:enable --all [-c|--clear-static-content]
    ```

    Use the `[-c|--clear-static-content]` option to clear {% glossarytooltip a3e37235-4e8b-464f-a19d-4a120560206a %}static content{% endglossarytooltip %}. This is necessary if you previously enabled or disabled modules and you must clear the static content previously generated for them.

    See [Enable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html).

1.  Compile the code.

    ```
    bin/magento setup:di:compile

    Generated code and dependency injection configuration successfully.
    ```

To compile code without a database, see [Deploy static view files without installing Magento]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#deploy_without_db).
