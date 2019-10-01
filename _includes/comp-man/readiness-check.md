After the readiness check completes, see one of the following:

*	[Readiness check success](#compman-readiness-success)
*	[Readiness check failure](#compman-readiness-fail)

### Readiness check success {#compman-readiness-success}

The following figure shows an example of a successful readiness check. If all tests passed, click **Next** and continue with the next step.

![If all readiness checks pass, click Next and continue with the next step]({{ site.baseurl }}/common/images/extensman_readiness-success.png)

### Readiness check failure {#compman-readiness-fail}

Messages similar to the following display if any readiness check fails.

![You must resolve all readiness check failures before you continue]({{ site.baseurl }}/common/images/cman_readiness-fail-ex.png)

In the event of failure, see one of the following sections:

*	[Updater check failure]({{ page.baseurl }}/comp-mgr/trouble/cman/updater.html)
*	[Cron script check failure]({{ page.baseurl }}/comp-mgr/trouble/cman/cron.html)
*	[Component dependency check failure]({{ page.baseurl }}/comp-mgr/trouble/cman/component-depend.html)
*	[PHP version readiness check issues]({{ page.baseurl }}/comp-mgr/trouble/cman/php-version.html)
*	[PHP settings errors]({{ page.baseurl }}/install-gde/trouble/php/tshoot_php-set.html)
*	[PHP extensions check failure]({{ page.baseurl }}/install-gde/system-requirements.html)
