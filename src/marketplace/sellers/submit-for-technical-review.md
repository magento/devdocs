---
group: marketplace-sellers
title: Submit for Technical Review
---

All extensions submitted to Magento Marketplace must pass the automated technical review as part of the extension submission workflow. Technical review helps to improve the quality of products on Magento Marketplace by checking for indications of plagiarism, malware, and adherence to Magento coding standards. Developers whose extensions do not pass technical review receive a report of the results. After the issues are resolved, you are welcome to resubmit the extension. Extensions must pass technical review to receive a listing on Magento Marketplace.

When your [extension entry]({{ site.baseurl }}/marketplace/sellers/extension-information.html) is complete, you can submit your extension for technical review. During the process, we review the code according to [technical guidelines]({{ site.baseurl }}/marketplace/sellers/technical-review-guidelines.html), install and use the extension according to your documentation, and verify specifics from your submission form. You can track the status and progress of your extension submission through your Marketplace account.

![]({{ site.baseurl }}/marketplace/sellers/images/tech-review-content.png){: .zoom}

The following instructions show how to submit an extension for Technical Review. The process is essentially the same for [themes]({{ site.baseurl }}/marketplace/sellers/themes.html) and [shared packages]({{ site.baseurl }}/marketplace/sellers/shared-packages.html).

{: .bs-callout .bs-callout-info}
**Important - Shared Packages**: If your extension uses [Shared Packages]({{ site.baseurl }}/marketplace/sellers/shared-packages.html) (or components), the packages must be ready and associated with your submission. You will not be able to submit your extension to Technical Review until the shared packages are available in your account.

## Prepare for Technical Review

Before submitting an extension or theme for marketing review, conduct your own internal review of the content to make sure that it is ready for publication.

-  Review the [technical]({{ site.baseurl }}/marketplace/sellers/technical-review-guidelines.html) guidelines to ensure that your extension meets Magento Marketplace and Magento development requirements.
-  For theme extensions, verify all image, css, and code assets correctly load on the storefront. For feature / service extensions, make sure data and options follow coding standards, logging, etc.
-  All extensions must be secure, without viruses, malware, or vulnerabilities.
-  Fully test your extension, including installation, dependencies, shared packages, configuration, and usage.

### Terms and Conditions

All products and services are subject to the same Magento Marketplace terms and conditions that are communicated to developers upon submission, and to merchants upon the purchase of any product or service. A separate licensing agreement is not required. However, you can include additional terms and conditions as follows:

-  Create a workflow that requires the merchant to accept the terms and conditions when the extension is installed.
-  Place a link to the separate agreement in the extension description.

## Step 1: Enter technical submission details

1. Log into the Marketplace Developer Portal, and then click **Extensions**.

1. Click the extension name you want to submit.

    The **Technical Submission** page loads. You can save progress and reopen this page to submit when you are ready.

1. Click **Attach Package** to upload the extension code package.

    For complete package guidelines, see [Package a component]({{ site.baseurl }}/guides/v2.3/extension-dev-guide/package/package_module.html).

1. For **Magento Version Compatibility**, select the supported version number and compatibility for the extension.

    The listed options include all minor versions Magento supports at time of submission. The list is based on the release line selected at creation (M1 or M2).

    ![]({{ site.baseurl }}/marketplace/sellers/images/technical-submission-details1.png){: .zoom}
    _Versions and Compatibility_

1. Select the Licensing options.

    This option requires the user to agree to a license in addition to the Magento terms and conditions. You have two options:

-  Choose a License Type - Select a license type provided from the drop-down menu.

-  Enter a Custom License - Enter the name and URL location for your custom license, available from a public website.

    ![]({{ site.baseurl }}/marketplace/sellers/images/technical-submission-details2.png){: .zoom}
    _Licenses_

1. Add Documentation and Resources for your extension.

    {: .bs-callout .bs-callout-info}
    Magento Marketplace tests and reviews documentation during the Technical Review. You can add additional documentation during the [Marketing Review]({{ site.baseurl }}/marketplace/sellers/submit-for-marketing-review.html).

    You must include **at least one** of the following, in PDF format (less than 5MB):

-  Attach User Guide - Documentation describing how to configure and use your extension features in the Magento Admin and extension screens.
-  Attach Reference Manual - Documentation detailing fields, screens, and workflows for the added features, screens, and fields in the Magento Admin.
-  Attach Installation Guide - Documentation instructing how to install and configure the extension on your Magento instance.

    ![]({{ site.baseurl }}/marketplace/sellers/images/technical-submission-docs.png){: .zoom}
    _Documentation and Resources_

1. Follow the same steps to upload a reference manual or installation guide.

1. If other components are used by an M2 extension, select the relevant **Shared Package**.

    {: .bs-callout .bs-callout-info}
    **Important:** Before a shared package can be linked to an extension, it must be submitted for review and receive the status **Ready to Use**.

    ![]({{ site.baseurl }}/marketplace/sellers/images/technical-submission-shared.png){: .zoom}
    _Shared Packages_

