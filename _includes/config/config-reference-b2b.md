<div markdown="1">

This reference contains unique configuration paths for the Magento Enterprise B2B Extension. The Magento Enterprise B2B Extension supports all configuration paths for Magento Community Edition (CE) and Magento Enterprise Edition (EE) as well.

## General category
This section lists variable names and configuration paths available for options in the Admin under **Stores** > Settings > **Configuration** > **General**.

### B2B Features paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **General** > **B2B Features**.

Name   |  Config path  |  Encrypted?  |  System-specific?  |  Sensitive?  | 
 | -------------- | -------------- | -------------- | 
Enable Company | btob/website/configuration/company/active
Enable Quick Order | btob/website/configuration/quickorder/active
Enable Requisition List | btob/website/configuration/requisition/list/active

## Customers category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Customers**.

### Company configuration paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Customers** > **Company Configuration**.

Name   |  Config path  |  Encrypted?  |  System-specific?  |  Sensitive?  | 
 | -------------- | -------------- | -------------- | 
Allow Company Registration from the Storefront  |  company/general/allow/company/registration
Company Registration Email Recipient  |  company/email/company/registration
Send Company Registration Email Copy To  |  company/email/company/registration/copy
Send Email Copy Method  |  company/email/company/copy/method
Default Company Registration Email  |  company/email/company/notify/admin/template
Customer-Related Emails  |  company/email/heading/customer
Default Sales Rep Assigned Email  |  company/email/customer/sales/representative/template
Default Assign Company to Customer Email  |  company/email/customer/company/customer/assign/template
Default Assign Company Admin Email  |  company/email/customer/assign/super/user/template
Default Company Admin Inactive Email  |  company/email/customer/inactivate/super/user/template
Default Company Admin Changed To Member Email  |  company/email/customer/remove/super/user/template
Default Customer Status Active Email  |  company/email/customer/account/activated/template
Default Customer Status Inactive Email  |  company/email/customer/account/locked/template
Company Status Change  |  company/email/heading/company/status
Company Status Change Email Recipient  |  company/email/company/status/change
Send Company Status Change Email Copy To  |  company/email/company/status/change/copy
Send Email Copy Method  |  company/email/company/status/copy/method
Default Company Status Change To Active 1 Email  |  company/email/company/status/pending/approval/to/active/template
Default Company Status Change To Active 2 Email  |  company/email/company/status/rejected/blocked/to/active/template
Default Company Status Change To Rejected Email  |  company/email/company/status/rejected/template
Default Company Status Change To Blocked Email  |  company/email/company/status/blocked/template
Default Company Status Change To Pending Approval Email  |  company/email/company/status/pending/approval/template
Company Credit  |  company/email/heading/company/credit
Company Credit Change Email Sender  |  company/email/company/credit/change
Send Company Credit Change Email Copy To  |  company/email/company/credit/change/copy
Send Email Copy Method  |  company/email/company/credit/copy/method
Allocated Email Template  |  company/email/credit/allocated/email/template
Updated Email Template  |  company/email/credit/updated/email/template
Reimbursed Email Template  |  company/email/credit/reimbursed/email/template
Refunded Email Template  |  company/email/credit/refunded/email/template
Reverted Email Template  |  company/email/credit/reverted/email/template

## Sales category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Sales**.

### Sales Emails paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Sales Emails**.

Name   |  Config path  |  Encrypted?  |  System-specific?  |  Sensitive?  | 
 | -------------- | -------------- | -------------- |
Enabled  |  sales/email/quote/enabled
Updated Quote Template (to Buyer)  |  sales/email/quote/updated/buyer/template
Declined Quote Template (to Buyer)  |  sales/email/quote/declined/buyer/template
New Quote Template (to Seller)  |  sales/email/quote/new/seller/template
Updated Quote Template (to Seller)  |  sales/email/quote/updated/seller/template
Quote Expiration (in 48 hrs)  |  sales/email/quote/expire/two/days/template
Quote Expiration (in 24 hrs)  |  sales/email/quote/expire/one/day/template
Expiration Date Reset  |  sales/email/quote/expire/reset/template
Send Quote Email Copy To  |  sales/email/quote/copy/to
Send Quote Email Copy Method  |  sales/email/quote/copy/method

