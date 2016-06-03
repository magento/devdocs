<div markdown="1">

To create `auth.json`:

1.	Log in to your Magento server as, or switch to, the <a href="{{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Edit or create `auth.json` in the user's home directory.

	The following example shows how to add `repo.magento.com` authentication to an existing file:

        {
           "github-oauth": {
             "github.com": "<your github oauth id>"
           },
           "http-basic": {
              "repo.magento.com": {
                 "username": "<public key>",
                 "password": "<private key>"
              }
           }
        }

       	For example, if your user name is `magento_user`, create or edit `/home/magento_user/.composer/auth.json`