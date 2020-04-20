---
group: product-recommendations
title: Troubleshoot Recommendations
ee_only: True
redirect_to: https://support.magento.com/hc/en-us/articles/360042224851
---

If you have configured the `product-recommendations` module correctly, but you are not seeing any recommendations, try the following:

-  It is possible that the module has not had enough time to collect behavioral data. Allow the system to run for 24 hours so it can start collecting data. Consider deploying a recommendation type that does not require any behavioral data, such as "More like this".

-  If you are not seeing the recommendations that you configured, it is possible there is not yet sufficient data to build recommendations for the user.

-  Ensure the SaaS Environment ID or API Key are valid. If you get an error after specifying your SaaS Environment ID or your API key during the product recommendations initialization, check to make sure you have entered the [SaaS Environment ID and API key](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html) correctly. To ensure the MageID and API key are linked, the user who owns the MageID, typically the user who owns the Magento license, needs to be the same user who generates the API key. If you must change the MageID that was used, [contact support](https://support.magento.com/hc/en-us).

### Catalog SaaS Export module

For issues related to the Catalog SaaS Export module:

-  Confirm the [cron](https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-cron.html) jobs are running.

-  Confirm the [indexers](https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-index.html) are running and the `Product Feed` indexer is set to `Update by Schedule`.

-  Confirm the modules are enabled. The `saas-export` metapackage installs the following modules, all of which must be enabled:

   ```text
       "magento/module-catalog-data-exporter"
       "magento/module-catalog-inventory-data-exporter"
       "magento/module-catalog-url-rewrite-data-exporter"
       "magento/module-configurable-product-data-exporter"
       "magento/module-data-exporter"
       "magento/module-saas-catalog"
   ```

-  Check the [logs](https://devdocs.magento.com/guides/v2.3/config-guide/cli/logging.html). Make sure there are no errors associated with the above modules.

-  Refresh Configuration cache. Go to **System** > **Tools** > **Cache Management**, and clear the configuration cache.

-  Confirm there is data in the `catalog_data_exporter_products` database table.

### Events

[Recommendation Events](https://devdocs.magento.com/recommendations/verify.html) describes the behavioral events that are sent to Magento.
