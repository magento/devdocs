---
layout: default
group: release-notes
subgroup: 2.2.0 Release Candidate
title: Submit Comments on the Release Candidate
menu_title: Submit Comments on the Release Candidate
menu_order: 3000
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/release-candidate/submit-issues.md
---




Your input is critical to the success of all editions of Magento 2.2.0! All feedback should be submitted [here](https://github.com/magento/magento2/issues).



### Before you log an issue

Before creating an issue, do the following:

* Check the documentation to confirm the behavior you are reporting is really a bug, not a feature.

* Check  existing issues to make sure your issue isn't a duplicate.


### Helpful information

If you are sure that the problem you are experiencing is caused by a bug, file a new issue. As a minimum, include the information described below.

#### Title

The *Title* is a vital part of a GitHub issue report, allowing developers  and community members to quickly identify each issue’s unique focus. A well written title should contain a clear, brief explanation of the issue that emphasizes the salient points. Here’s an example of a helpful title: Unable to place order with Virtual product and PayPal. Alternatively, here’s an unclear example: Can't checkout.

#### Description

The *Description* section of your issue should contain provide information about system configuration settings, detailed information on the entities you created (for example, products and customers), and your Magento version. Essentially, include  any information that that would help a developer replicate your environment.

Example:

1. Magento CE Pre-Release Candidate 2.2.0 is installed.

2. The PayPal payment method is set up.

3. Test category is set up.

4. We've created a virtual product and assigned it to the Test Category.


#### Steps to reproduce

The accurate description of the steps you took that lead to the issue report is potentially the most helpful information in your report.  Magento developers need this information to reproduce the issue and resolve it. Precisely describe each step you have taken to reproduce the issue.  Even minor differences can be crucial, so try to include as much information as possible.

Example:

1. Navigate to storefront as a guest.

2. Open Test Category.

3. Click **Add to Cart** on the Virtual Product.

4. Open mini shopping cart and click **Proceed to Checkout**.


#### Actual and expected results

Describe your expected results and the results you actually observed after performing the steps.

Example:

Expected result: Your order is placed successfully.

Actual result: The **Place Order** button is not visible, and you cannot place the order.


#### Additional information

You can assist Magento developers by providing any artifacts that you feel are potentially helpful, including browser logs and screenshots.



### Suggestions for our documentation?

We welcome feedback on the Merchant and Developer documentation. In particular, you can help us improve our documentation by identifying topics that are incomplete or missing.
