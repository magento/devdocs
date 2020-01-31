---
group: php-developer-guide
subgroup: 65_CLI
title: Command naming guidelines
menu_title: Command naming guidelines
menu_node:
menu_order: 2
---

<!-- http://olgakopylova.espritica.com/naming-conventions-for-cli-commands-in-magento-2/
 -->

## Naming guideline overview {#cli-over}

Magento 2 introduces a new command-line interface (CLI) that enables component developers to plug in commands provided by modules.

As an [extension](https://glossary.magento.com/extension) developer, you can now create and distribute your own commands for Magento applications. But as for any implementation, it's also important to follow some general conventions to keep your commands consistent with commands from other developers. Being consistent in this way reduces the user's learning curve.

This topic discusses our recommended naming conventions.

## Command name {#cli-name}

A command *name* is a part of the command, which defines behavior of the command on the very high level. In the command it goes right after the command's name.
For example, in `bin/magento setup:upgrade`, `bin/magento` is the command's name and `setup:upgrade` is the name of the command.

If you have a Magento installation handy, enter the following to display the current list of commands:

```bash
bin/magento list
```

### Format: `group:[subject:]action`

### group

`group` represents a group of related commands. Commands in a group display in a list, which in turn makes it easier for the user to find the desired command. To find a group name for a command, imagine an subject area where it can be used. The subject area can be any of the following:

*  *Domain* area (for example, `module` for actions with modules, `info` for commands that provide some information)
*  *Workflow* area (for example, `admin` for commands that can be used by an administrator, `dev` for a developer)

### subject
`subject` is a subject for the action. The subject is optional, but it can be useful for defining sets of commands that work with the same object. If a subject is represented by a compound word, use a dash or hyphen character to separate the words.

### action
`action` is an action the command does.

### Examples

```terminal
// general commands: just a group and an action
bin/magento setup:install
bin/magento module:status

// set of commands with a subject
bin/magento setup:config:set
bin/magento setup:config:delete
bin/magento setup:db-schema:upgrade
bin/magento setup:db-data:upgrade
```

 {:.bs-callout-info}
`db-schema` and `db-data` are examples of compound words.

## Command options and arguments {#cli-args}

Options and arguments follow the command name and modify the command's behavior.

For example, in `bin/magento module:disable --force Magento_Catalog`, the `--force` *option* and the `Magento_Catalog` *argument* bypass the restrictions and specify a particular [module](https://glossary.magento.com/module) to be disabled; in this case, regardless of dependencies on other modules.

Options and arguments create different user experiences. As a developer, you can choose which type of input is better for your particular case.

### Command arguments

Arguments are values passed by the user in a specified order. The argument name is not visible to the user.

#### Format: single word or a compound word separated with a dash or hyphen character

Example:

```bash
 bin/magento dev:theme:create frontend vendor themename
```

where:

`frontend` is a subject area argument

`vendor` is a vendor argument

`themename` is a [theme](https://glossary.magento.com/theme) name argument

Use arguments when you need required data from the user. We recommend as few arguments as possible (no more then three) so the user will not confuse their order.

To make it simpler for the user, we recommend the following:

*  Run the CLI multiple times for providing multiple similar values instead of running it once with 20 values
*  Use default values for required arguments where possible.

   You can then use options instead of arguments to minimize the amount of required data the user must enter.

*  Replace arguments with options: options are named, so the user can provide them in any order. This requires additional data validation (by default, all options are optional).

### Command Options

Options are name-value pairs. The sequence of entered values doesn't matter.

An option can have a value or no value. An option that does not require a value represents a flag (`yes` or `no`).

An option can also have a one-letter shortcut as an alternative to its full name. Enable shortcuts for often-used options or if it's easy to determine what the shortcut means. Usually it makes sense to enable shortcuts for options similar to the ones used in widely-used commands (for example, `-f` for `--force`, `-v` for `--verbose`, `-h` for `--help`).

#### Format: single word or a compound word separated with a dash or hyphen character.

For example,

```bash
bin/magento dev:theme:create --parent=Magento/luma frontend arg1 arg2
```

```bash
bin/magento dev:theme:create -p=Magento/luma frontend vendor themename
```

```bash
bin/magento dev:theme:create --extend-from=Magento/luma frontend vendor themename
```

```bash
bin/magento module:disable -f Magento_Cms
```

Where:

`--parent` is an option that specifies a parent theme

`-p` is a shortcut for `--parent`

`-f` is a shortcut for a non-value option `--force`

`arg1`, `arg2`, `frontend`, `vendor` and `themename` are arguments (see [Command options and arguments](#cli-args)).

Use options for:

*  Optional data
*  Required data that has a default value

Example:

```terminal
// correct
bin/magento dev:theme:create --extend-from=Magento/luma frontend Foo bar
bin/magento module:disable --force Magento_Catalog
bin/magento module:disable -f Magento_Catalog

//incorrect
bin/magento module:disable --force=1 Magento_Catalog
bin/magento module:disable -f=yes Magento_Catalog
```

## Recommendations to avoid naming collisions {#cli-collision}

To avoid naming your command the same as another command, we recommend:

*  Looking at other extensions in the Magento Marketplace before you choose a name for your commands. By planning ahead, you can avoid naming collisions entirely.

*  Restricting command names to start with a unique name, such as a vendor name. The [usability](https://glossary.magento.com/usability) of the command depends on what you choose for a vendor name.

   For example, `myname:dev:theme:create` is not obvious and is hard to remember.

   The vendor name doesn't have to start the command name; it could be in the middle. This way, related commands are grouped together.

   Examples:

   ```terminal
   dev:myname:theme:create
   dev:myname:theme:delete
   ```

{:.ref-header}
Related topic

[How to add CLI commands]({{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-howto.html)
