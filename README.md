# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases. For additional information, see our [Contribution Guide](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md).

## Contributors

Our goal is to provide the Magento community with comprehensive and quality technical documentation. We believe that to accomplish that goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for improving Magento documentation.

![](https://raw.githubusercontent.com/wiki/magento/magento2/images/dev_docs_contributors.png)

## Building this site

This site is built by [Jekyll](https://jekyllrb.com/), which is an open-source tool developed in [Ruby](https://www.ruby-lang.org/en/).

You can build the site locally in the following ways:

-  [Installing the project dependencies locally](#build-locally) (Mac, Linux)
-  [Using Docker (docker-compose)](#docker-docker-compose) (Mac, Linux, Windows)
-  [Using a Vagrant virtual machine](https://github.com/magento-devdocs/vagrant-for-magento-devdocs) (Mac, Linux, Windows)
-  [Build DevDocs in Windows](https://github.com/magento/devdocs/wiki/Build-DevDocs-in-Windows) (Windows 7 & 10)
-  [Building older versions of the documentation](https://github.com/magento/devdocs/wiki/Build-DevDocs-with-Docker)

## Build locally

You do not need to set up a webserver to serve the site locally. Jekyll will use its own webserver for this.

### Set up Ruby

Consider to set up the Ruby version defined in [.ruby-version](.ruby-version).
Ruby version manager such as [rvm](https://www.ruby-lang.org/en/documentation/installation/#rvm) or [rbenv](https://www.ruby-lang.org/en/documentation/installation/#rbenv) can help to manage the correct version for this automatically.

See [official documentation](https://www.ruby-lang.org/en/documentation/installation/) for the most recent installation guidelines and available options.

### Install devdocs

Clone the repository. The first time you are at the `devdocs` directory, run:

```bash
bundle install
```

The website file structure contains directories pulled from multiple sources, not only this repository. The full list with mapped directories is defined in the [Docfile.yml](./Docfile.yml). It includes public and private repositories.
To pull all the mapped sources:

```bash
rake init
```

Docfile begins with public sources, because the `rake init` task fails when it attempts to clone content from private repositories without the corresponding permissions.

>**NOTE**
>By default _rake_ clones using SSH. If you want to clone with HTTPS, you can run it with the `token` variable:
>
>```bash
>token=none rake init
>```
>
> Use `none` if you do not want to use a real token. To have access to private repositories, you will need a [GitHub token](https://github.com/settings/tokens) with the relevant access permissions.

>**TIP**
>All the helper CLI commands for this project are implemented using [rake](https://github.com/ruby/rake).
Use the `rake --tasks` command for a complete list of available tasks, or filter the list using a keyword, such as `rake --tasks test`.

Once you have completed preparing your environment, you can build locally and preview the site in your browser.

### Run the website

1. Using the following rake task, verify all the required dependencies and start the embedded web server:

   ```bash
   rake preview
   ```

   You will see the commands called by the rake task and the corresponding output. Each command is typically highlighted with the magenta color:

   ```terminal
   ~/magento/devdocs (master)$ rake preview
   Install gems listed in the Gemfile: $ bundle install
   Using rake 13.0.1
   Using public_suffix 4.0.3
   <truncated>
   Bundle complete! 16 Gemfile dependencies, 70 gems now installed.
   Use `bundle info [gemname]` to see where a bundled gem is installed.
   Installed!
   Cleaning after the last site generation: $ bundle exec jekyll clean
   Configuration file: /Users/user/magento/devdocs/_config.yml
             Cleaner: Removing /Users/user/magento/devdocs/_site...
             Cleaner: Removing src/.jekyll-metadata...
             Cleaner: Removing src/.jekyll-cache...
             Cleaner: Nothing to do for .sass-cache.
   Clean!
   Enabled the default configuration: $ bundle exec jekyll serve --incremental \
                                   --open-url \
                                   --livereload \
                                   --trace \
                                   --plugins _plugins,_checks
   Configuration file: /Users/user/magento/devdocs/_config.yml
   Theme Config file: /Users/user/.rvm/gems/ruby-2.6.5/bundler/gems/devdocs-theme-e1a4ff6880d5/ _config.yml
               Source: /Users/user/magento/devdocs/src
         Destination: /Users/user/magento/devdocs/_site
   Incremental build: enabled
         Generating...
   Running ["ImageCheck", "HtmlCheck", "LinkCheck", "ScriptCheck",  "LinkChecker::DoubleSlashCheck"] on ["/Users/user/magento/devdocs/_site"] on *.html...


   Ran on 1747 files!


   HTML-Proofer finished successfully.
                       done in 220.316 seconds.
   Auto-regeneration: enabled for 'src'
   LiveReload address: http://127.0.0.1:35729
       Server address: http://127.0.0.1:4000/
     Server running... press ctrl-c to stop.
           LiveReload: Browser connected
   ```

1. The generated website launches automatically in a new tab in your browser.
1. Press `Ctrl+C` in the serve terminal to stop the server.

> ***TIP***
> Leave the serve terminal open and running. Every time you save changes to a file, it automatically regenerates the site so you can test the output immediately. Changing the `_config.yml` file or other YAML file with data or configuration requires a fresh build (stop and start the server again with `rake preview`).

### Exclude private repositories

If you do not have access to the private repositories required by Docfile, you can exclude them in `_config.local.yml` to avoid the link checking report about missing pages.

Create a `_config.local.yml` file at the root of the project directory and exclude the paths you do not want to generate:

```yaml
exclude:
  - page-builder
```

>**TIP**
>You can override any other configuration options using this file.

>**TIP**
>To ignore the `_config.local.yml` file and preview the site with default configuration, use the `preview:all` option :
>
>```bash
>rake preview:all
>```

## Building old versions

The published website contains documentation for the latest Magento releases only. For cases, when you need to view the content as it was for an earlier release, we created [tags](https://github.com/magento/devdocs/tags) in this repository. Typically, they point at the commit when the release notes were finalized and published.

To view the list of available tags:

```bash
git tag --list
```

To checkout the version (for example 2.2.0):

```bash
git checkout 2.2.0
```

Find guidelines for building the site locally in the checked out README.

>**NOTE**
>There is no guarantee the site will be built, since it can have dependencies on the external resources that are not available anymore.

***

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

-  [Visit our wiki](https://github.com/magento/devdocs/wiki)
-  <a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>
