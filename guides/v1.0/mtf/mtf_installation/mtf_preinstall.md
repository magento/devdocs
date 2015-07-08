---
layout: default
group: mtf-guide
subgroup: Installation
title: Install Magento Testing Framework
menu_title: Check pre-installation conditions
menu_order: 1
github_link: guides/v1.0/mtf/mtf_installation/mtf_preinstall.md
---

<h2 id="mtf_install_pre">Check pre-installation conditions</h2>

<h3 id="mtf_install_pre_inst-magento">1. Install Magento application you want to test</h3>
To know how, see <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">**Magento Installation Guide**</a>.
<h3 id="mtf_install_pre_adj-magento">2. Adjust Magento application preferences</h3>

-    Open your Magento Admin page <code>http://&lt;your_magento_instance>/admin&gt;</code> and log in.
-    On the Primary Navigation (navigation panel on left side of the page) follow **Stores &gt; Configuration &gt; Advanced &gt; Admin &gt; Security**.
<div class="bs-callout bs-callout-info" id="info">
  <p>For Magento 1 follow <b>System &gt; Configuration &gt; Admin &gt; Security</b>.</p>
</div>
-    Set **Add Secret Key to URLs** to **No**. We want to open direct URLs, and not to navigate pages via Primary Navigation.
-    Go back to the Primary Navigation of Magento Admin page.
-    Follow **Stores &gt; Configuration &gt; General &gt; Content Management &gt; WYSIWYG Options**.
-    Set **Enable WYSIWYG Editor** to **Disabled Completely**. For stable work of Selenium with Magento 2.

<h3 id="mtf_install_pre_tools">3. Check if all required software installed and configured</h3>
<h4 id="mtf_install_pre_tools_apache">Apache</h4>
<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">More details about Apache verification, installation and configuration</a>.

<h4 id="mtf_install_pre_tools_apache">MySQL</h4>
<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">More details about MySQL verification, installation and configuration</a>.

<h4 id="mtf_install_pre_tools_apache">PHP</h4>

<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">More details about MySQL verification, installation and configuration</a>.

<div class="bs-callout bs-callout-warning">
    <p>In <code>php.ini</code> file, directive <code>extension=php_openssl.dll</code> shall be enabled.</p>
<p> To be sure, find text <code>extension=php_openssl.dll</code>. If it starts from <code>;</code>, then directive disabled. To enable it, delete <code>;</code>.</p>
</div>

<h4 id="mtf_install_pre_tools_apache">Selenium Standalone Server</h4>
Download [last release of Selenium Standalone Server][].

<h4 id="mtf_install_pre_tools_apache">Web driver</h4>
Selenium uses web-driver to manipulate the browser.

Download [web-driver for your browser][], if needed. 

<h3 id="mtf_install_pre_mtf-check">4. Check if MTF has been already installed</h3>
Open folder <code>&lt;magento_root&gt;/dev/tests/functional/vendor/magento/</code>.
If it contains folder <code>mtf</code>, then MTF is already there.


[official web-site]: http://www.seleniumhq.org/download/
[last release of Selenium Standalone Server]: http://www.seleniumhq.org/download/
[web-driver for your browser]: http://www.seleniumhq.org/about/platforms.jsp#browsers