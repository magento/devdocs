You must create an SSH key pair on every machine and workspace that requires access to {{site.data.var.ece}} project source code and environments. The SSH keys allow you to connect to GitHub to manage source code and to connect to cloud servers without having to constantly supply your username and password.

You can add multiple SSH keys for each system or workspace that you use.

The SSH keys require the following:

-  Set up SSH keys as the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
-  Create the keys using the GitHub account email address.

For more information on SSH keys, see the following:

-  [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
-  [Manually generating your SSH key in Windows](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows)
-  [ssh-keygen man page](http://linux.die.net/man/1/ssh-keygen)

## Locate an existing SSH key pair {#existing}

An existing SSH key pair is typically located in the `.ssh` subdirectory of the user home directory. This folder is hidden and may not display in the File Manager or Finder if your system is not configured to display hidden files and folders.

{:.procedure}
To check for SSH keys:

1. In the terminal, list the contents of your SSH directory.

   ```bash
   ls ~/.ssh
   ```

1. Review the output.

   If you have SSH keys, a directory listing is displayed similar to the following:

   ```terminal
   id_rsa  id_rsa.pub  known_hosts
   ```

If the directory does not exist or has no SSH key files, you must generate at least one SSH key and add it to your GitHub account. For instructions, see [Generate a new SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) in the GitHub documentation.

If you have at least one SSH key in your directory, add the key to your Magento and GitHub accounts:

-  [Add an SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) and [test the SSH connection](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/testing-your-ssh-connection).
-  [Add your public SSH key to your Magento account](#ssh-add-to-account)

## Add a public SSH key to your Magento account {#ssh-add-to-account}

You can add SSH keys to your account in any of the following ways:

-  Using the [{{site.data.var.ece}} CLI](#add-key-cli)
-  Using the [{{site.data.var.ece}} Web Interface](#add-key-web)
-  Using the [{{site.data.var.ece}} Cloud account Dashboard](#add-key-cloud)

After you add a key, you must [redeploy active Cloud environments](#update-cloud-environments-with-a-new-ssh-key) to upload the key.

### Add your SSH key using the CLI {#add-key-cli}

{:.procedure}
To add an SSH key using the [Magento Cloud CLI]({{site.baseurl}}/cloud/reference/cli-ref-topic.html):

1. Open a terminal application on your local workstation.

1. If you have not done so already, log in (or switch to) the [Magento file system owner]({{ site.baseurl }}/cloud/before/before-workspace-file-sys-owner.html) to the server on which your SSH keys are located.

1. Log in to your project:

   ```bash
   magento-cloud login
   ```

1. Add the key:

   ```bash
   magento-cloud ssh-key:add ~/.ssh/id_rsa.pub
   ```

{:.bs-callout-tip}
You can list and delete SSH keys using the Magento Cloud CLI commands `ssh-key:list` and `ssh-key:delete`.

### Add your SSH key using the Project Web Interface {#add-key-web}

You must add your SSH public key to your account. After you add the key, you must redeploy all active environments on your account to install the key.

-  Starter: Add to Master (Production) and any environments you create by branching from Master
-  Pro: Add the key to the Staging, Production, and Integration environments

{:.procedure}
To add an SSH key using the Project Web interface:

1. Get your public key.

   -  In the terminal, navigate to the `~/.ssh` directory.

   -  Copy the contents of the public key file `~/.ssh/<keyname>.pub` to the clipboard.

   If there are no SSH key files in the directory, you must create one. See [Generate a new SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) in the GitHub documentation.

1. Login and access your project through the [Project Web Interface](https://accounts.magento.cloud).

1. In your project, look for the **No SSH key** icon to the right of the command field. This icon is visible when the project does not contain an SSH key.

   ![No SSH key]({{ site.baseurl }}/common/images/cloud/cloud_ssh-key-install.png)

1. Click the icon to add the key.

   -  Copy and paste the content of your public SSH key in the **Public key** field.

      ![Add SSH key]({{ site.baseurl }}/common/images/cloud/cloud_ssh-key-add.png)

   -  Follow the prompts on your screen to complete the task.

### Add a key from the Cloud Account dashboard {#add-key-cloud}

You can add your SSH public key directly from the Cloud _Account Settings_ page.

1. Open your [Cloud account page](https://accounts.magento.cloud) and log in if required.
1. On the Cloud account dashboard, click the **Account Settings** tab.
1. Under _SSH keys_, click **Add a public key**.

## Update Cloud environments with a new SSH key

After you add an SSH key, redeploy each active Cloud environment to upload the new key.

Use the [Magento Cloud CLI]({{site.baseurl}}/cloud/reference/cli-ref-topic.html) to redeploy the environment:

```bash
magento-cloud redeploy --project <project-name> --host <host-name> --environment <environment-name>
```

## Set global Git variables

Set required global Git variables on the machine to commit or push to a Git branch. These variables set Git credentials for accessing your GitHub account.

To set variables, enter the following commands on every workspace:

```bash
git config --global user.name "<your name>"
```

```bash
git config --global user.email <your e-mail address>
```

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time)

## SSH access with MFA

{{ site.data.var.ece }} projects that have multi-factor authentication (MFA) enabled require all {{ site.data.var.ece }} accounts with SSH access to have two-factor authentication and to complete additional steps when using SSH to connect to GitHub or to project environments. See [Enable MFA for SSH access]({{ site.baseurl}}/cloud/project/project-enable-mfa-enforcement.html).
