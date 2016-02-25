---
layout: default
group: mtf-guide
subgroup: C_Quickstart
title: Quick start with the Magento Testing Framework
menu_title: Prepare Magento application
menu_order: 1
github_link: mtf/mtf_quickstart/mtf_quickstart_magento.md
---

<h2>Prepare Magento application</h2>

* TOC
{:toc}

## Change WYSIWYG settings

Disable WYSIWYG editor setting to enable to enable you to work with Selenium Server.

1. Log in to the Magento Admin as an administrator
2. Follow **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**
3. Set **Enable WYSIWYG Editor** to **Disabled Completely** 

![Change content settings]({{site.baseurl}}common/images/mtf_qstart_mag_wysiwyg.png)

## Change security settings

Enable the Admin Account Sharing setting to avoid unpredictable logout during testing session. And disable the Secret Key in URL setting to open pages using direct URLs.

1. Follow **Stores &gt; Configuration &gt; Advanced &gt; Admin &gt; Security**
2. Set **Admin Account Sharing** to **Yes**
3. Set **Add Secret Key to URLs** to **No**

![Change security settings]({{site.baseurl}}common/images/mtf_qstart_mag_secur.png)