---
layout: default
group: fedg
subgroup: I_TOOLS
title: Using Grunt for Magento tasks
menu_order: 1
menu_title: Using Grunt for Magento tasks
version: 2.2
github_link: frontend-dev-guide/tools/using_grunt.md
---

## {{page.menu_title}}

## What's in this topic
{:.no_toc}
The topic describes how to install and configure [Grunt JavaScript task runner](http://gruntjs.com/). 

## Overview 
You can use Grunt to automatize any tasks you need, but out of the box Magento comes with pre-configured grunt tasks for compiling LESS files. 


## Prerequisites 
Make sure that you [set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).

## Installing and configuring Grunt {#grunt_prereq}

Magento has built-in Grunt tasks configured, but there are still several steps you need to take to be able to use it:

1. Install [node.js](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager) to any location on your machine.
2. Install Grunt CLI tool globally. To do this, run the following command in a command prompt:

       npm install -g grunt-cli

3. Rename the following files in your Magento root directory:
	- `package.json.sample` to `package.json`
	- `Gruntfile.js.sample` to `Gruntfile.js`
4. Install (or refresh) the `node.js` project dependency, including Grunt, for your Magento instance. To do this, run the following commands in a command prompt:
    
       cd your_Magento_instance_directory
       npm install
       npm update

5. (Optional) If you want to use Grunt for "watching" changes automatically, without reloading pages in a browser each time, install the [LiveReload extension](http://livereload.com/extensions/) in your browser. 

## Grunt configuration file {#grunt_config}

If installed as described above, Grunt will use the default configuration files located in the `dev/tools/grunt/configs/` directory. For example, the default configuration file for working with themes is `dev/tools/grunt/configs/themes.js`.

The problem with using the default configuration files is that they can get overwritten during code updates, together with your changes in them. To avoid this, you can use custom configuration files. Ability t use custom configuration files is implemented by the file router mechanism added by Magento. 

## Using custom Grunt configuration files

There are several ways to declare a custom configuration file.

### How to declare custom config file: Option 1
To use a custom file for Grunt configuration:

1. Copy the default configuration file to the preferred location in the Magento instance directory. Do not change the file name
2. Open the `grunt-config.json` file in the Magento root and set configurations object as follows
	* key: file alias
	* value: path to your custom file

   Example:
   If your custom configuration file `themes.js` is located in the  custom `<magento_root>/dev/tools/grunt/configs/local-themes/` directory, add the following to `grunt-config.json`:


       {
           "themes": "dev/tools/grunt/configs/local-themes"
       }


### How to declare custom configuration file: Option 2

You can also use the other way to declare a custom config file:

1. In your Grunt related scripts, in the file router set the alias and path to the default configuration file. For example, for the `themes.js` configuration file this would look like following:

       filesRouter.set('themes', 'dev/tools/grunt/configs/themes');
   
   It must be added earlier, than the `get()` method with  this alias is called.

2. In the `dev/tools/grunt/configs/` directory, create a copy of the default configuration file. Change it name by adding the ".loc" suffix. For example, your copy of `themes.js` will be `themes.loc.js`.


### How to use custom configuration file

To tell Grunt to use a custom configuration file, instead the default one, add the following in your script:

1. Require file-router:

       var fileRouter = require('/files-router');

2. Call the `get(%file_alias%)` method to get the configuration file. 
   
   Example:

       var themes = fileRouter.get('themes');
