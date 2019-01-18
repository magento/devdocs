# Magento Developer Documentation

Welcome! This repository contains the latest Magento developer documentation for ongoing Magento 2 releases. To learn more about contributing to Magento 2 code, see our [Contribution Guide](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md).

## Contributing to the documentation

Our goal is to provide the Magento community with comprehensive and quality technical documentation. We believe that to accomplish our goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for helping to improve the Magento documentation.

![DevDocs contributors](https://raw.githubusercontent.com/wiki/magento/magento2/images/dev_docs_contributors.png)

## Building this site

The website uses [GitHub Pages](https://pages.github.com/) tools for building with the [Jekyll](https://jekyllrb.com/) static website generator, which requires a Ruby environment.

After verifying your [Ruby environment](#ruby-environment), continue with one of the following methods:

-  [Build DevDocs using Jekyll](#local-build-using-jekyll)
-  [Minimize local build time](#minimize-local-build-time)
-  [Build DevDocs using a Vagrant virtual machine](#build-using-vagrant)
-  [Build DevDocs in Windows](#build-devdocs-in-windows) (Not supported)

If you have questions, open an issue and ask us. We look forward to hearing from you!

-  [Follow @MagentoDevDocs](https://twitter.com/MagentoDevDocs)
-  [E-mail us](mailto:DL-Magento-Doc-Feedback@magento.com)
-  [Visit our documentation site](https://devdocs.magento.com).

### Ruby environment

Jekyll requires a Ruby environment. The Mac and Ubuntu operating systems provide Ruby, but you can choose to upgrade the version or use a version manager to control version scope.

-  [Ruby](https://www.ruby-lang.org/en/documentation/installation)—Supported versions: 2.3, 2.4, 2.5
-  [RubyGems](https://rubygems.org/pages/download)—packaging system for Ruby
-  [rbenv](https://github.com/rbenv/rbenv)—Optional, but useful for managing one or more Ruby versions concurrently

#### To check your Ruby version:

```shell
$ ruby -v
ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-darwin18]
```

## Local build using Jekyll

You must clone the repository and install the dependencies before building the site. You only need to perform the following steps once:

1.  Clone the repository.

    ```shell
    $ git clone git@github.com:magento/devdocs.git
    ```

1.  Change to the `devdocs/` directory.

1.  Install the project dependencies using Bundler.

    ```shell
    $ bundle install
    ```

    > **Note**  
    >[Bundler](https://bundler.io/), installed by RubyGems, is a tool that manages installation dependencies.

#### To build the site using a Jekyll command:

The following Jekyll command builds the HTML and opens the site in a browser.

```shell
$ bundle exec jekyll serve --open-url
```

```
Configuration file: /Users/user/github/devdocs/_config.yml
            Source: /Users/user/github/devdocs
       Destination: /Users/user/github/devdocs/_site
 Incremental build: enabled
      Generating... 
                    done in 43.806 seconds.
 Auto-regeneration: enabled for '/Users/user/github/devdocs'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

The site server URL http://127.0.0.1:4000/ opens in a browser so you can preview the content.

Press **Ctrl**+**C** in the serve terminal to stop the server.

> **TIP**  
>When you use the `--incremental` option, you can leave the serve terminal open and running. Every time you save changes to a file, it automatically regenerates the site so you can test the output immediately. If you make changes to a YML configuration file, you have to stop the server and run the command again.

#### To build the site using rake shortcuts:

We use the Ruby tool [rake](https://github.com/ruby/rake) to automate build tasks. For example, you can use a rake task, such as `preview`, to check required dependencies and start the Jekyll server:

```shell
$ rake preview
Install gems listed in the Gemfile: $ bundle install
Using concurrent-ruby 1.1.3
Using i18n 0.9.5
Using minitest 5.11.3
Using thread_safe 0.3.6
Using tzinfo 1.2.5
Using activesupport 4.2.10

<truncated output>

                    done in 14.865 seconds.
Auto-regeneration: enabled for '/Users/user/Projects/repos/magento/devdocs'
LiveReload address: http://127.0.0.1:35729
    Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
        LiveReload: Browser connected
```

This command:

-  Checks your environment based on the dependencies listed in the `Gemfile.lock` file.
-  Removes the `_site/` directory, which contains previously generated preview files.
-  Generates a new preview and opens the landing page in a web browser.
-  Checks the `_site/` directory for broken hyperlinks.

Press **Ctrl**+**C** in the serve terminal to stop the server.

### Minimize local build time

Generating the entire website can take up to 15 minutes, depending on your environment. If you want to preview only selected directories, you can exclude all directories that you do not need using the `_config.local.yml` configuration file.

1.  Create a `_config.local.yml` file at the root of the project directory and exclude all versions except the one that you want to preview.

    The following example generates the Magento 2.2 version of the documentation:

    ```yaml
    exclude:
      - /community/
      - /swagger/
      - /vagrant/
      - /guides/m1x/
      - /guides/v2.0/
      - /guides/v2.1/
    # - /guides/v2.2/
      - /guides/v2.3/

    # Excluded in config.yml
      - /scss/
      - /bin/
      - /node_modules/
      - /vendor/
      - /.*
      - /Rakefile
    ```

1.  Preview the site using the `rake preview` command.

If you do not have the `_config.local.yml` file at the root of your `devdocs/` directory, the rake tool generates all versions of the documentation.

To disable link checking, add `check_links: false` to the `_config.local.yml` file.

To ignore the `_config.local.yml` file, use the `rake preview:all` command.

## Build using Vagrant

Optionally, you can build the DevDocs site using [Vagrant](https://github.com/magento-devdocs/vagrant-for-magento-devdocs).

## Build DevDocs in Windows

Some of the technologies we use to develop DevDocs are not compatible with Windows, such as [Jekyll](https://jekyllrb.com/docs/windows/). For this reason, we do not support DevDocs management in Windows; however, we have documented the following procedures to build the DevDocs in a Windows environment. Any further use of this setup or troubleshooting is up to you. 

Download software:

-  [Git for Windows](https://gitforwindows.org)
-  [Chocolatey](https://chocolatey.org/install)

### Install Chocolatey

Only Administrators can use Chocolatey features. You can use the Administrator account, or you can use the "Run as Administrator" function on the shortcut menu.

1.  Open the **Command Prompt** using **Run as Administrator** in the shortcut menu.

1.  [Install Chocolatey](https://chocolatey.org/install).

    ```cmd
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```

1.  Verify Chocolatey was added to the environment variables:

    -  In the Windows UI, open search and type `path`.
    -  In the Windows CMD console, type `echo %path%`.
    
    You should see `C:\ProgramData\chocolatey\bin` in the path.

1.  Close and reopen the command prompt before using `choco` commands.

After running the script at the command line, you can install any required extensions. Chocolatey has many extensions available, similar to Homebrew for MacOS. As a best practice, only use extensions labeled as a "trusted package". You can install editors, such as Nano and Notepad++, using Chocolatey, as well.

#### Install Ruby extension

If you have Ruby installed on the workstation, then you can skip this section.

1.  Open the **Command Prompt** using **Run as Administrator** in the shortcut menu.

1.  Install the ruby extension:

    ```cmd
    choco install ruby
    ```

1.  Verify the environment variables were added properly:

    -  In the Windows UI, open search and type `path`.
    -  In the Windows CMD console, type `echo %path%`.

>  **NOTE**  
>  If you encounter problems with Ruby, or the `gem` command is not recognized, you can install the `rubyinstaller-devkit.exe` development kit located in the `C:\ProgramData\chocolatey\bin` folder.

### Install Git for Windows

Use [Git for Windows](https://gitforwindows.org/) to prevent interference with the existing Windows environment and to have _Git Bash_ and _Git GUI_ launch commands available on the shortcut menu.

Open the Git Setup file downloaded from the Git for Windows site and use the following settings during installation wizard:

-  select **Use Git from Git Bash only**
-  select **Checkout as-is, commit Unix-style line endings**
-  select your preferred editor (can use Nano, Notepad++, or VIM)
-  select **Enable symbolic links**

Although you can install Git using Chocolatey, we chose to install _Git for Windows_ independently for more control of the installation settings.

#### Set up SSH key

1.  Open Git Bash. The **Git Bash** executable is on the shortcut menu.

1.  Create a working directory for your Git repositories and change to the new directory.

    ```bash
    mkdir <directory-name>
    ```

1.  Follow the [Generating a new SSH](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) instructions.

### Clone and build the DevDocs repository

You may have to close and reopen the Git Bash application after the Choco installations.

1.  Open Git Bash. The **Git Bash** executable is on the shortcut menu.

1.  Change to the directory you created for Git repositories and clone the DevDocs repository.

    ```bash
    git clone git@github.com:magento/devdocs.git
    ```

1.  Change to the `devdocs/` directory.

1.  Install [Bundler](https://bundler.io).

    ```bash
    gem install bundle
    ```

1.  Install the project dependencies using Bundler.

    ```bash
    bundle install
    ```

1.  Build the site.

    ```bash
    bundle exec jekyll serve
    ```

    ```terminal
    Configuration file: C:/Users/Administrator/mage/devdocs/_config.yml
                Source: C:/Users/Administrator/mage/devdocs
           Destination: C:/Users/Administrator/mage/devdocs/_site
     Incremental build: disabled. Enable with --incremental
          Generating...
                        done in 643.551 seconds.
     Auto-regeneration: enabled for 'C:/Users/Administrator/mage/devdocs'
        Server address: http://127.0.0.1:4000/
      Server running... press ctrl-c to stop.
    ```

>  **NOTE**  
>  The `.bash_profile` file CAN be created and managed using Git Bash, which is useful for aliases and other customizations. This file is in the `users/Administrator` folder.
