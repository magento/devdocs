---
group: php-developer-guide
subgroup: 65_CLI
title: How to add CLI commands
menu_title: How to add CLI commands
menu_node:
menu_order: 3
---

## Overview of adding CLI commands {#cli-add-over}

Magento enables your component to add commands to our [Symfony-like command-line interface (CLI)](https://symfony.com/doc/current/components/console.html).

### About the Magento CLI

{% include install/new-cli-intro.md %}

### Prerequisites

Before you begin, make sure you understand the following:

*  All Magento command-line interface (CLI) commands rely on the Magento application and must have access to its context, dependency injections, plug-ins, and so on.
*  All CLI commands should be implemented in the scope of your [module](https://glossary.magento.com/module) and should depend on the module's status.
*  Your command can use the Object Manager and Magento dependency injection features; for example, it can use [constructor dependency injection]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#constructor-injection).
*  Your command should have an unique `name`, defined in the `configure()` method of the Command class:

   ```php
   protected function configure()
   {
      $this->setName('my:first:command');
      $this->setDescription('This is my first console command.');

      parent::configure();
   }
   ...
   ```

   or in the `di.xml` file:

   ```xml
   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
      ...
      <type name="Magento\CommandExample\Console\Command\SomeCommand">
         <arguments>
            <!-- configure the command name via constructor $name argument -->
            <argument name="name" xsi:type="string">my:first:command</argument>
         </arguments>
      </type>
      ...
   </config>
   ```

   or in the `__construct` method (declaration is similar to `di.xml`):

   ```php
   public function __construct()
   {
       parent::__construct('my:first:command');
   }
   ```

   Otherwise the [Symfony](https://github.com/symfony/console/blob/master/Application.php#L470) framework will return an `The command defined in "<Command class>" cannot have an empty name.` error.

## Add CLI commands using dependency injection {#cli-sample}

The Magento 2 sample modules provide a demonstration of many programming techniques, including adding a CLI command using [dependency injection](https://glossary.magento.com/dependency-injection). Look at the [`sample-module-command`](https://github.com/magento/magento2-samples/tree/master/sample-module-command){:target="_blank"} for an example. The module's [README.md](https://github.com/magento/magento2-samples/blob/master/sample-module-command/README.md){:target="_blank"} discusses how to install it.

Following is a summary of the process:

1. Create a Command class (the recommended location is `<your component root dir>/Console/Command`).

   See [`<Magento_Store_module_dir>/Console/Command/StoreListCommand.php`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Store/Console/Command/StoreListCommand.php) for example.

   ```php
   <?php
       namespace Magento\CommandExample\Console\Command;

       use Symfony\Component\Console\Command\Command;
       use Symfony\Component\Console\Input\InputInterface;
       use Symfony\Component\Console\Input\InputOption;
       use Symfony\Component\Console\Output\OutputInterface;

       /**
        * Class SomeCommand
        */
       class SomeCommand extends Command
       {
           const NAME = 'name';

           /**
            * @inheritDoc
            */
           protected function configure()
           {
               $this->setName('my:first:command');
               $this->setDescription('This is my first console command.');
               $this->addOption(
                   self::NAME,
                   null,
                   InputOption::VALUE_REQUIRED,
                   'Name'
               );

               parent::configure();
           }

           /**
            * Execute the command
            *
            * @param InputInterface $input
            * @param OutputInterface $output
            *
            * @return null|int
            */
           protected function execute(InputInterface $input, OutputInterface $output)
           {
               if ($name = $input->getOption(self::NAME)) {
                   $output->writeln('<info>Provided name is `' . $name . '`</info>');
               }

               $output->writeln('<info>Success Message.</info>');
               $output->writeln('<error>An error encountered.</error>');
               $output->writeln('<comment>Some Comment.</comment>');
           }
       }
   ```

   {:.bs-callout-info}
   Style the output text by using `<error>`, `<info>`, or `<comment>` tags. See [Symfony](https://symfony.com/doc/master/console/coloring.html){:target="_blank"} documentation for more information about styling.

1. Declare your Command class in `Magento\Framework\Console\CommandListInterface` and configure the command name using dependency injection (`<your component root dir>/etc/di.xml`):

   ```xml
   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
       ...
       <type name="Magento\Framework\Console\CommandListInterface">
           <arguments>
               <argument name="commands" xsi:type="array">
                   <item name="commandexample_somecommand" xsi:type="object">Magento\CommandExample\Console\Command\SomeCommand</item>
               </argument>
           </arguments>
       </type>
       ...
   </config>
   ```

1. Clean the [cache](https://glossary.magento.com/cache):

   ```bash
   bin/magento cache:clean
   ```

1. Regenerate the code:

   ```bash
   bin/magento setup:di:compile
   ```

### Result

As a result, the new command `my:first:command` that accepts a `--name` parameter is ready to use.

```bash
bin/magento my:first:command --name 'John'
```

{:.ref-header}
Related topic

[Command naming guidelines]({{ page.baseurl }}/extension-dev-guide/cli-cmds/cli-naming-guidelines.html)
