<div markdown="1">

You must create an SSH keypair on every machine and workspace you and your team expect to work with and access Magento Enterprise Cloud Edition and GitHub branches. The SSH keys connect you to GitHub to manage branches and push code without having to constantly supply your username and password. You can add multiple SSH keys to GitHub per each workspace you use.

The SSH keys require the following:

* Set up SSH keys as the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
* Create the keys using the email address used for the GitHub account.

For more information on SSH keys, see the following:

*	[Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/){:target="_blank"}
*	[Manually generating your SSH key in Windows](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows){:target="_blank"}
*	[ssh-keygen man page](http://linux.die.net/man/1/ssh-keygen){:target="_blank"}

### Locate an existing SSH keypair
An existing SSH keypair is typically located in the `.ssh` subdirectory of the user's home directory. This folder is hidden and may not display in the file manager or finder unless configured to display hidden files and folders.

You can quickly verify if you have SSH keys by entering commands using terminal access.

To check for SSH keys, enter the following command:

	ls ~/.ssh

If you have SSH keys, a directory listing is displayed similar to the following:

	id_rsa  id_rsa.pub  known_hosts

If you don't have SSH keys, you need to generate the keys for adding to your Magento ECE account and GitHub account. See [Create a new SSH keypair](#ssh-create-new-keypair).

If you already have SSH keys, continue to:
* [Add a public SSH key to your Magento account](#ssh-add-to-account) section
* [Add your SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

### Create a new SSH keypair {#ssh-create-new-keypair}
Use the `ssh-keygen` command to create an SSH keypair. `ssh-keygen` is typically installed on Linux systems.

To create an SSH key pair:

1. The command syntax follows, entering the email used for your GitHub account:

		ssh-keygen -t rsa -C "your_email_address@example.com"

	GitHub also uses the key length `-b 4096` in the command.
	Follow the prompts to complete the key.

2. When prompted to "Enter a file in which to save the key," press Enter to save the file to the default location. The prompt displays the location.

3. When prompted to enter a secure passphrase, enter a phrase to use like a password. Make note of this passphrase. You may be requested to enter it depending on tasks you complete using a terminal during development.

4. After creating the SSH, start the ssh-agent:

	For Mac or Linux:

		$ eval "$(ssh-agent -s)"
	For Mac, you may also want to edit the  `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

		Host *
			AddKeysToAgent yes
			UseKeychain yes
			IdentityFile ~/.ssh/id_rsa

	For Windows:

		$ eval $(ssh-agent -s)

5. Add the SSH key to the ssh-agent. If you used a different name for the key file name, replace `id_rsa` with that file name.

	For Mac or Linux:

		ssh-add -K ~/.ssh/id_rsa

	For Windows:

		ssh-add ~/.ssh/id_rsa

6. [Add your SSH key to your GitHub account.](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) The instructions include Mac, Windows, and Linux.

#### Test the SSH keys

After adding the SSH keys, test the SSH connection to GitHub:

1. In the terminal, enter the following command:

		ssh -T git@github.com

2. You may see a warning that the authenticity of the host can't be established followed by an RSA fingerprint. Enter `yes` to conitnue.

3. If successful, you should receive a success message. If you receive a permission denied error, see [Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey) troubleshooting on GitHub.


### Add a public SSH key to your Magento account {#ssh-add-to-account}
You can add SSH keys to your account in any of the following ways:

*	Using the [Magento Enterprise Cloud Edition CLI](#add-key-cli)
*	Using the [Magento Enterprise Cloud Edition Web Interface](#add-key-web)

#### Add a key using the CLI {#add-key-cli}
To add an SSH key using the CLI:

1.	If you haven't done so already, log in (or switch to) the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html) to the server on which your SSH keys are located.

2.	Log in to your project:

		magento-cloud login

3.	Add the key:

		magento-cloud ssh-key:add ~/.ssh/id_rsa.pub

#### Add a key using the Web Interface {#add-key-web}
To add an SSH key using the Web Interface:

1.	Copy your SSH public key to the clipboard.

	If you don't already have SSH keys on that machine, see [GitHub documentation](https://help.github.com/articles/generating-an-ssh-key){:target="_blank"} to create them.
2.	Using the link in your welcome e-mail, access your Magento Enterprise Cloud Edition account.

3.	Log in to your project using Bitbucket, GitHub, Google, or a user name and password.

	![Log in to a project]({{ site.baseurl }}common/images/cloud_project-login.png){:width="350px"}
4.	In the upper right corner of the page, click the **Account Settings** tab as the following figure shows.

	![Account settings]({{ site.baseurl }}common/images/cloud_acct-settings.png){:width="550px"}
5.	Expand **SSH Keys**.

6.	On the next page, click **Add a public key** as the following figure shows.

	![Add an SSH public key to your account]({{ site.baseurl }}common/images/cloud_add-public-key.png){:width="550px"}
7.	Follow the prompts on your screen to complete the task.

### Set global Git variables
Set required global Git variables on the machine to commit or push to a Git branch. These variables set Git credentials for accessing your GitHub account.

To set variables, enter the following commands on every workspace:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time){:target="_blank"}
