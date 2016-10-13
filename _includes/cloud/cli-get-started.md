<div markdown="1">

1.	Log in to the server on which your SSH keys are located as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to a directory to which the Magento file system owner has write access, such as the web server docroot.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	If necessary, clone a project.

		magento-cloud project:get <project ID>
4.	Change to a project directory.

	For example if your project is named Magento 2, `cd magento-2`
4.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info">
  		<p><code>magento-cloud environment:list</code> displays environment hierarchies whereas <code>git branch</code> displays does not. If you have any nested environments, use <code>magento-cloud environment:list</code>.</p>
	</div>

5.	Fetch origin branches:

		git fetch origin
6.	Check out an environment:

		magento-cloud environment:checkout <environment ID>

	To create a new environment, use `magento-cloud environment:branch <environment name> <parent environment ID>`
8.	Pull updated code:

		git pull origin <environment ID>
9.	Update project dependencies.

		composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
7.  Create a [snapshot]({{page.baseurl}}cloud/admin/admin-snap.html) of the environment.

        magento-cloud snapshot:create -e <environment ID>