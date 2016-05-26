<div markdown="1">

1.	Log in to the server on which your SSH keys are located.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	If necessary, clone a project.

	git clone --branch master ovkr55dlacxke@git.us.magento.cloud:ovkr55dlacxke.git magento-2

		magento-cloud project:get <project ID>
4.	Change to a project directory.

	For example if your project is named Magento 2, `cd magento-2`
4.	List environments in the project:

		magento-cloud environment:list
6.	Check out an environment:

		magento-cloud environment:checkout <environment ID>

	To create a new environment, use `magento-cloud environment:branch <environment name> <parent project ID>`
7.  Create a [snapshot]({{ site.gdeurl }}cloud/admin/admin-snap.html) of the environment.

        magento-cloud snapshot:create -e <environment ID>