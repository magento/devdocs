---
group: product-recommendations
title: Troubleshoot Recommendations
---

If you have configured the `product-recommendations` module correctly, but you are not seeing any recommendations, try the following:

-  It is possible that the module has not had enough time to collect behavioral data. Allow the system to run for 24 hours so it can start collecting data. Consider deploying a recommendation type that does not require any behavioral data, such as "More like this".

-  If you are not seeing the recommendations that you configured, it is possible there is not yet sufficient data to build recommendations for the user.

-  Ensure the SaaS Environment ID or API Key are valid. If you get an error after specifying your SaaS Environment ID or your API key during the product recommendations initialization, check to make sure you have entered the [SaaS Environment ID]({{ page.baseurl }}/recommendations/configure.html#envid) and [API key]({{ page.baseurl }}/recommendations/configure.html#apikeys) correctly. To ensure the MageID and API key are linked, the user whose MageID was provided at [sign-up]({{ page.baseurl }}/recommendations/product-recs.html#install) needs to be the same user who generates the API key. If you must change the MageID that was used, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.

### Catalog SaaS Export module

For issues related to the Catalog SaaS Export module:

-  Confirm the modules are enabled. The `saas-export` metapackage installs the following modules, all of which must be enabled:

   ```text
       "magento/module-catalog-data-exporter"
       "magento/module-catalog-inventory-data-exporter"
       "magento/module-catalog-url-rewrite-data-exporter"
       "magento/module-configurable-product-data-exporter"
       "magento/module-data-exporter"
       "magento/module-saas-catalog"
   ```

-  Check the [logs]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/logging.html). Make sure there are no errors associated with the above modules.

-  Confirm the [indexers]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-index.html) are running and the `Product Feed` indexer is set to `Update by Schedule`.

-  Confirm the [cron]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-cron.html) jobs are running.

-  Refresh Configuration cache. Go to **System** > **Tools** > **Cache Management**, and clear the configuration cache.

-  Confirm there is data in the `catalog_data_exporter_products` database table.

### Events

[Recommendation Events]({{ page.baseurl }}/recommendations/verify.html) describes the behavioral events that are sent to Magento.
