---
group: software-update-guide
title: Magento Quality Patches release notes
functional_areas:
  - Setup
  - Configuration
  - Upgrade
---

The [Magento Quality Patches](https://github.com/magento/quality-patches) package delivers individual patches developed by Magento and allows you to apply, revert, and view general information about all individual patches that are available for the installed version of {{ site.data.var.ee }} or {{ site.data.var.ce }}.

<!-- The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues -->

{:.bs-callout-info}
See [Apply patches]({{ site.baseurl }}/guides/v2.4/comp-mgr/patching.html) for instructions on applying patches to your Magento projects.

## v1.0.2

-  **MDVA-25602** _(for Magento `>=2.3.0 <2.3.2`, `>=2.3.0 <2.3.5`, `>=2.3.2 <2.3.3`, `>=2.3.3 <2.3.5`)_—Fixes issue with PayPal Payflow Pro payment method and treating cookies as SameSite=Lax by default in the Chrome 80 browser and API response redirect to customer login page.
-  **MDVA-26694** _(for Magento `>=2.3.0 <=2.3.5-p2 || 2.4.0`)_—Fixes the issue with product and catalog caches expiring daily, though being scheduled to expire differently.
-  **MDVA-27825** _(for Magento `>=2.3.0 <=2.3.5-p2 || 2.4.0`)_—Fixes an issue where exporting of big amounts of data failed because of memory leak.
-  **MDVA-29085** _(for Magento `>=2.3.0 <=2.3.5-p1`)_—Fixes a B2B issue where no required new company emails are sent out if a company is created by API.
-  **MDVA-29344** _(for Magento `>=2.3.5 <=2.3.5-p2 || 2.4.0`)_—Fixes an issue where Page Builder gets stuck after copying text from a header element to a text element.
-  **MDVA-29835** _(for Magento `>2.3.1 <=2.3.5-p2 || 2.4.0`)_—Fixes an issue where gift card orders contained two codes instead one.
-  **MDVA-30052** _(for Magento `>=2.3.2-p2 <2.3.5`)_—Fixes the issue with private content (local storage) not being populated correctly, which resulted in performance problems.
-  **MDVA-30131** _(for Magento `>=2.3.4 <=2.3.5-p2 || 2.4.0`)_—Fixes the issue with layered navigation, where the `No` value for boolean type product attributes was not included in layered navigation if Elasticsearch was used as a search engine.
-  **MDVA-35514** _(for Magento `2.4.0`)_—Fixes an issue with creating a shipping label and adding ordered products to a package in the Create Packages modal window.
