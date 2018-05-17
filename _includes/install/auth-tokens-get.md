<div markdown="1">

The `repo.magento.com` repository is where Magento 2 and third-party Composer packages are stored and requires authentication. Use your Magento Marketplace account to generate a pair of 32-character *authentication keys* to access the repository.

To create authentication keys:

1.  Log in to the [Magento Marketplace](https://marketplace.magento.com){:target="&#95;blank"}. If you don't have an account, click **Register**.
2.  Click your account name in the top-right of the page and select **My Profile**.

3.  Click **Access Keys** in the Marketplace tab.

	![Get your secure access keys on Magento Marketplace]({{ site.baseurl }}/common/images/cloud_access-key.png){:width="500px"}
4.  Click **Create a New Access Key**. Enter a specific name for the keys (e.g., the name of the developer receiving the keys) and click **OK**.

5.  New public and private keys are now associated with your account that you can click to copy. Save this information or keep the page open when working with your Magento project. Use the **Public key** as your user name and the **Private key** as your password.

### Manage your authentication keys
You can also disable or delete authentication keys. For example, you can disable or delete keys for security reasons after someone leaves your organization.

*	To disable keys: Click **Disable**. You can do this if you want to suspend use of your keys.
*	To enable a previously disabled key: Click **Enable**.
*	To delete keys: Click **Delete**.

You cannot delete or disable keys you created by signing in to your [magento.com account](https://www.magentocommerce.com/products/customer/account/login){:target="&#95;blank"}. To manage those keys:

1.	Log in to your [magento.com account](https://www.magentocommerce.com/products/customer/account/login){:target="&#95;blank"}.
2.	Click **My Account** at the top of the page.
3.	Click **Account Settings** > **Downloads Access Token**.

	![Access your keys]({{ site.baseurl }}/common/images/connect_keys1.png){:width="200px"}
4.	Click **Generate new token** to replace and disable an existing token.
