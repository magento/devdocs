---
layout: default
group: install
subgroup: A_Verify
title: Verify the installation
menu_title: Verify the installation
menu_node: parent
menu_order: 1
version: 2.1
github_link21: install-gde/install/verify.md
---

#### Contents 

*	<a href="#instgde-verify-front-sample">Verify the storefront (with optional sample data)</a>
*	<a href="#instgde-verify-front">Verify the storefront (no sample data)</a>
*	<a href="#instgde-verify-admin">Verify the Magento Admin</a>

<h2 id="instgde-verify-front-sample">Verify the storefront (with optional sample data)</h2>
Go to the storefront in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}common/images/install-success_store-luma.png" alt="Magento storefront with the Luma theme"></p>


<h2 id="instgde-verify-front">Verify the storefront (no sample data)</h2>

Go to the storefront in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}common/images/install-success_store.png" width="450px" alt="Magento storefront which verifies a successful installation"></p>

If the page displays unconfigured (no styles, only text), see <a href="{{ site.gdeurl21 }}install-gde/trouble/tshoot_no-styles.html">After installing, images and stylesheets do not load; only text displays, no graphics</a>.

<h2 id="instgde-verify-admin">Verify the Magento Admin</h2>

Go to the Magento Admin in a web browser. For example, if your Magento installation base URL is `http://www.example.com`, and the Admin URI is `admin_au1nT`, enter `http://www.example.com/admin_au1nT` in your browser's address or location bar.

(The Admin URI is specified by the value of the `backend-frontname` installation parameter.)

When prompted, log in as a Magento Administrator.

The following figure shows a sample Magento Admin page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}common/images/install_success_admin.png" alt="Magento Admin which verifies a successful installation"></p>

If the page displays unconfigured (no styles, only text), see <a href="{{ site.gdeurl21 }}install-gde/trouble/tshoot_no-styles.html">After installing, images and stylesheets do not load; only text displays, no graphics</a>.

If you get a 404 (Not Found) error similar to the following, see <a href="{{ site.gdeurl21 }}install-gde/trouble/tshoot_access-browser.html">Cannot access Magento software in a web browser</a>.

`The requested URL /magento2index.php/admin/admin/dashboard/index/key/0c81957145a968b697c32a846598dc2e/ was not found on this server.`