### Quotes paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Sales** > **Quotes**.

Name   |  Config path  |  Encrypted?  |  System-specific?  |  Sensitive?  | 
 | -------------- | -------------- | -------------- |
Minimum Amount  |  quote/general/minimum/amount
Minimum Amount Message  |  quote/general/minimum/amount/message
Default Expiration Period  |  quote/general/default/expiration/period
File formats for upload  |  quote/attached/files/file/formats
Maximum file size  |  quote/attached/files/maximum/file/size
Minimum Amount | quote/general/minimum/amount
Minimum Amount Message | quote/general/minimum/amount/message
Default Expiration Period | quote/general/default/expiration/period
File formats for upload | quote/attached/files/file/formats
Maximum file size | quote/attached/files/maximum/file/size

## Advanced category
This section lists variable names and config paths available for options in the Admin under **Stores** > Settings > **Configuration** > **Advanced**.

### System paths
These configuration values are availabe in the Magento Admin in **Stores** > Settings > **Configuration** > **Advanced** > **System**.

Name   |  Config path  |  Encrypted?  |  System-specific?  |  Sensitive?  | 
 | -------------- | -------------- | -------------- |


## Not done yet





Applicable Payment Methods | btob/default/b2b/payment/methods/applicable/payment/methods
Payment Methods | btob/default/b2b/payment/methods/available/payment/methods

Enable Shared Catalog | btob/website/configuration/sharedcatalog/active
Enable B2B Quote | btob/website/configuration/negotiablequote/active





