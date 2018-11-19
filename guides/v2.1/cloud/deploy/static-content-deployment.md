---
group: cloud-guide
title: Static content deployment strategies
functional_areas:
  - Cloud
  - Configuration
---

Static content deployment (SCD) has a great impact on the store deployment process that depends on the amount of content generated—such as images, scripts, CSS, videos, and web pages—and when to generate the content. By default, the static content generates during the [deploy phase]({{page.baseurl}}/cloud/deploy/optimize-cloud-deploy.html#-deploy-phase) when the site is down; however, this can take time because it must copy the content to the mounted `pub/static` directory.

## Minify content

You can improve the SCD load time during the deployment process if you skip copying the static view files in the `var/view_preprocessed` directory and generate _minified_ HTML when requested. You can activate this by setting the [SKIP_HTML_MINIFICATION]({{page.baseurl}}/cloud/env/variables-global.html#skip_html_minification) global environment variable to `true` in the `.magento.env.yaml` file.

You can save more deployment time and disk space by reducing the amount of unnecessary theme files. For example, you can deploy the `magento/backend` theme in English and a custom theme in other languages. You can configure these theme settings with the [SCD_MATRIX]({{page.baseurl}}/cloud/env/variables-deploy.html#scd_matrix) environment variable.

## Choosing a deploy strategy

Deployment strategies differ based on whether you choose to generate static content during the _build_ phase, the _deploy_ phase, or _on-demand_. As seen in the following chart, generating static content during the deploy phase is the least optimal choice. Even with minified HTML, each content file must be copied to the mounted `./pub/static` directory, which can take a long time. Generating static content on demand seems like the optimal choice, but if the content file does not exist in the cache, it generates at the moment it is requested, which adds load time to the user experience; therefore, generating static content during the build phase is the most optimal.

![SCD Load Comparison]

### Setting the SCD on build

Generating static content during the build phase with minified HTML is the optimal configuration for **zero-downtime** deployments, also known as the **ideal state**. Instead of copying files to a mounted drive, it uses symlinks from the `./init/pub/static` directory.

The file system is accessible in all deployment phases; however, Magento stores locales in the database. The database is not available during the build phase. In order to generate the static content during the build phase, you have to move locales to the file system. The {{site.data.var.ct}} package contains the `config:dump` command that reads locales and saves them in the `app/etc.config.php` file.

1.  Move locales to the file system.

    ```bash
    php ./vendor/bin/ece-tools config:dump
    ```

1.  Update the `.magento.env.yaml` configuration file with the following values:

    -  Set [SKIP_HTML_MINIFICATION]({{page.baseurl}}/cloud/env/variables-global.html#skip_html_minification) to `true`
    -  Set [SKIP_SCD]({{page.baseurl}}/cloud/env/variables-build.html#skip_scd) on build stage to `false`
    -  Set `SCD_STRATEGY` to `compact`

1.  Configure the [Post-deploy hook]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#hooks) in the `.magento.app.yaml` configuration file.

1.  Verify your settings by running the [Smart wizard for the ideal state]({{page.baseurl}}/cloud/env/smart-wizards.html).

    ```bash
    php ./vendor/bin/ece-tools wizard:ideal-state
    ```

### Setting the SCD on demand

Generating SCD on demand is optimal for a development workflow. It decreases deployment time so that you can quickly review your implementations and run integration tests. Enable the [SCD_ON_DEMAND]({{page.baseurl}}/cloud/env/variables-global.html#scd_on_demand) environment variable in the global stage of the `.magento.env.yaml` file. The SCD_ON_DEMAND variable overrides all other configurations related to SCD and clears existing content from the `/pub/static` directory.

When using the SCD on-demand strategy, it helps to preload the cache with pages you expect to request, such as the home page. Add your list of expected pages in the [WARM_UP_PAGES]({{page.baseurl}}/cloud/env/variables-post-deploy.html#warm_up_pages) environment variable in the post-deploy stage of the `.magento.env.yaml` file.

### Skipping SCD

In some cases you could choose to skip generatating static content completely. You can set the [SKIP_SCD]({{page.baseurl}}/cloud/env/variables-build.html#skip_scd) environment variable in the global stage to ignore other configurations related to SCD. This does not affect existing content in the `/pub/static` directory.

[SCD Load Comparison]: {{site.baseurl}}/common/images/cloud/scd-load-times.png
{: width="700px"}