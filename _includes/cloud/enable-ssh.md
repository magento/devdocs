<div markdown="1">

You must create an SSH keypair on every machine with which you and your team expect to interact with Magento Enterprise Cloud Edition.

### Locate an existing SSH keypair
An existing SSH keypair is typically located in the `.ssh` subdirectory of the user's home directory. To see if you already have keys, enter the following command:

	ls ~/.ssh

If you don't have SSH keys, continue with the next section.

If you already have SSH keys, you can skip the next section and continue with any of the following:

*	[Create a sample Magento project from a template]({{page.baseurl}}cloud/access-acct/first-time-setup_template.html)
*	[Import an existing Magento project]({{page.baseurl}}cloud/access-acct/first-time-setup_import.html)

### Create a new SSH keypair
Use the `ssh-keygen` command to create an SSH keypair. `ssh-keygen` is typically installed on Linux systems. 

For more information:

*	[How To Set Up SSH Keys (Digitalocean)](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2){:target="_blank"}
*	[Manually generating your SSH key in Windows](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows){:target="_blank"}
*	[ssh-keygen man page](http://linux.die.net/man/1/ssh-keygen){:target="_blank"}

The command syntax follows:

	ssh-keygen -t rsa -C "your_email_address@example.com"

Follow the prompts on your screen to complete the task.

### Add a public SSH key to your account
You can add SSH keys to your account in any of the following ways:

*	Using the [Magento Enterprise Cloud Edition CLI](#add-key-cli)
*	Using the [Magento Enterprise Cloud Edition Web Interface](#add-key-web)

#### Add a key using the CLI {#add-key-cli}
To add an SSH key using the CLI:

1.	If you haven't done so already, log in to the server on which your SSH keys are located.
2.	Log in to your project:

		magento-cloud login
3.	Add the key:

		magento-cloud ssh-key:add ~/.ssh/id_rsa.pub

#### Add a key using the Web Interface {#add-key-web}
To add an SSH key using the Web Interface:

1.	Copy your SSH public key to the clipboard.

	If you don't already have SSH keys on that machine, see [GitHub documentation](https://help.github.com/articles/generating-an-ssh-key){:target="_blank"} to create them.
	2.	Using the link in your welcome e-mail, access your Magento Enterprise Cloud Edition account.
2.	Log in to your project using Bitbucket, GitHub, Google, or a user name and password.

	![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="450px"}
3.	In the upper right corner of the page, click the **Account Settings** tab as the following figure shows.

	![Account settings]({{ site.baseurl }}common/images/cloud_acct-settings.png){:width="650px"}
5.	Expand **SSH Keys**.
6.	On the next page, click **Add a public key** as the following figure shows.

	![Add an SSH public key to your account]({{ site.baseurl }}common/images/cloud_add-public-key.png){:width="650px"}
7.	Follow the prompts on your screen to complete the task.