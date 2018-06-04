---
group: mtf-guide
title: Quick start. Prepare Magento application
version: 2.1
github_link: mtf/mtf_quickstart/mtf_quickstart_magento.md
---

## Change WYSIWYG settings

A Selenium web-driver cannot enter data to fields with {% glossarytooltip 98cf4fd5-59b6-4610-9c1f-b84c8c0abd97 %}WYSIWYG{% endglossarytooltip %}. This option disables the WYSIWYG and enables the web-driver to process these fields as simple text areas.

1. Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} as an administrator.
2. Follow **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
3. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
4. Click **Save Config**.

![Change content settings]({{ site.baseurl }}/common/images/ftf/mtf_qstart_mag_wysiwyg.png){:width="650px"}

## Change security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session. And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores &gt; Configuration &gt; Advanced &gt; {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} &gt; Security**.
2. Set **Admin Account Sharing** to **Yes**.
3. Set **Add Secret Key to URLs** to **No**.

![Change security settings]({{ site.baseurl }}/common/images/ftf/mtf_qstart_mag_secur.png){:width="650px"}

## Refresh page cache

* Go to **Cache Management**.

![Cache Management message]({{ site.baseurl }}/common/images/ftf/mtf_cache_mngt.png){:width="650px"}

* Select the check boxes next to **Configuration** and **Page Cache**.
* From the **Actions** list in the upper left, click **Refresh**.
* Click **Submit**.


[&lt;&lt; Adjust configuration]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html) | [Prepare environment for test run &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html)