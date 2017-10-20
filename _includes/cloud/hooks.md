<div markdown="1">

For technical reasons, you need to enter a ticket to have your [`.magento.app.yaml` file]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html) file added to Staging and Production systems. This affects all Pro projects created before and after 10-23-2017.

Create a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to let us help you migrate the file and implement any deployment hooks you set up.

Among the settings you can request us to enable are Xdebug and PHPUnit, which assists you in troubleshooting any coding issues you might have during deployment. Because of its memory requirements, we recommend you disable Xdebug before your site is live.

If you have your SSH keys added to Staging and Production environments per a ticket, you can also directly SSH into the environment to use Git CLI commands for deployments.

<div class="bs-callout bs-callout-info" id="info">
  <p>You can optionally replace the <code>hooks</code> section with a shell script that you can maintain without intervention. You need only to create a support ticket the first time you'd like to use the shell script.</p>
</div>
