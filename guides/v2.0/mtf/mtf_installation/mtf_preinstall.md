---
layout: default
group: mtf-guide
subgroup: Installation
title: Installation of the Magento Testing Framework
menu_title: Check pre-installation conditions
menu_order: 1
github_link: mtf/mtf_installation/mtf_preinstall.md
redirect_from: /guides/v1.0/mtf/mtf_installation/mtf_preinstall.html
---

<h2 id="mtf_install_pre">Check pre-installation conditions</h2>

<h3 id="mtf_install_pre_inst-magento">1. Install the Magento application you want to test</h3>
To install the Magento application, see <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">Magento Installation Guide</a>.

<h3 id="mtf_install_pre_adj-magento">2. Adjust Magento application preferences</h3>

-    Log in to the Magento Admin as an administrator. Example of Magento Admin URL: <code>http://magento.example.com/admin_1sgfym</code>.
-    On the vertical navigation bar click **Stores &gt; Configuration &gt; Advanced &gt; Admin &gt; Security**.
-    Set **Add Secret Key to URLs** to **No**. This setting allows test to open pages using direct URLs and assures correct cURL requests.
-    Go back to the vertical navigation bar of Magento Admin page.
-    Click **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
-    Set **Enable WYSIWYG Editor** to **Disabled Completely** to enable you to work with Selenium. You can change the setting later after you're finished testing.

<h3 id="mtf_install_pre_tools">3. Check if all required software installed and configured</h3>

<h4 id="mtf_install_pre_tools_apache">PHP</h4>

<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">More details about PHP verification, installation and configuration</a>.

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, directive <code>extension=php_openssl.dll</code> shall be enabled.</p>
<p> To be sure, find text <code>extension=php_openssl.dll</code>. If it starts from <code>;</code>, then directive disabled. To enable it, delete <code>;</code>.</p>
</div>


<h2 id="mtf_install_pre">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_installation/mtf_install.html">Perform and check installation</a>
