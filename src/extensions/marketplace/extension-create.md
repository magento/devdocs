---
title: Creating a New Extension
redirect_from:
  - /extensions/extension-details.html
  - /extensions/extension-profile.html
  - /sellers/extension-create-new.html
---

When your extension code is complete, the next step is to create a new extension in Magento Marketplace. This creates an entry to your Extensions page in the Magento Marketplace Developer portal, but it does not submit the extension.

To add an entry, you need to complete these instructions and [Create a New Version]({% link sellers/creating-a-new-version.md %}).

## Create a new extension

1. Log into the Magento Marketplace Developer portal.

1. Click **Extensions**.

   A page loads listing any existing extensions you have previously added.

    ![]({% link images/images/sellers/your-extensions.png %}){: .zoom}
    _Your Extensions_

1. Click <span class="btn">Create New Extension</span>.

   The displayed chart provides a high level overview for creating and submitting extensions.

    ![]({% link images/images/sellers/submit-chart1.png %}){: .zoom}
    _Workflow for creating and submitting extensions_

1. Enter the **Basic Extension Information** required for creating an extension entry.

   We recommend entering all content in English. For additional content details, see detailed field descriptions and [Extension content]({% link sellers/content.md %}).

1. Enter an **Extension Name**.

1. Enter a **Short Description** that provides a quick overview of the extension.

   This is the first content displayed for extensions when browsing or searching extensions.

1. Select the **Magento Platform Version** for the extension.

   You can select the specific minor versions during submission.

1. Indicate if the extension enables integration with other services not part of Magento. If you select `Yes`, enter information for those services.

   * **Name of Service** - The name of the non-Magento service.
   * **URL of Service** - The full URL for the non-Magento service's website.
   * **Is this service owned/operated by you or a 3rd party** - Indicate if you run this service, or another 3rd party.
   * **Does this Service require additional subscription payments to the 3rd party** - Indicate if the service requires additional payments and costs to use the extension. You will need to provide this information during submissions for pricing.
   * **Are subscription payments ALSO required to your company for the integration** - Indicate if additional subscription costs are required for the integration. You will need to provide this information during submissions for pricing.

    ![]({% link images/images/sellers/basic-extension-information.png %}){: width="500px"}<br/>
    _Basic Extension Information_

1. When you are finished, click <span class="btn">Submit and Continue</span>.

   The Extension Details screen displays information about your extension, including any existing versions.

1. To continue the extension submission process, click <span class="btn">[Submit a New Version]({% link sellers/submit-for-review.md %})</span>.

## Field descriptions

|Field|Description|
|--- |--- |
|Extension Name|The name of the extension.|
|Short Description|The Short Description provides a quick summary of the extension in one or two sentences.|
|Magento Platform Version|The version of Magento the extension is compatible with. The options include the current major versions Magento supported|
|Does this extension enable an integration with a non-Magento service?|Indicate if the extension enables integration with other services not part of Magento. If you select Yes, enter information for those services. Options: Yes / No|
|Name of Service|The name of the non-Magento service.|
|URL of Service|The full URL for the non-Magento service's website.|
|Is this service owned/operated by you or a 3rd party?|Indicate if the service is owned by you or a 3rd party. Options: By my company / By a 3rd party company|
|Does this Service require additional subscription payments to the 3rd party?|Indicate if the service requires payments for accessing and using the service for the integration. You will need to provide this information during submissions for pricing. Options: Yes / No|
|Are subscription payments ALSO required to your company for the integration?|Indicate if the payments are subscriptions, requiring continual payments for intervals. You will need to provide this information during submissions for pricing. Options: Yes / No|
