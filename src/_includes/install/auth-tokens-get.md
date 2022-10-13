The `repo.magento.com` repository is where Magento 2 and third-party Composer packages are stored and requires authentication. Use your Commerce Marketplace account to generate a pair of 32-character *authentication keys* to access the repository.

{:.bs-callout-info}
For access entitlement to {{site.data.var.ee}} and {{site.data.var.ece}} packages, you must use keys associated with a MAGEID that has been granted access to those packages. The MAGEID is typically the **Billing Contact** on the {{site.data.var.ee}} account and may not always be the **Project Owner** of the {{site.data.var.ece}} project. If you encounter [errors](https://support.magento.com/hc/en-us/articles/360040296392), you may not have authorization to access the package or the access entitlement has expired due to an outstanding invoice on the account. Contact [{{site.data.var.ee}} support](https://magento.com/support) for assistance with your MAGEID.

To create authentication keys:

1. Log in to the [Commerce Marketplace](https://marketplace.magento.com). If you don't have an account, click **Register**.
1. Click your account name in the top-right of the page and select **My Profile**.

1. Click **Access Keys** in the Marketplace tab.

   ![Get your secure access keys on Commerce Marketplace]({{ site.baseurl }}/common/images/cloud/cloud_access-key.png){:width="500px"}

1. Click **Create a New Access Key**. Enter a specific name for the keys (for example, the name of the developer receiving the keys) and click **OK**.

1. New public and private keys are now associated with your account that you can click to copy. Save this information or keep the page open when working with your Magento project. Use the **Public key** as your username and the **Private key** as your password.

### Manage your authentication keys

You can also disable or delete authentication keys. For example, you can disable or delete keys for security reasons after someone leaves your organization.

*  To disable keys: Click **Disable**. You can do this if you want to suspend use of your keys.
*  To enable a previously disabled key: Click **Enable**.
*  To delete keys: Click **Delete**.

### Manage SSH access token

To download Magento releases using SSH, you must generate a Downloads Access Token. To generate a token:

1. Log in to your [magento.com account](https://www.magentocommerce.com/products/customer/account/login).
1. Click **My Account** at the top of the page.
1. Click **Account Settings** > **Downloads Access Token**.

   ![Access your keys]({{ site.baseurl }}/common/images/connect_keys1.png){:width="200px"}

1. Click **Generate new token** to replace and disable an existing token.

You must use your MAGEID plus your token to download a release. Your MAGEID is displayed at the top-left of your account page.

For example:

```bash
curl -k https://MAGEID:TOKEN@www.magentocommerce.com/products/downloads/info/help
```
