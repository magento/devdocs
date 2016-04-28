#!/usr/bin/env bash

# Specify all parameters
RUBY_VERSION=2.1.7
RVM_PATH=/usr/local/rvm

# Get information on the newest versions of Ubuntu packages
sudo apt-get update

# Install Ubuntu packages
sudo apt-get install build-essential nodejs git -y

# Install Ruby
if [ ! -e $RVM_PATH ]; then
	gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
	curl -sSL https://get.rvm.io | bash -s
fi

source $RVM_PATH/scripts/rvm

rvm use --install $RUBY_VERSION --default

# Install gems
gem install github-pages -v 76
gem install pygments.rb

# Clean up
sudo apt-get autoremove -y