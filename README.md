# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases.

To contribute, please fork the `develop` branch. 

# Building this site

You can build this site locally using Jekyll

*	Windows users _must_ build the site in a Vagrant container running on Virtual Box as discussed in more detail in the [Vagrant README](VAGRANT-README.md).

	We use symbolic links (symlinks) in the `guides/v2.1` directory to link to topics that haven't changed since the 2.0.x release. Because symlinks aren't supported by Windows, you _cannot_ use the Windows environment; you must use a Linux environment.

*	Mac and Linux users can build this site locally using Jekyll or you can use Vagrant. 

	Vagrant might be easier because the software runs in a container that isn't dependent on, and cannot conflict with, any other software installed on your computer.

## Build using Vagrant

To build the site locally using Vagrant you need only type `vagrant up` in the project directory.
For more information, see the [Vagrant README](VAGRANT-README.md).

## Requirements

Currently, building this site requires:

*	Ruby Version: >= 2.0.0

Use [bundler](http://bundler.io/) to get compatible versions of other dependencies.

## Build locally in Mac or Linux

To build this site locally:

```bash
# Install dependencies
$ bundle install

# Visit http://localhost:4000 in your favorite browser!
$ bin/jekyll serve --incremental
```

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*	<a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*	<a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

*	<a href="http://devdocs.magento.com">Visit our documentation site</a>, built on GitHub using [Jekyll](http://jekyllrb.com/).
