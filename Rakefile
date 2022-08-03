require_relative './rakelib/rake-helper'

include JekyllRake
include Proofer
include Converter

desc "Same as 'rake', 'rake preview'"
task default: %w[preview]

desc "Same as 'test:report'"
task test: %w[test:report]

desc 'Preview the devdocs locally'
task preview: %w[install clean] do
  print 'Generating devdocs locally ... '.magenta
  if File.exist?('_config.local.yml')
    print 'enabled the additional configuration parameters from _config.local.yml: $ '.magenta
    preview_local
  else
    print 'enabled the default configuration; generating the entire devdocs $ '.magenta
    preview
  end
end

desc 'Remove the generated content'
task :clean do
  print 'Cleaning after the last site generation: $ '.magenta
  jekyll 'clean'
  puts 'Clean!'.green
end

desc 'Install gems listed in the Gemfile'
task :install do
  print 'Install gems listed in the Gemfile: $ '.magenta
  sh 'bundle install'
  puts 'Installed!'.green
end

desc 'Build the entire website'
task build_and_deploy: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  # Check for uncommitted messages
  abort "\nCannot checkout. The branch contains uncommitted messages.".red unless `git status --short`.empty?

  # Back up an environmental variable
  jekyll_env = ENV['JEKYLL_ENV']
  ENV['JEKYLL_ENV'] = 'production'
  jekyll('build --verbose --baseurl=/devdocs')
  # Restore the environmental variable
  ENV['JEKYLL_ENV'] = jekyll_env

  # Remember the SHA of the built commit
  commit = `git log --pretty=format:"%h" -1`
  `git checkout gh-pages`
  `cp -R _site/ ./`
  `git add --all`
  `git commit --message "Deploy #{commit}"`
  # `git push public`

  puts 'Built!'.green
end

desc 'Checkout to the master branch'
task :to_master do
  print 'Checking out the branch to master: $ '.magenta
  sh 'git checkout master'
end
