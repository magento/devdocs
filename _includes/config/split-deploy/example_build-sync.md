<div markdown="1">

To update your build system:

1.	Log in to your build system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Change to the build system's Magento root directory.
3.	Pull the changes to `app/etc/config.php` from source control.

	The Git command follows:

		git pull mconfig m2.2_deploy
4.	Compile code:

		php bin/magento setup:di:compile
5.	After code has been compiled, generate static view files:

		php bin/magento setup:static-content:deploy -f
6.	Check the changes into source control.

	The Git command follows:

		git add -A && git commit -m "Updated files on build system" && git push mconfig m2.2_deploy