<div markdown="1">

Because the Composer repository that contains Magento Enterprise Cloud Edition requires authentication, you must add a file named `auth.json` to your project's root directory. This file contains your authentication keys. Without `auth.json`, the Magento software won't download.

Add `auth.json` in your Magento Enterprise Cloud Edition project root folder if there isn't one already.

Replace the values in the following sample with your Magento Enterprise Cloud Edition public and private keys. You can get these keys from your account owner (that is, the person who created the Cloud account).

{% highlight json %}
{
   "http-basic": {
      "repo.magento.com": {
         "username": "<your public key>",
         "password": "<your private key>"
      }
   }
}
{% endhighlight %}