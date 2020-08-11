---
group: marketplace-api
title: API access keys
---

{:.bs-callout-info}
Marketplace EQP API **access keys** are self-serviced.  As long as you are [eligible](api.html#eligible) to use the Marketplace EQP API, then you can create, regenerate, and delete your own **access keys**.

## What is an API access key

-  An API access key is a pair consisting of an **application ID** and an **application secret**.
-  Use an API access key to obtain a [session token](auth.html#session-token).  The **session token** is used when calling the [REST endpoints](rest-api.html).
-  You decide the lifespan of your API access key: you can regenerate it as often as you wish, or you can choose to delete it.
-  API access keys are specific to each **Marketplace Developer Portal** environment.  API access keys generated for the **sandbox** cannot be used for **production**, and vice-versa.
-  For each **Marketplace Developer Portal** environment, you have a limit of three (3) API access keys.

## How do I create an API access key

-  You create your API access key from one, or both, of the **Marketplace Developer Portal** user interfaces:
   -  production - [https://developer.magento.com][1]
   -  sandbox - [https://developer-stg.magento.com][2]

### Create a new API access key

1. From the **Marketplace Developer Portal**, sign in, click on your name (top, right corner), and choose either the **Account Information** or the **Marketplace Profile** link.
1. From the left-hand side navigation menu, click on **Manage API Keys**.
1. If you are **not** [eligible](api.html#eligible) you will see the following screen.  You will **not** be able to create an API access key, and thus you will **not** be able to use the **Marketplace EQP API**.
    ![]({{ site.baseurl }}/marketplace/eqp/v1/images/sandbox-not-eligible.png){: .zoom}
    _Not Eligible to Use the Marketplace EQP API_
1. If you **are** eligible to use the **Marketplace EQP API**, you will see the following screen.
    ![]({{ site.baseurl }}/marketplace/eqp/v1/images/sandbox-access-key-empty.png){: .zoom}
    _Empty List of API Access Keys_
1. Click **Create API Access Key**.
1. In the "Create New API Key" dialog, enter an **API Key Name**.  This name is for your own use. Then, click **Continue**.
    ![]({{ site.baseurl }}/marketplace/eqp/v1/images/sandbox-access-key-create.png){: .zoom}
    _Create API Access Key Dialog_
1. Your new API access key appears in the list.  Notice that your API access key has an associated **application ID** and an **application secret**.
    ![]({{ site.baseurl }}/marketplace/eqp/v1/images/sandbox-access-key-list.png){: .zoom}
    _New API Access Key Added_

## Manage your API access keys

-  From the list of your API access keys, you can **regenerate** the key.
   -  Regenerating the key will result in a new pair of the **application ID** and **application secret**.
   -  Once regenerated, the previous pair can no longer be used to obtain a [session token](auth.html#session-token).
   -  However, any **session tokens** obtained from the previous key will remain valid, until those session tokens expire.
-  From the list of your API access keys, you can **delete** the key.
   -  Once deleted, the key can no longer be used to obtain a [session token](auth.html#session-token).
   -  However, any **session tokens** obtained from the previous key will remain valid, until those session tokens expire.

{:.bs-callout-info}
Marketplace EQP API **access keys** generated in the [sandbox][2] environment are separate from those generated in [production][1].
You cannot use access keys from one environment in the other.
<br/><br/>
**Session tokens** generated in the **sandbox** are separate from those generated in **production**.
You cannot use session tokens from one environment in the other.

[1]: https://developer.magento.com
[2]: https://developer-stg.magento.com
