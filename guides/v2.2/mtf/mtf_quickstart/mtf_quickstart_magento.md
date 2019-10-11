---
group: functional-testing-framework-guide
title: Quick start. Prepare Magento application
---

## Change WYSIWYG settings

A Selenium web-driver cannot enter data to fields with [WYSIWYG](https://glossary.magento.com/wysiwyg). This option disables the WYSIWYG and enables the web-driver to process these fields as simple text areas.

1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
1. Follow **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
1. Set **Enable WYSIWYG Editor** to **Disabled Completely**.
1. Click **Save Config**.

![Change content settings]({{ site.baseurl }}/common/images/ftf/mtf_qstart_mag_wysiwyg.png){:width="650px"}

## Change security settings

Enable the **Admin Account Sharing** setting to avoid unpredictable logout during testing session. And disable the **Add Secret Key in URLs** setting to open pages using direct URLs.

1. Follow **Stores &gt; Configuration &gt; Advanced &gt; [Admin](https://glossary.magento.com/admin) &gt; Security**.
1. Set **Admin Account Sharing** to **Yes**.
1. Set **Add Secret Key to URLs** to **No**.

![Change security settings]({{ site.baseurl }}/common/images/ftf/mtf_qstart_mag_secur.png){:width="650px"}

## Refresh page cache

*  Go to **Cache Management**.

![Cache Management message]({{ site.baseurl }}/common/images/ftf/mtf_cache_mngt.png){:width="650px"}

*  Select the checkboxes next to **Configuration** and **Page Cache**.
*  From the **Actions** list in the upper left, click **Refresh**.
*  Click **Submit**.

## Enable CLI commands

Functional tests require access to utilities working with Magento during test run. Depending on a web server, use the following instructions to enable access to the commands.

### Apache

Copy `/dev/tests/functional/.htaccess.sample` to `/dev/tests/functional/.htaccess`.

### NGINX

In `nginx.conf`, add declaration blocks for each command listed in `/dev/tests/functional/.htaccess.sample` using the following example:

```nginx
location ~* ^/dev/tests/functional/utils($|/) {
    root $MAGE_ROOT;
    location ~ ^/dev/tests/functional/utils/command.php {
        fastcgi_pass   fastcgi_backend;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

location ~* ^/dev/tests/functional/utils($|/) {
    root $MAGE_ROOT;
    location ~ ^/dev/tests/functional/utils/website.php {
        fastcgi_pass   fastcgi_backend;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
```

[&lt;&lt; Adjust configuration]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html) | [Prepare environment for test run &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_environment.html)
