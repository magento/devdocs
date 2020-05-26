---
group: cloud-guide
title: Project structure
functional_areas:
  - Cloud
  - Configuration
---
All {{site.data.var.ece}} projects include essential files for credentials and application configuration:

File                      | Description
------------------------- | -----------
`/.magento/routes.yaml`   | Configuration file that redirects `www` to the naked domain and `php` application to serve HTTP. See [Configure environments]({{ site.baseurl }}/cloud/env/environments.html).
`/.magento/services.yaml` | Configuration file that defines a MySQL instance, Redis, and ElasticSearch. See [Configure environments]({{ site.baseurl }}/cloud/env/environments.html).
`/app`                    | The `code` folder is used for custom modules. The `design` folder is used for custom themes. See [Install a theme]({{ site.baseurl }}/cloud/howtos/custom-theme.html). The `etc` folder contains configuration files for Magento.
`/m2-hotfixes`            | Used for custom patches.
`/update`                 | A service folder used by the support module.
`.gitignore`              | Specify which files and directories to ignore. See [`.gitignore` reference](#ignoring-files).
`.magento.app.yaml`       | Configuration file that defines the properties to build your application. See [Configure environments]({{ site.baseurl }}/cloud/env/environments.html).
`.magento.env.yaml`       | Configuration file that defines actions for the build, deploy, and post-deploy phases. The ece-tools package includes a sample of this file with detailed descriptions for the available variables. See [Configure environments]({{ site.baseurl }}/cloud/env/environments.html).
`composer.json`           | Fetches the Magento Enterprise Edition and the necessary configuration scripts to prepare your application. See [Prepare your Magento install]({{ site.baseurl }}/cloud/setup/first-time-setup-import-prepare.html).
`composer.lock`           | Stores version dependencies for every package.
`magento-vars.php`        | A file used to define [multiple stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html#modify-magento-variables) and sites using [Magento variables]({{ site.baseurl }}/guides/v2.3/config-guide/multi-site/ms_over.html).

 {:.bs-callout-info}
When you push your local environment to the remote server, our deploy script uses the values defined by configuration files in the `.magento` directory, then the script deletes the directory and its contents. Your local development environment is not affected.

## Magento application root directory

The Magento application root directory is located in different locations depending on the environment.

-  **Starter and Pro Integration**: `/app`
-  **Starter Production**: `/<project-ID>`
-  **Pro Staging**: `/<project-ID>_stg`
-  **Pro Production**: `/<project-ID>`

### Writable directories

In Integration, Staging, and Production, *only* the following directories are writable due to security reasons:

-  `var`
-  `pub/static`
-  `pub/media`
-  `app/etc`
-  `/tmp`

 {:.bs-callout-info}
In Production and Staging environments, each node in the three-node cluster has a `/tmp` directory that is not shared with the other nodes.

## Ignoring files

We include a base `.gitignore` file with the {{site.data.var.ece}} project repository. See the latest [.gitignore file in the magento-cloud repository](https://github.com/magento/magento-cloud/blob/master/.gitignore). If you need to add a file that is in the ignore list, you can use the `-f` (force) option when staging a commit:

```bash
git add <path/filename> -f
```

## Change base template

You can use the following steps to change the structure of an existing project to reflect the latest base template for {{site.data.var.ece}}.

1. Clone project to local workstation.

1. Update the `composer.json` file with the following values for the `extra` section.

   ```json
   "extra": {
       "magento-force": true
       "magento-deploystrategy": "copy"
   }
   ```

1. Add the `.gitignore` file designed for the base template. For example, if you need the `.gitignore` file for the version 2.2.6 template, use the [.gitignore for 2.2.6](https://github.com/magento/magento-cloud/blob/2.2.6/.gitignore) file as a reference.

1. Clear the git cache.

   ```bash
   git rm -r --cached .
   ```

1. Add and commit changes.

   ```bash
   git add -A && git commit -m "Update base template"
   ```