<div markdown="1">

<h2 id="auth-overview">Overview of Magento Connect authentication</h2>
The `repo.magento.com` repository, where Magento 2 and third-party component Composer packages are stored, requires authentication. To provide secure authentication, we enable you to generate a pair 32-character *authentication tokens* you can use to access the repository.

You get your credentials by logging in to <a href="http://www.magentocommerce.com/magento-connect" target="_blank">Magento Connect</a> with a user name and password, then going to **My Account** > **Developers** > **Secure Keys**. There, you can generate, regenerate, or delete your authentication tokens to use to:

*	<a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Download the Magento software using Composer</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">Clone the Magento 2 GitHub (contributing developers only)</a>
*	Install, update, or upgrade third-party components; and upgrade the Magento software using the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade</a> utilities.

<h2 id="auth-get">Get your authentication keys</h2>
{% include install/auth-tokens-get.md %}