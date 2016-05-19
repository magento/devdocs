---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: Enable or disable your component
menu_title: Enable or disable your component
menu_order: 9
github_link: extension-dev-guide/build/enable-module.md

---
##{{page.menu_title}}

After you have built the component and are ready to enable it in your Magento environment, do the following:

<ol>
<li>Disable the cache under <code>System->Cache Management</code>.</li>
<li>Enter the following at the command line:

		<pre>bin/magento module:enable --clear-static-content Component_Name
    	bin/magento setup:upgrade
    	</pre>

where <code>Component_Name</code> is the name of the component you are enabling.

</li>

<li>Check under <code>Stores->Configuration->Advanced->Advanced</code> that the component is present.</li>
 </ol>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The general order of operations for <code>setup:upgrade</code> is:</p>

<ol>
<li><strong>Schema install/upgrade.</strong></li>
	<li><strong>Schema post-upgrade</strong>&#8212; handles any additional updates. These recurring upgrades occur independently and regardless of any changes to the schema.</li>
	<li><strong>Data install/upgrade</strong> &#8212; installs the data. Taken from <code>setup/InstallData.php</code>.</li>
</ol>
</span>
</div>



##Disable a component

To disable a component, enter the following at the command line:

    bin/magento module:disable --clear-static-content Component_Name


For more on enabling and disabling components, see [enable or disable modules]({{ site.gdeurl21}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).
