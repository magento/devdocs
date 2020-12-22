---
group: cloud-guide
title: Troubleshoot deployment
redirect_from:
   - /cloud/access-acct/trouble.html
functional_areas:
  - Cloud
  - Deploy
---

This topic discusses how to recover if you deployed the Magento application with the incorrect [Magento authentication keys]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html). For example, you might have used the keys for another account or you might have used {{site.data.var.ce}} keys instead of {{site.data.var.ee}} keys.

If you used the incorrect keys, deployment fails. To recover, you must clone the project, add the correct keys to `auth.json`, and push the change to the master branch.

 {:.bs-callout-info}
In this section, we assume that your project has a `master` branch only (`master` is the default branch when you first create a project).

To redeploy with the correct authentication keys:

1. Log in to the machine that has your {{site.data.var.ece}} SSH keys.
1. Log in to the project:

   ```bash
   magento-cloud login
   ```

1. Create a branch to update code with the name `auth`:

   ```bash
   magento-cloud environment:branch auth master
   ```

1. Change to the project root directory.
1. Open `auth.json` in a text editor.

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

1. Add the correct authentication keys.
1. Save your changes and exit the text editor.
1. Commit and merge your changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "<description of change>"
   ```

   ```bash
   git push origin master
   ```

1. Wait for the deployment to complete.

Messages indicate whether deployment was successful. You can confirm a successful deployment by going to one of the **Environment routes** displayed on your screen.
