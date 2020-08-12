---
group: marketplace-sellers
title: Profile Information
---

Your profile tracks and provides all information for your Marketplace Developer Portal account, including company information, payment account information, access keys, tax forms, and partner information.

## Contact Info

Your contact information includes your address, phone number, and PayPal email address. As part of the registration process, you must enter a valid PayPal email, even if your extensions are available for free on Magento Marketplace. Magento sends your revenue share payment to your PayPal account.

![Contact information]({{ site.baseurl }}/marketplace/sellers/images/account-information.png){: .zoom}
_Contact Information_

### Account Information

|Field|Description|
|--- |--- |
|Personal URL|(Optional) The URL for your personal website.|
|Personal Bio|(Optional) Information about yourself.|
|Personal Addresses|At least one address is required; you can enter up to three. If there are multiple addresses, you must designate one as the primary contact address.|
|Login Credentials|Clicking <span class="btn">Go to My Account</span> takes you to your Magento account information.|
|PayPal Email|You must enter a valid PayPal account email, even if  your extensions are available for free on Magento Marketplace. Magento sends your revenue share payment to your PayPal account.|

### Company

|Field|Description|
|--- |--- |
|Company Name|Your company name appears in your Marketplace profile, and as a link to your company profile in all of your extension listings.|
|Primary Contact|The name of the main point of contact at your company.|
|Support Email|The email address for your company's support contact.|
|Company URL|The URL for your company website.|
|Company Bio|Your Company Bio helps prospective buyers get acquainted with your company background and areas of expertise. Max characters 1500 words or less.|
|Company Addresses|At least one address is required. You can enter up to three. If there are multiple addresses, you must designate one as the primary contact address.|
|Login Credentials|Clicking <span class="btn">Go to My Account</span> takes you to your Magento account information.|
|PayPal Email|You must enter a valid PayPal account email, even if  your extensions are available for free on Magento Marketplace. Magento sends your revenue share payment to your PayPal account.|

## Access keys

Magento Marketplace uses a pair of public and private 32-character tokens to authenticate access to the repository of third-party extensions and themes. You can create multiple sets of access keys for others who install extensions for your store. Marketplace access keys can be generated, disabled or enabled, and deleted from your account.

{: .bs-callout .bs-callout-info}
The access key pair that is generated for Marketplace is not the same as the [Encryption Key][1]{: target="_blank"} that is associated with the Magento 2.x setup.

For more technical information, see [Get your authentication keys][2] in the developer documentation.

### Create a new access key

1. Click <span class="btn">Create New Access Key</span>. Then, do the following:

1. In the Basic Access Key Information dialog, enter an **Access Key Name** (max of 32 characters) to identify the access key. Then, click <span class="btn">Continue</span>.

   ![Basic access key information]({{ site.baseurl }}/marketplace/sellers/images/basic-access-key-information.png){: .zoom}
   _Basic Access Key Information_

Your new access key appears in the list, and can now be used to authorize downloads of Magento updates, extensions, and themes.

![Access key added to account]({{ site.baseurl }}/marketplace/sellers/images/access-keys.png){: .zoom}
_Access Key Added to Your Account_

## Marketplace Profile

Your Marketplace Profile contains information you entered during account setup, lets you enter social media links, and gives you the option to upgrade your partner status.

![Marketplace profile]({{ site.baseurl }}/marketplace/sellers/images/marketplace-profile.png){: .zoom}
_Marketplace Profile_

### Account Information

| Field | Description |
|----------
| Screen Name | Entered when you created your Marketplace Developer account. |
| Vendor Name | Entered when you created your Marketplace Developer account. |
| User Email | Entered when you created your Marketplace Developer account. |
| Logo | A profile photo (for personal accounts) or a company logo (for company accounts). |
| Partner Status | Your current partner status is displayed. Clicking <span class="btn">Upgrade Partner Status</span> takes you to the [Become a Magento Partner][3] page. |
| Privacy Policy URL | The URL of your company\'s privacy policy website. |
| Other Options | Add links to various social media profiles. |

## Tax Forms

Marketplace policy requires all providers to submit business information to ensure the efficient processing of transactions and payments. Here you can download the necessary form for your tax status, and click <span class="btn">Email Tax Forms</span> to open an email in your default email client.

![Tax forms]({{ site.baseurl }}/marketplace/sellers/images/tax-forms.png){: .zoom}
_Tax Forms_

## Partner Portal

Click **Partner Portal** to open the Magento Partner Portal dashboard.

![Partner portal]({{ site.baseurl }}/marketplace/sellers/images/partner-portal.png){: .zoom}
_Partner Portal_

[1]: http://docs.magento.com/m2/ce/user_guide/system/encryption-key.html
[2]: http://devdocs.magento.com/guides/v2.3/install-gde/prereq/connect-auth.html
[3]: https://magento.com/partners/become
