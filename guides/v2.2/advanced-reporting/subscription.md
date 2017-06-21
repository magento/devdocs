---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Subscribe to Advanced Reporting
menu_title: Subscription
menu_order: 4
menu_node:
version: 2.2
github_link: advanced-reporting/subscription.md
---

*   MBIIM installs a new service user and ACL to access the API

*   The automatically created service user cannot access the Magento admin panel directly

*   Service user can perform calls to the API which retrieve the previously collected data

*   Advanced Reporting provides Subscription API

*   The Subscription API receives a Magento 2 connection token

*   The Subscription API returns a token for future access to Magento Analytics services

*   Cron enabled and configured for Magento

#### Precondition

*   MAFT installs new user and ACL to access API

*   Automatically created user can not access to Magento admin panel directly

*   User can perform calls to API which retrieve previously collected data

*   Magento Analytics provides sign-up API

*   The sign-up API receives Magento 2 connection token

*   The sign-up API returns token for future access to Magento Analytics services

*   Cron enabled and configured for Magento

#### Design

*   After the Free Tier module has been installed, the merchant can enable the subscription

*   Magento 2 generates new access token for an API user and sends it to the MBI signup service

*   MBI returns an own access token

*   Received token is stored in Magento System Configuration

*   Subscription is applied to all merchant`s websites and stores

#### SignUp

   ![SignUp](./docs/images/M2_MA_signup.png)

**SignUp payload:**

```
{
   "token": "fc7bf8e3c68c2c1f8da9b53bfa62e7ff9ffb10f3",
   "url": "demo-store.magento.com"
}
```

#### Exception Handling

* If Magento does not receive the MBI access token or the sign-up service returns an error message, Magento repeats the API sign-up call to the MBI service

* The interval for executing the calls SignUp command and the number of attempts is preconfigured in the module code.

### Sign-Up (Confirmation) window

Users can allow sending their system configuration and transaction data to the MBI service using the Sign-Up window.

The confirmation modal window pops up every seven days until the 'OK' button is pressed (regardless of whether the corresponding checkbox is checked or not).

Clicking the 'OK' button calls the `\Magento\Analytics\Model\NotificationTime::unsetLastTimeNotificationValue()` function that deletes the _'notification_time'_ flag from the `flag` DB table.

The confirmation modal window is displayed only if the following conditions are true:

* the flag exists in the DB table

* period after the last notification (time stamp recorded in the `flag_data` attribute) is more than 7 days (in seconds)

The confirmation modal window is added to the content of the following layout:

```
app/code/Magento/Analytics/view/adminhtml/layout/adminhtml_dashboard_index.xml'
```

```
<body>
        <referenceContainer name="content">
            <uiComponent name="analytics_subscription_form" acl="Magento_Analytics::analytics_settings" condition="analytics::can-view-notification" />
        </referenceContainer>
</body>
```

A subscription form is added as the following UI component:

```
'app/code/Magento/Analytics/view/adminhtml/ui_component/analytics_subscription_form.xml'.
```

The form contains two actions that call the corresponding controllers:

* 'OK' action calls \Magento\Analytics\Controller\Adminhtml\Subscription\Activate

* 'Cancel' action calls \Magento\Analytics\Controller\Adminhtml\Subscription\Postpone

The `Activate` controller enables subscription through the `\Magento\Analytics\Model\Subscription` service. The service sets the `default/analytics/subscription/enabled` configuration to "True", this triggers the `\Magento\Analytics\Model\Config\Backend\Enabled\SubscriptionHandler::process()` and sets a cron job (refer to 'app/code/Magento/Analytics/etc/crontab.xml').

The `Postpone` controller registers the time of the most recent notification; this time is used by cron to calculate the time of the next notification.

### Config Management

*   After user confirms the subscription, Magento stores the information about enabling the subscription in the config settings

*   Magento creates cron to call the MBI sign-up service

*   In case of success, cron adds the received authentication token in the config settings

*   In case of failure, cron decrements the numbers of allowed attempts and schedules the next run (with 24 allowed attempts as maximum)

*   User can trigger subscription directly by using the 'Subscribe' button on the config page

The user can unsubscribe from the MBI services. Magento 2 does not perform any additional calls to MBI.

### Sign-Up process sequence

1. Admin enables subscription via the pop-up or in General > Advanced reporting section of the Admin panel. At this point, the `\Magento\Analytics\Model\Config\Backend\Enabled\SubscriptionHandler` controller creates and saves the cron expression.

2. Magento parses the `\Magento\Analytics\etc\crontab.xml` file that contains the following declaration in `cronjob.xml`:

```
<group id="default">
    <job name="analytics_subscribe" instance="Magento\Analytics\Cron\SignUp" method="execute" />
</group>
```

3. The cron for this cron job is built from the database.

4. The `\Magento\Analytics\Cron\SignUp` function runs the `SignUp` command from the commands pool that is contained in the `\Magento\Analytics\Model\Connector` folder.

5. If the `SignUp` command is executed successfully, the `\Magento\Analytics\Cron\SignUp` function stops further executions of the command by removing the cron expression created in step #1.

6. If the `SignUp` command fails, the `\Magento\Analytics\Cron\SignUp` function runs the command once in an hour until:

* it is not executed successfully, or

* the number of retries doesn't reach the number of allowed attempts

The number of allowed attempts is stored in this flag:

```
\Magento\Analytics\Model\Config\Backend\Enabled\SubscriptionHandler::ATTEMPTS_REVERSE_COUNTER_FLAG_CODE.
```

### SignUpCommand responsibilities

*   Generate the ApiUserToken

*   Call the analytics service for signup

*   Log errors


### Sign-Up Retry

* If the subscription status is `failed` (see [Subscription Statuses](#subscription-statuses) below) after the sign-up process, the user receives a notification.

* This notification message contains the text that the subscription process has failed, and a retry link. The link allows to retry getting subscription - start the sign-up process again.

* The notification is displayed permanently on all pages of the Admin panel if the subscription status is `failed`.