# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases.

To contribute, please fork the `develop` branch.

# Building this site

You can build this site locally in the following ways:

- [Installing the project dependencies locally](#build-using-jekyll) (Mac, Linux)
- [Using a Docker container](#build-using-docker) (Mac, Linux)
- [Using a Vagrant virtual machine](#build-using-vagrant) (Mac, Linux, Windows)

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

**Unix, Windows and other OS users**

See the [Ruby site](https://www.ruby-lang.org/en/documentation/installation) for instructions.

### Install Bundler

Install the [Bundler](http://bundler.io/) gem, which helps with Ruby dependencies:

```
$ gem install bundler
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
     - community/
     - swagger/
     - vagrant/
     - guides/m1x/
     - guides/v2.0/
     - guides/v2.1/
    # - guides/v2.2/
     - guides/v2.3/
    
    # Excluded in config.yml
     - scss/
     - bin/
     - node_modules/
     - vendor/
     - .*
     - Rakefile
   ```

1. Run the preview command:

   ```
   $ rake preview
   ```
   This command:
   * Checks your environment according to the dependencies in `Gemfile.lock`.
   * Removes the `_site/` directory, which contains previously generated preview files.
   * Generates a new preview and opens the landing page in a web browsers.
   
If you don't have the `_config.local.yml` file at the root of your `devdocs/` directory, the rake will generate all versions of the documentation.

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
3. Run `docker-compose up` to initialize the build process. Refer [here](https://docs.docker.com/compose/gettingstarted/#step-build-and-run-your-app-with-compose) for more details on the use of `docker-compose`.
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

*	<a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*	<a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

*	<a href="http://devdocs.magento.com">Visit our documentation site</a>, built using [GitHub pages](https://pages.github.com/).
