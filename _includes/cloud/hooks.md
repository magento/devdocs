For technical reasons, you must enter a Support ticket to add your [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) file to Staging and Production environments. This affects all Pro projects created before and after October 23, 2017.

You can request that we push `.magento.app.yaml`, `services.yaml`, and `routes.yaml`, set up cron jobs, and enable Xdebug and PHPUnit, which assists you in troubleshooting coding issues encountered during deployment. Because of the memory requirements, we recommend you disable Xdebug before your site is live.

If you added your SSH keys to the Staging and Production environments, you can also directly SSH into the environment to use the Git CLI commands for deployments.

{: .bs-callout .bs-callout-info}
Optionally, you can replace the `hooks` section with a shell script that you can maintain without intervention. You need only to create a support ticket the first time you use the shell script.
