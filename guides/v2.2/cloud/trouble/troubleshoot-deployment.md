---
group: cloud-guide
title: Troubleshoot deployment
redirect_from:
   - /guides/v2.2/cloud/access-acct/trouble.html
   - /guides/v2.3/cloud/access-acct/trouble.html
functional_areas:
  - Cloud
  - Deploy
---

This topic discusses how to recover if you deployed the Magento application with the incorrect [Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html). For example, you might have used the keys for another account or you might have used {{site.data.var.ce}} keys instead of {{site.data.var.ee}} keys.

If you used the incorrect keys, deployment fails. To recover, you must clone the project, add the correct keys to `auth.json`, and push the change to the master branch.

{:.bs-callout .bs-callout-info}
In this section, we assume that your project has a `master` branch only (`master` is the default branch when you first create a project).

To redeploy with the correct authentication keys:

1. Log in to the machine that has your {{site.data.var.ece}} SSH keys.
2. Log in to the project:

		magento-cloud login
3. Create a branch to update code with the name `auth`:

      magento-cloud environment:branch auth master

4. Change to the project root directory.
5. Open `auth.json` in a text editor.

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

6. Add the correct authentication keys.
7. Save your changes and exit the text editor.
8. Commit and merge your changes.

    ```bash
    git add -A
    ```

    ```bash
    git commit -m "<description of change>"
    ```

    ```bash
    git push origin master
    ```

9. Wait for the deployment to complete.

Messages indicate whether deployment was successful. You can confirm a successful deployment by going to one of the **Environment routes** displayed on your screen.
