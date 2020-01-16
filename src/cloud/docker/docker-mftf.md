---
title: Magento application testing
group: cloud-guide
functional_areas:
  - Cloud
---

In a Docker development environment, you can use the [Magento Functional Testing Framework] (MFTF)]{{site.baseurl}}/mftf/docs/introduction.html)(M) for Magento application testing.

{:.bs-callout-info}
MFTF support is enabled by the [Selenium container]({{site.baseurl}}/cloud/docker/docker-service-containers.html) available in [{{site.data.var.mcd}}][cloud-docker-repo] version 1.0 or later. If you are using an earlier version of Docker that was integrated into the {{site.data.var.ct}} package, you must upgrade to {{site.data.var.mcd}} v1.0.

1. Prepare the environment

   -  Add the MFTF dependency to your project using Composer.

      ```bash
      composer require "magento/magento2-functional-testing-framework" --no-update
      ```

   -  Install the new Composer dependency.

      ```bash
      composer update
      ```

1. Generate the `docker-compose.yml` file.

    ```bash
    ./vendor/bin/ece-docker build:compose --with-selenium --no-cron
    ```

1. Start Magento Cloud Docker.

    Optionally, you can set up {{site.data.var.mcd}} to work in [Developer Mode]({{site.baseurl}}/cloud/docker/docker-mode-developer.html)

    ```bash
    ./bin/magento-docker up
    ./bin/magento-docker ece-redeploy
    ```

1. Prepare the {{site.data.var.ee}} application for MFTF testing:

   -  Add the environment variables required for application testing with MFTF.

      ```bash
      CONFIG="MAGENTO_BASE_URL=http://magento2.docker/
      MAGENTO_BACKEND_NAME=admin
      MAGENTO_ADMIN_USERNAME=admin
      MAGENTO_ADMIN_PASSWORD=123123q
      MODULE_WHITELIST=Magento_Framework,Magento_ConfigurableProductWishlist,Magento_ConfigurableProductCatalogSearch
      SELENIUM_HOST=selenium"

      docker-compose run deploy bash -c "echo \"$CONFIG\" > /app/dev/tests/acceptance/.env"
      ```

      {:.bs-callout-info}
      In this example, the variable configuration is for testing a Magento application deployed to the Docker environment. To run tests in a remote environment, change the value of `MAGENTO_BASE_URL` to the remote URL and update the credentials as needed.

   -  Disable Magento settings that conflict with MFTF functionality.

      ```bash
      docker-compose run deploy magento-command config:set admin/   security/admin_account_sharing 1
      docker-compose run deploy magento-command config:set admin/   security/use_form_key 0
      docker-compose run deploy magento-command config:set web/   secure/use_in_adminhtml 0
      ```

   -  Enable the Varnish cache for the Magento application.

      ```bash
      docker-compose run deploy magento-command config:set    system/full_page_cache/caching_application 2 --lock-env
      docker-compose run deploy magento-command setup:config:set    --http-cache-hosts=varnish
      ```

1. Generate MFTF tests.

   ```bash
    docker-compose run test mftf-command build:project
    docker-compose run test mftf-command generate:tests --debug=none
    ```

1. Run the generated tests.

    ```bash
    docker-compose run test mftf-command run:test AdminLoginTest --debug=none
    docker-compose run test mftf-command run:test AddProductBySkuWithEmptyQtyTest --debug=none
    ```

[cloud-docker-repo]: https://github.com/magento/magento-cloud-docker
