#!/usr/bin/env bash

# Customization parameters
RUBY_VERSION=2.2
RVM_PATH=/usr/local/rvm
GEMS=bundler

# Get information on the newest versions of Ubuntu packages
sudo apt-get update

# Install Ubuntu packages
sudo apt-get install nodejs -y

# Install Ruby
if [ ! -e $RVM_PATH ]; then
	gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
	curl -sSL https://get.rvm.io | bash -s
fi

source $RVM_PATH/scripts/rvm

rvm use --install $RUBY_VERSION --default

# Install gems
gem install $GEMS

# Clean up
sudo apt-get autoremove -y

# Install gems and dependencies from Gemfile
cd /jekyll/devdocs
bundle install

# Run devdocs in Jekyll
cd /jekyll/devdocs && bundle exec jekyll serve --host=0.0.0.0