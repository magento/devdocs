# frozen_string_literal: true

namespace :multirepo do
  desc 'Create a file tree for devdocs website and get all required content'
  task :init do
    ssh = 'git@github.com:'
    https = 'https://${token}@github.com/'
    protocol =
      if ENV['token']
        https
      else
        ssh
      end

    content_map = DocConfig.new.content_map
    content_map.each do |subrepo|
      sh "./scripts/docs-from-code.sh #{subrepo['directory']} #{protocol}#{subrepo['repository']}.git #{subrepo['branch']} #{subrepo['filter']}"
    end
  end

  desc 'Add multirepo docs providing shell arguments "dir=<directory where to init a repo>", "repo=<SSH URL>", "branch=<branch to checkout>", "filter=<true/false>" ("true" by default) to 1) filter content if "true" or 2) add content from the entire repository if "false".'
  task :add do
    dir = ENV['dir']
    repo = ENV['repo']
    branch = ENV['branch']
    filter = ENV['filter']

    abort 'Provide a directory name for the multirepo docs. Example: dir=mftf' unless dir
    abort "'#{dir}' directory already exists" if Dir.exist? dir
    abort 'Provide a repository cloning URL (SSH).Example: repo=git@github.com:magento-devdocs/magento2-functional-testing-framework.git' unless repo
    abort 'Provide a branch name for the multirepo docs. Example: branch=master' unless branch

    sh "./scripts/docs-from-code.sh #{dir} #{repo} #{branch} #{filter}"
  end
end
