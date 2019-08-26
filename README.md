# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases. For additional information, see our [Contribution Guide](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md).

## Contributors

Our goal is to provide the Magento community with comprehensive and quality technical documentation. We believe that to accomplish that goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for improving Magento documentation.

![](https://raw.githubusercontent.com/wiki/magento/magento2/images/dev_docs_contributors.png)

## Building this site

You can build this site locally in the following ways:

- [Installing the project dependencies locally](#build-using-jekyll) (Mac, Linux)
- [Using a Vagrant virtual machine](#build-using-vagrant) (Mac, Linux, Windows)
- [Build DevDocs in Windows](#build-devdocs-in-windows) (Windows 7 & 10)

## Build using Jekyll

For local builds, you need to install Ruby 2.4 or later.

To check the Ruby version on your environment, run in your terminal:

```shell
$ ruby -v
```

### Install the latest Ruby (if the Ruby version is less than 2.4)

**MacOS users**

1. Install Homebrew. See the [Homebrew site](https://brew.sh) for instructions.
1. Use Homebrew to install the latest stable version of Ruby:

   ```
   $ brew install ruby
   ```

**Unix, Windows, and other OS users**

See the [Ruby site](https://www.ruby-lang.org/en/documentation/installation) for instructions.

### Upgrade RubyGems

Upgrade [RubyGems](https://github.com/rubygems/rubygems), which helps with dependencies (gems):

```
$ gem update --system
```

Once you have completed preparing your environment, you can build locally and review the site in your browser.

### Install devdocs

Clone or download the repository. The first time you are at the `devdocs` directory, run:

```
$ bundle install
```

Once you have completed preparing your environment, you can build locally and review the site in your browser.

### To build locally:

#### Using rake

[rake](https://github.com/ruby/rake) is a native Ruby tool that helps to automate tasks.

1. Run the rake task that installs all required dependencies and starts the [Jekyll](https://jekyllrb.com/) server:

   ```
   $ rake preview
   ```

1. Press `Ctrl+C` in the serve terminal to stop the server.

If rake fails on your environment, generate the preview [using jekyll](#using-jekyll).

#### Using jekyll

1. The first time you are at the `devdocs` directory or when you need to pick up changes in `Gemfile.lock` dependencies (for example, theme changes), run:

   ```
   $ bundle install
   ```

1. To generate the local preview, run:

   ```
   $ bundle exec jekyll serve --incremental

    Configuration file: /Users/username/Github/devdocs/_config.yml
                Source: /Users/username/Github/devdocs
           Destination: /Users/username/Github/devdocs/_site
     Incremental build: enabled
          Generating...
                        done in x.x seconds.
     Auto-regeneration: enabled for '/Users/username/Github/devdocs'
        Server address: http://127.0.0.1:4000//
      Server running... press ctrl-c to stop.
   ```

1. Use the **Server address** URL `http://127.0.0.1:4000/` in a browser to preview the content.

1. Press `Ctrl+C` in the serve terminal to stop the server.

> ***TIP***
> Leave the serve terminal open and running. Every time you save changes to a file, it automatically regenerates the site so you can test the output immediately. Changing the `_config.yml` file requires a fresh build. Using the `--incremental` option limits re-builds to posts and pages that have changed.

### To minimize build time locally:

1. Create a `_config.local.yml` file at the root of the project directory and exclude all versions except the one that you want to preview.
The following example will generate Magento 2.2 documentation only.

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

1. Run the preview command:

   ```
   $ rake preview
   ```
   This command:
   * Checks your environment according to the dependencies in `Gemfile.lock`.
   * Removes the `_site/` directory, which contains previously generated preview files.
   * Generates a new preview and opens the landing page in a web browser.

If you don't have the `_config.local.yml` file at the root of your `devdocs/` directory, the rake will generate all versions of the documentation.

### To build v2.0 documentation

Magento 2.0.18 was the final 2.0.x release. After March 2018, Magento 2.0.x stopped receiving security patches, quality fixes, and documentation updates.

To ensure the quality of our public documentation for versions of Magento that are still supported and to avoid potential confusion about 2.0.x support, we removed all 2.0.x content from our public documentation websites on May 31, 2019.

To build v2.0 documentation:

> Also, you can use the GitHub interface to read the source Markdown files instead of building the site locally. Navigate to the [`2.0`](https://github.com/magento/devdocs/tree/2.0) branch and click the file you want to view.

1. Add an entry for 2.0 in the `Docfile.yml` file.

    ```yaml
    -
      directory: guides/v2.0
      repository: magento/devdocs
      branch: 2.0
      filter: false
    ```

1. Initialize the `2.0` branch in your local devdocs repository.

    ```shell
    rake init
    ```

1. Run the preview command.

    ```shell
    rake preview
    ```

### To build v2.1 documentation

Magento 2.1.18 was the final 2.1.x release. After June 2019, Magento 2.1.x stopped receiving security patches, quality fixes, and documentation updates.

To ensure the quality of our public documentation for versions of Magento that are still supported and to avoid potential confusion about 2.1.x support, we removed all 2.1.x content from our public documentation websites on July 11, 2019.

To build v2.1 documentation:

> Also, you can use the GitHub interface to read the source Markdown files instead of building the site locally. Navigate to the [`2.1`](https://github.com/magento/devdocs/tree/2.1) branch and click the file you want to view.

1. Add an entry for 2.1 in the `Docfile.yml` file.

    ```yaml
    -
      directory: guides/v2.1
      repository: magento/devdocs
      branch: 2.1
      filter: false
    ```

1. Initialize the `2.1` branch in your local devdocs repository.

    ```shell
    rake init
    ```

1. Run the preview command.

    ```shell
    rake preview
    ```

## Build using Vagrant

You can deploy the devdocs site locally using [this Vagrant project](https://github.com/magento-devdocs/vagrant-for-magento-devdocs).

***

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*    <a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*    <a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

*    <a href="https://devdocs.magento.com">Visit our documentation site</a>, built using [GitHub pages](https://pages.github.com/).

## Build DevDocs in Windows

Some of the technologies we use to develop DevDocs is not compatible with Windows, such as [Jekyll](https://jekyllrb.com/docs/windows/). For this reason, we do not support DevDocs management in Windows; however, we have documented the following procedures to build the DevDocs in a Windows environment. Any further use of this setup or troubleshooting is up to you.

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

After running the script at the command line, you can install any required extensions. Chocolately has many extensions available, similar to Homebrew for MacOS. As a best practice, only use extensions labeled as a "trusted package". You can install editors, such as Nano and Notepad++, using Chocolatey, as well.

#### Install Ruby extension

If you have Ruby installed on the workstation, then you can skip this installation.

1.  Open the **Command Prompt** using **Run as Administrator** in the shortcut menu.

1.  Install the ruby extension:

    ```cmd
    choco install ruby
    ```

1.  Verify the environment variables were added properly:

    -  In the Windows UI, open search and type `path`.
    -  In the Windows CMD console, type `echo %path%`.

>  **NOTE**
>  If you encounter problems with Ruby, or the `gem` command is not recognized, you can install the `rubyinstaller-devkit.exe` development kit located in the `c:\ProgramData\chocolatey\bin` folder.

### Install Git for Windows

Use Git for Windows to prevent interference with the existing Windows environment and to have _Git Bash_ and _Git GUI_ launch commands available on the shortcut menu.

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

1.  Change to the `devdocs` directory.

1.  Install [Bundler](https://bundler.io).

    ```bash
    gem install bundle
    ```

1.  Install gem executables required for building the site.

    ```bash
    bundle install
    ```

1.  Build site.

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
>  The `.bash_profile` file CAN be created and managed using Git Bash, which is useful for aliases and other customizations, This file is in the `users/Administrator` folder.
