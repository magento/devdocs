---
layout: default
group: config-guide
subgroup: 11_cron
title: Configure a custom cron job and cron group (tutorial)
menu_title: Configure a custom cron job and cron group (tutorial)
menu_order: 3
menu_node: 
version: 2.0
github_link: config-guide/cron/custom-cron-tut.md
---

## Configure a custom cron job and cron group (tutorial) {#config-cli-crontab}
This tutorial shows you step-by-step how to create a custom cron job and optionally a cron group in a sample module. You can use a module you already have or you can use a sample module from our [`magento2-samples` repository](https://github.com/magento/magento2-samples){:target="_blank"}.

Running the cron job results in a row being added to the `cron_schedule` table with the name of the cron job, `custom_cron`.

We also show you how to optionally create a cron group, which you can use to run custom cron jobs with settings other than Magento application defaults.

In this tutorial, we assume the following:

*   The Magento application is installed in `/var/www/html/magento2`
*   Your Magento database user name and password are both `magento`
*   You perform all actions as the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html)

## Step 1: Get a sample module {#cron-tut-get}
To set up a custom cron job, you need a sample module. We suggest the `magento-module-minimal` module.

If you already have a sample module, you can use it; skip this step and the next step and continue with [Step 3: Create a class to run cron](#cron-tut-class).

{% collapsible To get a sample module: %}

1.  Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}install-gde/prereq/file-sys-perms-over.html).
2.  Change to a directory that is not in your Magento application root (for example, your home directory).
2.  Clone the [`magento2-samples` repository](https://github.com/magento/magento2-samples){:target="_blank"}.

    For example,

        cd ~
        git clone git@github.com:magento/magento2-samples.git

    If the command fails with the error `Permission denied (publickey).`, you must [add your SSH public key to github.com](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account){:target="_blank"}.
4.  Make a directory to which to copy the sample code:

        mkdir -p /var/www/html/magento2/app/code/Magento/SampleMinimal
5.  Copy the sample module code:

        cp -r ~/magento2-samples/sample-module-minimal/* /var/www/html/magento2/app/code/Magento/SampleMinimal
5.  Verify the files copied properly:

        ls -al /var/www/html/magento2/app/code/Magento/SampleMinimal

    You should see the following result:

        drwxrwsr-x.   4 magento_user apache  4096 Oct 30 13:19 .
        drwxrwsr-x. 121 magento_user apache  4096 Oct 30 13:19 ..
        -rw-rw-r--.   1 magento_user apache   372 Oct 30 13:19 composer.json
        drwxrwsr-x.   2 magento_user apache  4096 Oct 30 13:19 etc
        -rw-rw-r--.   1 magento_user apache 10376 Oct 30 13:19 LICENSE_AFL.txt
        -rw-rw-r--.   1 magento_user apache 10364 Oct 30 13:19 LICENSE.txt
        -rw-rw-r--.   1 magento_user apache  1157 Oct 30 13:19 README.md
        -rw-rw-r--.   1 magento_user apache   270 Oct 30 13:19 registration.php
        drwxrwsr-x.   3 magento_user apache  4096 Oct 30 13:19 Test
6.  Update the Magento database and schema:

        php /var/www/html/magento2/bin/magento setup:upgrade

{% endcollapsible %}

## Step 2: Verify the sample module {#cron-tut-verify}
Before you continue, make sure the sample module is registered and enabled.

{% collapsible To verify the sample module: %}

1.  Log in to the Magento Admin as an administrator.
2.  Click **Stores** > **Configuration** > ADVANCED > **Advanced**.
3.  In the right pane, under Disable Modules Output, look for **Magento_SampleMinimal** as the following figure shows.

    ![Verify your sample module]({{ site.baseurl }}common/images/config_module-enabled.png){:width="900px"}

If the module doesn't display, review [step 1](#cron-tut-get) carefully. Make sure your code is in the correct directory. Spelling and case are important; if anything is different, the module won't load. Also, don't forget to run `magento setup:upgrade`.

{% endcollapsible %}

## Step 3: Create a class to run cron {#cron-tut-class}
This step shows a simple class to create a cron job. The class only writes a row to the `cron_schedule` table that confirms it's set up successfully.

{% collapsible To create a class: %}

1.  Create a directory for the class and change to that directory:

        mkdir /var/www/html/magento2/app/code/Magento/SampleMinimal/Cron && cd /var/www/html/magento2/app/code/Magento/SampleMinimal/Cron
2.  Created a file named `Test.php` in that directory with the following contents:

{% highlight php %}
<?php
namespace Magento\SampleMinimal\Cron;
use \Psr\Log\LoggerInterface;

class Test {
    protected $logger;

    public function __construct(LoggerInterface $logger) {
        $this->logger = $logger;
    }

    public function execute() {
        $this->logger->info('Cron Works');
    }

}
?>
{% endhighlight %}

{% endcollapsible %}

## Step 4: Create `crontab.xml` {#cron-tut-crontab}
`crontab.xml` sets a schedule to run your custom cron code.

{% collapsible To create crontab.xml: %}

Create `crontab.xml` as follows in the `/var/www/html/magento2/app/code/Magento/SampleMinimal/etc` directory:

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/crontab.xsd">
    <group id="default">
        <job name="custom_cronjob" instance="Magento\SampleMinimal\Cron\Test" method="execute">
            <schedule>* * * * *</schedule>
        </job>
    </group>
</config>
{% endhighlight %}

The preceding `crontab.xml` runs the `Magento/SampleMinimal/Cron/Test.php` class once per minute, resulting in a row being added to the `cron_schedule` table.

{% endcollapsible %}

## Step 5: Verify the cron job {#cron-tut-cronver}
This step shows how to verify the custom cron job successfully using a SQL query on the `cron_schedule` database table.

{% collapsible To verify cron: %}

1.  Run Magento cron jobs:

        php /var/www/html/magento2/bin/magento cron:run
2.  Run the SQL query `SELECT * from cron_schedule WHERE job_code like '%custom%'` as follows:

    1.  Enter `mysql -u magento -p`
    2.  At the `mysql>` prompt, enter `use magento;`
    3.  Enter `SELECT * from cron_schedule WHERE job_code like '%custom%';`

The result should be similar to the following:

    +-------------+-----------------------------+---------+----------+---------------------+---------------------+---------------------+---------------------+
    | schedule_id | job_code                    | status  | messages | created_at          | scheduled_at        | executed_at         | finished_at         |
    +-------------+-----------------------------+---------+----------+---------------------+---------------------+---------------------+---------------------+
    |        3715 | custom_cronjob              | success | Cron works     | 2016-10-30 10:39:04 | 2016-10-30 10:39:00 | 2016-10-30 10:40:04 | 2016-10-30 10:40:04 |


{% endcollapsible %}

## Step 6 (optional): Set up a custom cron group
This step shows how to optionally set up a custom cron group. You should set up a custom cron group you want your custom cron job to run on a different schedule than other cron jobs (typically, once per minute) or if you want several custom cron jobs to run with different settings.

{% collapsible To set up a custom cron group: %}

1.  Open `crontab.xml` in a text editor.
2.  Change `<group id="default">` to `<group id="custom_crongroup">`
3.  Exit the text editor.
4.  Create `/var/www/html/magento2/app/code/Magento/SampleMinimal/etc/crongroup.xml` with the following contents:

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/cron_groups.xsd">
    <group id="custom_crongroup">
        <schedule_generate_every>1</schedule_generate_every>
        <schedule_ahead_for>4</schedule_ahead_for>
        <schedule_lifetime>2</schedule_lifetime>
        <history_cleanup_every>10</history_cleanup_every>
        <history_success_lifetime>60</history_success_lifetime>
        <history_failure_lifetime>600</history_failure_lifetime>
    </group>
</config>
{% endhighlight %}

For a description of what the options mean, see [Reference&mdash;configure custom cron jobs and cron groups]({{ page.baseurl }}config-guide/cron/custom-cron-ref.html).

{% endcollapsible %}

## Step 7 (optional): Verify your custom cron group
This step shows how to verify your custom cron group using the Magento Admin.

{% collapsible To verify your custom cron group: %}

1.  Run Magento cron jobs for your custom group:

        php /var/www/html/magento2/bin/magento cron:run --group="custom_crongroup"
2.  Log in to the Magento Admin as an administrator.
3.  Click **Stores** > **Configuration** > **Advanced** > **System**.
4.  In the right pane, expand **Cron**.

    Your cron group displays as follows:



{% endcollapsible %}

