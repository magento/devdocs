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
    puts 'Updating MBI docs'.magenta
    abort 'Cannot find the "mbi/" directory' unless Dir.exist? 'mbi'
    Dir.chdir 'mbi' do
      sh 'git remote -v'
      sh 'git pull'
    end
  end

  desc 'Update Magento 1 docs'
  task :m1 do
    puts 'Updating Magento 1 docs'.magenta
    abort 'Cannot find the "mbi/" directory' unless Dir.exist? 'guides/m1x'
    Dir.chdir 'guides/m1x' do
      sh 'git remote -v'
      sh 'git pull'
    end
  end

  desc 'Update Page Builder docs'
  task :pb do
    puts 'Updating Page Builder docs'.magenta
    abort 'Cannot find the "page-builder" directory' unless Dir.exist? 'page-builder'
    Dir.chdir 'page-builder' do
      sh 'git remote -v'
      sh 'git pull'
    end
  end

  desc 'Update devdocs master'
  task :devdocs do
    puts 'Updating devdocs'.magenta
    sh 'git remote -v'
    sh 'git checkout master'
    sh 'git pull'
    sh 'git status'
  end

  desc 'Update devodcs and subrepositories'
  task all: %w[devdocs m1 mbi pb]

  desc 'Update subrepositories only'
  task subrepos: %w[m1 mbi pb]
end
