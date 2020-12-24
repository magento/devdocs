---
group: configuration-guide
title: Google reCAPTCHA
functional_areas:
  - Configuration
---

Google reCAPTCHA provides a greater level of security for both the storefront and Admin UI than is available with standard CAPTCHA, and gives you the ability to:

-  Verify when customers create accounts, retrieve passwords, log in to their accounts, or contact your company.
-  Enhance security when Admin users log in.

Google reCAPTCHA reduces potential user error when entering a Captcha code and encourages cart conversion without adding hurdles during checkout.

## Types of Google reCAPTCHA

There are three different types of reCAPTCHA available. They are,

-  reCAPTCHA v3
-  reCAPTCHA v2 ("I'm not a robot" checkbox)
-  reCAPTCHA v2 (Invisible reCAPTCHA badge)

{:.bs-callout-info}
Google stopped supporting reCAPTCHA v1 in March 2018.

### reCAPTCHA v3

reCAPTCHA v3 allows you to verify if a request is legitimate without any user interaction. It is a pure JavaScript API returning a score, giving you the ability to take action in the context of your site. For instance, requiring additional factors of authentication, sending a post to moderation, or throttling bots that may be scraping content.

### reCAPTCHA v2 ("I'm not a robot" Checkbox)

The "I'm not a robot" checkbox requires the user to click a checkbox to prove that a human is interacting with the website. This will either pass the user immediately (with No CAPTCHA) or challenge them to validate whether or not they are human. This is the simplest option to integrate and only requires two lines of HTML to render the checkbox.

### reCAPTCHA v2 (Invisible reCAPTCHA badge)

The invisible reCAPTCHA badge does not require the user to click on a checkbox. Instead, it is invoked directly when the user clicks on an existing button on your site. You can also invoke it with a JavaScript API call. The integration requires a JavaScript callback when reCAPTCHA verification is complete. By default, only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior, edit your site security preference under advanced settings.

## Install Module

The Google reCAPTCHA extension is bundled and installed with {{site.data.var.ce}} and {{site.data.var.ee}} 2.3.x.

## Configure reCAPTCHA

{:.bs-callout-warning}
Before reCAPTCHA can be configured, ensure that your `PHP.ini` file includes this setting: `allow_url_fopen = 1`. See [Required PHP Settings]({{page.baseurl}}/install-gde/prereq/php-settings.html).

See the Magento Admin User Guide [Open Source](https://docs.magento.com/m2/ce/user_guide/stores/security-google-recaptcha.html) and [Commerce](https://docs.magento.com/m2/ee/user_guide/stores/security-google-recaptcha.html) for configuration options in the Magento Admin and storefront.

## Troubleshooting

The extension supports a command line option for disabling reCAPTCHA. Use this command when you cannot access the Magento Admin UI.

```bash
bin/magento msp:security:recaptcha:disable
```
