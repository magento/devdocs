---
layout: default
group: cloud
subgroup: 160_live
title: Set up PayPal payment methods
menu_title: Set up PayPal
menu_order: 250
menu_node:
version: 2.1
github_link: cloud/live/paypal-onboarding.md
---

Magento ECE provides an on-boarding tool to configure PayPal Express Checkout accounts directly through the Magento Admin panel. To better support going live and testing PayPal payment methods, you can enable and configure your PayPal Express Checkout account for sandbox or production accounts.

You must configure either the sandbox or production account in every environment (Integration, Staging, and Production) using one of the following options:

* __Configure per environment:__ Every environment supports configuring your PayPal Express account through the Magento Admin console: Integration, Staging, and Production. With this method, you do not need to deploy code and data changes for PayPal.
* __Deploy code and data across all environments:__ You can configure PayPal Express Checkout through the Magento Admin console in the Integration environment then deploy the configurations, code, and data across to Staging and Production.

  If you use this deployment method, you *must push code and data*. If you do not want to push data from Integration to Staging, configure PayPal per environment.

## PayPal account

While we recommend having a PayPal merchant account prepared and configured, you can create a new account through the Admin panel. When connecting to PayPal, if the entered email address does not match an existing account, you will be prompted to create a new PayPal merchant account.

![Log in to PayPal]({{ site.baseurl }}common/images/cloud_paypal-access.png){:width="336px"}

## Configure PayPal Express Checkout

To configure PayPal Express Checkout:

1. Access the Admin console for the environment you need to configure.
2. In the left-side navigation, select __Stores__ > __Configuration__, then select __Sales__ > __Payment Methods__.
3. For PayPal, select __Configure__. Configuration fields display in expandable sections for Express Checkout, Adveritise PayPal Credit, and Basic and Advanced settings.
4. Connect your PayPal account. Until the account is connected, the options to enable are disabled.

    * To connect your PayPal live account, click Connect with PayPal and follow the prompts.
    * To connect your sandbox account for testing, click Sandbox Credentials and follow the prompts.

5. Configure the Express Checkout settings to authenticate and use the PayPal API:

    * __Email Associated with PayPal Merchant Account__ (Optional) enter the email address associated with your PayPal merchant account. This email is case-sensitive.
    * __API Authentication Methods__ as API Signature or API Certificate.
    * API Username, Password, and Signature captured from your PayPal account.
    * __Sandbox Mode__ select Yes or No to indicate if the credentials you entered are for sandbox. If you entered production credentials, select No.
    * __API Uses Proxy__ select Yes or No to set if the system uses a proxy server to establish a connection between Magento and the PayPal payment system. If Yes, enter the proxy host and port.
6. For detailed information and steps for configuring your account, see [PayPal Express Checkout](http://docs.magento.com/m2/ce/user_guide/payment/paypal-express-checkout.html) starting with Step 2 Complete the Required Settings.


With the account configured and authenticated, you can enable and disable PayPal payment options under Required PayPal Settings:

* __Enable this Solution__ displays the PayPal payment method to customers through the website.
* __Enable In-Context Checkout Experience__
* __Enable PayPal Credit__ allows customers to PayPal credit financing without additional costs. PayPal pays the order up-front, handling all repayments for the credit directly with the customer.
