{:.procedure}
To get started with environment branches:

1. On your local workstation, change to your Cloud project directory.

1. Switch to the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).

1. Log in to your Magento project.

   ```bash
   magento-cloud login
   ```

1. List your projects.

   ```bash
   magento-cloud project:list
   ```

1. List environments in the project. Every environment includes an active Git branch that contains your code, database, environment variables, configurations, and services.

   ```bash
   magento-cloud environment:list
   ```

   {:.bs-callout-info}
   It is important to use the `magento-cloud environment:list` command because it displays environment hierarchies, whereas the `git branch` command does not.

1. Fetch origin branches to get the latest code.

   ```bash
   git fetch origin
   ```

1. Checkout, or switch to, a specific branch and environment.

   ```bash
   magento-cloud environment:checkout <environment-ID>
   ```

   Git commands only checkout the Git branch. The `magento-cloud checkout` command checks out the branch and switches to the active environment.

   {:.bs-callout-tip}
   You can create a new environment branch using the `magento-cloud environment:branch <environment-name> <parent-environment-ID>` command syntax. It may take some additional time to create and activate a new environment branch.

1. Use the environment ID to pull any updated code to your local. This is not necessary if the environment branch is new.

   ```bash
   git pull origin <environment-ID>
   ```

1. (_Optional_) Create a [snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html) of the environment as a backup.

   ```bash
   magento-cloud snapshot:create -e <environment-ID>
   ```
