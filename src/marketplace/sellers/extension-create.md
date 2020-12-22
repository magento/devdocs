---
group: marketplace-sellers
title: Create an Extension
redirect_from: /marketplace/sellers/completing-your-extension.html
---

Before you can submit your extension to Magento Marketplace, the code must be complete, tested, and packaged. For technical information, see the Magento DevDocs for additional technical information for developing extensions and more:

-  [PHP Developer Guide]({{ site.baseurl }}/guides/v2.4/extension-dev-guide/bk-extension-dev-guide.html)
-  [Best Practices for Extension Developers]({{ site.baseurl }}/guides/v2.4/ext-best-practices/bk-ext-best-practices.html)
-  [Magento Web APIs]({{ site.baseurl }}/guides/v2.4/get-started/bk-get-started-api.html)
-  [Frontend Developer Guide]({{ site.baseurl }}/guides/v2.4/frontend-dev-guide/bk-frontend-dev-guide.html)

![]({{ site.baseurl }}/marketplace/sellers/images/extension-prep.png){: .zoom}
_Building and Submitting an Extension_

{: .bs-callout .bs-callout-info}
Magento Marketplace does not support encrypted extensions at this time.

## Build your extension

1. Before submitting your extension for Marketplace review, see the [Technical Review Guidelines]({{ site.baseurl }}/marketplace/sellers/technical-review-guidelines.html) and the [Marketing Review Guidelines]({{ site.baseurl }}/marketplace/sellers/marketing-review-guidelines.html).

1. Use the [CodeSniffer][1] tool to verify that your code meets Marketplace guidelines.

   Testing your extension in advance reduces the time it takes to pass Technical Review. For a list of code sniffer rules, see [Magento Extension Quality Program Coding Standard][2].

1. Prepare, validate, and zip your extension as described in [Packaging a Component]({{ site.baseurl }}/guides/v2.4/extension-dev-guide/package/package_module.html).

1. Prepare the following preliminary documentation:

   -  Release notes in text format
   -  A user guide, installation guide, or reference manual in PDF format

[1]: https://github.com/squizlabs/PHP_CodeSniffer
[2]: https://github.com/magento/marketplace-eqp
