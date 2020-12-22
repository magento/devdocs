---
group: cloud-guide
title: Magento Cloud CLI reference
functional_areas:
  - Cloud
---

The Magento Cloud CLI is the utility for managing Magento Cloud projects and environments, which implements many features of the Project Web Interface and more. This utility provides an advanced management interface for developers and system administrators to perform routines and automation tasks. You can install and use this utility for all {{site.data.var.ece}} Starter and Pro Integration environments.

{:.procedure}
To install the Magento Cloud CLI:

1. On your local workstation, change to a directory where you plan to clone the cloud projects and where the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner) has _write_ access.

1. Install the `magento-cloud` CLI.

   ```bash
   curl -sS https://accounts.magento.cloud/cli/installer | php
   ```

1. Add `magento-cloud` CLI to the bash profile.

   ```bash
   export PATH=$PATH:$HOME/.magento-cloud/bin
   ```

   Consult operating system documentation for details.

1. Reload the updated bash profile.

   ```bash
   . ~/.bash_profile
   ```

1. To initiate the CLI, call `magento-cloud` and enter your Cloud account credentials when prompted.

   ```bash
   magento-cloud
   ```

   ```terminal
   Welcome to Magento Cloud!
   Please log in using your Magento Cloud account.
   Your email address or username:
   ```

1. Verify the `magento-cloud` command is in your path. The following example lists the available commands.

   ```bash
   magento-cloud list
   ```

## Common commands

Magento designed these commands to manage Cloud Integration environments. It is a best practice to run the Magento Cloud CLI from a project directory, because you can omit the `-p <project ID>` parameter.

The following list of commonly used Magento Cloud CLI commands includes required options only. You can use the `--help` option with any command to see more information.

Command | Description
------- | -----------
`magento-cloud login` | Log in to the project.
`magento-cloud list` | List the available commands for CLI tool.
`magento-cloud environment:list` | List the environments in the current project.
`magento-cloud environment:checkout <environment-ID>` | Check out an existing environment.
`magento-cloud environment:merge -e <environment-ID>` | Merge changes in this environment with its parent.
`magento-cloud variables` | List variables in this environment.
`magento-cloud ssh` | Use SSH to connect to the remote environment.

## Environment commands

The environment _name_ is different from the environment _ID_ only if you use spaces or capital letters in the environment name. An environment ID consists of all lowercase letters, numbers, and allowed symbols. Capital letters in an environment name are converted to lowercase in the ID; spaces in an environment name are converted to dashes.

An environment name _cannot_ include characters reserved for your Linux shell or for regular expressions. Forbidden characters include curly braces (`{ }`), parentheses, asterisk (`*`), angle brackets (`< >`), ampersand (`&`), percent (`%`), and other characters.

The `magento-cloud environment:list` command displays environment hierarchies, whereas `git branch` does not. If you have any nested environments, use the following:

```bash
magento-cloud environment:list
```

### Common environment commands

Action | Command
------ | --------
Checkout environment | `magento-cloud environment:checkout <ENVIRONMENT_ID>`
Merge change to parent environment | `magento-cloud environment:merge -p <PROJECT_ID> -e <ENVIRONMENT_ID>`
Synchronize with parent environment | `magento-cloud environment:synchronize -p <PROJECT_ID> -e <ENVIRONMENT_ID> {code|data}`
List environment variables | `magento-cloud variable:list`
Set a variable value | `magento-cloud variable:set <VARIABLE_NAME> <VARIABLE_VALUE>`

### Redeploy the environment

Trigger a redeployment without using a push. You must verify and confirm the environment to redeploy. Do not use redeploy if there is a build in a pending state.

```bash
magento-cloud environment:redeploy
```

Sample response:

```terminal
Are you sure you want to redeploy the environment <environment_name>? [Y/n]
```

## Git commands

You may notice that some of these commands are similar to Git commands. The `magento-cloud` commands directly connect to the Magento Git-based Cloud project with additional features. For example, when you push a Git branch, it is not activated until you access GitHub. The Magento CLI command includes activation.

To create a new branch, use the magento-cloud command so the branch is activated.

```bash
magento-cloud environment:branch <NAME> <PARENT_BRANCH>
```

Pushing an empty commit forces a redeployment. For example:

```bash
git commit --allow-empty -m "redeploy" && git push <BRANCH_NAME>
```

Some actions, such as adding a user, do not result in deployment.

## Command help

```bash
magento-cloud help
Command: help
Description: Displays help for a command

Usage:
 help [--format FORMAT] [--raw] [--] [<command_name>]

Arguments:
  command               The command to execute
  command_name          The command name [default: "help"]

Options:
      --format=FORMAT   The output format (txt, xml, json, or md) [default: "txt"]
      --raw             To output raw command help
  -h, --help            Display this help message
  -q, --quiet           Do not output any message
  -V, --version         Display this application version
  -y, --yes             Answer "yes" to all prompts; disable interaction
  -n, --no              Answer "no" to all prompts
  -v|vv|vvv, --verbose  Increase the verbosity of messages

Help:
 The help command displays help for a given command:

   php /Users/username/.magento-cloud/bin/magento-cloud help list

 You can also output the help in other formats by using the --format option:

   php /Users/username/.magento-cloud/bin/magento-cloud help --format=xml list

 To display the list of available commands, please use the list command.
```

## Update Magento Cloud CLI

The Magento Cloud CLI checks for available updates when you log in, but you can check for updates using the `self:update` command. If there is an update available, follow the instructions to update the CLI.

If your Magento Cloud CLI is up to date, you see the following response:

```bash
magento-cloud update
```

```terminal
Checking for Magento Cloud CLI updates (current version: X.XX.X)
No updates found
```
{:.no-copy}
