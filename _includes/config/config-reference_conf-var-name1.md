<div markdown="1">

A configuration variable name consists of its scope followed by its configuration path. The following sections discuss how to determine a variable name in more detail.

You can use variables for any of the following:

*	You _must_ set [sensitive values]({{ page.baseurl }}config-guide/prod/config-reference-sens.html) using configuration variables.
*	You can optionally use configuration variables to override system-specific settings.

	Configuration paths for system-specific settings can be found in:

	*	[All configuration paths except payments reference]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
	*	[Payment configuration paths reference]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)

### Variable names
The general format of system settings variable names follows:

<pre class="no-copy">&lt;SCOPE>__&lt;SYSTEM__VARIABLE__NAME></pre>

`<SCOPE>` can be either:

*	Global scope (that is, the global setting for _all_ scopes)

	Global scope variables have the following format:

	<pre class="no-copy">CONFIG__DEFAULT__&lt;SYSTEM__VARIABLE__NAME></pre>

*	A specific scope (that is, the setting affects only a specified store view or website)

	Store view scope variables, for example, have the following format:

	<pre class="no-copy">CONFIG__STORES__ &lt;STORE_VIEW_CODE>__&lt;SYSTEM__VARIABLE__NAME></pre>

	For more information about scopes, see:

	*	[Step 1: Find the scope value](#cloud-system-vars-scopes)
	*	[Magento User Guide](http://docs.magento.com/m2/ce/user_guide/configuration/scope.html){:target="_blank"}
	*	[Scope quick reference](http://docs.magento.com/m2/ce/user_guide/stores/store-scope-reference.html){:target="_blank"}

`<SYSTEM__VARIABLE__NAME>` is the variable you wish to specify. For more information, see [Step 2: Set system variables](#cloud-system-vars-sys).

### Variable format
`<SCOPE>` is separated from `<SYSTEM__VARIABLE__NAME>` by two underscore characters. 

`<SYSTEM__VARIABLE__NAME>` is derived from a configuration setting's _configuration path_, which is a `/` delimited string that uniquely identifies a particular setting. Replace each `/` character in the configuration path with two underscore characters to create the system variable.

A complete list of configuration paths can be found in:

*	[All configuration variables except paths]({{ page.baseurl }}config-guide/prod/config-reference-most.html)
*	[Payment configuration paths]({{ page.baseurl }}config-guide/prod/config-reference-payment.html)

## Step 1: Find the website or store view scope value {#deploy-system-vars-scopes}

This section discusses how you can find and set system configuration values per _scope_ (store view or website). To set global scope variables, see [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).

Scope values come from the `store`, `store_group`, and `store_website` tables.

*	The `store` table specifies store view names and codes
*	The `store_website` table specifies website names and codes

You can also find the code values using the Magento Admin.

How to read the table:

*	`Path in Magento Admin` column

	Values before the comma are paths in the Admin navigation. Values after the comma are options in the right pane.
*	`Variable name` column is the name of the corresponding environment variable.

	You have the option of specifying system values for these configuration parameters as environment variables if you wish.

	*	The entire variable name is always ALL CAPS
	*	Start a variable name with `CONFIG__` (note two underscore characters)
	*	You can find the `<STORE_VIEW_CODE>` or `<WEBSITE_CODE>` portion of a variable name in either the Magento Admin or the Magento database, as indicated in the following sections.
	*	You can find `<SYSTEM__VARIABLE__NAME>` as discussed in [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).

### Find a website or store view scope in the Magento Admin
The following table summarizes how to find website or store view value in the Admin. 

| Description  | Path in Magento Admin | Variable name | 
|--------------|--------------|----------------------|
| Create, edit, delete store views | **Stores** > **All Stores** | `CONFIG__STORES__<STORE_VIEW_CODE>__<SYSTEM__VARIABLE__NAME>`  |
| Create, edit, delete websites | **Stores** > **All Stores**  | `CONFIG__WEBSITE__<WEBSITE_CODE>__<SYSTEM__VARIABLE__NAME>` | 

For example, to find a website or store view scope value in the Admin:

1.	Log in to the Magento Admin as a user authorized to view websites.
2.	Click **Stores** > **All Stores**.
3.	Click the name of a website or store view.

	The right figure is displayed similar to the following.

	![Find a website code]({{ site.baseurl }}common/images/cloud_vars_website-code.png){:width="600px"}
3.	The scope name is displayed in the **Code** field.
4.	Continue with [Step 2:  Set global, website, or store view variables](#cloud-system-vars-sys).