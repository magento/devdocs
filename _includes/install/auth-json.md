If Composer is installed, `auth.json` may already exist.
It is generally stored in the [COMPOSER_HOME][] location, but may vary by operating system.
If Composer is being installed for the first time, create a new `auth.json` file and place it in the magento user home directory.

1. Log in to your Magento server as, or switch to, the [Magento file system owner][].
2. Edit or create `auth.json` in the user's home directory.

The following example shows how to add `repo.magento.com` authentication to an existing file:

   ```json
   {
      "github-oauth": {
         "github.com": "<your GitHub personal access token>"
      },
      "http-basic": {
         "repo.magento.com": {
            "username": "<public key>",
            "password": "<private key>"
         }
      }
   }
   ```

   For example, if your username is `magento_user`, create or edit `/home/magento_user/.composer/auth.json`

<!-- LINK DEFINITIONS -->

[COMPOSER_HOME]: https://getcomposer.org/doc/articles/http-basic-authentication.md
[Magento file system owner]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html