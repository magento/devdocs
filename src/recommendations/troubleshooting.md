---
group: product-recommendations
title: Troubleshooting Recommendations
---

If after installing and configuring the module you are not seeing any recommendations, refer to the following list for possible solutions:

* It is possible that the module has not had enough time to collect behavioral data. Allow the system to run for 24 hours so it can start collecting data.

* If you are not seeing the recommendations that you configured, it is possible there is not yet sufficient data to build recommendations for the user. For example, if a `just-for-you` recommendation type is deployed but a first-time visitor lands on the page with no prior shopping history, Magento displays `most-viewed` products instead. If there is not sufficient data for the `most-viewed` recommendation type, Magento displays `more-like-this`.

* The SaaS Environment ID or API Key are invalid. If you get an error after specifying your SaaS Environment ID or your API key during the product recommendations initialization, check to make sure you have entered the [SaaS Environment ID]({{ page.baseurl }}/recommendations/configure.html#envid) and [API key]({{ page.baseurl }}/recommendations/configure.html#apikeys) correctly.
