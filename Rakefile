# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# require 'magedocs_helper'

spec = Gem::Specification.find_by_name 'magedocs_helper'
rakefile = "#{spec.gem_dir}/lib/magedocs_helper/Rakefile"
load rakefile

desc 'Preview the devdocs locally'
task preview: %w[install clean] do
  puts 'Generating devdocs locally ... '.magenta
  if File.exist?('_config.local.yml')
    print 'enabled the additional configuration parameters from _config.local.yml: $ '.magenta
    sh 'bundle exec jekyll serve --incremental \
                                 --open-url \
                                 --livereload \
                                 --trace \
                                 --config _config.yml,_config.local.yml \
                                 --plugins _plugins,_checks'
  else
    Rake::Task['preview:all'].invoke
  end
end

desc 'Build the entire website'
task build: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  sh 'bundle exec jekyll build --verbose --trace'
  puts 'Built!'.green
end

desc 'Pull docs from external repositories'
task init: %w[multirepo:init]

desc 'Generate index for Algolia'
task index: %w[init] do
  puts 'Generating index for Algolia ...'
  sh 'bin/jekyll',
        'algolia',
          '--config=_config.yml,_config.index.yml'
end
