## Introduction to Magento sample data {#instgde-prereq-sample-intro}

Magento sample data provides a storefront based on the Luma theme outfitted with products, categories, customer registration, and so on. It functions just like a Magento storefront and you can manipulate prices, inventory, and promotional pricing rules using the Magento Admin.

You can install sample data either before or after installing the Magento software. When you're done with the sample data, you can either remove it or you can install it fresh as discussed in [Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/sample-data-other-cmds.html).

{:.bs-callout-warning}
There is currently no way to uninstall sample data. We recommend you use sample data only to learn about how Magento works. Avoid doing any development in a system in which you installed sample data.

You can install optional sample data in any of the following ways:

|Installation method|Description|Required skill level|
|--- |--- |--- |
|Using Composer|[Run `magento sampledata:deploy` to modify Magento's root `composer.json`]({{ page.baseurl }}/install-gde/install/sample-data-before-composer.html) to enable sample data modules.|Requires Composer knowledge and access to the Magento file system.|
|Cloning repositories|[Clone the Magento 2 repository]({{ page.baseurl }}/install-gde/install/sample-data-before-clone.html) and the sample data repository, then link them together.|For contributing developers only. Everyone else should use one of the preceding methods.|

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
