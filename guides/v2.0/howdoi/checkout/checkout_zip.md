---
layout: default
group: howdoi
subgroup: checkout
title: Add custom input mask for ZIP code
menu_title: Add custom input mask for ZIP code
menu_order: 6
github_link: howdoi/checkout/checkout_zip.md
---
## What's in this topic

When a shopper specifies the country and ZIP code in the shipping address during checkout or in the shopping cart, Magento checks if the format of the entered code is valid for the specified country. This validation is implemented using the input masks for the ZIP code field. In Magento, these input masks are regular expressions which define which format is allowed. 
This topic describes how a developer can add custom input masks. 


## Adding custom input masks for ZIP code

In Magento the input masks for the **ZIP code** field are specified in the `<Magento_Directory_module_dir>/etc/zip_codes.xml`. Input masks are specified per country, and are entered in the form of regular expressions. 
The syntax of defined by the [zip_code.xsd]({{site.mage2000url}}app/code/Magento/Directory/etc/zip_codes.xsd) scheme.

For the sake of compatibility, upgradability, and easy maintenance, do not edit the default Magento code. Add your customizations in a separate, custom module. For your ZIP code input mask customization to be applied correctly, your custom module should depend on the `Magento_Directory` module. Do not use `Ui` for your custom module name, because `%Vendor%_Ui` notation, required when specifying paths, might cause issues. 


To add custom ZIP code input masks or change the default ones, create a new `zip_code.xml` in the `<your_module_dir>/etc` directory.

The content of the file should be similar to the following sample:

{%highlight xml%}

<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Directory:etc/zip_codes.xsd">
	
	<!-- Specify the country ISO code-->
	<zip countryCode="US">
		<!-- You can specify several patterns for one country -->
    	<codes>
	        <code id="pattern_1" active="true" example="12345-6789">^[0-9]{5}\-[0-9]{4}$</code>
    	    <code id="pattern_2" active="true" example="12345">^[0-9]{5}$</code>
    	</codes>
	</zip>
</config>
{%endhighlight%}

To change (override the default value) the existing mask, open your `zip_codes.xml` and copy in the related nodes. Then, change the regular expression defining the mask and the value of `example` correspondingly.

Example of changing the default input mask:

In the default `<Magento_Directory_module_dir>/etc/zip_codes.xml` the following mask is set for France:

{%highlight xml%}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Directory:etc/zip_codes.xsd">
...
	<zip countryCode="FR">
        <codes>
            <code id="pattern_1" active="true" example="12345">^[0-9]{5}$</code>
        </codes>
    </zip>
...
</config>
{%endhighlight%}

To change this mask, add the following code in your `zip_codes.xml`:
{%highlight xml%}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Directory:etc/zip_codes.xsd">
...
	<zip countryCode="FR">
        <codes>
            <!-- Changed the regexp defining the mask, and the value of "example" -->
            <code id="pattern_1" active="true" example="A123">^[a-zA-Z]{1}[0-9]{3}$</code>
        </codes>
    </zip>
...
</config>
{%endhighlight%}

To remove a mask, in your `zip_codes.xml` add the corresponding node and set `active` attribute of `<code/>` to `false`.
