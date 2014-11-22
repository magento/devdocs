---
layout: default
title: Verify your Magento 2 installation
---

<h1 id="instgde-verify">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/verify.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="instgde-verify-front">Verifying the storefront</h2>

Go to the storefront in a web browser. For example, if your Magento 2 installation base URL is `http://www.example.com`, enter it in your browser's address or location bar.

The following figure shows a sample storefront page. If it displays as follows, your installation was a success!

<p><img src="{{ site.baseurl }}common/images/install_verify_success.png" alt="Magento storefront which verifies a successful installation"></p>

If the page appears unconfigured (no styles, only text), see TBD.

<h2 id="instgde-verify-admin">Verifying the Magento Admin</h2>

Go to the Magento Admin in a web browser. For example, if your Magento 2 installation base URL is `http://www.example.com`, and the Admin URL is `admin`, enter `http://www.example.com/admin` in your browser's address or location bar.

(The Admin URL is specified by the value of the `backend_frontname` installation parameter.)

When prompted, log in as a Magento Administrator.

The following figure shows a sample Magento Admin page. If it displays as follows, your installation was a success!

Reviewer: I have no image currently but will add one.

If the page appears unconfigured (no styles, only text), see TBD.

If you get a 404 (Not Found) error similar to the following, see TBD:

`The requested URL /magento2index.php/admin/admin/dashboard/index/key/0c81957145a968b697c32a846598dc2e/ was not found on this server.`