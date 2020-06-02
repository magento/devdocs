---
group: cloud-guide
title: Add Blackfire.io to Docker
functional_areas:
- Cloud
- Setup
- Configuration

---

You can add Blackfire.io to your {{site.data.var.mcd-prod}} environment to complete automated performance testing.

[Blackfire.io for Magento Cloud](https://blackfire.io/magento) is a PHP profiler and automated performance testing tool that can be used in the development Integration, Staging, and Production environments. It enables you to locate and investigate performance issues in your environment at the code level and creates a performance profile by tracking every PHP call, method, and SQL query performed by your code. Blackfire digs deeper to provide granular performance analytics.

{:.procedure}
To add the Blackfire.io extension to your Cloud Docker environment:

1. Add the following Blackfire.io configuration to the `runtime:extensions` section of the `.magento.app.yaml` file.

   ```yaml
   runtime:
     extensions:
       - random-extension-here
       -
         name: blackfire
         configuration:
           server_id: SERVER_ID
           server_token: SERVER_TOKEN
           client_id: CLIENT_ID
           client_token: CLIENT_TOKEN
   ```

1. Generate the `docker-compose.yml` file for developer mode, adding any required [build or service configuration options][] and [file synchronization options][] if needed.

   ```bash
   ./vendor/bin/ece-docker build:compose --mode="developer"
   ```

1. Start the {{site.data.var.mcd-prod}} environment.

   ```bash
   ./bin/magento-docker up
   ```

   ```bash
   ./bin/magento-docker ece-redeploy
   ```
 
  {:.bs-callout-info}
  If you are using file synchronization, synchronize files as needed. See [Launch Docker in developer mode][]

1. Add context to use locally customized PHP images as described in [Extend the Docker configuration](https://devdocs.magento.com/cloud/docker/docker-extend.html#specify-docker-build-sources).

1. Install Magento in your Docker environment.

   -  Deploy Magento in the Docker container.

      ```bash
      docker-compose run deploy cloud-deploy
      ```

      ```bash
      docker-compose run deploy magento-command deploy:mode:set developer
      ```

   -  Run post-deploy hooks.

      ```bash
      docker-compose run deploy cloud-post-deploy
      ```

   {:.bs-callout-warning}
   Review messages and notifications during the deployment process and address any errors or notifications as needed.

1. Enable the Varnish cache for the Magento application.

   ```bash
   docker-compose run deploy magento-command config:set  system/full_page_cache/caching_application 2 --lock-env
   ```

   ```bash
   docker-compose run deploy magento-command setup:config:set  --http-cache-hosts=varnish
   ```

1. Clear the cache.

   ```bash
   docker-compose run deploy magento-command cache:clean
   ```

1. Make sure necessary containers are up and running.

   ```bash
   docker ps
   ```

{:.procedure}
To use Blackfire.io for Magento performance testing in Cloud Docker:

1. Install a profiling client as described in the [Blackfire documentation](https://blackfire.io/docs/up-and-running/installation#install-a-profiling-client).

1. Profile the Magento website. See the [Blackfire.io documentation].

<!--Link definitions-->
[Blackfire documentation]: https://blackfire.io/docs/up-and-running/installation#install-a-profiling-client
[build or service configuration options]: https://devdocs.magento.com/cloud/docker/docker-quick-reference.html
[file synchronization options]: {{site.baseurl}}/cloud/docker/docker-syncing-data.html
[Launch Docker in developer mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
[Blackfire.io documentation]: https://blackfire.io/docs/integrations/paas/magentocloud
