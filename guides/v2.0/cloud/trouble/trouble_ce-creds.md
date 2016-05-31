---
layout: default
group: cloud
subgroup: 50_trouble
title: Incorrect credentials
menu_title: Incorrect credentials
menu_order: 5
menu_node: 
github_link: cloud/trouble/trouble_ce-creds.md
---

## Incorrect credentials
This topic discusses how to resolve issues with incorrect credentials in your `auth.json`. You might have entered Magento Community Edition (CE) credentials or shared keys for Magento Enterprise Edition (EE).

### Symptom
The most common symptom of incorrect credentials is a deployment failure with an authentication error similar to the following:

	The 'https://repo.magento.com/archives/magento/magento-cloud-configuration/magento-magento-cloud-configuration-1.0.3.0.zip' URL could not be accessed: HTTP/1.1 403 Forbidden  

To see the error log:

1.	[Log in to your project]({{ site.gdeurl }}cloud/project/project-webint-basic.html#project-login).
2.	Click **failure** to view the log as the following figure shows.

	![View the log for a failed deployment]({{ site.baseurl }}common/images/cloud_deploy-failure-creds.png)

### Solution
To resolve this issue, you must clone the project locally and update `auth.json` with the correct Magento EE [authorization keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html). Make sure you're using your own keys, and *not* [shared account keys](http://docs.magento.com/m2/ce/user_guide/magento/magento-account-share.html){:target="_blank"}.

#### Get started
To get started:

1.	Log in to the server on which your SSH keys are located.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	If necessary, clone a project.

		magento-cloud project:get <project ID>
4.	Change to a project directory.

	For example if your project is named Magento 2, `cd magento-2`

#### Update `auth.json` and redeploy the environment
To resolve the issue with credentials:

1.	If you haven't done so already, change to the project root directory.
2.	Open `auth.json` in a text editor.
3.	Change the value of `username` to your Magento EE public key.
4.	Change the value of `password` to your Magento EE private key.
5.	Save your changes to `auth.json` and exit the text editor.
6.	Update project dependencies:

		composer update
6.	Add, commit, and push your changes:

		git add -A
		git commit -m "<message>"
		git push origin master
7.	Wait for the project to deploy.

	A snippet of messages for a successful deployment follows:

{% collapsible Click to show/hide content %}

{% highlight xml %}
 Building application 'mymagento' (runtime type: php:7.0, tree: e8450f9)
      Generating runtime configuration.

      Moving the application to the output directory
      Prewarming composer cache.
        Pre-downloaded 3 packages referenced in `composer.lock`

      Found a `composer.json`, installing dependencies.

      Executing post-build hook...
        [2016-05-31 14:36:58] Start build.
        [2016-05-31 14:36:58] Patching Magento.
        [2016-05-31 14:36:58] Command:/usr/bin/php /app/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/../../../patch.php
        [2016-05-31 14:36:59] Status:0
        [2016-05-31 14:36:59] Output:array (

... more ...

[2016-05-31 14:36:59] Command:cd bin/; /usr/bin/php ./magento setup:di:compile
        [2016-05-31 14:38:27] Status:0
        [2016-05-31 14:38:27] Output:array (
          0 => 'Compilation was started.',
          1 => '%message% 0/7 [>---------------------------]   0% 1 sec 42.0 MiB%message% 0/7 [>---------------------------]   0% 1 sec 42.0 MiBProxies code generation... 0/7 [>---------------------------]   0% 1 sec 42.0 MiB',
          2 => 'Proxies code generation... 1/7 [====>-----------------------]  14% 1 sec 48.0 MiB',
          3 => 'Repositories code generation... 1/7 [====>-----------------------]  14% 1 sec 48.0 MiB',
          4 => 'Repositories code generation... 2/7 [========>-------------------]  28% 12 secs 60.0 MiB',
          5 => 'Service data attributes generation... 2/7 [========>-------------------]  28% 12 secs 60.0 MiB',
          6 => 'Service data attributes generation... 3/7 [============>---------------]  42% 12 secs 60.0 MiB',
          7 => 'Application code generator... 3/7 [============>---------------]  42% 12 secs 60.0 MiB',
          8 => 'Application code generator... 4/7 [================>-----------]  57% 34 secs 174.0 MiB',
          9 => 'Interceptors generation... 4/7 [================>-----------]  57% 34 secs 174.0 MiB',
          10 => 'Interceptors generation... 5/7 [====================>-------]  71% 53 secs 180.0 MiB',
          11 => 'Area configuration aggregation... 5/7 [====================>-------]  71% 53 secs 180.0 MiB',
          12 => 'Area configuration aggregation... 6/7 [========================>---]  85% 2 mins 180.0 MiB',
          13 => 'Interception cache generation... 6/7 [========================>---]  85% 2 mins 180.0 MiB',
          14 => 'Interception cache generation... 7/7 [============================] 100% 2 mins 180.0 MiB',
          15 => 'Generated code and dependency injection configuration successfully.',
        )
        [2016-05-31 14:38:27] Clearing temporary directory.
        [2016-05-31 14:38:27] Command:rm -rf ../init/*
        [2016-05-31 14:38:27] Status:0
        [2016-05-31 14:38:27] Output:array (

... more ...

      Executing pre-flight checks...

      Compressing application.
      Beaming package to its final destination.

    Creating environment aqf7hrijhl52o-master.
      Environment configuration:
        mymagento (type: php:7.0, size: S, disk: 2048)
        mysql (type: mysql:10.0, size: S, disk: 2048)
        redis (type: redis:3.0, size: S)
        solr (type: solr:4.10, size: S, disk: 1024)

      Environment routes:
        http://master-aqf7hrijhl52o.us.magentosite.cloud/ is served by application `mymagento`
        https://master-aqf7hrijhl52o.us.magentosite.cloud/ is served by application `mymagento`


To aqf7hrijhl52o@git.us.magento.cloud:aqf7hrijhl52o.git
   34afd91..98c2166  master -> master
{% endhighlight %}

{% endcollapsible %}

#### Verify the deployment
To verify the deployment was successful, enter one of the URLs displayed under `Environment routes:` in a web browser.

Append `/admin` to the URL and log in to the Magento Admin as follows:

*	Username: `admin`
*	Password: `admin12`

<div class="bs-callout bs-callout-warning">
	<p>For security reasons, we strongly recommend you change your Magento Admin URI and administrator password. For step-by-step details, see <a href="{{ site.gdeurl }}cloud/env/environment-tutorial-set-mage-vars.html">Tutorial&mdash;Set Magento environment variables</a>.</p>
</div>

#### Related topics
*	[Manage your projects]({{ site.gdeurl }}cloud/project/projects.html)
*	[Manage your environments]({{ site.gdeurl }}cloud/env/environments.html)
*	[How tos and tutorials]({{ site.gdeurl }}cloud/howto/how-to.html)
