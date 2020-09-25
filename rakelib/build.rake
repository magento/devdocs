# frozen_string_literal: true

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

namespace :build do
  desc 'Build the site for production'
  task prod: %w[init] do
    print 'Building the site for production: $ '.magenta
    sh 'bin/jekyll',
       'build',
       '--config=_config.yml,_config.prod.yml',
       '--verbose',
       '--profile',
       '--trace'
  end

  desc 'Build the site for staging'
  task stage: %w[init] do
    print 'Building the site for staging: $ '.magenta
    sh 'bin/jekyll',
       'build',
       "--baseurl=/#{ENV['BUILD_NUMBER']}",
       '--config=_config.yml,_config.stage.yml',
       '--verbose',
       '--trace',
       '--profile'
  end
end
