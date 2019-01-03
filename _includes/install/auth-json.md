 Accessing the Magento 2 GitHub repository requires authentication. The command `composer install` fails without it. Requirements to authenticate include:

1. Magento authentication keys
1. GitHub personal access token
1. Composer `auth.json` file

### Get Magento authentication keys

Follow this guide to [get Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).

 ### Create a GitHub personal access token

{:.bs-callout .bs-callout-info}
The Composer auth file requires the `github-oauth` property, but do not create a GitHub OAuth App. It's simpler to create a personal access token.

1. Go to your [GitHub personal access tokens](https://github.com/settings/tokens) settings.
2. Click "Generate New Token".
3. Type a useful description. Example: "Composer auth for example.com"
4. Select all checkboxes in the `repo` scope.
5. Click "Generate Token".
6. Save your token now. It cannot be recovered later.

### Create `auth.json` file

1. Log in to your Magento server as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
2. Create the file `auth.json` in the user's home directory. For example, if `magento_user` your Unix username then create `/home/magento_user/.composer/auth.json`.

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
