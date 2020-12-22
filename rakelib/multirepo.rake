# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

namespace :multirepo do
  desc 'Create a file tree for devdocs website and get all required content'
  task :init do
    protocol = ENV['token'] ? "https://#{ENV['token']}@github.com/" : 'git@github.com:'
    @content_map.each do |subrepo|
      repo_url = protocol + subrepo['repository'] + '.git'
      add_subrepo(subrepo['directory'], repo_url, subrepo['branch'], subrepo['filter'])
    end
  end

  desc 'Reinitialize subrepositories. CAUTION: This will remove directories and associated git repositories listed in Docfile'
  task reinit: %w[clean] do
    @content_map.each do |subrepo|
      if subrepo['directory']
        puts "Removing #{subrepo['directory']}".yellow
        sh 'rm', '-rf', subrepo['directory']
      end
    end
    Rake::Task['init'].invoke
  end

  desc 'Add multirepo docs providing shell arguments "dir=<directory where to init a repo>", "repo=<SSH URL>", "branch=<branch to checkout>", "filter=<true/false>" ("true" by default) to 1) filter content if "true" or 2) add content from the entire repository if "false".'
  task :add do
    dir = ENV['dir']
    repo = ENV['repo']
    branch = ENV['branch']
    filter = ENV['filter']

    abort 'Provide a directory name for the multirepo docs. Example: dir=src/mftf' unless dir
    abort "'#{dir}' directory already exists" if Dir.exist? dir
    unless repo
      abort 'Provide a repository cloning URL (SSH).Example: repo=git@github.com:magento-devdocs/magento2-functional-testing-framework.git'
    end
    abort 'Provide a branch name for the multirepo docs. Example: branch=master' unless branch

    add_subrepo(dir, repo, branch, filter)
  end
end

def add_subrepo(dir, repo, branch, filter)
  filter_text = filter ? 'some' : 'all'
  puts "Checking out #{filter_text} files from #{repo} (#{branch} branch) to the #{dir} directory ...".magenta
  sh('./scripts/docs-from-code.sh', dir, repo, branch, filter.to_s) do |ok, _res|
    abort "Couldn't checkout files for the #{repo} project".red unless ok
  end
end
