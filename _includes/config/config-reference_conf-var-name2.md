<div markdown="1">

## Step 2: Set global, website, or store view variables {#cloud-system-vars-sys}

This section discusses how to set system variables. 

*	To set values for the global scope (that is, all websites, stores, and store views), start the variable name with `CONFIG__DEFAULT__`. 

*	To set a value for a particular store view or website, start the variable name as discussed in [Step 1: Find the scope value](#cloud-system-vars-scopes):

	*	`CONFIG__WEBSITES`
	*	`CONFIG__STORES`
*	The last part of the variable name is the configuration path, which is unique for each configuration setting.

[See some examples](#cloud-system-vars-ex)

The following table shows a few sample variables.

| Description  | Path in Magento Admin (omitting **Stores** > **Configuration**) | Variable name | 
|--------------|--------------|----------------------|
| Elasticsearch server hostname  | Catalog > **Catalog**, **Elasticsearch Server Hostname**   |  `<SCOPE>__CATALOG__SEARCH__ELASTICSEARCH_SERVER_HOSTNAME` | 
| Elasticsearch server port |  Catalog > **Catalog**, **Elasticsearch Server Port** | `<SCOPE>__CATALOG__SEARCH__ELASTICSEARCH_SERVER_PORT`  | 
| Shipping country origin  | Sales > **Shipping Settings** |  `<SCOPE>SHIPPING__ORIGIN__COUNTRY_ID` | 
| Custom Admin URL | Advanced > **Admin**  | `<SCOPE>__ADMIN__URL__CUSTOM`  | 
| Custom Admin Path  | Advanced > **Admin** | `<SCOPE>__ADMIN__URL__CUSTOM_PATH` |  

## Examples {#cloud-system-vars-ex}
This section shows how to find values of some sample variables.

### Elasticsearch server hostname
To find the variable name for global HTML minification:

1.	Determine the scope.

	It's the global scope so the variable name starts with `CONFIG__DEFAULT__`
2.	The rest of the variable name is `CATALOG__SEARCH__ELASTICSEARCH_SERVER_HOSTNAME`.

**Result**: The variable name is `CONFIG__DEFAULT__CATALOG__SEARCH__ELASTICSEARCH_SERVER_HOSTNAME`

### Shipping country origin
To find the variable name for the shipping country origin:

1.	Determine the scope.

	Find the scope in the [database](#cloud-system-vars-scopes) as discussed in Step 1: Find the website or store view scope value. (You can also find the value in the Admin as shown in the the [table in Step 2: Set global, website, or store view variables](#cloud-system-vars-sys).

	For example, the scope might be `CONFIG__WEBSITE__DEFAULT`.
2.	The rest of the variable name is `SHIPPING__ORIGIN__COUNTRY_ID`.

**Result**: The variable name is `CONFIG__WEBSITE__DEFAULT__SHIPPING__ORIGIN__COUNTRY_ID`