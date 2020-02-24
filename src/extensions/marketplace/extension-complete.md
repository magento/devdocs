---
group: marketplace-sellers
title: Complete Your Extension
---

Before you can submit your extension to Magento Marketplace, the code must be complete, tested, and packaged.

For technical information, see the Magento DevDocs for additional technical information for developing extensions and more:

({% link guides/v2.3/extension-dev-guide/bk-extension-dev-guide.md %})

-  [PHP Developer Guide]({% link guides/v2.3/extension-dev-guide/bk-extension-dev-guide.md %})
-  [Best Practices for Extension Developers]({% link guides/v2.3/ext-best-practices/bk-ext-best-practices.md %})
-  [Magento Web APIs]({% link guides/v2.3/get-started/bk-get-started-api.md %})
-  [Frontend Developer Guide]({% link guides/v2.3/frontend-dev-guide/bk-frontend-dev-guide.md %})

## Build your extension

1. Before submitting your extension review, see the [Technical Review Guidelines]({% link extensions/marketplace/technical-review-guidelines.md %}) and the [Marketing Review Guidelines]({% link extensions/marketplace/marketing-review-guidelines.md %}).

1. Use the [CodeSniffer][1] tool to verify that your code meets Marketplace guidelines.

   Testing your extension in advance reduces the time it takes to pass Technical Review. For a list of code sniffer rules, see [Magento Extension Quality Program Coding Standard][2].

1. Prepare, validate, and zip your extension as described in Packaging a Component for Magento version [2.x]({% link guides/v2.3/extension-dev-guide/package/package_module.md %}) or [1.x]({% link extensions/marketplace/packaging-v1x-extensions.md %}).

1. Prepare the following preliminary documentation:

   -  Release notes in text format
   -  A user guide, installation guide, or reference manual in PDF format

![]({% link extensions/marketplace/images/extension-prep.png %}){: .zoom}
_Building and Submitting an Extension_

[1]: https://github.com/squizlabs/PHP_CodeSniffer
[2]: https://github.com/magento/marketplace-eqp
