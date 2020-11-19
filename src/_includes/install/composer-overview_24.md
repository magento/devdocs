We use [Composer](https://getcomposer.org/) to manage Magento components and their dependencies. Using Composer to get the Magento software [metapackage](https://glossary.magento.com/metapackage) provides the following advantages:

-  Reuse third-party libraries without bundling them with source code
-  Reduce extension conflicts and compatibility issues by using a component-based architecture with robust dependency management
-  Adhere to [PHP-Framework Interoperability Group (FIG)](https://www.php-fig.org/) standards
-  Repackage Magento Open Source with other components
-  Use the Magento software in a production environment

{:.bs-callout-info}
You can also [download](https://magento.com/tech-resources/download) an archive file for a specific version of Magento in either ZIP or TAR format. Installing Magento from an archive lacks the advantages of using Composer. Contributing developers should use the [git-based]({{ page.baseurl }}/install-gde/cli/dev_options.html) installation method.
