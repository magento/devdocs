---
group: mtf-guide
title: Quick start. Prepare environment for test run
version: 2.0
github_link: mtf/mtf_quickstart/mtf_quickstart_environment.md
---

## Run the Selenium Server on default browser {#mtf_quickstart_env_selenium}

The Selenium Server drives a browser to execute your tests.
You can download the Selenium Server from [Selenium project website].

<div class="bs-callout bs-callout-warning" markdown="1">
Install [Java](https://help.ubuntu.com/community/Java) to work with Selenium Server.
</div>

Specific versions of the Selenium Server are compatible with specific versions of browsers. <a href="http://docs.seleniumhq.org/about/platforms.jsp">Read more about compatibility of browser version and Selenium server version.</a>

<div class="bs-callout bs-callout-info" markdown="1">
Use Mozilla Firefox ESR 45 with Selenium 2.53.1. Later versions have compatibility issues.
</div>

Enter in terminal:

    java -jar <path_to_selenium_directory>/selenium-server.jar

## Run tests on non-default browser {#mtf_quickstart_env_selenium-non-def}

If the Selenium Server does not work directly with your browser, find the corresponding [web driver].

In `config.xml` [define the browser that the FTF must use for tests]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_configxml_browser).

Run the Selenium Server with an additional argument.

Example for Google Chrome with Selenium 2:


    java -Dwebdriver.chrome.driver=<path_to_chrome_driver>/chromedriver.exe -jar <path_to_selenium_directory>/selenium-server.jar
    
<div class="bs-callout bs-callout-info" markdown="1">
For Selenium 3 add the web driver to the directory where `selenium-server.jar` is located and run tests without additional argument: `java -jar <path_to_selenium_directory>/selenium-server.jar`
</div>


## Run generator {#mtf_quickstart_env_generator}

Generator generates [fixtures], [repositories], and [page objects]. Once the FTF is initialized, all classes must be pre-generated to facilitate creating and running the tests. Modules in the FTF are processed by generator in alphabetical order.

Enter in terminal:

    cd <magento2_root_dir>/dev/tests/functional/utils
    php generate.php

<h2 id="mtf_install_pre">Next Steps</h2>

[&lt;&lt; Prepare Magento application]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_magento.html)| <a href="{{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_runtest.html"> Test run &gt;&gt;</a>



<!-- LINK DEFINITIONS -->

<!-- Devdocs -->
[fixtures]: {{ page.baseurl }}/mtf/mtf_entities/mtf_fixture.html
[repositories]: {{ page.baseurl }}/mtf/mtf_entities/mtf_fixture-repo.html
[page objects]: {{ page.baseurl }}/mtf/mtf_entities/mtf_page.html

<!-- Internet -->
[Selenium project website]: http://www.seleniumhq.org/download/
[web driver]: http://docs.seleniumhq.org/about/platforms.jsp


<!-- ABBREVIATIONS -->
*[FTF]: Functional Testing Framework
