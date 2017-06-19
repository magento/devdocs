---
layout: default
group: 
subgroup: 
title: Magento 2.2.0 Alpha Release QuickStart Guide
menu_title: Magento 2.2.0 Alpha Release QuickStart Guide
menu_order: 299
level3_menu_node: 
level3_subgroup: 
version: 2.2
github_link: alpha-2-2/QuickStartAlpha2.2.0.md
---

We are pleased to present the Magento 2.2.0 CE, EE, and B2B Alpha Releases. This QuickStart guide provides the basic information you need to start participating in our Magento 2.2.0 Alpha evaluation program. 

This guide covers: 

* Welcome to the Magento 2.2.0 Alpha program

* Requirements of Alpha participation

* Install the Alpha code

* How to provide feedback

* Readiness status of individual code components 

* Magento test environments specification


## Welcome to Magento Alpha 2.2.0 

Magento 2.2.0 Alpha release code is not production quality and will include bugs and incomplete features. It does provide a snapshot of the current 2.2.0 codebase and consequently an early peak into the new features that 2.2.0 will provide in more robust form. 



### Goals of this release

Participation in this Aplpha evaluation has benefits for both community members and Magento. 


#### Magento goals

Our primary goal for this release is to invite and receive community and partner feedback that will help us refine our 2.2.0 product code before GA. Specifically, we hope that participants in this Alpha release evaluation can report on:

* **Functionality**. Keep in mind that this Alpha release does not contains all the functionality that the 2.2.0 GA release will include.   

* **Usability**. How do the features we've implemented for Alpha work in context of your typical workflows?

* **Code quality issues**. Are there particularly challenging processes or tasks that need improvement?

* **Feature gaps and enhancements**. Can you identify any steps within existing features that are missing, or enhancements that would improve features?



#### Participant goals

As community members and Partners, you have much to gain from participating in this release, too. Early access to this code provides you with the opportunity to familiarize yourself with the code and start training technical team members. Likewise, you can start planning  extension and custom code updates. 



### Usage guidelines

Keep in mind the following features of this Alpha code release during your evaluation: 

* Alpha code is not production quality and will contain bugs. Report these bugs as GitHub issues, please!

* Alpha code is for testing and training only. Do not use Alpha Software for production deployments. Any sites developed with Alpha software will require significant reworking to accomodate future code updates. 

* No technical support is available for problems you encounter during Alpha evaluation.

* You cannot share Alpha code with anyone external to your organization.



### Participants

How you participate in this evaluation depends upon which code base you'll be downloading and evaluating: CE, EE, and/or B2B.



#### CE Evaluation participants

We invite any Magento community member to participate in the Magento 2.2.0 CE Alpha evaluation. 



#### EE and B2B Evaluation participants

The Magento 2.2.0 EE Alpha evaluation is open to all Solution Partners. To participate, you must:

* Sign the Alpha Software agreement 

* Provide GitHub account information. You can either provide either: 

	* your Solution Partner GitHub account, clearly labeled with the name of the Partner, the Partner’s logo, and a link to the Partner’s website.

	or

	* an Individual Account for a Solution Partner Employee. Company name field must contain the Partner’s name or @partnername. Alternatively, the user’s profile must show that the developer is a member of the Solution Partner’s GitHub Organization.







## Installation 

Magento 2.2.0 Alpha release code is available only as a download from GitHub. 

You can find B2B installation and configuring instructions here. 

Step 1: Download Alpha code repositories 

Step 2: Install Alpha Code






### Step 1: Download Alpha code repositories

There are three separate Alpha code repositories on GitHub. 


Magento CE

Magento EE

Magento B2B 

https://github.com/magento/magento2 (CE) - Publicly available already
https://github.com/magento/magento2ee (EE) - when signed contract
https://github.com/magento/magento2b2b - (B2B)  - when signed contract


Once you've successfully downloaded the repositories you want to evaluate, you're ready to install.


### Step 2: Install

Evaluating B2B? See B2B Installation.

Install the code

The only way to run Magento 2.2.0 Alpha release is to download the code from GitHub. Our existing Installation and Deployment guide discusses 

CE


EE 

B2B See B2B Installation Guide. 



### Step 3: Configure your environment


## Upgrade Alpha build





## Provide feedback please!

Your input is critical to the success of Magento 2.2.0 editions! All feedback should be submitted [here](https://github.com/magento/magento2/issues). 



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

1. Magento CE Alpha 2.2.0 is installed.

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

precisely describe your expected results and the results you actually observed after performing the steps.

Example:

Expected result: Your order is placed successfully.

Actual result: The **Place Order** button is not visible, and you cannot place the order.


#### Additional information

You can assist Magento developers by providing any artifacts that you feel are potentially helpful, including browser logs and screenshots.

 

### Suggestions for our documentation?

We welcome feedback on the Merchant and Developer documentation. In particular, you can help us improve our Alpha documentation by identifying topics that are incomplete or missing.  



## Magento test environments specification

Although we don't make specific recommendations for Alpha evaluation, for informative purposes, we are sharing some of the specifications for environments that we use for 2.2.0 testing. See Magento 2.2 Alpha Testing Environments for more information. 


## Readiness status of code components

Magento 2.2.0 Alpha code is a work in progress. Parts of the code base are more mature than others. You can see an overview of component status here. Note that we will update this information each Friday of the Alpha evaluation period. 



## More information?

Alpha verions of the following documentation sets are ready for you! Visit the 2.2.0 Alpha DevDocs repository for a peek at our 2.2.0 developer documentation.

Merchants, check out the Magento 2.2.0 User Guide.





