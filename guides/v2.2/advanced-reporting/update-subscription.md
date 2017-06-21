---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Update a subscription
menu_title: Update a subscription
menu_order: 6
menu_node:
version: 2.2
github_link: advanced-reporting/update-subscription.md
---

Since the Advanced Reporting service identifies Magento instances by a combination of a secure base URL and a unique token, the Magento team has implemented a subscription update mechanism to keep synchronization with the Advanced Reporting service in case the secure base URL of a store has been changed.

The mechanism consists of two main elements: the plugin and the cron job.

### The plugin

The plugin detects changes in the secure base URL of a Magento store. If such changes have been detected and a Magento instance is already subscribed for the Advanced Reporting service, the plugin creates a corresponding cron job to schedule the sending of the `Update` request.

**A fragment of the 'app/code/Magento/Analytics/etc/di.xml' file:**
```
<config>
   ...
   <type name="Magento\Config\Model\Config\Backend\Baseurl">
       <plugin name="updateAnalyticsSubscription" type="Magento\Analytics\Model\Plugin\BaseUrlConfigPlugin" />
   </type>
   ...
</config>
```

### The cron job

The cron job performs a corresponding request to notify the Advanced Reporting service that a secure base URL has been changed. The job is executed every hour until the notification is successful.

**A fragment of the 'app/code/Magento/Analytics/etc/crontab.xml' file:**
 ```
 <group id="default">
     ...
     <job name="analytics_update" instance="Magento\Analytics\Cron\Update" method="execute" />
     ...
 </group>
 ```
### The Update Request
  ![Update Request](./images/update_request.png)

The `Update` request is a **PUT HTTP request** that contains data in the JSON format. The endpoint for the request is configured in the the `app/code/Magento/Analytics/etc/config.xml` file.

The request is considered successful only if the Advanced Reporting service responds with a **201 HTTP status.**

**An example of an 'Update' request body**

```
{
  "url": "https://old.magento.com",
  "new-url": "https://new.magento.com",
  "access-token": "fc7bf8e3c68c2c1f8da9b53bfa62e7ff9ffb10f3"
}
```
Note: the example above contains a complete list of allowed parameters. All these parameters are required.