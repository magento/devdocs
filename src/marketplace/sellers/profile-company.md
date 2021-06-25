---
group: marketplace-sellers
title: Company Profile
redirect_from: /marketplace/sellers/company-profile.html
---

Your company profile provides the information about your business and brand that appears in your Magento Marketplace listing. During the initial interview, the Company Profile page appears after you choose the “Business” type of account. In your account, the Company Profile is located on the Developer Portal tab under My Information.

![Company profile]({{ site.baseurl }}/marketplace/sellers/images/developer-portal-company-profile.png){: .zoom}
_Company Profile_

The following instructions walk you through the process of completing your company profile. All fields are required, unless marked “Optional”.

## Step 1: Before you begin

Prepare an image for your company profile that is 255 pixels square. Then, save it as one of the following file types: JPG, GIF, or PNG.

## Step 2: Complete your company background

1. Select the checkbox at the top of the form if you want to use your company profile—rather than your personal profile—as the default.

   ![Company background]({{ site.baseurl }}/marketplace/sellers/images/account-company-profile-name.png){: .zoom}
   _Company Background_

1. Enter your **Legal Company Name**.

1. Enter a brief description of your company in the **Company Bio** box. To change the height of the text box, drag the lower-right corner into position.

1. To upload the image that you have prepared to your company profile, do one of the following:

   -  Drag the image to the box.
   -  Click <span class="btn">Update Image</span>. Then, navigate to the image in your file system and upload it to your profile.

## Step 3: Enter your contact information

1. Enter the URL of your **Company Website**.

1. Select the checkbox if you want to use the same email address that is associated with the Magento account. Otherwise, enter the **Primary Email** address for the company. Then, enter the **Company Support Email** address.

1. In the **Vendor Name** field, enter the `vendor-name` part of the `Name` field from your `composer.json` file.

   `Name: <vendor-name> / <package-name>`

   <div class="bs-callout bs-callout-info" markdown="1">
   This unique identifier is used to identify your Marketplace vendor account, and must exactly match the Vendor Name in your company profile.
   </div>

   ![Contact information]({{ site.baseurl }}/marketplace/sellers/images/account-company-profile-contact-info.png){: .zoom}
      _Contact Information_

## Step 4: Enter your company address

1. Complete the following fields that make up your company address:

   -  Country
   -  Street Address, Apt/Suite
   -  ZIP, City, State / Province
   -  Phone Number

1. To complete the **Phone Number**, choose the flag for your country code. Then, enter the area code and phone number.

   ![Company address]({{ site.baseurl }}/marketplace/sellers/images/account-company-profile-address.png){: .zoom}
   _Company Address_

## Step 5: Link to your social networks (optional)

Enter the link to each professional social network that you want to include in your company profile.

-  GitHub
-  Stack Exchange
-  Twitter
-  Facebook
-  LinkedIn

![Social networks]({{ site.baseurl }}/marketplace/sellers/images/account-profile-social-networks.png){: .zoom}
_Social Networks_

## Step 6: Activate your account

1. When the required fields are complete, click <span class="btn">Save</span>.

1. When prompted, enter your **PayPal Email** address.

   {: .bs-callout .bs-callout-info}
   **Important:** This payment information is required of all developers, even those who make their extensions available at no charge. Magento sends your revenue share on a monthly basis to PayPal account.

1. Watch for a confirmation email sent to the email address associated with the account.

1. Click the email link to activate your account and gain access to the Developer Portal.

## Field Descriptions

|Field|Description|
|---|---|
|Use as my default profile|Mark the checkbox to use your company profile as the default.|
|Legal Company Name|The name of your legally registered business. Your company name appears in your Marketplace profile, and as a link in your extensions listings.|
|Company Bio|A description of your company’s background, products, and services. You might begin with a couple of sentences to give a brief overview, and finish it later with a more detailed description. If you use a word processor to compose and spell check your bio, make sure to save it as plain text before pasting it into your profile. Make sure to convert all URLs to working hyperlinks. Maximum characters: 1500, including spaces.|
|Update Image|Your company profile image represents your brand in Magento Marketplace, and appears on your developer profile and product pages. The image must have a professional presentation, and must not be derived from, or include the Magento logo. To learn more, see the Magento Extension Distribution and Service Agreement. <br/>Size: 255 x 255 pixels <br/>Supported file types: JPG / GIF / PNG|

### Contact information

|Field|Description|
|--- |--- |
|Company Website|The URL of your company website.|
|Primary Email|(Optional) The primary contact email that is used by your company. Select the checkbox to use the email that is associated with your Magento account.|
|Company Support Email|The email address that customers can use to contact your company for technical support.|
|Vendor Name|A unique identifier that identifies your Marketplace account. The vendor name can be based on your company name, and must be lowercase alphanumeric characters, and can include dashes. <br/><br/>**_Important:_** For all Magento 2.x packages submitted to Marketplace, the Vendor Name must match the name field in the Vendor section of the composer.json file.|

### Company address

|Field|Description|
|--- |--- |
|Country|The country where your company is legally registered to conduct business.|
|Street Address|The official street address of your company.|
|Apt/Suite|The apartment or suite number of your place of business, if applicable.|
|ZIP|The ZIP or postal code of your business address.|
|City|The city where your company is located.|
|State/Province|The state or province where your company is located.|
|Phone Number|The primary phone number used by your company. The area code and phone number are automatically formatted as: (999) 999-9999|

### Social networks

|Field|Description|
|--- |--- |
|GitHub|(Optional) The user name associated with your company’s GitHub account. For example: http://github.com/username|
|Stack Exchange|(Optional) The URL of your company’s Stack Exchange profile. For example: http://username.stackexchange.com|
|Twitter|(Optional) The user name associated with your company’s Twitter account. For example: @username|
|Facebook|(Optional) The URL of your company’s Facebook profile. For example: http://facebook.com/pages/username|
|LinkedIn|(Optional) The URL of your company’s LinkedIn profile. For example: http://linkedin.com/company/username|
