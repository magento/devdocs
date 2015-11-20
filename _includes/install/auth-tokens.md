<div markdown="1">

<h2 id="auth-overview">Overview of Magento Connect authentication</h2>
The `repo.magento.com` repository, where Magento 2 and third-party component Composer packages are stored, requires authentication. To provide secure authentication, we enable to to generate a pair 32-character *authentication tokens* you can use to access the repository.

You get your credentials by logging in to <a href="http://www.magentocommerce.com/magento-connect" target="_blank">Magento Connect</a> with a user name and password, then going to **My Account** > **Developers** > **Secure Keys**. There, you can generate, regenerate, or delete your authentication tokens to use to:

*	<a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Download the Magento software using Composer</a>
*	Install, update, or upgrade third-party components; and upgrade the Magento software using the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade</a> utilities.

<h2 id="auth-get">Get your authentication tokens</h2>
To get your authentication tokens:

1.	If you haven't done so already, create an account on <a href="http://www.magentocommerce.com/magento-connect">Magento Connect</a>.

	(It's the same as an account on `magento.com`.)

	*	Click **My Account** in the upper right corner of the page.
	*	In the New Customer section, click **Register**.

		If you already have an account, make sure you know your user name and password, then continue with the next step.

2.	In the left pane, expand **Developers** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/connect_keys1.png">

3.	Click **Developers** > **Secure Keys**.
4.	You have the following options in the right pane:

	*	New key: In the **Name** field, enter a name to identify the keys and click **Generate new**.
	*	Save an existing key: Click **Save**.
	*	Generate existing keys: Click **Regenerte**. You can do this if you suspect your keys have been compromised, to stop sharing them with someone else, or anytime you want to replace keys with that name.
	*	Disable keys: Click **Disable**. You can do this if you want to suspend use of your keys temporarily.
	*	Delete keys: Click **Delete**.

5.	Come back to this page anytime to view or change your keys.

6.	You can now do any of the following:

	*	<a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html">Download the Magento software using Composer</a>
	*	Install, update, or upgrade third-party components; and upgrade the Magento software using the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade</a> utilities.