# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.0 releases.

To contribute, please fork the 2.0 branch and submit any PRs to this same branch as well.

# Build this site using Jekyll

To preview your work before submitting it to us, you can view the site locally using [Jekyll][jekyll].

## Update (May 10, 2016)

The devdocs site now displays the last modified date of each topic on the right side of the page. This provides you a handy way of seeing what's new on our site.

If you're currently building this site, you must update your Gemfile to include a new gem, [`jekyll-last-modified-at`][jekyll-last-modified-at]. Otherwise, you cannot run Jekyll locally.

To update gems according to the changed Gemfile, enter the following command at a command prompt:

	bundle install

(If the command fails, try `sudo bundle install`.) 

## Mac OS X prerequisites

El Capitan and later versions of Mac OS X require additional steps prior to installation due to security improvements.

Change to the `devdocs` root directory and enter the following commands to install and run Jekyll:

```bash
# Install Bundler into /usr/local/bin directory instead of protected /usr/bin
$ sudo gem install bundler -n /usr/local/bin
```

# Build this site

To build this site using Jekyll, enter:

```bash
# Install dependencies
$ bundle install

# Build the site in the '/_site' directory.
$ bundle exec jekyll build
```

# Browse this site

You can browse this site running a Jekyll development server at http://localhost:4000/:

```bash
# Install dependencies
$ bundle install

# Run the development server at http://localhost:4000/
$ bundle exec jekyll serve
```

# Build this site using Vagrant (preferable for Windows users)

If you don't want to install Jekyll on your host, you can create a virtual software environment and build this site there using [Vagrant][]. 

To simplify the process, we enable you to run a ready-made Vagrant project that has everything you need.

To use it, see the [Vagrant README](vagrant/README.md).

# Questions

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*	[Follow @MagentoDevDocs][twitter]

*	[E-mail us][e-mail]


<!-- LINK DEFINITIONS -->

[e-mail]: mailto:DL-Magento-Doc-Feedback@magento.com
[jekyll]: https://jekyllrb.com
[jekyll-last-modified-at]: https://rubygems.org/gems/jekyll-last-modified-at
[twitter]: https://twitter.com/MagentoDevDocs
[Vagrant]: https://www.vagrantup.com/


