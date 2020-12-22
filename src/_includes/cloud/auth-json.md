Because the Composer repository that contains {{site.data.var.ece}} requires authentication, you must add a file named `auth.json` to your project's root directory. This file contains your authentication keys. Without `auth.json`, the Magento software won't download.

Add `auth.json` in your {{site.data.var.ece}} project root folder if there isn't one already.

Replace the values in the following sample with your {{site.data.var.ece}} public and private keys. You can get these keys from your account owner (that is, the person who created the Cloud account).

```json
{
   "http-basic": {
      "repo.magento.com": {
         "username": "<your public key>",
         "password": "<your private key>"
      }
   }
}
```