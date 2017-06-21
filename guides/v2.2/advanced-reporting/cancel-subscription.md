---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Cancel or restore a subscription
menu_title: Cancel/restore subscription
menu_order: 5
menu_node:
version: 2.2
github_link: advanced-reporting/cancel-subscription.md
---

Subscription for the MBI service may be canceled (disabled) or restored (enabled) at any time in the Stores > Configuration > General > Advanced reporting section of the Admin panel.

When the configuration value is changed, the `\Magento\Analytics\Model\Config\Backend\Enabled::afterSave()` function uses the `\Magento\Analytics\Model\Config\Backend\Enabled\SubscriptionHandler` service to activate/deactivate the MBI subscription.

Magento receives the MBI token only once during the first successful sign-up request. Later on, the MBI token is not removed if the subscription is canceled (disabled).

Thus, no additional sign-up request is sent when the subscription is restored (enabled) after cancellation. Note: the `\Magento\Analytics\Model\AnalyticsToken` class is responsible for all operations with the MBI token (set/get value, check if the token exists).

### Subscription statuses

Subscription may have several statuses. Magento considers subscription as **'enabled'**, **'pending'**, **'failed'** or **'disabled'** by checking the following configuration parameters:

* **Subscription state**: `default/analytics/subscription/enabled`, boolean, located in the `core_config_data` DB table

* **MBI token**: `analytics/general/token`, string, located in the `core_config_data` DB table

* **Reserve counter of attempts to subscribe**: `analytics_link_attempts_reverse_counter`, integer, located in the `flag` DB table

Thus, subscription is considered as **'enabled'** if:

* 'default/analytics/subscription/enabled' is **1**

* 'analytics/general/token' is **present and not empty**

Subscription is considered as **'pending'** if:

* 'default/analytics/subscription/enabled' is **1**

* 'analytics/general/token' is **absent or empty**

Subscription is considered as **'failed'** if:

* 'default/analytics/subscription/enabled' is **1**

* 'analytics/general/token' is **absent or empty**

* 'analytics_link_attempts_reverse_counter' is **absent**

Subscription is considered as **'disabled'** if:

* 'default/analytics/subscription/enabled' is **0**, regardless of 'analytics/general/token'

See the `\Magento\Analytics\Model\SubscriptionStatusProvider` class that determins the subscription status.