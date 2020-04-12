---
group: cloud-guide
subgroup: 090_configure
title: Set up PayPal payment methods
menu_title: Set up PayPal
menu_order: 10
menu_node:
functional_areas:
  - Cloud
  - Setup
  - Services
---

{{site.data.var.ece}} provides an on-boarding tool to configure PayPal Express Checkout accounts directly through the Magento Admin panel. This tool is available for ECE 2.1.8 and later. To better support going live and testing PayPal payment methods, you can enable and configure your PayPal Express Checkout account for sandbox or production accounts.

You can configure either the sandbox or production account in every environment:

*  For Integration and Staging environments, we recommend setting Sandbox credentials.
*  For your Production environment, you can set Sandbox credentials for initial testing, then replace with live production credentials for a launched store.

## PayPal account {#accounts}

While we recommend having a PayPal merchant account prepared and configured, you can create a new account or upgrade a personal account through the Admin panel.

PayPal on-boarding supports connecting with the following accounts:

*  PayPal Business account
*  PayPal personal account, converting to a Business account. If you have an existing personal PayPal account, you can login with those credentials and upgrade this account to a business account as you complete the sync.

If you do not have an existing PayPal account, you have an option to create a new one. Enter an e-mail address for a new account. If a matching PayPal account is not found, you will be prompted to create a new PayPal Business account. Or you can create an account directly through [PayPal](https://www.paypal.com/us/webapps/mpp/account-selection).

See [PayPal account limitations](#limitations) for further information.

![Log in to PayPal]({{ site.baseurl }}/common/images/cloud/cloud_paypal-access.png){:width="336px"}

### PayPal limitations {#limitations}

PayPal supports connecting PayPal Express Checkout for countries across the globe except for the following limitations:

*  India, and Japan (future PayPal updates may support these accounts)
*  Israel

For Brazil, you must have an existing PayPal business account to connect. You cannot convert an existing personal PayPal account for Brazil during this process. If you need an account, create a new business PayPal account through [their website](https://www.paypal.com/us/webapps/mpp/account-selection).

## Configure PayPal Express Checkout

To configure PayPal Express Checkout:

1. Access the Admin console for the environment you need to configure.
1. In the left-side navigation, select __Stores__ > __Configuration__, then select __Sales__ > __Payment Methods__.
1. For PayPal, select __Configure__. Configuration fields display in expandable sections for Express Checkout, Advertise PayPal Credit, and Basic and Advanced settings.
1. Connect your PayPal account. Until the account is connected, the options to enable are disabled. For details on available and supported accounts to connect and limitations, see [PayPal account](#accounts).

   *  To connect your PayPal live account, click Connect with PayPal and follow the prompts. Any customer purchases using a live PayPal complete and actively charge customers in a live store.
   *  To connect your sandbox account for testing, click Sandbox Credentials and follow the prompts. Any customer purchases using a Sandbox PayPal complete without actively charging customers.

1. Configure the Express Checkout settings to authenticate and use the PayPal API:

   *  __Email Associated with PayPal Merchant Account__ (Optional) enter the email address associated with your PayPal merchant account. This email is case-sensitive.
   *  __API Authentication Methods__ as API Signature or API Certificate.
   *  API Username, Password, and Signature captured from your PayPal account.
   *  __Sandbox Mode__ select Yes or No to indicate if the credentials you entered are for sandbox. If you entered production credentials, select No.
   *  __API Uses Proxy__ select Yes or No to set if the system uses a proxy server to establish a connection between Magento and the PayPal payment system. If Yes, enter the proxy host and port.

1. For detailed information and steps for configuring your account, see [PayPal Express Checkout](http://docs.magento.com/m2/ce/user_guide/payment/paypal-express-checkout.html) starting with Step 2 Complete the Required Settings.

With the account configured and authenticated, you can enable and disable PayPal payment options under Required PayPal Settings:

*  __Enable this Solution__ displays the PayPal payment method to customers through the website.
*  __Enable In-Context Checkout Experience__
*  __Enable PayPal Credit__ allows customers to PayPal credit financing without additional costs. PayPal pays the order up-front, handling all repayments for the credit directly with the customer.

## PayPal variables {#deploy}

When using the PayPal on-boarding tool with {{site.data.var.ece}} 2.2, you need to add the following variable to `magento.app.yaml` in the environment variables section.

```yaml
# Environment variables
variables:
  env:
    CONFIG__DEFAULT__PAYPAL_ONBOARDING__MIDDLEMAN_DOMAIN: 'payment-broker.magento.com'
```

If you are upgrading to 2.2 from 2.1.8 or later, you still need to add this variable.
