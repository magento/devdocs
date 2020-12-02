---
group: software-update-guide
title: Prerequisites for the safe upgrade tool
functional_areas:
  - Upgrade
---

Before you upgrade from Magento 2.3.x to Magento 2.4, you must check whether you are using MySQL, Elasticsearch, or a third-party extension as your catalog search engine in your Magento 2.3.x instance. The result determines what you must do **before** upgrading to Magento 2.4.

The minimum requisites to run the Safe Upgrade Tool (SUT) are:

| **Requisites** | **Constraints** |
|----------------|-----------------|
| PHP version| >= 7.3 |
| Composer | none |
| Node.js | none |
| Magento Access keys | none |
| MC or Magento Open Source | none |
{:style="table-layout:auto;"}

{:.bs-callout .bs-callout-info}
SUT should run in any operating system. It is not required to run the tool where your magento instance is located.

Refer to [`Safe upgrade tool welcome guide`]({{ page.baseurl }}/guides/v2.4/comp-mgr/sut/sut-welcome-guide.html) for full instructions on how to install these prerequisites.