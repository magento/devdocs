---
layout: default
group: mtf-guide
subgroup: Quick Start
title: Quick start with the Magento Testing Framework
menu_title: Prepare environment for test run
menu_order: 2
github_link: mtf/mtf_quickstart/mtf_quickstart_environmemt.md
redirect_from: /guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_environmemt.html
---
<h2 id="mtf_quickstart_config">Prepare environment for test run</h2>

<h3 id="mtf_quickstart_env_selenium">Run the Selenium Server</h3>
The Selenium Server is located in `<magento_root>/dev/tests/functional/vendor/netwing/selenium-server-standalone` directory. If you cannot find this directory, please <a href="{{site.gdeurl}}mtf/mtf_installation/mtf_install.html">check MTF installation<a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>Specific versions of the Selenium Server are compatible with specific versions of browsers. You might need to manually download and update the Selenium Server to match your browser version. <a href="http://docs.seleniumhq.org/about/platforms.jsp">Read more about compatibility of browser version and Selenium server version.</a></p>
</div>

Enter in terminal:

    java -jar <path_to_selenium_directory>/selenium-server.jar

<h3 id="mtf_quickstart_env_selenium-non-def">Run tests on non default browser</h3>

If the Selenium Server does not work directly with your browser, you should download the corresponding [WebDriver][], and run the Selenium Server with an additional argument.

Example for Google Chrome:

    java -jar <path_to_selenium_directory>/selenium-server.jar -Dwebdriver.chrome.driver=<path_to_chrome_driver>/chromedriver.exe

<h3 id="mtf_quickstart_env_generator">Run generator</h3>

Generator generates fixtures, repositories and page objects. Once MTF is initialized, all classes will be pre-generated to facilitate creating and running the tests.

Enter in terminal:

    cd <magento_root>/dev/tests/functional/utils
    php generate.php

<h2 id="mtf_install_pre">Next Steps</h2>
<a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_config.html">&lt;&lt; Adjust configuration </a> | <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_runtest.html"> Test run &gt;&gt;</a>


[WebDriver]: http://docs.seleniumhq.org/about/platforms.jsp
