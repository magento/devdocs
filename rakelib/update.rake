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
    abort 'Cannot find the "mbi/" directory' unless Dir.exist? 'mbi'
    Dir.chdir 'mbi' do
      sh 'git remote -v'
      sh 'git pull'
      sh 'git status -sb'
    end
  end

  desc 'Update Magento 1 docs'
  task :m1 do
    puts 'Updating Magento 1 docs:'.magenta
    abort 'Cannot find the "mbi/" directory' unless Dir.exist? 'guides/m1x'
    Dir.chdir 'guides/m1x' do
      sh 'git remote -v'
      sh 'git pull'
      sh 'git status -sb'
    end
  end

  desc 'Update Page Builder docs'
  task :pb do
    puts 'Updating Page Builder docs:'.magenta
    abort 'Cannot find the "page-builder" directory' unless Dir.exist? 'page-builder'
    Dir.chdir 'page-builder' do
      sh 'git remote -v'
      sh 'git pull'
      sh 'git status -sb'
    end
  end

  desc 'Update MFTF docs'
  task :mftf do
    puts 'Updating MFTF docs:'.magenta
    abort 'Cannot find the "mftf" directory' unless Dir.exist? 'mftf'
    Dir.chdir 'mftf' do
      sh 'git remote -v'
      sh 'git pull'
      sh 'git status -sb'
    end
  end

  desc 'Update Magento 2.0 docs'
  task :v2_0 do
    puts 'Updating Magento 2.0 docs:'.magenta
    abort 'Cannot find the "guides/v2.0" directory' unless Dir.exist? 'guides/v2.0'
    Dir.chdir 'guides/v2.0' do
      sh 'git remote -v'
      sh 'git checkout 2.0'
      sh 'git pull'
      sh 'git status -sb'
    end
  end

  desc 'Update devdocs master'
  task :devdocs do
    puts 'Updating devdocs:'.magenta
    sh 'git remote -v'
    sh 'git checkout master'
    sh 'git pull'
    sh 'git status -sb'
  end

  desc 'Update devodcs and subrepositories'
  task all: %w[devdocs subrepos]

  desc 'Update subrepositories only'
  task subrepos: %w[m1 mbi pb mftf v2_0]
end
