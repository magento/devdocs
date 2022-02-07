---
group: release
title: Adobe Commerce Beta program
---

Welcome to the {{ site.data.var.ee }} Beta Program and thank you for your interest in participating.
This program is available to all Adobe Commerce partners and customers.
To sign up for the Beta program, read and follow the steps outlined below.

## Why participate

1. The earlier you see the code we are developing the sooner you can prepare your technology and merchants for the upcoming upgrade.
   Yes, things may change, but you will get an understanding where in the codebase changes are happening and start your preparations sooner than the General Availability release date.
1. If you are a [Solution Partner][] or Technology Partner with Adobe, you can provide valuable feedback to Adobe developers and help us find and correct issues sooner.

Ready to participate? Follow the steps below.

## Sign the Beta Program Agreement

First, we need your company to sign our [Beta Program Agreement][].
To verify the authenticity of the signature, we ask you to have the Adobe relationship owner, typically the owner of the _primary_ MageID associated with your company, read and sign the document linked above.
​
Further instructions while filling out the form:

-  Make sure to use the email associated with the primary MageID.
-  For _Adobe Contact Email_, use `magebeta@adobe.com` - _We may not receive your request if you do not use this email!_.

## Developer access to GitHub

Second, for partners to provide feedback and receive important updates about the Beta, we must grant users access to our private GitHub repository.

If you are already in the Adobe Partner Program, we will give the GitHub users access to our private repository after the Beta Program Agreement is signed.
No need to do anything else.
​
If you are not already in the Adobe Partner Program, you must do the following:

1. Make sure all of your contributors have an active GitHub account with two-factor authentication enabled.
1. Provide a maintainer GitHub username. We will provide that user the ability to add additional users associated with the parent company who signed the Beta Program Agreement (`github.com/accountname`).
1. Contact <magebeta@adobe.com> from the official partner’s company email with the maintainer and ask to join.

If you are not a partner, this time you won't be able to provide feedback. We are working to change this for next beta release. 

## Get the Code

Third, the pre-production code will be released as a Composer metapackage on <https://repo.magento.com>.
See our [release schedule][] for the latest information about our upcoming Beta release.
​
### Instructions to successfully download the Beta code

-  Use the MageID associated with the {{ site.data.var.ee }} license or Partner license (same MageID used to sign the Beta Program Agreement).
   For more information on how to install with Composer, refer to [Quick start install][].
   For troubleshooting access to Beta code, see [Cannot access the latest Beta version][].
-  Lastly, we ask partners to provide feedback and comments through the private Beta Github repository after installing and using the code.

For more information about this program, refer to our [FAQ][].
For additional questions, email us at <magebeta@adobe.com>.

<!-- Link definitions -->
[Beta Program Agreement]: https://experiencecloudpanel.adobe.com/c/r/mbeta
[Cannot access the latest Beta version]: https://support.magento.com/hc/en-us/articles/360048169471
[FAQ]: https://fieldreadiness-adobe.highspot.com/items/5e5e6b8fc714332f32a7cd96?lfrm=rhp.0
[Quick start install]: {{site.baseurl}}{{site.gdeurl}}/install-gde/composer.html
[release schedule]: {{site.baseurl}}/release/
[Solution Partner]: {{site.baseurl}}/community/contribution-programs.html
