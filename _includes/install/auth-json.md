To create `auth.json`:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
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

       	For example, if your username is `magento_user`, create or edit `/home/magento_user/.composer/auth.json`
