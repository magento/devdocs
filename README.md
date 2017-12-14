# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases.

To contribute, please fork the `develop` branch.

# Building this site

You can build this site locally in the following ways:

- [Installing the project dependencies locally](#build-using-jekyll) (Mac, Linux)
- [Using a Docker container](#build-using-docker) (Mac, Linux)
- [Using a Vagrant virtual machine](#build-using-vagrant) (Mac, Linux, Windows)

## Build using Jekyll

For local builds, you need to install Homebrew, [Bundler](http://bundler.io/), and [Ruby](https://www.ruby-lang.org) version manager.

### To prepare your environment:
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

[This Docker container](https://github.com/magento-devdocs/docker-for-devdocs) contains everything necessary to run Jekyll3 for working with Magento DevDocs.

## Build using Vagrant

You can deploy the devdocs site locally using [this Vagrant project](https://github.com/magento-devdocs/vagrant-for-magento-devdocs).

***

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*	<a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*	<a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

*	<a href="http://devdocs.magento.com">Visit our documentation site</a>, built using [GitHub pages](https://pages.github.com/).
