---
layout: default
group: cloud
title: Working with variables
version: 2.1
github_link: cloud/env/working-with-variables.md
functional_areas:
  - Cloud
  - Configuration
---

The following scenarios demonstrate working with specific environment variables, including configuration instructions. It does not contain examples of all available environment variables. Refer to [application-specific]({{page.baseurl}}cloud/env/environment-vars_magento.html) and [cloud-specific]({{page.baseurl}}cloud/env/environment-vars_cloud.html) environment variables for a complete list.

## Connect to an existing AMQP-based service {#queue}
<!-- Available for 2.1.4 and higher only. -->
If you prefer using an existing search service, like RabbitMQ, instead of relying on {{site.data.var.ece}} to create it for you, use the `QUEUE_CONFIGURATION` environment variable to connect it to your site.

You must set the variable value using JSON. For example:

```json
{  
   "amqp":{  
      "host":"test.host",
      "port":"1234",
      "username":"guest",
      "password":"guest",
      "virtual_host":"/",
      "ssl":"false"
   },
   "amqp2":{  
      "host":"test.host2",
      "port":"12345",
      "username":"guest2",
      "password":"guest2"
   },
   "mq":{  
      "host":"mq.host",
      "port":"1234"
   }
}
```

To configure the `QUEUE_CONFIGURATION` environment variable:
1.  In a terminal, log in to your project.

        magento-cloud login

1.  Set the variable value using one of the following commands:

    -   **Project-specific variables**—To set the same value for all environments in your project, use the `magento-cloud project:variable:set` command. These variables are available at build and runtime in all environments.
    -   **Environment-specific variables**—To set a unique value for a specific environment, use the `magento-cloud variable:set` command. These variables are available at runtime and are inherited by child environments. You should specify the environment in your command using the `-e` option.

    You must include the `--json` option and enclose the JSON with single quotes. For example:

        magento-cloud project:variable:set --json QUEUE_CONFIGURATION '{"amqp": {"host":"test.host", "port":"1234", "username":"guest", "password":"guest","virtual_host":"/","ssl":"false"}, "amqp2": {"host":"test.host2", "port":"12345", "username":"guest2", "password":"guest2"}, "mq":{"host":"mq.host", "port":"1234"}}'

<div class="bs-callout bs-callout-info" markdown="1">
After setting project-specific variables, you must manually redploy the remote environment for the change to take effect. Use `git push` with new commits to trigger a redeploy. Setting environment-specific variables automatically redeploys the remote environment.
</div>

## Connect to an existing search service {#search}
<!-- Available for 2.1.4 and higher only. -->
If you prefer using an existing search service, like Elasticsearch, instead of relying on {{site.data.var.ece}} to create it for you, use the `SEARCH_CONFIGURATION` environment variable to connect it to your site.

You must set the variable value using JSON. For example:

```json
{  
   "engine":"elasticsearch",
   "elasticsearch_server_hostname":"hostname",
   "elasticsearch_server_port":"12345",
   "elasticsearch_index_prefix":"magento",
   "elasticsearch_server_timeout":"15"
}
```

To configure the `SEARCH_CONFIGURATION` environment variable:
1.  In a terminal, log in to your project.

        magento-cloud login

1.  Set the variable value using one of the following commands:

    -   **Project-specific variables:** To set the same value for all environments in your project, use the `magento-cloud project:variable:set` command. These variables are available at build and/or runtime in all environments.
    -   **Environment-specific variables:** To set a unique value for a specific environment, use the `magento-cloud variable:set` command. These variables are available at runtime and are inherited by child environments. You should specify the environment in your command using the `-e` option.

    You must include the `--json` option and enclose the JSON with single quotes. For example:

        magento-cloud project:variable:set --json SEARCH_CONFIGURATION '{"engine":"elasticsearch","elasticsearch_server_hostname":"hostname","elasticsearch_server_port":"12345","elasticsearch_index_prefix":"magento","elasticsearch_server_timeout":"15"}'

<div class="bs-callout bs-callout-info" markdown="1">
After setting project-specific variables, you must manually redploy the remote environment for the change to take effect. Use `git push` with new commits to trigger a redeploy. Setting environment-specific variables automatically redeploys the remote environment.
</div>
