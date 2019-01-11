# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2 releases. For additional information, see our [Contribution Guide](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md).

## Contributors

Our goal is to provide the Magento community with comprehensive and quality technical documentation. We believe that to accomplish that goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for improving Magento documentation.

![DevDocs contributors](https://raw.githubusercontent.com/wiki/magento/magento2/images/dev_docs_contributors.png)

## Building this site

The website uses [GitHub Pages](https://pages.github.com/) tools for building with the [Jekyll](https://jekyllrb.com/) static website generator on top of it.
The toolkit requires a Ruby environment to be run.

There are several options available depending on what type and level of virtualization you want to use:

- [Installing the project dependencies locally](#build-using-jekyll)
- [Using a Docker container](#build-using-docker) (Mac, Linux)
- [Using a Vagrant virtual machine](#build-using-vagrant)

## Installing the project dependencies locally

### Prerequisites

#### Ruby

Recommended version: 2.5.

Supported versions: 2.3, 2.4, 2.5.

macOS and Ubuntu usually provide Ruby by default.

To check Ruby version on your environment, run in your terminal:

```shell
$ ruby -v
ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-darwin18]
```

See the [Ruby website](https://www.ruby-lang.org/en/documentation/installation) for installation instructions.

*Windows installation using package manager*:  See [Build DevDocs in Windows](#build-devdocs-in-windows)

#### Packaging system

RubyGems is a packaging system in Ruby.

Update the RubyGems:

```shell
gem update --system
```

### Installation

1. Clone the repository.
2. Install the project dependencies using Bundler:

```shell
$ bundle install
<truncated output>
Using parallel 1.12.1
Using yell 2.0.7
Using html-proofer 3.9.3
Using progressbar 1.10.0
Using verbal_expressions 0.1.5
Using jekyll-algolia 1.4.8
Using launchy 2.4.3
Bundle complete! 5 Gemfile dependencies, 99 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

>**Note**
>[Bundler](https://bundler.io/) is a tool to manage installation dependencies.
>It is installed as a part of the [packaging system update](#packaging-system).

Once you have completed preparing your environment, you can build locally and review the site in your browser.

### Build locally

#### Build using rake

[rake](https://github.com/ruby/rake) is a Ruby tool that helps to automate tasks.

Run the rake task that checks required dependencies and starts the Jekyll server:

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

- Checks your environment according to the dependencies in `Gemfile.lock`.
- Removes the `_site/` directory, which contains previously generated preview files.
- Generates a new preview and opens the landing page in a web browsers.
- Checks the `_site/` directory for broken hyperlinks.

To stop the server, press `Ctrl+C` in the serve terminal.

If rake fails on your environment, generate the preview [using the jekyll directly](#using-jekyll).

#### Build using jekyll

To generate a local preview, run:

```shell
$ bundle exec jekyll serve --incremental --livereload

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

Use the **Server address** URL `http://127.0.0.1:4000/` in a browser to preview the content.

To stop the server, press `Ctrl+C` in the serve terminal.

> ***TIP***
> Leave the serve terminal open and running. Every time you save changes to a file, it automatically regenerates the site so you can test the output immediately. Using the `--incremental` option limits re-generation to pages that have changed. `--livereload` refreshes the changed HTML page in your browser after each cycle of re-generation.

### How to minimize build time locally

Generation of the entire website can take up to 15 minutes depending on your environment.
If you want to preview only selected directories, you can exclude all directories that you don't need using additional configuration file `_config.local.yml`, which is tracked by `rake preview` task by default.

1. Create a `_config.local.yml` file at the root of the project directory and exclude all versions except the one that you want to preview.
   The following example will generate Magento 2.2 documentation and the documentation located at the root of the project such as `mftf`.

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

2. Run [`rake preview`](#using-rake)

If you don't have the `_config.local.yml` file at the root of your `devdocs/` directory, the rake will generate all versions of the documentation.

To disable link checking, add `check_links: false` to `_config.local.yml`.

To ignore the `_config.local.yml`, run `rake preview:all`.

## Build using Docker

This repository comes with the necessary configuration files for building a local copy of the Magento DevDocs with [Docker](https://docs.docker.com/), using [Docker Compose](https://docs.docker.com/compose/overview/).

To use Docker and Docker Compose, first download and install Docker for the appropriate operating system, and then install Docker Compose to execute the `docker-compose.yml` configuration file.

### Docker for Mac

- Refer [here](https://docs.docker.com/docker-for-mac/install/) for the official installation instructions.

### Docker for Windows

- Refer [here](https://docs.docker.com/docker-for-windows/install/) for the official installation instructions.

### Docker Compose

- Refer [here](https://docs.docker.com/compose/install/) for the official installation instructions.

### Execution Steps

1. Using [git](https://git-scm.com/), [clone](https://help.github.com/articles/cloning-a-repository/) this repository.
2. Navigate to the resulting directory.
3. Run `docker-compose up` to initialize the build process. Refer [here](https://docs.docker.com/compose/gettingstarted/#step-4-build-and-run-your-app-with-compose) for more details on the use of `docker-compose`.
4. Visit `http://localhost:4000/` in a web browser, and you should be presented with a local copy of the Magento DevDocs. The configuration for the local port (`4000` by default) is found in the [docker-compose.yml](https://github.com/magento/devdocs/blob/develop/docker-compose.yml) file. If another port is desired, please refer [here](https://docs.docker.com/compose/compose-file/compose-file-v2/#ports) for further details regarding Docker Compose port mapping.

### Addressing Problems With Docker Build

1. Verify that the Docker engine is installed for the appropriate operating system.
2. Verify that Docker Compose is installed.
3. Verify that this repository has been cloned.
4. Verify that the correct Docker Compose command(s) have been used in the same directory as the `docker-compose.yml` file.
5. If there are still problems, please open an [Issue](https://help.github.com/articles/creating-an-issue/) on this repository.

## Build using Vagrant

You can deploy the devdocs site locally using [this Vagrant project](https://github.com/magento-devdocs/vagrant-for-magento-devdocs).

***

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

- [Follow @MagentoDevDocs](https://twitter.com/MagentoDevDocs)
- [E-mail us](mailto:DL-Magento-Doc-Feedback@magento.com)
- [Visit our documentation site](https://devdocs.magento.com), built using [GitHub pages](https://pages.github.com/).

## Build on Windows

Windows does not provide the out-of-the-box Ruby, so we recommend to use a virtual environment with Docker or Vagrant described above.
But if none of the ways work for you, consider using the following tools.

- [Git for Windows](https://git-scm.com/download)
- [Chocolatey](https://chocolatey.org)

### Install Chocolatey

1. Open the **Command Prompt** using **Run as Administrator** in the shortcut menu.

2. [Install Chocolatey](https://chocolatey.org/install).

3. Verify Chocolatey was added to the environment variables. In the Windows CMD console, type `echo %path%`.
   You should see `C:\ProgramData\chocolatey\bin` in the path.

4. Close and reopen the command prompt before using `choco` commands.

### Install Ruby package

1. Open the **Command Prompt** using **Run as Administrator** in the shortcut menu.

1. Install the ruby package:

   ```shell
   > choco install ruby --version 2.5.3.101
   ```

    Reopen the Command prompt to enable the installation.

> **NOTE**  
> If you encounter problems with Ruby, or the `gem` command is not recognized, you can install the `rubyinstaller-devkit.exe` development kit located in the `c:\ProgramData\chocolatey\bin` folder.

1. Install the Ruby development kit

   ```shell
   ridk install
   1 - MSYS2 base installation
   2 - MSYS2 system update (optional)
   3 - MSYS2 and MINGW development toolchain

   Which components shall be installed? If unsure press ENTER [1,2,3]
   ```

   Press *Enter*. Same for similar requests until the installation is complete.

### Clone and build the DevDocs repository

Refer to [Installing the project dependencies locally](#installing-the-project-dependencies-locally).

> **NOTE**  
> You can create and manage the `.bash_profile` file using Git Bash, which is useful for aliases and customization. This file is in the `users/Administrator` directory.
