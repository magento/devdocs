---
group: installation-guide
title: Step 5. Configure catalog search
functional_areas:
  - Install
  - System
  - Setup
---

1. Enter the following information:

   |Item|Description|
   | --- | --- |
   |Search Engine | Select the version of Elasticsearch you installed before you began installing Magento with the Setup Wizard. |
   |Elasticsearch Hostname | The host name or IP address of the Elasticsearch server. The default value is `localhost`. |
   |Elasticsearch Port | The port for incoming HTTP requests. The default is 9200. |
   |Elasticsearch Authentication | Select to enable authentication for Elasticsearch. |
   |Elasticsearch Username | The user ID to authenticate Elasticsearch. Applicable only if authentication is enabled. |
   |Elasticsearch Password | The password to authenticate Elasticsearch. Applicable only if authentication is enabled. |
   |Elasticsearch Index Prefix | A prefix that identifies the Elasticsearch index. |
   |Elasticsearch Timeout (seconds) | The number of seconds to wait for an Elasticsearch request to complete before it times out. |

1. Click **Test Connection**. You must successfully establish a connection to continue the next step.

1. Click **Next**.

If the test connection fails, try the following:

*  Make sure the Elasticsearch server is running.
*  If the Elasticsearch server is on a different host from Magento, log in to the Magento server and ping the Elasticsearch host. Resolve network connectivity issues and test the connection again.
*  Examine the command window in which you started Elasticsearch for stack traces and exceptions. You must resolve those before you continue. In particular, make sure you started Elasticsearch as a user with `root` privileges.
*  Make sure that [UNIX firewall and SELinux]({{ page.baseurl }}/install-gde/prereq/elasticsearch.html#firewall-selinux) are both disabled, or set up rules to enable Elasticsearch and Magento to communicate with each other.
*  Verify the value of the **Elasticsearch Hostname** field. Make sure the server is available. You can try the server's IP address instead.
*  Use the command `netstat -an | grep **listen-port**` command to verify that the port specified in the **Elasticsearch Port** field is not being used by another process.

  For example, to see if Elasticsearch is running on its default port, use the following command:

  ```bash
  netstat -an | grep 9200
  ```

  If Elasticsearch is running on port 9200, it displays similar to the following:
  `tcp        0      0 :::9200            :::*          LISTEN`


{:.ref-header}
Related topics

[Step 6. Create Admin account]({{ page.baseurl }}/install-gde/install/web/install-web_5-create-admin.html)
