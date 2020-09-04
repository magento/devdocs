---
group: cloud-guide
subgroup: 020_tech
title: SSH and sFTP
menu_title: SSH and sFTP
menu_order: 35
menu_node:
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

SSH, or Secure Shell, is a common protocol used to securely log into remote servers and systems. You will typically use SSH to access your environments directly to enter [CLI commands]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html) for managing your branching, creating variables, and much more. We also support [sFTP](#sftp) (Secure FTP) using your SSH public key.

To use SSH, you need to:

*  Generate your SSH public and private keys
*  Add your SSH public key to your remote server either through CLI commands or the Project Web Interface
*  Use Magento Cloud CLI or Git commands to [SSH](#ssh) to an environment

You create an SSH key pair including a public and private key:

*  The _public key_ is safe to provide for accessing a site, [SSH](#ssh), and [sFTP](#sftp).
*  The _private key_ should remain private on your workspace that you use for remote accessing environments. **Never share your private key.** Do not add it to a ticket, copy it to a chat, or attach it to emails.

## How SSH keys work {#work}

When you enter an SSH command to connect your client to the remote host, the host and your workspace begin tests back and forth to verify and allow access. These tests use the public and private keys you generated. Your entered command initiates SSH key authentication to request access to the server, indicating the public key to use. The server checks for authorized keys in its list for your public key. When found, it generates a message string and encrypts it with the public key the host has for you. Your system receives the message, decrypts it using your local private key, and merges the message with a session ID. Your system generates an MD5 of the message and session ID, sending it back to the host. If everything checks out, this passes the connection test and completes full SSH access to the host.

{% include cloud/enable-ssh.md %}

## SSH to an environment {#ssh}

You can connect using SSH in any of the following ways:

*  [SSH using Magento Cloud CLI](#magento-cli)
*  [Locate the SSH command in the Project Web Interface](#web-interface)
*  [Git SSH commands for Pro Staging and Production](#pro)

### SSH using Magento Cloud CLI {#magento-cli}

Magento Cloud CLI commands can only be used in environments with the software installed. These environments include:

*  Starter environments
*  Pro Integration environments

To SSH to an environment using the Magento Cloud command line:

1. Log in to the project:

   ```bash
   magento-cloud login
   ```

1. List the project IDs:

   ```bash
   magento-cloud project:list
   ```

1. List the environments in that project:

   ```bash
   magento-cloud environment:list -p <project ID>
   ```

1. SSH to the environment:

   ```bash
   magento-cloud ssh -p <project ID> -e <environment ID>
   ```

### Locate the SSH command in the Project Web Interface {#web-interface}

You can locate the SSH command for all Starter environments and Pro Integration environments through the Project Web Interface.

To copy the SSH command:

1. Log in to the Project Web Interface.
1. Select an environment or branch to access.
1. Click **Access Site**.

   ![Find the SSH URL using the Web Interface]({{ site.baseurl }}/common/images/cloud/cloud_project-access-starter.png)

1. Click the clipboard button to copy the full SSH command to the clipboard.
1. Enter the command in a terminal window to SSH.

Example SSH command:

```bash
ssh abcdefg123abc-smith-a12b34c--mymagento@ssh.us-2.magento.cloud
```

### SSH commands for Pro Staging and Production {#pro}

You can not use the Magento Cloud CLI to log in with SSH to the Pro Staging and Production environments, which are not added into the Project Web Interface. You can log in with SSH to those environments and use Linux/Unix commands for managing the system.

With your SSH keys added to those servers, you can use a terminal application, the SSH command, and the URL to access the server.

For the URLs, see the following:

*  Staging: `ssh <project ID>_stg@<project ID>.ent.magento.cloud`
*  Production: `ssh <project ID>@<project ID>.ent.magento.cloud`

For example, to log in to the Staging environment, use the following command: `ssh abcdefghij_stg@abcdefghij.ent.magento.cloud`. For production: `ssh abcdefghij@abcdefghij.ent.magento.cloud`

## SSH tunneling {#env-start-tunn}

{% include cloud/ssh-tunnel.md %}

## sFTP to environments {#sftp}

Typically, you want to use SSH for secure access to your environments and [migrate files]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html) with `rsync` commands. We also support accessing your environments using sFTP (secure FTP) with SSH authentication.

You need the following requirements to sFTP into cloud environments:

*  You need to use a client that supports SSH key authentication for sFTP and use your SSH public key.
*  Your public SSH key must be added to the target environment. For Starter environments and Pro Integration environments, you can add it through the Project Web Interface. For Pro Staging and Production, you must enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) with your public key attached. **Never provide your private SSH key.**

When configuring sFTP, use your SSH public key and the following information for access:

*  Username: All content before the `@` in your public SSH key.
*  Password: You do not need a password for sFTP. sFTP access uses the SSH key based authentication.
*  Host: All content after the `@` in your public SSH key.
*  Port: 22, which is the default SSH port.

To add your SSH public key information to your client:

1. Use a text editor to open your generated SSH public key. Locate and edit the file in the directory location you generated it into.
1. Copy and paste all content before the `@` in the file for the client Username.
1. Leave Password empty.
1. Copy and paste all content after the `@` in the file for the client Host.
1. For the Port, enter 22.

Depending on the client, you may need to enter additional options and setup to complete SSH authentication for sFTP. Review the documentation for your selected client.

For **Starter environments and Pro Integration environments**, you may also want to consider [adding a `mount`]({{ site.baseurl }}/cloud/project/magento-app-properties.html#mounts) for access to a specific directory. You would add the mount to your `.magento.app.yaml` file. For a list of writable directories, see [Project structure]({{ site.baseurl }}/cloud/project/project-start.html). This mount point will only work in those environments.

For **Pro Staging and Production environments**, you need to enter a [Support ticket]({{ site.baseurl }}/cloud/trouble/trouble.html) to request sFTP access in those environments. We can then create a mount point and provide access to the specific `pub/media` folder.
