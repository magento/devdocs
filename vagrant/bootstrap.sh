#!/usr/bin/env bash

# Customization parameters
RUBY_VERSION=2.2
RVM_PATH=/usr/local/rvm
GEMS=bundler

# Get information on the newest versions of Ubuntu packages
sudo apt-get update

# Install Ubuntu packages
sudo apt-get install nodejs git -y

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

# Clone the 'devdocs' repo from GitHub in a shared directory.
cd /vagrant/
git clone -b develop https://github.com/magento/devdocs.git

# Note: To avoid entering your user name and password every time you push, you can either 
# use the SSH protocol 

# Install gems and dependencies from Gemfile
cd /vagrant/devdocs
bundle install

# Run Jekyll to generate the devdocs site (optional; you can do it anytime)
# To run Jekyll later, first enter `vagrant up && vagrant ssh`

# bin/jekyll serve --host=0.0.0.0

