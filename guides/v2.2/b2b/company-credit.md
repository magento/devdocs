---
group: b2b-developer-guide
subgroup: 10_REST
title: Integrate with the CompanyCredit module
menu_title: Integrate with the CompanyCredit module
menu_order: 17
ee_only: True
level3_menu_node: level3child
level3_subgroup: credit
functional_areas:
  - B2B
  - Integration
---

Company credit allows company members to purchase items on credit. This is a feature specific to {{site.data.var.b2b}} that is used only for transactions between companies. The seller allocates an amount (or the credit limit) to a company and then company members can purchase items using this amount with the Payment on Account method. The credit amount used by a company is sent to the seller offline. Then the seller creates a Reimburse transaction in the system to adjust the company balance.

The following diagram illustrates the process flow of orders using the Payment on Account method.

![Payment on credit]({{ site.baseurl }}/common/images/b2b/payment-on-credit.png)

## Related information

[Manage company credit]({{ page.baseurl }}/b2b/credit-manage.html)
