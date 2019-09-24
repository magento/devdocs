---
group: cloud-guide
title: Blackfire.io for Magento Cloud
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[Blackfire.io for Magento Cloud](https://blackfire.io/magento) is a PHP profiler and automated performance testing tool that can be used in the development Integration, Staging, and Production environments. It enables you to locate and investigate performance issues in your environment at the code level and creates a performance profile by tracking every PHP call, method, and SQL query performed by your code. Blackfire digs deeper to provide granular performance analytics.

In addition, it profiles your code automatically and notifies you whenever your code does not comply with best practices for Magento 2 code performance management. For a high level overview and demo of Blackfire, review the videos in the [Introduction to Blackfire.io for Magento Cloud](https://support.blackfire.io/blackfire-on-magento-cloud/introduction-to-blackfireio-on-magento-cloud).

For full details on integrations, also review [Configuring Blackfire on Magento Cloud](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/configuring-blackfire-on-magento-cloud).

Blackfire includes the following [environments](https://blackfire.io/docs/reference-guide/environments) through their site:

-  `Magento Cloud (<your-instance-reference>)`—Integration and Development
-  `Magento Cloud (<your-instance-reference>)`—Staging
-  `Magento Cloud (<your-instance-reference>)`—Production

**For Pro**:
You must bypass the Fastly service in your Production environment when profiling with Blackfire. See [Bypassing Reverse Proxy, Cache, and Content Delivery Networks (CDN)](https://blackfire.io/docs/reference-guide/configuration#bypassing-reverse-proxy-cache-and-content-delivery-networks-cdn).

## Get your Blackfire login credentials

The Project Owner is the account owner, and their e-mail address is part of the credentials required for accessing Blackfire for your project. You can only use the Project Owner credentials to log in to the Blackfire website initially. An invitation email is sent to the Project Owner's e-mail address to complete activation.

For information on setting up an account on Blackfire, see [Accessing your Blackfire account as a Magento Cloud user](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-1-accessing-your-blackfire-account-as-a-magento-cloud-user).

## Add collaborator accounts {#collaborators}

After you access your Blackfire account, you can [add additional collaborator accounts](http://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-2-adding-collaborators-to-the-blackfire-environments).

We recommend adding at least one account through Blackfire to manage all access, integrations, and usage of the tool. We also recommend promoting one of the added members to Admin, to manage all Blackfire access and integrations.

1.  Using your Project Owner Blackfire credentials, log in to [Blackfire](https://blackfire.io/login).

1.  Navigate to the _Environments_ tab and select an environment.

1.  Click the **Settings** tab.

1.  Enter an e-mail address and click **Add Member**.

1.  In the _Revoke_ drop-down list of an account, click **Promote as an admin**.

    ![Promote an admin]({{ site.baseurl }}/common/images/cloud_blackfire-member.png){:width="550px"}

## Integrate Blackfire {#dev}

We recommend enabling Blackfire in all of your active environments, including the Integration environment. See [Configure Blackfire to run in all Magento Cloud environments](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-3-configure-blackfire-to-run-in-all-magento-cloud-environments).

### Prerequisites

-  You must be an [account owner]({{ page.baseurl }}/cloud/project/user-admin.html) or have super user access.
-  Set up your [local workspace]({{ page.baseurl }}/cloud/before/before-workspace.html). (`magento-cloud` CLI v1.23 or later)
-  Set the `MAGENTO_CLOUD_APPLICATION` environment variable in Staging or Production environment.

Use the following code to verify the settings:

```bash
magento-cloud ssh 'PRO="$(env | grep -v SSH_ORIGINAL_COMMAND | grep MAGENTO_CLOUD_APPLICATION)"; [[ -n "$PRO" ]] && echo "MAGENTO_CLOUD_APPLICATION exists" || echo "MAGENTO_CLOUD_APPLICATION does not exist; contact {{site.data.var.ece}} support"'
```

If you do not meet all requirements, contact your {{site.data.var.ece}} account manager.

### Setup Blackfire

1.  From the terminal, log in to your {{site.data.var.ece}} project.
1.  Configure Blackfire using the `magento-cloud` CLI.

    ```bash
    magento-cloud blackfire:setup
    ```

    The `blackfire:setup` command automatically configures Blackfire on all environments and activates automated profiling each time you apply and commit changes to an environment. If prompted, provide the {{site.data.var.ece}} project ID and your [Blackfire client credentials](https://blackfire.io/my/settings/credentials).

### Enable Blackfire on local workstation

You can install and use Blackfire on your local workstation with your {{site.data.var.ece}} installation. You do _not_ need to run these installations directly on the hosted environments.

We recommend using the Blackfire installation guide to walk you through the process:

1.  Log in to [Blackfire](https://blackfire.io/login).

1.  On the _Environments_ tab, select the **Integration** environment.

1.  Click the **Settings** tab.

1.  Scroll to the bottom and locate the _Server ID_ and _Server Token_ for the environment. You need these values for the instructions.

1. Open the [Blackfire installation guide](https://blackfire.io/docs/up-and-running/installation), select the Operating System, and follow the instructions.

## Blackfire troubleshooting

### Bypassing Reverse Proxy, Cache, and Content Delivery Networks (CDN)

If you use a reverse proxy, cache, or CDN, you must grant Blackfire access to your servers. See [Bypassing Reverse Proxy, Cache, and Content Delivery Networks (CDN)](https://blackfire.io/docs/reference-guide/configuration#bypassing-reverse-proxy-cache-and-content-delivery-networks-cdn) for an in-depth explanation.

### HTTP Cache configuration

If you use the HTTP cache with `cookies`, update your `.magento.app.yaml` file to enable the `__blackfire` cookie name to pass through the cache. For example:

> `.magento.app.yaml`

```yaml
cache:
    enabled: true
    cookies: [“/SESS.*/“, “__blackfire”]
```

### Add Blackfire to .magento.app.yaml {#magentoappyaml}

By default, the `.magento.app.yaml` file includes the Blackfire module. If the module is not present, use the following instructions to update your `.magento.app.yaml` file, push the updated file to your remote branch, merge, and deploy across all environments.

-  For Starter, merging your Git branch across all environments adds the module.
-  For Pro (legacy), you need to enter a Support ticket to have `.magento.app.yaml` updated to Staging and Production.

We recommend working in a branch and creating a snapshot prior to installing. If you have a branch already created, you can skip down to the steps for modifying the `.magento.app.yaml` file.

#### To create a snapshot in a new branch:

1.  Log in to your {{site.data.var.ece}} project.

    ```bash
    magento-cloud login
    ```

1.  List projects.

    ```bash
    magento-cloud project:list
    ```

1.  List environments in the project.

    ```bash
    magento-cloud environment:list -p <project-ID>
    ```

1.  Verify current branch.

    ```bash
    git branch
    ```

1.  If necessary, check out an existing branch.

    ```bash
    magento-cloud environment:checkout <environment-ID>
    ```

    Also, you can create a new branch using the `magento-cloud environment:branch` command.

1.  Back up the environment using a snapshot.

    ```bash
    magento-cloud snapshot:create -e <environment-ID>
    ```

#### Modify the `.magento.app.yaml` file:

1.  Use a text editor to locate and edit the `<project root dir>/.magento.app.yaml` file in your branch.

1.  Enter `- name: blackfire` in the `extensions` block under `runtime`.

    ```yaml
    # .magento.app.yaml
    runtime:
       extensions:
         - mcrypt
         - redis
         - xsl
         - json
         - blackfire
    ```

1.  Save your changes and exit the text editor.

1.  Add, commit, and push your changes to the environment.

    ```bash
    git add -A && git commit -m "<message>" && git push magento
    ```

    If errors display during deployment, open the `.magento.app.yaml` file and check the syntax, such as indentation and spelling, and try again.

### Changing from the default route {#route}

Instead of using the default route, you can change the route in the Blackfire _Magento Cloud Integration_ page (expand _Advanced Settings_ to reveal the route selection setting) to the desired route from your `routes.yaml` file.

## Profile your store {#profile}

You can verify that Blackfire works using a browser extension or the CLI. For extensive CLI profiling options and better understanding the profiles, see [Blackfire resources](#blackfire-resources).

{% include note.html type="info" content="You can only use the CLI in your local development environment." %}

#### To profile using the browser:

1.  Install the Blackfire browser extension in [Chrome](https://blackfire.io/docs/integrations/chrome#installing-the-companion) or [Firefox](https://blackfire.io/docs/integrations/firefox#installing-the-companion). A Blackfire icon displays in your browser next to the address location. If you do not see it, you may need to display the bar.
1.  Visit the store or site URL for your specific environment, such as the URL for your Integration environment. If you need this URL, you can find it through the Project Web Interface. Select the environment branch and copy the link from the _Access_ section.
1.  Click the Blackfire icon.

    ![Start profiling]({{ site.baseurl }}/common/images/cloud_blackfire.png)

1.  Click **Profile** to start.

    {:.bs-callout-info}
   The browser extension also enables you to profile all requests while you browse. For more information about this, see [Blackfire resources](#blackfire-resources).

#### To profile using the CLI:

1.  Install the Blackfire [CLI Tool](https://blackfire.io/docs/up-and-running/installation). Click on your preferred Platform tab and scroll down to **Installing the Blackfire CLI tool**.

1.  Depending on the type of code, profile using the `blackfire curl` or `blackfire run` command.

    -  [Profiling HTTP Requests](https://blackfire.io/docs/cookbooks/profiling-http)
    -  [Profiling CLI Commands](https://blackfire.io/docs/cookbooks/profiling-cli)

## Automate performance testing

After completing the [Blackfire Integration](#dev), Blackfire runs performance tests automatically each time you push code to an active branch, merge a branch, or deploy to Staging or Production environments. This adds [no overhead](https://blackfire.io/docs/reference-guide/analyzing-call-graphs#understanding-blackfire-overhead) and has no impact on the deployment process. Also, you can activate [Blackfire's automated performance testing](#automation) using the Blackfire/New Relic integration, and other options.

By simply defining a set of key requests for Blackfire to profile— `/home`, `/checkout`, `/checkout/payment`—Blackfire can notify you if your code complies with established [code performance recommendations](https://blackfire.io/docs/reference-guide/recommendations). The following is a sample build report with recommendations:

![Blackfire build report]({{ site.baseurl }}/common/images/cloud_blackfire-recommendations.png)

### Writing your first automated tests and scenarios

You can easily write tests and scenarios for Blackfire to execute. Create a `.blackfire.yml` file and store it at your project root directory.

Try adding the following scenarios in the file:

> .blackfire.yml

```yaml
scenarios:
  Home:
    - /index.php
  Product list:
    - /index.php/women/tops-women/jackets-women.html
  Checkout:
    - /index.php/checkout
  Payment:
    - /index.php/checkout/payment
```

See the Blackfire documentation on [Writing tests](https://blackfire.io/docs/cookbooks/tests) and [Writing scenarios](https://blackfire.io/docs/cookbooks/scenarios).

### Running your tests automatically {#automation}

Once you create and deploy your `.blackfire.yml` file, you can enable Blackfire to run your tests automatically in various ways:

-  **Automated builds on Integration**—Whenever you push code on an Integration, Staging, or Production branch, Blackfire automatically runs your tests. You can receive a notification of the results in various ways, such as a commit status level when using GitHub or Bitbucket. See Blackfire notifications.
-  **Automated builds using a webhook**—Blackfire offers a very flexible way to start builds using a webhook, which can target any endpoint. See [Start building a webhook](https://blackfire.io/docs/reference-guide/builds-and-integrations#start-build-using-a-webhook).
-  **Automated builds with the Blackfire/New Relic integration**—Blackfire and New Relic are very complementary. New Relic monitors the overall traffic performance, and Blackfire profiles much deeper into the PHP code. See [What is the difference between Blackfire and New Relic](https://support.blackfire.io/questions-about-blackfire/what-is-blackfire/what-is-the-difference-between-blackfire-and-new-relic-and-other-apms). You can configure New Relic to fire Blackfire builds whenever relevant. See [New Relic](https://blackfire.io/docs/integrations/new-relic).

### Blackfire notifications

When you configure at least one way of triggering builds with Blackfire, you can be notified whenever a build report is available. Blackfire supports an integration with Slack, GitHub, BitBucket, email, and more. See [Scenario notification channels](https://blackfire.io/docs/reference-guide/notification-channels).

## Change account owner

Your Magento Customer Success Manager (CSM) must submit a request to Blackfire on your behalf to change the Blackfire.io account owner on your {{site.data.var.ece}} project. We recommend contacting your CSM directly, but you can also [submit a support ticket][1].

You must provide your CSM with the following information:

-  Magento Commerce (Cloud) project ID
-  Name and email address of the new Blackfire.io account owner

{:.bs-callout-info}
You cannot contact Blackfire directly to change the account owner. To maintain the highest security standards and mitigate potential fraud on your {{site.data.var.ece}} project, Blackfire accepts account ownership change requests from Magento CSMs only.

## Blackfire support

Blackfire provides [Enterprise support for Pro](https://support.blackfire.io/blackfire-on-magento-cloud/blackfire-enterprise-for-magento-cloud-pro) and [Premium support for Starter](https://support.blackfire.io/blackfire-on-magento-cloud/blackfire-premium-for-magento-cloud-starter).

#### To prepare log output for Blackfire support:

If you continue to experience problems, prepare your log files and contact Blackfire support.

1.  Display startup errors and save the output.

    ```bash
    magento-cloud ssh "php -d display_startup_errors=on --ri blackfire"
    ```

1.  Create a temporary log file.

     ```bash
     magento-cloud variable:create --name php:blackfire.log_file --value /tmp/blackfire.log
     ```

1.  Set the logging level.

    ```bash
    magento-cloud variable:create --name php:blackfire.log_level --value 4
    ```

1.  Start a profile/build again and collect the logs.

    ```bash
    magento-cloud ssh "cat /tmp/blackfire.log" > blackfire.log
    ```

1.  Send output and logs to support@blackfire.io.

#### To disable the Blackfire logs:

You can disable logging by cleaning the temporary log file and removing the log level:

```bash
magento-cloud variable:delete php:blackfire.log_file
```

```bash
magento-cloud variable:delete php:blackfire.log_level
```

## Blackfire resources

Blackfire provides great information to better profile and investigate the results on their documentation site:

-  [Profiling HTTP requests](https://blackfire.io/docs/cookbooks/profiling-http)
-  [Profiling CLI commands](https://blackfire.io/docs/cookbooks/profiling-cli)
-  [Profile all requests while you browse](https://blog.blackfire.io/profile-all-requests.html)
-  [Writing Tests](https://blackfire.io/docs/cookbooks/tests)
-  [Writing scenarios](https://blackfire.io/docs/cookbooks/scenarios)
-  [Reference Guide](https://blackfire.io/docs/reference-guide/index)

[1]: https://support.magento.com/hc/en-us/articles/360019088251
