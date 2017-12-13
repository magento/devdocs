---
layout: default
group: cloud
subgroup: 120_env
title: Magento Commerce (Cloud) environment variables
menu_title: Magento Commerce (Cloud) environment variables
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/env/environment-vars_cloud.md
functional_areas:
  - Cloud
  - Configuration
---

Environment variables that are specific to {{site.data.var.ece}} are prefixed with `MAGENTO_CLOUD_*`.

-   **MAGENTO_CLOUD_APP_DIR**: The absolute path to the application directory.
-   **MAGENTO_CLOUD_APPLICATION**: A base64-encoded JSON object that
    describes the application. It maps the content of the
    `.magento.app.yaml` that you have in Git and it has a few subkeys.
-   **MAGENTO_CLOUD_APPLICATION_NAME**: The name of the application, as configured
    in the `.magento.app.yaml` file.
-   **MAGENTO_CLOUD_DOCUMENT_ROOT**: The absolute path to the web document root, if
    applicable.
-   **MAGENTO_CLOUD_ENVIRONMENT**: The name of the environment (that is, the
    name of the branch in Git).
-   **MAGENTO_CLOUD_PROJECT**: The ID of the project.
-   **MAGENTO_CLOUD_RELATIONSHIPS**: A base64-encoded JSON object whose keys
    are the relationship name and the values are arrays of relationship
    endpoint definitions. Each relationship endpoint definition is a
    decomposed form of a URL. It has a `scheme`, a `host`, a `port`, and
    optionally a `username`, `password`, `path` and some additional
    information in `query`.
-   **MAGENTO_CLOUD_ROUTES**: Describe the routes that you defined in the
    environment. It maps the content of the `.magento/routes.yaml`
    file.
-   **MAGENTO_CLOUD_TREE_ID**: The ID of the tree the application was built
    from. It's essentially the SHA of the tree in Git.
-   **MAGENTO_CLOUD_VARIABLES**: A base64-encoded JSON object which keys are
    variables names and values are variable values (a string).

Since values can change over time, you should inspect the variable at runtime and use it to configure your application.

For example, we use the **MAGENTO_CLOUD_RELATIONSHIPS** variable to retrieve environment-related relationships as follows:

{% highlight xml %}
 /**
     * Get relationships information from MagentoCloud environment variable.
     *
     * @return mixed
     */
    protected function getRelationships()
    {
        return json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]), true);
    }

{% endhighlight %}

#### Related topics
* [Overview of environment variables]({{page.baseurl}}cloud/env/environment-vars_over.html)
*	[Magento application environment variables]({{page.baseurl}}cloud/env/environment-vars_magento.html)
*	[Example setting variables]({{page.baseurl}}cloud/env/set-variables.html)
*	[Configuration management]({{page.baseurl}}cloud/live/sens-data-over.html)
*	[Example of configuration management]({{page.baseurl}}cloud/live/sens-data-initial.html)
* [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
* [`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
* [`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
