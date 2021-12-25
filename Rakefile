require_relative './rakelib/rake-helper.rb'

include JekyllRake
include Proofer
include Converter

desc "Same as 'rake', 'rake preview'"
task default: %w[preview]

desc "Same as 'test:report'"
task test: %w[test:report]

desc "Preview the devdocs locally"
task preview: %w[install clean] do
  print "Generating devdocs locally ... ".magenta
  if File.exists?('_config.local.yml')
    print "enabled the additional configuration parameters from _config.local.yml: $ ".magenta
    preview_local
  else
    print "enabled the default configuration; generating the entire devdocs $ ".magenta
    preview
  end
end

desc "Remove the generated content"
task :clean do
  print "Cleaning after the last site generation: $ ".magenta
  jekyll 'clean'
  puts "Clean!".green
end

desc "Install gems listed in the Gemfile"
task :install do
  print "Install gems listed in the Gemfile: $ ".magenta
  sh 'bundle install'
  puts "Installed!".green
end

desc "Build the entire website"
task build: %w[clean] do
  print 'Building the site with Jekyll: $ '.magenta
  # Back up an environmental variable
  jekyll_env = ENV['JEKYLL_ENV']
  ENV['JEKYLL_ENV'] = 'production'
  jekyll('build --verbose')
  # Restore the environmental variable
  ENV['JEKYLL_ENV'] = jekyll_env
  puts 'Built!'.green
end

desc "Checkout to the master branch"
task :to_master do
  print 'Checking out the branch to master: $ '.magenta
  sh 'git checkout master'
end
