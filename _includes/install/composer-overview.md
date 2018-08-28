We use [Composer](https://getcomposer.org/){:target="_blank"} to manage Magento components and their dependencies. Using Composer to get the Magento software {% glossarytooltip 7490850a-0654-4ce1-83ff-d88c1d7d07fa %}metapackage{% endglossarytooltip %} provides the following advantages:

-   Reuse third-party libraries without bundling them with source code
-   Reduce extension conflicts and compatibility issues by using a component-based architecture with robust dependency management
-   Adhere to [PHP-Framework Interoperability Group (FIG)](https://www.php-fig.org/) standards
-   Repackage Magento Open Source with other components
-   Use the Magento software in a production environment

{:.bs-callout .bs-callout-warning}
You must create a Composer project from our metapackage if you want to use the Magento Web Setup Wizard to upgrade the Magento software and third-party extensions.
