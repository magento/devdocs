---
group: release-notes
subgroup: 05_techbull
title: MasterCard BIN Range Update 
menu_title: MasterCard BIN Range Update (May 19, 2017)
menu_node: 
menu_order: 6
---

*Technical Bulletin published on May 19, 2017 and edited on June 29, 2017.*

MasterCard recently added a new series of Bank Identification Numbers (BIN). As of June 30, 2017, MasterCard may fine merchants who do not support cards that use this new range of BIN numbers, and transactions on your store for customers using cards with these new BINs may fail. 

In response, we’ve issued a set of patches for the Magento 1.x versions that do not already support processing cards with this new range of BIN numbers. 

### Who is affected by this issue?

Magento Commerce (formerly Enterprise Edition) versions 1.14.3.0 and later and Magento Open Source (formerly Community Edition) versions 1.9.3.0 and later fully support the new MasterCard numbers. Similarly, Magento Open Source and Commerce 2.1.3 and later versions fully support this MasterCard BIN range update.

However, if you are using an older version of Magento, you must upgrade by June 30 to avoid fines and ensure the correct processing of payments made with these new BINs. 

### Action

Consult the following tables to learn how to apply a fix to your specific Magento version.

#### Magento 1.x patches

Consult the following tables for guidelines for Magento 1.x EE and CE fixes.


**Magento 1.x CE**

<table>
  <tr>
    <th>Magento 1.x CE version you are running….</th>
    <th>Information you need….</th>
 
  </tr>


  <tr>
    <td>versions earlier than 1.5.0.0</td>
    <td>Please upgrade to a later version of Magento </td>
      </tr>

      <tr>
    <td>1.5.0.0 - 1.9.2.4</td>
    <td>Install <a href="https://magento.com/tech-resources/download" target="_blank">Patch 8967</a>.</td>
      </tr>

<tr>
    <td>1.9.2.4 and later</td>
    <td>Your version supports the new MasterCard BIN numbers.</td>
      </tr>

</table>
	

**Magento 1.x EE** 

<table>
  <tr>
    <th>Magento 1.x EE version you are running….</th>
    <th>Information you need….</th>
 
  </tr>
  <tr>
    <td>1.9.0.0</td>
    <td>Install patch PATCH_SUPEE-2725_EE_1.9.0.0_v1.sh before installing PATCH_SUPEE-8967_EE_1.13.1.0_v1.sh.</td>
    
  </tr>
  <tr>
    <td>1.9.1.0 – 1.11.2.0</td>
    <td>Install PATCH_SUPEE-2725_EE_1.9.1.1-EE_1.11.2.0_v2.sh before installing PATCH_SUPEE-8967_EE_1.13.1.0_v1.sh</td>
    
  </tr>
  <tr>
    <td>1.12.0.0 – 1.13.1.0</td>
    <td>Install PATCH_SUPEE-1049_EE_1.12.0.2_v2.sh before installing PATCH_SUPEE-8967_EE_1.13.1.0_v1.sh</td>
      </tr>

  <tr>
    <td>1.14.0.0 – 1.14.2.4</td>
    <td>Install PATCH 8967_EE_1.13.1.0_v1.sh</td>
      </tr>

<tr>
    <td>1.14.3.0 and later</td>
    <td>Your version supports the new MasterCard BIN numbers.</td>
      </tr>

</table>

#### Access Magento 1.x patches

To get patches for Magento 1.x Commerce or Open Source

1.	Log in to [www.magento.com](http://magentocommerce.com){:target="_blank"}

2.	In the left pane, click Downloads.

3.	In the right pane, click either Magento Commerce or Magento Open Source.

4.	Follow the prompts on your screen to download the Mastercard 2 Series BIN: Bank Identification Numbers Range Update patch for your version of Magento Commerce or Open Source.

5.	Apply the patch as discussed in [How to Apply and Revert Magento Patches]({{ site.baseurl }}/guides/m1x/other/ht_install-patches.html){:target="_blank"}.

#### Magento 2.x fix

<table>
  <tr>
    <th>Magento 2.x version you are running….</th>
    <th>Information you need….</th>
 
  </tr>
  <tr>
    <td>2.0.0 – 2.0.13</td>
    <td>Upgrade to 2.0.14 or later.  </td>
    
  </tr>
<tr>
  <td>2.0.14 and later</td>
    <td>Your version supports the new MasterCard BIN numbers.  </td>

    </tr>


  <tr>
    <td>2.1.0 – 2.1.2</td>
    <td>Upgrade to 2.1.3 or later. </td>
    
  </tr>
 
<tr>
    <td>2.1.3 and later </td>
    <td>Your version supports the new MasterCard BIN numbers.</td>
      </tr>

</table>

### More information

MasterCard describes the issue [here](https://www.mastercard.us/en-us/issuers/get-support/2-series-bin-expansion.html){:target="_blank"}.







