# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

namespace :update do
  desc 'Update the devdocs theme'
  task :theme do
    print 'Updating the devdocs theme gem dependency: $ '.magenta
    sh 'bundle update devdocs --conservative'
    print "Let's see the changes in Gemfile.lock: $ ".blue
    sh 'git diff Gemfile.lock'
  end

  desc 'Update MBI docs'
  task :mbi do
    puts 'Updating MBI docs:'.magenta
    update_dir 'src/mbi'
  end

  desc 'Update Page Builder docs'
  task :pb do
    puts 'Updating Page Builder docs:'.magenta
    update_dir 'src/page-builder'
  end

  desc 'Update Page Builder Migration docs'
  task :pbm do
    puts 'Updating Page Builder Migration docs'.magenta
    update_dir 'src/page-builder-migration'
  end

  desc 'Update MFTF docs'
  task :mftf do
    puts 'Updating MFTF docs:'.magenta
    update_dir 'src/mftf'
  end

  desc 'Update devdocs master'
  task :devdocs do
    puts 'Updating devdocs:'.magenta
    sh 'git remote -v'
    sh 'git checkout master'
    sh 'git pull'
    sh 'git status -sb'
  end

  desc 'Update devdocs and subrepositories'
  task all: %w[devdocs subrepos]

  desc 'Update subrepositories only'
  task :subrepos do
    @content_map.each do |subrepo|
      update_dir subrepo['directory']
    end
  end
end

def update_dir(dir)
  unless Dir.exist? dir
    abort "Cannot find the #{dir} directory. You can run 'rake init' to create it and rerun 'rake update:all' again.".red
  end
  Dir.chdir dir do
    puts "Updating #{dir}:".magenta

    next warn 'No branch to update' if `git status -sb`.include? 'no branch'

    sh 'git remote -v'
    sh 'git pull --no-recurse-submodules'
    sh 'git status -sb'
  end
end
