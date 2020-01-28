---
title: Magento application testing
group: cloud-guide
functional_areas:
  - Cloud
---

In a Cloud Docker development environment, you can use the [Magento Functional Testing Framework (MFTF)][MFTF docs] for Magento application testing.
In this environment, you run MFTF commands using the [CLI container command] `mftf-command`. For example, the following command generates the MFTF tests:

```bash
docker-compose run test mftf-command generate:tests --debug=none
```

{:.bs-callout-info}
Support for MFTF requires [Magento Cloud Docker] version 1.0 or later.

1. Prepare the local environment.

   -  Add the MFTF dependency to your project using Composer.

      ```bash
      composer require "magento/magento2-functional-testing-framework" --no-update
      ```

   -  Install the new Composer dependencies.

      ```bash
      composer update
      ```

1. Generate the `docker-compose.yml` file.

    ```bash
    ./vendor/bin/ece-docker build:compose --with-selenium --no-cron
    ```

1. Start the Magento Cloud Docker environment. Optionally, you can set up {{site.data.var.mcd}} to work in [Developer Mode].

   ```bash
   ./bin/magento-docker up
   ```

   ```bash
    ./bin/magento-docker ece-redeploy
    ```

1. Prepare the Magento application by adding environment variables that are specific to MFTF.

   ```bash
   CONFIG="MAGENTO_BASE_URL=http://magento2.docker/
   MAGENTO_BACKEND_NAME=admin
   MAGENTO_ADMIN_USERNAME=admin
   MAGENTO_ADMIN_PASSWORD=123123q
   MODULE_WHITELIST=Magento_Framework,Magento_ConfigurableProductWishlist,Magento_ConfigurableProductCatalogSearch
   SELENIUM_HOST=selenium"
   ```

   ```bash
   docker-compose run deploy bash -c "echo \"$CONFIG\" > /app/dev/tests/acceptance/.env"
   ```

   {:.bs-callout-tip}
   In this example, the variable configuration is for testing a Magento application deployed to the Docker environment. To run tests in a remote environment, change the value of `MAGENTO_BASE_URL` to the remote URL and update the credentials as needed.

1. Disable the Magento settings that conflict with MFTF functionality.

   ```bash
   docker-compose run deploy magento-command config:set admin/   security/admin_account_sharing 1
   ```

   ```bash
   docker-compose run deploy magento-command config:set admin/   security/use_form_key 0
   ```

   ```bash
   docker-compose run deploy magento-command config:set web/   secure/use_in_adminhtml 0
   ```

1. Enable the Varnish cache for the Magento application.

   ```bash
   docker-compose run deploy magento-command config:set    system/full_page_cache/caching_application 2 --lock-env
   ```

   ```bash
   docker-compose run deploy magento-command setup:config:set    --http-cache-hosts=varnish
   ```

1. Generate MFTF tests.

   ```bash
   docker-compose run test mftf-command build:project
   ```

   ```bash
   docker-compose run test mftf-command generate:tests --debug=none
   ```

1. Run the generated tests.

   ```bash
   docker-compose run test mftf-command run:test AdminLoginTest --debug=none
   ```

   ```bash
   docker-compose run test mftf-command run:test AddProductBySkuWithEmptyQtyTest --debug=none
   ```

[MFTF docs]: {{site.baseurl}}/mftf/docs/introduction.html
[CLI container command]:  {{site.baseurl}}/cloud/docker/docker-containers-cli.html#cli-container-commands
[cloud-docker-repo]: https://github.com/magento/magento-cloud-docker
[developer mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
