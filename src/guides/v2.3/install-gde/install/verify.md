---
group: installation-guide
subgroup: 01_Verify
title: Verify the installation
menu_title: Verify the installation
menu_node: parent
menu_order: 1
functional_areas:
  - Install
  - System
  - Setup
---

## Verify the storefront (with optional sample data) {#instgde-verify-front-sample}

Go to the [storefront](https://glossary.magento.com/storefront) in a web browser. For example, if your Magento installation base [URL](https://glossary.magento.com/url) is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

![Magento storefront with the Luma theme]({{ site.baseurl }}/common/images/install-success_store-luma.png)

## Verify the storefront (no sample data) {#instgde-verify-front}

Go to the storefront in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

![Magento storefront which verifies a successful installation]({{ site.baseurl }}/common/images/install-success_store.png){:width="450px"}

If the page displays a 404 (Not Found) or unconfigured (no styles, only text), see [After installing, images and stylesheets do not load; only text displays, no graphics](https://support.magento.com/hc/en-us/articles/360032994352).

## Verify the Magento Admin {#instgde-verify-admin}

Go to the [Magento Admin](https://glossary.magento.com/magento-admin) in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, and the Admin URI is `admin_au1nT`, enter `http://www.example.com/admin_au1nT` in your browser's address or location bar.

(The [Admin](https://glossary.magento.com/admin) URI is specified by the value of the `backend-frontname` installation parameter.)

When prompted, log in as a Magento Administrator.

The following figure shows a sample Magento Admin page. If it displays as follows, your installation was a success!

![Magento Admin which verifies a successful installation]({{ site.baseurl }}/common/images/install_success_admin.png)

If the page displays unconfigured (no styles, only text), see [After installing, images and stylesheets do not load; only text displays, no graphics](https://support.magento.com/hc/en-us/articles/360032994352).

If you get a 404 (Not Found) error similar to the following, see [Cannot access Magento software in a web browser](https://support.magento.com/hc/en-us/articles/360033117152).

`The requested URL /magento2index.php/admin/admin/dashboard/index/key/0c81957145a968b697c32a846598dc2e/ was not found on this server.`
