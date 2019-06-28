---
group: cloud-guide
title: Cloud variables
redirect_from:
  - /guides/v2.1/cloud/env/environment-vars_cloud.html
  - /guides/v2.2/cloud/env/environment-vars_cloud.html
  - /guides/v2.3/cloud/env/environment-vars_cloud.html
functional_areas:
  - Cloud
  - Configuration
---

Environment variables that are specific to {{site.data.var.ece}} use the `MAGENTO_CLOUD_*` prefix:

Variable | Description
-------- | ---------------
`MAGENTO_CLOUD_APP_DIR` | The absolute path to the application directory.
`MAGENTO_CLOUD_APPLICATION` | A base64-encoded JSON object that describes the application. It maps to the `.magento.app.yaml` file content and has subkeys.
`MAGENTO_CLOUD_APPLICATION_NAME` | The name of the application configured in the `.magento.app.yaml` file.
`MAGENTO_CLOUD_DOCUMENT_ROOT` | The absolute path to the web document root, if applicable.
`MAGENTO_CLOUD_ENVIRONMENT` | The name of the environment branch.
`MAGENTO_CLOUD_PROJECT` | The project ID.
`MAGENTO_CLOUD_RELATIONSHIPS` | A base64-encoded JSON object that represents key (relationship name) and value (arrays of relationship pairs) endpoint definition. Each relationship endpoint definition is a decomposed form of a URL. It has a `scheme`, a `host`, a `port`, and _optionally_ a `username`, `password`, `path` and some additional information in `query`.
`MAGENTO_CLOUD_ROUTES` | Describe the routes defined in the environment `.magento/routes.yaml` file.
`MAGENTO_CLOUD_TREE_ID` | The tree ID for the application, which corresponds to the SHA of the tree in Git.
`MAGENTO_CLOUD_VARIABLES` | A base64-encoded JSON object with key-value pairs, such as `"key":"value"`.

{:.bs-callout-warning}
To [add environment variables to override configuration settings]({{ site.baseurl }}/guides/v2.2/config-guide/prod/config-reference-var-name.html) using the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-basic.html#project-conf-env-var), you must prepend the variable name with `env:` as in the following example.
![Environment variable example]({{ site.baseurl }}/common/images/cloud_env_var_example.png)

Since values can change over time, it is best to inspect the variable at runtime and use it to configure your application. For example, we use the `MAGENTO_CLOUD_RELATIONSHIPS` variable to retrieve environment-related relationships as follows:

```php?start_inline=1
/**
  * Get relationships information from MagentoCloud environment variable.
  *
  * @return mixed
  */
    protected function getRelationships()
    {
        return json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]), true);
    }
```

#### To view environment variables:

You can use the `env:config:show` command from [the `{{site.data.var.ct}}` package]({{page.baseurl}}/cloud/reference/ece-tools-reference.html) to show a list of variables for the current environment.

```bash
php ./vendor/bin/ece-tools env:config:show variables
```

Sample output for the `variables` option:

```terminal
Magento Cloud Environment Variables:
+-----------------------------------+----------------------------------+
| Variable name                     | Value                            |
+-----------------------------------+----------------------------------+
| ADMIN_EMAIL                       | magentoadmin@company.com         |
| ADMIN_PASSWORD                    | 123123q                          |
+-----------------------------------+----------------------------------+
```
{: .no-copy}