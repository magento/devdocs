---
title: Clone the repository
functional_areas:
  - Install
  - System
  - Setup
---

You can clone the latest code from the [Magento GitHub repository][gh-repo], and use code from a release branch or a development branch.

-  A **release branch** is a _stable_, full-featured code branch officially released with a version number, such as 2.4. You _must_ use a release branch with the [Data Migration Tool][].

-  A **development branch**, or feature branch, is a less-stable code branch with the latest code intended as the next version or to introduce a specific feature.

You can checkout a specific branch after you clone the repository to your local development environment. See [Cloning a repository][gh-clone] in the _GitHub Docs_.

## Authentication and access

The {{site.data.var.ee}} repository requires authentication, so you must prepare the following:

-  **[Magento authentication key][]**—You must have an authentication key to access the {{site.data.var.ee}} Composer package on `repo.magento.com` and to enable install and update commands for your project.

-  **[GitHub personal access token][gh-token]**—Composer requires a _personal access token_ in the `github-oauth` property to authorize GitHub repository access. When you create this token, select all options in the `repo` scope.

## Authentication file

You must create an `auth.json` file that contains your {{site.data.var.ee}} [authorization credentials][] in the Magento root directory.

{:.procedure}
To create an authentication file:

1. If you do not have an `auth.json` file in your Magento root directory, create one.

   -  Using a text editor, create an `auth.json` file in the Magento root directory.
   -  Copy the contents of the [sample `auth.json` file][sample] into the new `auth.json` file.

1. Replace `<public-key>` and `<private-key>` with your {{site.data.var.ee}} authentication credentials. Add the `github-oauth` section and replace the `<personal-access-token>` with the one you created for your GitHub account.

   ```json
   {
       "http-basic": {
           "repo.magento.com": {
               "username": "<public-key>",
               "password": "<private-key>"
           }
       },
       "github-oauth": {
           "github.com": "<personal-access-token>"
       }
   }
   ```

1. Save your changes and exit the text editor.

{:.bs-callout-warning}
Pushing an `auth.json` file to a public repository can expose your credentials.

After completing the tasks discussed on this page, see [Update installation dependencies][].

<!-- LINK DEFINITIONS -->
[authorization credentials]: {{page.baseurl}}/install-gde/prereq/connect-auth.html
[Data Migration Tool]: {{page.baseurl}}/migration/bk-migration-guide.html
[gh-clone]: https://help.github.com/articles/cloning-a-repository-from-github/
[gh-repo]: https://github.com/magento/magento2
[gh-token]: https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
[Magento authentication key]: {{page.baseurl}}/install-gde/prereq/connect-auth.html
[sample]: {{ site.mage2bloburl }}/{{ page.guide_version }}/auth.json.sample
[Update installation dependencies]: {{page.baseurl}}/install-gde/install/prepare-install.html
