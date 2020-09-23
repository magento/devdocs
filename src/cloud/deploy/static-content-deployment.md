---
group: cloud-guide
title: Static content deployment strategies
functional_areas:
  - Cloud
  - Configuration
---

Static content deployment (SCD) has a significant impact on the store deployment process that depends on how much content to generate—such as images, scripts, CSS, videos, themes, locales, and web pages—and when to generate the content. For example, the default strategy generates static content during the [deploy phase]({{ site.baseurl }}/cloud/deploy/cloud-deployment-process.html#-deploy-phase) when the site is in maintenance mode; however, this deployment strategy takes time to write the content directly to the mounted `pub/static` directory. You have several options or strategies to help you improve the deployment time depending on your needs.

## Optimize JavaScript and HTML content

You can use bundling and minification to build optimized JavaScript and HTML content during static content deployment.

### Minify content

You can improve the SCD load time during the deployment process if you skip copying the static view files in the `var/view_preprocessed` directory and generate _minified_ HTML when requested. You can activate this by setting the [SKIP_HTML_MINIFICATION]({{ site.baseurl }}/cloud/env/variables-global.html#skip_html_minification) global environment variable to `true` in the `.magento.env.yaml` file.

 {:.bs-callout-info}
Beginning with the `{{site.data.var.ct}}` package version 2002.0.13, the default value for the SKIP_HTML_MINIFICATION variable is set to `true`.

You can save **more** deployment time and disk space by reducing the amount of unnecessary theme files. For example, you can deploy the `magento/backend` theme in English and a custom theme in other languages. You can configure these theme settings with the [SCD_MATRIX]({{ site.baseurl }}/cloud/env/variables-deploy.html#scd_matrix) environment variable.

## Choosing a deploy strategy

Deployment strategies differ based on whether you choose to generate static content during the _build_ phase, the _deploy_ phase, or _on-demand_. As seen in the following chart, generating static content during the deploy phase is the least optimal choice. Even with minified HTML, each content file must be copied to the mounted `~/pub/static` directory, which can take a long time. Generating static content on demand seems like the optimal choice, but if the content file does not exist in the cache, it generates at the moment it is requested, which adds load time to the user experience; therefore, generating static content during the build phase is the most optimal.

![SCD Load Comparison]

### Setting the SCD on build

Generating static content during the build phase with minified HTML is the optimal configuration for [**zero-downtime** deployments]({{ site.baseurl }}/cloud/deploy/reduce-downtime.html), also known as the **ideal state**. Instead of copying files to a mounted drive, it creates a symlink from the `./init/pub/static` directory.

Generating static content requires access to themes and locales. Magento stores themes in the file system, which is accessible during the build phase; however, Magento stores locales in the database. The database is _not_ available during the build phase. In order to generate the static content during the build phase, you must use the `config:dump` command in the {{site.data.var.ct}} package to move locales to the file system. It reads the locales and saves them in the `app/etc/config.php` file.

{:.procedure}
To configure your project to generate SCD on build:

1. Log in to your Cloud environment using SSH and move locales to the file system, then update the [`config.php` file]({{site.baseurl}}/cloud/project/project-upgrade.html#create-a-new-configphp-file).

1. The `.magento.env.yaml` configuration file should contain the following values:

   -  [SKIP_HTML_MINIFICATION]({{ site.baseurl }}/cloud/env/variables-global.html#skip_html_minification) is `true`
   -  [SKIP_SCD]({{ site.baseurl }}/cloud/env/variables-build.html#skip_scd) on build stage is `false`
   -  [SCD_STRATEGY]({{site.baseurl}}/cloud/env/variables-build.html#scd_strategy) is `compact`

1. Verify configuration of the [Post-deploy hook]({{ site.baseurl }}/cloud/project/magento-app-properties.html#hooks) in the `.magento.app.yaml` file.

1. Verify your settings by running the [Smart wizard for the ideal state]({{ site.baseurl }}/cloud/deploy/smart-wizards.html).

   ```bash
   php ./vendor/bin/ece-tools wizard:ideal-state
   ```

### Setting the SCD on demand

Generating SCD on demand is optimal for a development workflow in the Integration environment. It decreases deployment time so that you can quickly review your implementations and run integration tests. Enable the [SCD_ON_DEMAND]({{ site.baseurl }}/cloud/env/variables-global.html#scd_on_demand) environment variable in the global stage of the `.magento.env.yaml` file. The SCD_ON_DEMAND variable overrides all other configurations related to SCD and clears existing content from the `~/pub/static` directory.

When using the SCD on-demand strategy, it helps to preload the cache with pages you expect to request, such as the home page. Add your list of expected pages in the [WARM_UP_PAGES]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) environment variable in the post-deploy stage of the `.magento.env.yaml` file.

{:.bs-callout-warning}
Do not use the SCD on-demand strategy in the Production environment.

### Skipping SCD

In some cases you could choose to skip generating static content completely. You can set the [SKIP_SCD]({{ site.baseurl }}/cloud/env/variables-build.html#skip_scd) environment variable in the global stage to ignore other configurations related to SCD. This does not affect existing content in the `~/pub/static` directory.

[SCD Load Comparison]: {{site.baseurl}}/common/images/cloud/scd-load-times.png
{:width="700px"}
