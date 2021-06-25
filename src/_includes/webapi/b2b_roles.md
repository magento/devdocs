The following table lists all the resources that are available to the customers defined with a company. To visualize the resource hierarchy, log in to a store as the Company Admin and select **Roles and Permissions**, then click the **Edit** action next to the Default User role.

Display name | Resource name
--- | ---
&emsp; All | Magento_Company::index
&emsp; &emsp; Sales | Magento_Sales::all
&emsp; &emsp; &emsp; Allow Checkout | Magento_Sales::place_order
&emsp; &emsp; &emsp; &emsp; Use Pay On Account method | Magento_Sales::payment_account
&emsp; &emsp; &emsp; View orders |  Magento_Sales::view_orders
&emsp; &emsp; &emsp; View orders of subordinate users |  Magento_Sales::view_orders_sub
&emsp; &emsp; Quotes | Magento_NegotiableQuote::all
&emsp; &emsp; &emsp; View | Magento_NegotiableQuote::view_quotes
&emsp; &emsp; &emsp; &emsp; Request, Edit, Delete | Magento_NegotiableQuote::manage
&emsp; &emsp; &emsp; &emsp; Checkout with Quote | Magento_NegotiableQuote::checkout
&emsp; &emsp; &emsp; View quotes of subordinate users | Magento_NegotiableQuote::view_quotes_sub
&emsp; Order Approvals | Magento_PurchaseOrder::all
&emsp; &emsp; View My Purchase Orders | Magento_PurchaseOrder:view_purchase_orders
&emsp; &emsp; &emsp; View for subordinates | Magento_PurchaseOrder:view_purchase_orders_for_subordinates
&emsp; &emsp; &emsp; View for all company | Magento_PurchaseOrder:view_purchase_orders_for_company
&emsp; &emsp; Auto-approve POs created within this role | Magento_PurchaseOrder:autoapprove_purchase_order
&emsp; &emsp; Approve Purchase Orders without other approvals | Magento_PurchaseOrder:super_approve_purchase_order
&emsp; &emsp; View Approval Rules | Magento_PurchaseOrder:view_approval_rules
&emsp; &emsp; &emsp; Create, Edit and Delete | Magento_PurchaseOrder:manage_approval_rules
&emsp; &emsp; Company Profile | Magento_Company::view
&emsp; &emsp; &emsp; Account Information (View) | Magento_Company::view_account
&emsp; &emsp; &emsp; &emsp; Edit | Magento_Company::edit_account
&emsp; &emsp; &emsp; Legal Address (View) | Magento_Company::view_address
&emsp; &emsp; &emsp; &emsp; Edit | Magento_Company::edit_address
&emsp; &emsp; &emsp; Contacts (View) | Magento_Company::contacts
&emsp; &emsp; &emsp; Payment Information (View) | Magento_Company::payment_information
&emsp; &emsp; &emsp; Shipping Information (View) | Magento_Company::shipping_information
&emsp; &emsp; Company User Management | Magento_Company::user_management
&emsp; &emsp; &emsp; View roles and permissions | Magento_Company::roles_view
&emsp; &emsp; &emsp; &emsp; Manage roles and permissions | Magento_Company::roles_edit
&emsp; &emsp; &emsp; View users and teams | Magento_Company::users_view
&emsp; &emsp; &emsp; &emsp; Manage users and teams | Magento_Company::users_edit
&emsp; &emsp; Company credit | Magento_Company::credit
&emsp; &emsp; &emsp; view | Magento_Company::credit_history