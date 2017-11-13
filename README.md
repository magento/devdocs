# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.x releases.

To contribute, please fork the `develop` branch. 

# Building this site

You can build this site locally in the following ways:
 
- [using installed Jekyll](#build-using-jekyll) (Mac, Linux)
- [in a Docker container](#build-using-docker) (Mac, Linux)
- [on a virtual machine using Vagrant](#build-using-vagrant) (Mac, Linux, Windows)

## <a name="build-using-jekyll"> Build using Jekyll

Currently, building this site requires:

*	[Ruby v.2.4.x+](https://www.ruby-lang.org)
*   [bundler v.1.16.x+](http://bundler.io/)

To build this site locally, clone this repository and run in the _devdocs_ directory:

```bash
# Install dependencies
$ bundle install

# Run Jekyll server to generate local website
$ bin/jekyll serve --incremental
```

Visit http://localhost:4000 in your favorite browser!

## <a name="build-using-docker"> Build using Docker

[This Docker container](https://github.com/jcalcaben/docker-for-devdocs) contains everything necessary to run Jekyll3 for working with Magento DevDocs.

## <a name="build-using-vagrant"> Build using Vagrant

You can deploy the devdocs site locally using [this Vagrant project](https://github.com/dshevtsov/magento-devdocs-vagrant).

***

If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*	<a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*	<a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

*	<a href="http://devdocs.magento.com">Visit our documentation site</a>, built using [GitHub pages](https://pages.github.com/).
