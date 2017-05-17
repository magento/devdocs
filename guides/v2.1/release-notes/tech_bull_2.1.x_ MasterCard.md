---
layout: default 
group: release-notes
subgroup: 05_techbull
title: MasterCard BIN Range Upgrade 
menu_title: MasterCard BIN Range Update (May 17, 2017)
menu_node: 
menu_order: 6
version: 2.1
github_link: release-notes/tech_bull_2.1.x_MasterCard.md
---

*Technical bulletin published on May 19, 2017.*

MasterCard recently added a new series of Bank Identification Numbers (BIN). As of June 30, 2017, MasterCard may fine merchants who do not support cards that use this new range of BIN numbers, and transactions on your store for customers using cards with these new BINs may fail. 

In response, we’ve issued a set of patches for the Magento 1.x versions that do not already support processing cards with this new range of BIN numbers. 



### Who is affected by this issue?

Magento Enterprise Edition versions 1.14.3.0 and later and Magento Community Edition versions 1.9.3.0 and later fully support the new MasterCard numbers. Similarly, Magento Community and Enterprise Editions 2.1.3 and later versions fully support this MasterCard BIN range update.

However, if you are using an older version of Magento, you must upgrade by June 30 to avoid fines and ensure the correct processing of payments made with these new BINs. 


### Action

Consult the following tables to learn how to apply a fix to your specific Magento version.

#### Magento 1.x patches

<table>
  <tr>
    <th>Magento 1.x version you are running….</th>
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

To get patches for Magento 1.x EE or CE
1.	Log in to www.magentocommerce.com.
2.	In the left pane, click Downloads.
3.	In the right pane, click either Magento Enterprise Edition or Magento Community Edition.
4.	Follow the prompts on your screen to download the Mastercard 2 Series BIN: Bank Identification Numbers Range Update patch for your version of EE or CE.
5.	Apply the patch as discussed in How to Apply and Revert Magento Patches.



#### Magento 2.x fix

Note: Magento 2.0.14 is scheduled for the end of May. This patch will include a fix for this issue. 

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



## Credits
Dear community members, thank you for your prompt identification of this issue.  






