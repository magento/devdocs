<div markdown="1">

To create `auth.json`:

1.	Log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Edit or create `auth.json` in the user's home directory.

	The following example shows how to add `repo.magento.com` authentication to an existing file:

        {
           "github-oauth": {
             "github.com": "804d4ab968ia8vk0Uar263a1cbd40d82da7464aa7"
           },
           "http-basic": {
              "repo.magento.com": {
                 "username": "<public key>",
                 "password": "<private key>"
              }
           }
        }

       	For example, if your user name is `magento_user`, create or edit `/home/magento_user/.composer/auth.json`