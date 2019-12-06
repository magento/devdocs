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

  desc 'Update Magento 1 docs'
  task :m1 do
    puts 'Updating Magento 1 docs:'.magenta
    update_dir 'src/guides/m1x'
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
  task subrepos: %w[m1 mbi pb pbm mftf]
end

def update_dir(dir)
  abort "Cannot find the #{dir} directory. You can run 'rake init' to create it and rerun 'rake update:all' again.".red unless Dir.exist? dir
  Dir.chdir dir do
    sh 'git remote -v'
    sh 'git pull'
    sh 'git status -sb'
  end
end
