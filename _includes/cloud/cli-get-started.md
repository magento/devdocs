
1.	Log in to your local development system, or switch to, the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.	Change to a directory to which the Magento file system owner has write access.
2.	Enter the following command in a terminal to log in to your project:

    ```bash
    magento-cloud login
    ```

3.	List your projects. With the project ID, you can complete additional commands.

    ```bash
    magento-cloud project:list
    ```

4.	If necessary, clone the project to your local. You should have cloned when setting up your local development workspace.

    ```bash
    magento-cloud project:get <project ID>
    ```

4.	Change to a project directory. For example, `cd /var/www/html/magento2`
4.	List environments in the project. Every environment includes an active Git branch of your code, database, environment variables, configurations, and services.

    ```bash
    magento-cloud environment:list
    ```

    {: .bs-callout .bs-callout-info}
    `magento-cloud environment:list`—displays environment hierarchies whereas the `git branch` command does not.

5.	Fetch origin branches to get the latest code:

    ```bash
    git fetch origin
    ```

6.	Check out, or switch to, a specific branch and environment. Git commands only checkout the Git branch. The Magento Cloud command also switches to the active environment.

    ```bash
    magento-cloud environment:checkout <environment ID>
    ```

    To create a new environment, use `magento-cloud environment:branch <environment name> <parent environment ID>`

8.	Pull any updated code to your local for the environment ID (which is the Git branch):

    ```bash
    git pull origin <environment ID>
    ```

7.  Create a [snapshot]({{ page.baseurl }}/cloud/project/project-webint-snap.html) of the environment as a backup:

    ```bash
    magento-cloud snapshot:create -e <environment ID>
    ```
