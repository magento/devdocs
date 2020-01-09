---
title: Magento Functional Testing
group: cloud-guide
functional_areas:
  - Cloud
---

In a Cloud Docker development environment, you can use the [Magento Functional Testing Framework]({{site.baseurl}}/mftf/docs/introduction.html) for Magento application testing.

This means that you're able to run Functional Tests locally and target them on your Cloud Docker or remote instance.

{:.bs-callout-info}
Support for MFTF requires [Magento Cloud Docker][cloud-docker-repo] version 1.0 or higher.

1. Prepare environment

    - Add MFTF dependency via Composer tou your project,

    ```bash
    composer require "magento/magento2-functional-testing-framework" --no-update
   ```

   - Install new Composer Dependency
   
   ```bash
    composer update
    ```

1. Generate `docker-compose.yml` file

    ```bash
    ./vendor/bin/ece-docker build:compose --with-selenium --no-cron
    ```

1.  Start Cloud Docker

    Optionally you can setup Cloud Docker to work in [Developer Mode]({{site.baseurl}}/cloud/docker/docker-mode-developer.html)
    
    ```bash
    ./bin/magento-docker up
    ./bin/magento-docker ece-redeploy
    ```

1. Prepare Magento

    - Add environment variables specific to MFTF
    
    {:.bs-callout-info}
    You may use remote URL in `MAGENTO_BASE_URL` variable below
    
    ```bash
    CONFIG="MAGENTO_BASE_URL=http://magento2.docker/
    MAGENTO_BACKEND_NAME=admin
    MAGENTO_ADMIN_USERNAME=admin
    MAGENTO_ADMIN_PASSWORD=123123q
    MODULE_WHITELIST=Magento_Framework,Magento_ConfigurableProductWishlist,Magento_ConfigurableProductCatalogSearch
    SELENIUM_HOST=selenium"
   
    docker-compose run deploy bash -c "echo \"$CONFIG\" > /app/dev/tests/acceptance/.env"
   ```
   
    - Disable Magento settings that conflict with MFTF functionality.

    ```bash
    docker-compose run deploy magento-command config:set admin/security/admin_account_sharing 1
    docker-compose run deploy magento-command config:set admin/security/use_form_key 0
    docker-compose run deploy magento-command config:set web/secure/use_in_adminhtml 0
   ```
   
   - Enable the Varnish cache for the Magento application.

   ```bash
    docker-compose run deploy magento-command config:set system/full_page_cache/caching_application 2 --lock-env
    docker-compose run deploy magento-command setup:config:set --http-cache-hosts=varnish
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
