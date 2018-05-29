<div markdown="1">

1.	Log in to your development system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2.	Enter the following commands in the order shown:

		cd <Magento root dir>
		php bin/magento app:config:dump

	For example, if Magento is installed in `/var/www/html/magento2`, enter:

		cd /var/www/html/magento2
		php bin/magento app:config:dump
3.	If you use Git, enter the following command to confirm that `app/etc/config.php` was updated:

		git status

	You should see output similar to the following:

	<pre class="no-copy"># On branch m2.2_deploy
# Changed but not updated:
#   (use "git add &lt;file>..." to update what will be committed)
#   (use "git checkout -- &lt;file>..." to discard changes in working directory)
#
#       modified:   app/etc/config.php
#</pre>

	<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
	_Do not_ submit changes to the `generated`, `pub/media`, or `pub/static` directories to source control. You'll generate those files on your build system. The production system likely has code, themes, and so on that aren't ready to use on production.
	</div>

4.	Check in your changes to `app/etc/config.php` only to source control.

	The Git command follows:

		git add app/etc/config.php && git commit -m "Updated shared configuration" && git push mconfig m2.2_deploy
