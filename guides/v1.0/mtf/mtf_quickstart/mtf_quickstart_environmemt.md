---
layout: default
group: mtf-guide
subgroup: C. Quick Start
title: Quick start with Magento Testing Framework
menu_title: Prepare environment for test run
menu_order: 2
github_link: guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_environmemt.md
---
<h2 id="mtf_quickstart_config">Prepare environment for test run</h2>

<h3 id="mtf_quickstart_env_selenium">Run Selenium server</h3>
Selenium server downloaded during MTF installation in <code>&lt;magento_root&gt;/dev/tests/functional/vendor/netwing/selenium-server-standalone</code> folder.

<div class="bs-callout bs-callout-info" id="info">
  <p>Specific versions of Selenium are compatible with specific versions of browsers. You might need to manually download and update Selenium to match your browser version. <a href="http://docs.seleniumhq.org/about/platforms.jsp">Read more about compatibility of browser version and Selenium server version.</a></p>
</div>

1.    Open terminal
1.    Enter <code>java -jar <path_to_selenium_folder>/selenium-server.jar</code>

<h3 id="mtf_quickstart_env_selenium-non-def">Run tests on non default browser</h3>        
If your browser is not maintained by Selenium server, you should run Selenium server with additional argument to use [web-driver][].

Example for Google Chrome:
<code>java -jar <path_to_selenium_folder>/selenium-server.jar -Dwebdriver.chrome.driver=<path_to_chrome_driver>/chromedriver.exe</code>

<h3 id="mtf_quickstart_env_generator">Run generator</h3>

Generator generates fixtures, repositories and page objects. Once MTF is initialized, all classes will be pre-generated to facilitate creating and running the tests.

1.    Open terminal
1.    Enter <code>cd &lt;magento_root&gt;/dev/tests/functional/utils</code>
1.    Enter <code>php generate.php</code>



[web-driver]: http://docs.seleniumhq.org/about/platforms.jsp