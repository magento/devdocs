You must create an SSH key pair on every machine and workspace you and your team expect to work with and access {{site.data.var.ece}} and GitHub branches. The SSH keys connect you to GitHub to manage branches and push code without having to constantly supply your username and password. You can add multiple SSH keys to GitHub per each workspace you use.

The SSH keys require the following:

* Set up SSH keys as the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
* Create the keys using the email address used for the GitHub account.

For more information on SSH keys, see the following:

*	[Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
*	[Manually generating your SSH key in Windows](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows)
*	[ssh-keygen man page](http://linux.die.net/man/1/ssh-keygen)

## Locate an existing SSH key pair {#existing}

An existing SSH key pair is typically located in the `.ssh` subdirectory of the user's home directory. This folder is hidden and may not display in the file manager or finder unless configured to display hidden files and folders.

You can quickly verify if you have SSH keys by entering commands using terminal access.

To check for SSH keys, enter the following command:

	ls ~/.ssh

If you have SSH keys, a directory listing is displayed similar to the following:

	id_rsa  id_rsa.pub  known_hosts

If you do not have SSH keys, you need to generate the keys for adding to your Magento ECE account and GitHub account. See [Create a new SSH key pair](#ssh-create-new-key-pair).

If you already have SSH keys, continue to:

* [Add a public SSH key to your Magento account](#ssh-add-to-account) section
* [Add your SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

## Create a new SSH key pair {#ssh-create-new-key-pair}

Use the `ssh-keygen` command to create an SSH key pair. `ssh-keygen` is typically installed on Linux systems.

{:.procedure}
To create an SSH key pair:

1.  The command syntax follows, entering the email used for your GitHub account:

    ```bash
    ssh-keygen -t rsa
    ```

    GitHub also uses the key length `-b 4096` in the command. Follow the prompts to complete the key.

1.  When prompted to "Enter a file in which to save the key," press **Enter** to save the file to the default location. The prompt displays the location.

1.  When prompted to enter a secure passphrase, enter a phrase to use like a password. Make note of this passphrase. You may be requested to enter it depending on tasks you complete using a terminal during development.

1.  After creating the SSH key pair, start the ssh-agent:

    For Mac or Linux:

    ```bash
    eval "$(ssh-agent -s)"
    ```

    For Mac, you can edit the  `~/.ssh/config` file to automatically load keys into the ssh-agent and store passphrases in your keychain.

    ```
    Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_rsa
    ```

    For Windows:

    ```shell
    eval $(ssh-agent -s)
    ```

1.  Add the SSH key to the ssh-agent. If you used a different name for the key file name, replace `id_rsa` with that file name.

    For Mac:

    ```bash
    ssh-add -K ~/.ssh/id_rsa
    ```

    For Windows or Linux:

    ```shell
    ssh-add ~/.ssh/id_rsa
    ```

1.  [Add your SSH key to your GitHub account.](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) The instructions include Mac, Windows, and Linux.

### Test the SSH keys {#test}

After adding the SSH keys, test the SSH connection to GitHub:

1. In the terminal, enter the following command:

		ssh -T git@github.com

2. You may see a warning that the authenticity of the host can't be established followed by an RSA fingerprint. Enter `yes` to continue.

3. If successful, you should receive a success message. If you receive a permission denied error, see [Error: Permission denied (publickey)](https://help.github.com/articles/error-permission-denied-publickey) troubleshooting on GitHub.

## Add a public SSH key to your Magento account {#ssh-add-to-account}

You can add SSH keys to your account in any of the following ways:

*	Using the [{{site.data.var.ece}} CLI](#add-key-cli)
*	Using the [{{site.data.var.ece}} Web Interface](#add-key-web)

### Add a key using the CLI {#add-key-cli}

To add an SSH key using the CLI:

1.	Open a terminal application on your local.
2.	If you haven't done so already, log in (or switch to) the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) to the server on which your SSH keys are located.

3.	Log in to your project:

		magento-cloud login

3.	Add the key:

		magento-cloud ssh-key:add ~/.ssh/id_rsa.pub

#### Add a key using the Project Web Interface {#add-key-web}

You will select and add your SSH public key to each environment in your account.

* Starter: Add to Master (Production) and any environments you create by branching from Master
* Pro: Add to Master Integration environment. After your Staging and Production environments are provisioned, you can add the SSH keys to those environments.

To add an SSH key using the Project Web Interface:

1.	Copy your SSH public key to the clipboard.

	If you do not already have SSH keys on that machine, see [GitHub documentation](https://help.github.com/articles/generating-an-ssh-key) to create them.
2.	Login and access your project through the [Project Web Interface](https://accounts.magento.cloud).
3.	In your selected branch, an icon displays if you do not have an SSH key added.

	![No SSH key]({{ site.baseurl }}/common/images/cloud_ssh-key-install.png)
4.	Copy and paste the content of your public SSH key in the screen.

	![Add SSH key]({{ site.baseurl }}/common/images/cloud_ssh-key-add.png)
5.	Follow the prompts on your screen to complete the task.

## Set global Git variables

Set required global Git variables on the machine to commit or push to a Git branch. These variables set Git credentials for accessing your GitHub account.

To set variables, enter the following commands on every workspace:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time)
