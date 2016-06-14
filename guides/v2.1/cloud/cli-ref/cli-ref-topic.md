---
layout: default
group: cli
subgroup: 15_cli
title: CLI command reference
menu_title: CLI command reference
menu_order: 1
menu_node: parent
version: 2.1
github_link21: cloud/cli-ref/cli-ref-topic.md
---

## CLI command reference {#cloud-cli-ref}
This command reference has two parts:

*	[Notes about the `magento` command line](#cloud-cli-ref-mag)
*	[`magento-cloud` command help](#cloud-cli-ref-help)

## Notes about the `magento` command line {#cloud-cli-ref-mag}
The Magento application provides a set of configuration commands, some of which do not function in Magento Enterprise Cloud Edition the same way as Magento Enterprise Edition. The following sections provide details:

*	[Commands you cannot use](#cloud-cli-ref-mag-not)
*	[Commands that work differently](#cloud-cli-ref-mag-diff)

### Commands you cannot use {#cloud-cli-ref-mag-not}
TBD

### Commands that work differently {#cloud-cli-ref-mag-diff}
TBD

## `magento-cloud` command help {#cloud-cli-ref-help}
Before you can use the `magento-cloud` command line, you must install it as discussed in [Set up Secure Shell (SSH) and command-line access]({{ site.gdeurl21 }}cloud/access-acct/setup-ssh.html#cloud-ssh-cli-cli-install).

### Display all commands

The `magento-cloud list` displays all available commands.

### Help for a command
You can preface or append any command with `help` to see more information on how to use that command.

	$ magento-cloud help domain:add
	Command: domain:add
	Description: Add a new domain to the project

	Usage:
	 domain:add [--project[="..."]] [--cert="..."] [--key="..."] [--chain="..."] [name]

	Arguments:
	 name                  The name of the domain

	Options:
	 --project             The project ID
	 --cert                The path to the certificate file for this domain.
	 --key                 The path to the private key file for the provided certificate.
	 --chain               The path to the certificate chain file or files for the provided certificate. (multiple values allowed)
 	 --help (-h)           Display this help message
	 --quiet (-q)          Do not output any message
	 --verbose (-v|vv|vvv) Increase the verbosity of messages
	 --version (-V)        Display this application version
	 --yes (-y)            Answer "yes" to all prompts
	 --no (-n)             Answer "no" to all prompts
	 --shell (-s)          Launch the shell


