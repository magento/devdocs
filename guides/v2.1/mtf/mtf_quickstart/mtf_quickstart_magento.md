---
layout: default
group: mtf-guide
subgroup: 30_Quickstart
title: Quick start with the Functional Testing Framework
menu_title: Prepare Magento application
menu_order: 1
version: 2.1
github_link: mtf/mtf_quickstart/mtf_quickstart_magento.md
---

<h2>Prepare Magento application</h2>

* TOC
{:toc}

## Change WYSIWYG settings

A Selenium web-driver cannot enter data to fields with WYSIWYG. This option disables the WYSIWYG and enables the web-driver to process these fields as simple text areas.

1. Log in to the Magento Admin as an administrator.
2. Follow **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
3. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
4. Click **Save Config**.

![Change content settings]({{site.baseurl}}common/images/mtf_qstart_mag_wysiwyg.png){:width="650px"}

## Change security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session. And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores &gt; Configuration &gt; Advanced &gt; Admin &gt; Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.

![Change security settings]({{site.baseurl}}common/images/mtf_qstart_mag_secur.png){:width="650px"}

## Refresh page cache

* Go to **Cache Management**.

![Cache Management message]({{site.baseurl}}common/images/mtf_cache_mngt.png){:width="650px"}

* Select the check boxes next to **Configuration** and **Page Cache**.
* From the **Actions** list in the upper left, click **Refresh**.
* Click **Submit**.

<h2 id="mtf_install_pre">Next Steps</h2>

[&lt;&lt; Adjust configuration]({{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html) | [Prepare environment for test run &gt;&gt;]({{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_environment.html)
