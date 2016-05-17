# Magento Developer Documentation

Welcome! This site contains the latest Magento developer documentation for ongoing Magento 2.0 releases.

To contribute, please fork the 2.0 branch and submit any PRs to this same branch as well.

# Build this site using Jekyll
To preview your work before submitting it to us, you can view the site locally using [Jekyll](https://jekyllrb.com){:target="_blank"}.

## Update (May 10, 2016)
The devdocs site now displays the last modified date of each topic on the right side of the page. This provides you a handy way of seeing what's new on our site.

If you're currently building this site, you must update your Gemfile to include a new Gem, [`jekyll-last-modified-at`](https://github.com/gjtorikian/jekyll-last-modified-at). Otherwise, you cannot run Jekyll locally.

To update your Gemfile, enter the following command at a command prompt:

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

To build this site using Jekyll:

```bash
# Install dependencies
$ bundle install

# Visit http://localhost:4000 in your favorite browser!
$ bin/jekyll serve
```

# Build this site using Vagrant
To simplify the process of building this site locally using Jekyll, we enable you to run a ready-made Vagrant container that has everything you need.

To use it, see the [Vagrant README](vagrant/README.md).


# Questions
If you have questions, open an issue and ask us. We're looking forward to hearing from you!

*	<a href="https://twitter.com/MagentoDevDocs" class="twitter-follow-button" data-show-count="false">Follow @MagentoDevDocs</a>

*	<a href="mailto:DL-Magento-Doc-Feedback@magento.com">E-mail us</a>

