---
group: installation-guide
subgroup: 01_Verify
title: Verify the installation
menu_title: Verify the installation
menu_node: parent
menu_order: 1
redirect_from: /guides/v1.0/install-gde/install/verify.html
functional_areas:
  - Install
  - System
  - Setup
---

## Verify the storefront (with optional sample data)   {#instgde-verify-front-sample}

Go to the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} in a web browser. For example, if your Magento installation base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}/common/images/install-success_store-luma.png" alt="Magento storefront with the Luma theme"></p>

## Verify the storefront (no sample data)   {#instgde-verify-front}

Go to the storefront in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}/common/images/install-success_store.png" width="450px" alt="Magento storefront which verifies a successful installation"></p>

If the page displays a 404 (Not Found) or unconfigured (no styles, only text), see [After installing, images and stylesheets do not load; only text displays, no graphics]({{ page.baseurl }}/install-gde/trouble/tshoot_no-styles.html).

## Verify the Magento Admin   {#instgde-verify-admin}

Go to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, and the Admin URI is `admin_au1nT`, enter `http://www.example.com/admin_au1nT` in your browser's address or location bar.

(The {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} URI is specified by the value of the `backend-frontname` installation parameter.)

When prompted, log in as a Magento Administrator.

The following figure shows a sample Magento Admin page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}/common/images/install_success_admin.png" alt="Magento Admin which verifies a successful installation"></p>

If the page displays unconfigured (no styles, only text), see [After installing, images and stylesheets do not load; only text displays, no graphics]({{ page.baseurl }}/install-gde/trouble/tshoot_no-styles.html).

If you get a 404 (Not Found) error similar to the following, see [Cannot access Magento software in a web browser]({{ page.baseurl }}/install-gde/trouble/tshoot_access-browser.html).

`The requested URL /magento2index.php/admin/admin/dashboard/index/key/0c81957145a968b697c32a846598dc2e/ was not found on this server.`