1. Enter **Release Notes** for your extension.

    This preliminary draft can be formatted with simple HTML and can include text, numbers, symbols, and spaces.

    ![]({{ site.baseurl }}/marketplace/sellers/images/technical-submission-rnotes.png){: .zoom}
    _Release Notes_

1. When complete, submit the extension or save to continue progress later. To enter the queue, you must click <span class="btn">Submit</span>.

## Step 2: Submit the extension for Technical Review

1. When the required fields are complete, click <span class="btn">Submit</span>.

1. In the **Confirm Your Technical Submission** box, click <span class="btn">Cancel</span> to go back to the submission details, or click <span class="btn">Confirm</span> to submit the extension.

    It might take a few minutes for your package to upload. You will receive email confirmation when the extension is submitted for Technical Review, and will be notified when the review is complete.

    ![]({{ site.baseurl }}/marketplace/sellers/images/confirm-technical-submission.png){: .zoom}
    _Confirm Submission_

## After submission

1. If you have not submitted the [Marketing Review]({{ site.baseurl }}/marketplace/sellers/submit-for-marketing-review.html), complete those steps to submission.

1. Watch your email for feedback and updates for the Technical Review.

1. Check the Test Reports posted for your extension submission through the Developer portal.

1. If issues, errors, or changes are required, you will receive an email failure notification. The submission will be in a failed state. When those issues are resolved, re-submit the extension for review.

## Field descriptions

|Field|Description|
|--- |--- |
|Magento Version Compatibility|Specifies each version of Magento that is supported by the extension.|
|License Type|Identifies the license type that defines the terms of use. To learn more, see the Open Source Initiative’s Licenses by Name. Options: <br/>**Custom License** - To use a custom license, enter the Name of the license and the License URL, where customers can read the terms of use. <br/>**Academic Free License 3.0** - The [Academic Free License 3.0][1] (AFL) is an open source license that permits the free distribution and reuse of proprietary software and derivative works, provided that the source code is made available. <br/>**Apache License 2.0** - The [Apache License][2] 2.0 describes the terms of use, reproduction, and distribution of third-party software products that include portions of Apache software. It requires clear attribution to The Apache Software Foundation for any distributions that include Apache software. <br/>**BSD 2-Clause License** - The [Berkeley Software Distribution 2-Clause License][3] requires the copyright notice to appear in all source code, but imposes minimal restrictions on the redistribution of open source software. The 2-clause license was derived from the original four-clause BSD license which requires a notice to appear in all advertising and prohibits the use of the contributor names in endorsements without prior written permission. <br/>**GNU General Public License 3.0** - The [GNU General Public License 3.0][4] (GLP-3.0) is widely used and based on the GNU open source license, and allows for the redistribution of software received from the copyright holder within the provisions outlined in the agreement. Any improved version of the software must be made available for free. To learn more, see [Frequently Asked Questions about GNU Licenses][5]. <br/>**GNU Lesser General Public License 3.0** - The [GNU Lesser General Public License 3.0][6] (LGPL-3.0) is widely used and based on the GNU open source license. LGPL-3.0 is somewhat less restrictive than the standard GLP-3.0, and also requires that you provide installation instructions. To learn more, see [Frequently Asked Questions about GNU Licenses][7]. <br/>**MIT License** - The [Massachusetts Institute of Technology License][8] (MIT) allows for the reuse, modification, distribution, sub-licensing, and sale of proprietary software, provided that all copies include the MIT license and copyright notice. <br/>**Mozilla Public License 1.1** - The [Mozilla Public License 1.1][9] (MPL-1.1) is an open source license that includes explicit patent rights and allows extensions of the code to be licensed in non-open ways. There is no requirement for a derivative work to be distributed under the same license. <br/>**Open Software License 3.0** - The [Open Software License 3.0][10] (OSL-3.0) is a worldwide, royalty-free, non-exclusive license that allows sub-licensing and derivative work, provided that they are distributed under the same license.|
|Documents|Upload your customer-facing documentation in PDF format. The user guide is required, and you can optionally include a reference manual and installation guide. Maximum file size: 5 MB File type: PDF <br/>**User Guide** - Your extension must include one user guide. <br/>**Reference Manual** - (Optional) <br/>**Installation Guide** - (Optional) <br/>**_Note:_** Although the installation guide is optional, it might be required by some license types.|
|Release Notes|The preliminary Release Notes text can include simple HTML, without CSS. Maximum characters: 10,000|
|[Shared Packages]({{ site.baseurl }}/marketplace/sellers/shared-packages.html)|If applicable, identifies each shared package that is required by this extension.|

[1]: https://opensource.org/licenses/AFL-3.0
[2]: http://www.apache.org/licenses/LICENSE-2.0
[3]: https://opensource.org/licenses/BSD-2-Clause
[4]: http://www.gnu.org/licenses/quick-guide-gplv3.html
[5]: https://www.gnu.org/licenses/gpl-faq.html#AllCompatibility
[6]: http://www.gnu.org/licenses/lgpl-3.0.en.html
[7]: https://www.gnu.org/licenses/gpl-faq.html#AllCompatibility
[8]: https://opensource.org/licenses/MIT
[9]: https://www.mozilla.org/en-US/MPL/1.1/)
[10]: https://opensource.org/licenses/OSL-3.0
