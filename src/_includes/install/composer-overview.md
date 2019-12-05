We use [Composer](https://getcomposer.org/){:target="_blank"} to manage Magento components and their dependencies. Using Composer to get the Magento software [metapackage](https://glossary.magento.com/metapackage) provides the following advantages:

-  Reuse third-party libraries without bundling them with source code
-  Reduce extension conflicts and compatibility issues by using a component-based architecture with robust dependency management
-  Adhere to [PHP-Framework Interoperability Group (FIG)](https://www.php-fig.org/) standards
-  Repackage Magento Open Source with other components
-  Use the Magento software in a production environment

{:.bs-callout-warning}
You must create a Composer project from our metapackage if you want to use the Magento Web Setup Wizard to upgrade the Magento software and third-party extensions.
