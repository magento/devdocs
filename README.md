# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases.

To contribute, please fork the `develop` branch.

# Building this site

You can build this site locally in the following ways:

- [Installing the project dependencies locally](#build-using-jekyll) (Mac, Linux)
- [Using a Docker container](#build-using-docker) (Mac, Linux)
- [Using a Vagrant virtual machine](#build-using-vagrant) (Mac, Linux, Windows)

## Build using Jekyll

For local builds, you need to install [Bundler](http://bundler.io/), and [Ruby](https://www.ruby-lang.org) version manager.

### To prepare your MacOS environment:
1. Install Homebrew. See the [Homebrew site](https://brew.sh) for instructions.
1. Use Homebrew to install a Ruby version manager.

   ```
   $ brew install rbenv ruby-build
   ```

1. Add rbenv to bash so that it loads every time you open a terminal.

   ```
   $ echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
   ```

1. Source your `.bash_profile` file.

   ```
   $ source ~/.bash_profile
   ```

1. Install a specific version of Ruby.

   ```
   $ rbenv install 2.4.x
   $ rbenv global 2.4.x
   $ ruby -v
   ```

1. Install the Bundler gem, which helps with Ruby dependencies.

   ```
   $ gem install bundler
   ```

1. Run `bundle install` the first time you are in the `devdocs` directory or when you need to pick up theme changes.

### To build locally:
Once you have completed preparing your environment, you can build locally and review the site in your browser.

1. Run the serve command.

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
