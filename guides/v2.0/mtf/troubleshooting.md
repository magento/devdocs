---
layout: default
group: mtf-guide
subgroup: V_Troubleshooting
title: Troubleshoot the Magento Testing Framework issues
menu_title: TROUBLESHOOTING
menu_node: parent
github_link: mtf/troubleshooting.md
---
<h2 id="mtf_update">Known issues and their solutions</h2>

* TOC
{:toc}

### Installation issues {#install-issues}

#### Selenium Server issue

Error message:

    PHPUnit_Extensions_Selenium2TestCase_WebDriverException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output: in selenium server console output

* **Reason**: a Selenium server is [incompatible with your browser version](http://docs.seleniumhq.org/about/platforms.jsp#browsers)
* **Solution**: [download the latest Selenium Standalone Server version](http://docs.seleniumhq.org/download/)