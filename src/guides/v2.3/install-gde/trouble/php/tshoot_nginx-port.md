---
group: installation-guide
subgroup: 03_install
title: Cannot install using nginx
menu_title: Cannot install using nginx
menu_node:
menu_order: 20
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360033782051
---

If you use the [nginx](https://glossary.magento.com/nginx) web server and you attempt to install the Magento software, the installation sometimes fails.

### Detail

You can confirm the issue by the following error in the `var/report` directory:

```text
NOTE: You cannot install Magento using the Setup Wizard because the Magento setup directory cannot be accessed.
You can install Magento using either the command line or you must restore access to the following directory: /var/www/html/setup
If you are using the sample nginx configuration, please go to http://ce.mtf03.bcn.magento.com/setup/";i:1;s:641:"#0 /var/www/html/lib/internal/Magento/Framework/App/Http.php(213): Magento\Framework\App\Http->redirectToSetup(Object(Magento\Framework\App\Bootstrap), Object(Exception))
```

### Workaround

Append `/setup` to the [URL](https://glossary.magento.com/url) by which you access the Setup Wizard or install the Magento software using the [command line]({{ page.baseurl }}/install-gde/install/cli/install-cli.html).
