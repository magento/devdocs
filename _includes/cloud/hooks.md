<div markdown="1">

For technical reasons, Magento Enterprise Cloud Edition staging and production systems don't implement any deployment hooks automatically. These hooks, defined in the `hooks` section of your [`.magento.app.yaml` file]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-hooks), must be manually migrated to staging or production.

Create a [support ticket]({{ page.baseurl }}cloud/get-help.html) to let us help you implement any deployment hooks you set up.

Among the settings you can request us to enable are Xdebug and PHPUnit, which assists you in troubleshooting any coding issues you might have during deployment. Because of its memory requirements, we recommend you disable Xdebug before your site is live.

<div class="bs-callout bs-callout-info" id="info">
  <p>You can optionally replace the <code>hooks</code> section with a shell script that you can maintain without intervention. You need only to create a support ticket the first time you'd like to use the shell script.</p>
</div>
