<div markdown="1">

For technical reasons, you must enter a [Support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to add your [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html) file to Staging and Production systems. This affects all Pro projects created before and after October 23, 2017.

You can request to have us push `.magento.app.yaml`, `services.yaml`, and `routes.yaml`, set up cron jobs, and request us to enable Xdebug and PHPUnit, which assists you in troubleshooting coding issues encountered during deployment. Because of its memory requirements, we recommend you disable Xdebug before your site is live.

If you have your SSH keys added to Staging and Production environments per a ticket, you can also directly SSH into the environment to use Git CLI commands for deployments.

<div class="bs-callout bs-callout-info" id="info">
  <p>Optionally, you can replace the <code>hooks</code> section with a shell script that you can maintain without intervention. You need only to create a support ticket the first time you use the shell script.</p>
</div>