Enabled | payment/au/companycredit/active
Title | payment/au/companycredit/title
New Order Status | payment/au/companycredit/order/status
Payment from Applicable Countries | payment/au/companycredit/allowspecific
Payment from Specific Countries | payment/au/companycredit/specificcountry
Minimum Order Total | payment/au/companycredit/min/order/total
Maximum Order Total | payment/au/companycredit/max/order/total
Sort Order | payment/au/companycredit/sort/order
Enabled | payment/es/companycredit/active
Title | payment/es/companycredit/title
New Order Status | payment/es/companycredit/order/status
Payment from Applicable Countries | payment/es/companycredit/allowspecific
Payment from Specific Countries | payment/es/companycredit/specificcountry
Minimum Order Total | payment/es/companycredit/min/order/total
Maximum Order Total | payment/es/companycredit/max/order/total
Sort Order | payment/es/companycredit/sort/order
Enabled | payment/companycredit/active
Title | payment/companycredit/title
New Order Status | payment/companycredit/order/status
Payment from Applicable Countries | payment/companycredit/allowspecific
Payment from Specific Countries | payment/companycredit/specificcountry
Minimum Order Total | payment/companycredit/min/order/total
Maximum Order Total | payment/companycredit/max/order/total
Sort Order | payment/companycredit/sort/order
Enabled | payment/nz/companycredit/active
Title | payment/nz/companycredit/title
New Order Status | payment/nz/companycredit/order/status
Payment from Applicable Countries | payment/nz/companycredit/allowspecific
Payment from Specific Countries | payment/nz/companycredit/specificcountry
Minimum Order Total | payment/nz/companycredit/min/order/total
Maximum Order Total | payment/nz/companycredit/max/order/total
Sort Order | payment/nz/companycredit/sort/order
Enabled | payment/us/companycredit/active
Title | payment/us/companycredit/title
New Order Status | payment/us/companycredit/order/status
Payment from Applicable Countries | payment/us/companycredit/allowspecific
Payment from Specific Countries | payment/us/companycredit/specificcountry
Minimum Order Total | payment/us/companycredit/min/order/total
Maximum Order Total | payment/us/companycredit/max/order/total
Sort Order | payment/us/companycredit/sort/order
Enabled | payment/gb/companycredit/active
Title | payment/gb/companycredit/title
New Order Status | payment/gb/companycredit/order/status
Payment from Applicable Countries | payment/gb/companycredit/allowspecific
Payment from Specific Countries | payment/gb/companycredit/specificcountry
Minimum Order Total | payment/gb/companycredit/min/order/total
Maximum Order Total | payment/gb/companycredit/max/order/total
Sort Order | payment/gb/companycredit/sort/order
Enabled | payment/de/companycredit/active
Title | payment/de/companycredit/title
New Order Status | payment/de/companycredit/order/status
Payment from Applicable Countries | payment/de/companycredit/allowspecific
Payment from Specific Countries | payment/de/companycredit/specificcountry
Minimum Order Total | payment/de/companycredit/min/order/total
Maximum Order Total | payment/de/companycredit/max/order/total
Sort Order | payment/de/companycredit/sort/order
Enabled | payment/other/companycredit/active
Title | payment/other/companycredit/title
New Order Status | payment/other/companycredit/order/status
Payment from Applicable Countries | payment/other/companycredit/allowspecific
Payment from Specific Countries | payment/other/companycredit/specificcountry
Minimum Order Total | payment/other/companycredit/min/order/total
Maximum Order Total | payment/other/companycredit/max/order/total
Sort Order | payment/other/companycredit/sort/order
Enabled | payment/ca/companycredit/active
Title | payment/ca/companycredit/title
New Order Status | payment/ca/companycredit/order/status
Payment from Applicable Countries | payment/ca/companycredit/allowspecific
Payment from Specific Countries | payment/ca/companycredit/specificcountry
Minimum Order Total | payment/ca/companycredit/min/order/total
Maximum Order Total | payment/ca/companycredit/max/order/total
Sort Order | payment/ca/companycredit/sort/order
Enabled | payment/hk/companycredit/active
Title | payment/hk/companycredit/title
New Order Status | payment/hk/companycredit/order/status
Payment from Applicable Countries | payment/hk/companycredit/allowspecific
Payment from Specific Countries | payment/hk/companycredit/specificcountry
Minimum Order Total | payment/hk/companycredit/min/order/total
Maximum Order Total | payment/hk/companycredit/max/order/total
Sort Order | payment/hk/companycredit/sort/order
Enabled | payment/jp/companycredit/active
Title | payment/jp/companycredit/title
New Order Status | payment/jp/companycredit/order/status
Payment from Applicable Countries | payment/jp/companycredit/allowspecific
Payment from Specific Countries | payment/jp/companycredit/specificcountry
Minimum Order Total | payment/jp/companycredit/min/order/total
Maximum Order Total | payment/jp/companycredit/max/order/total
Sort Order | payment/jp/companycredit/sort/order
Enabled | payment/fr/companycredit/active
Title | payment/fr/companycredit/title
New Order Status | payment/fr/companycredit/order/status
Payment from Applicable Countries | payment/fr/companycredit/allowspecific
Payment from Specific Countries | payment/fr/companycredit/specificcountry
Minimum Order Total | payment/fr/companycredit/min/order/total
Maximum Order Total | payment/fr/companycredit/max/order/total
Sort Order | payment/fr/companycredit/sort/order
Enabled | payment/it/companycredit/active
Title | payment/it/companycredit/title
New Order Status | payment/it/companycredit/order/status
Payment from Applicable Countries | payment/it/companycredit/allowspecific
Payment from Specific Countries | payment/it/companycredit/specificcountry
Minimum Order Total | payment/it/companycredit/min/order/total
Maximum Order Total | payment/it/companycredit/max/order/total
Sort Order | payment/it/companycredit/sort/order
