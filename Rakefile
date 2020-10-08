# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# This file contains tasks with no namespace.
# All namespaced tasks are defined in the '../rakelib' directory.
# Each namespace is defined in a separate file.
# For example, 'preview:all' is defined in the '../rakelib/preview.rake' file.
# To see the list of tasks to use, run 'rake -T'.

require 'html-proofer'
require 'kramdown'
require 'launchy'
require 'colorator'

# Require helper methods from the 'lib' directory
Dir.glob('lib/**/*.rb') { |file| require_relative(file) }

# Instantiate Docfile data for usage in tasks
@content_map = DocConfig.new.content_map

desc "Same as 'rake', 'rake preview'"
task default: %w[preview]

desc "Same as 'test:report'"
task test: %w[test:md test:report]

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

task :clean do
  print 'Cleaning after the last site generation: $ '.magenta
  sh 'bundle exec jekyll clean'
  puts 'Clean!'.green
end

task :install do
  print 'Install gems listed in the Gemfile: $ '.magenta
  sh 'bundle install'
  puts 'Installed!'.green
end

desc 'Build the entire website'
task build: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  sh 'bundle exec jekyll build --verbose --trace'
  puts 'Built!'.green
end

desc 'Pull docs from external repositories'
task init: %w[multirepo:init]

desc 'Run checks (image optimization and Markdown style linting).'
task check: %w[check:image_optim check:mdl]

desc 'Generate data for a news digest. Default timeframe is a week since today. For other period, use "since" argument: since="jul 4"'
task :whatsnew do
  since = ENV['since']
  current_file = 'src/_data/whats-new.yml'
  generated_file = 'tmp/whats-new.yml'
  current_data = YAML.load_file current_file
  last_update = current_data['updated']

  print 'Generating data for the What\'s New digest: $ '.magenta

  # Generate tmp/whats-new.yml
  if since.nil? || since.empty?
    sh 'bin/whatsup_github', 'since', last_update
  elsif since.is_a? String
    sh 'bin/whatsup_github', 'since', since
  else
    abort 'The "since" argument must be a string. Example: "jul 4"'
  end

  # Merge generated tmp/whats-new.yml with existing src/_data/whats-new.yml
  generated_data = YAML.load_file generated_file
  current_data['updated'] = generated_data['updated']
  current_data['entries'].prepend(generated_data['entries']).flatten!
  current_data['entries'].uniq! { |entry| entry['link'] }

  puts "Writing updates to #{current_file}"
  File.write current_file, current_data.to_yaml
end

desc 'Generate index for Algolia'
task index: %w[init] do
  puts 'Generating index for Algolia ...'
  sh 'bin/jekyll',
     'algolia',
     '--config=_config.yml,_config.index.yml'
end

desc 'Convert HTML text to kramdown in your terminal'
task :convert do
  puts 'Paste HTML text followed by a new line and press Control-D.'.magenta
  result = `bin/kramdown --input=html --output=kramdown`
  puts 'Converted text:'.magenta
  puts result.bold
end
