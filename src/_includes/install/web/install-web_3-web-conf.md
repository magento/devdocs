## Step 3: Web Configuration   {#instgde-install-magento-web-step3}

1. Enter the following information:

   |Item|Description|
   |--- |--- |
   |Your Store Address|Enter the URL, including scheme and trailing slash, by which users access your storefront. For example, if your storefront hostname is http://www.example.com, enter http://www.example.com/|
   |Magento Admin Address|Enter the relative URL by which to access the Magento Admin.|

1. Optionally click **Advanced Options** and enter the following information:

   |Item|Description|
   |--- |--- |
   |HTTPS Options|Select the checkbox to enable the use of Secure Sockets Layer (SSL) in the indicated URL. Make sure your web server supports SSL before you select either checkbox.|
   |Apache Rewrites|Select this checkbox to use Apache rewrites. We support this option only if you enabled server rewrites when you installed [Apache]({{ page.baseurl }}/install-gde/prereq/apache.html).|
   |Encryption Key|Magento uses an encryption key to encrypt [sensitive data](#sens-data) in the database.<br><br>Click I want to use a Magento generated key to have Magento generate an encryption key for you.<br><br>Click I want to use my own encryption key if you already have an encryption key.|
   |Session Save|From the list, click the option corresponding to how to store session data.<br><br>The default is Files, which means session data is saved in the var/session subdirectory of the Magento file system.<br><br>You can also choose Db, which means session data is stored in the database.|

1. Click **Next**.

{% include install/sens-data.md %}
