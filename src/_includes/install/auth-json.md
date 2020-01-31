 Accessing the Magento 2 GitHub repository requires authentication. The command `composer install` fails without it. Requirements to authenticate include:

1. Magento authentication keys
1. GitHub personal access token
1. Composer `auth.json` file

### Create Magento authentication keys

Follow this guide to [create Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).

### Create a GitHub personal access token

{:.bs-callout-warning}
The Composer auth file requires the `github-oauth` property, but do not create a GitHub OAuth App. Create a personal access token instead.

Follow this guide to [create a GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

{:.bs-callout-info}
When choosing token permissions, select all checkboxes in the `repo` scope. Composer auth does not require other permissions.

### Create `auth.json` file

1. Log in to your Magento server as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Create the `auth.json` file in the user's home directory. For example, if `magento_user` is your Unix username, then create `/home/magento_user/.composer/auth.json`.

### Edit `auth.json` file

Replace the `<placeholder>` values with your token and keys:

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
