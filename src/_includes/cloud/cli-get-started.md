
1. Log in to your local development system, or switch to, the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
1. Change to a directory to which the Magento file system owner has write access.
1. Enter the following command in a terminal to log in to your project:

   ```bash
   magento-cloud login
   ```

1. List your projects. With the project ID, you can complete additional commands.

   ```bash
   magento-cloud project:list
   ```

1. If necessary, clone the project to your local. You should have cloned when setting up your local development workspace.

   ```bash
   magento-cloud project:get <project ID>
   ```

1. Change to a project directory. For example, `cd /var/www/html/magento2`
1. List environments in the project. Every environment includes an active Git branch of your code, database, environment variables, configurations, and services.

   ```bash
   magento-cloud environment:list
   ```

   {:.bs-callout-info}
   `magento-cloud environment:list`—displays environment hierarchies whereas the `git branch` command does not.

1. Fetch origin branches to get the latest code:

   ```bash
   git fetch origin
   ```

1. Check out, or switch to, a specific branch and environment. Git commands only checkout the Git branch. The Magento Cloud command also switches to the active environment.

   ```bash
   magento-cloud environment:checkout <environment ID>
   ```

   To create a new environment, use `magento-cloud environment:branch <environment name> <parent environment ID>`

1. Pull any updated code to your local for the environment ID (which is the Git branch):

   ```bash
   git pull origin <environment ID>
   ```

1. Create a [snapshot]({{ site.baseurl }}/cloud/project/project-webint-snap.html) of the environment as a backup:

   ```bash
   magento-cloud snapshot:create -e <environment ID>
   ```
