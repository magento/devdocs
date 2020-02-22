---
title: Completing Your Extension
redirect_from:
  - /extensions/extension-messaging.html
---

Before you can submit your extension to Magento Marketplace, the code must be complete, tested, and packaged.

For technical information, see the Magento DevDocs for additional technical information for developing extensions and more:

* [PHP Developer Guide][1]{: target="_blank"}
* [Best Practices for Extension Developers][2]{: target="_blank"}
* [Magento Web APIs][3]{: target="_blank"}
* [Frontend Developer Guide][4]{: target="_blank"}

## Build your extension

1. Before submitting your extension review, see the [Technical Review Guidelines]({% link sellers/technical-review-guidelines.md %}) and the [Marketing Review Guidelines]({% link sellers/marketing-review-guidelines.md %}).

1. Use the [CodeSniffer][5]{: target="_blank"} tool to verify that your code meets Marketplace guidelines.

   Testing your extension in advance reduces the time it takes to pass Technical Review. For a list of code sniffer rules, see [Magento Extension Quality Program Coding Standard][6]{: target="_blank"}.

1. Prepare, validate, and zip your extension as described in Packaging a Component for Magento version [2.x][7]{: target="_blank"} or [1.x]({% link sellers/packaging-v1x-extensions.md %}){: target="_blank"}.

1. Prepare the following preliminary documentation:

   * Release notes in text format
   * A user guide, installation guide, or reference manual in PDF format

![]({% link images/images/sellers/extension-prep.png %})
<br/>_Building and Submitting an Extension_

[1]: https://devdocs.magento.com/guides/v2.3/extension-dev-guide/bk-extension-dev-guide.html
[2]: https://devdocs.magento.com/guides/v2.3/ext-best-practices/bk-ext-best-practices.html
[3]: https://devdocs.magento.com/guides/v2.3/get-started/bk-get-started-api.html
[4]: https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/bk-frontend-dev-guide.html
[5]: https://github.com/squizlabs/PHP_CodeSniffer
[6]: https://github.com/magento/marketplace-eqp
[7]: http://devdocs.magento.com/guides/v2.3/extension-dev-guide/package/package_module.html
