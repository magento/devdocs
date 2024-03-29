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

  desc "Find and replace links from 'tmp/migrated-from-to.csv' in files at the provided directory.
  Arguments:
  - 'dir' is an absolute path to the directory to process the links. Required.
  - 'exclude' is an fnmatch pattern for paths to exclude from processing. For fnmatch format, see https://ruby-doc.org/core-2.7.5/Dir.html#method-c-glob. Optional.
  Examples:
    rake update:migrated_links_at dir=path/to/codebase.
    rake update:migrated_links_at dir=path/to/codebase exclude='**/Test/**'"
  task :migrated_links_at do
    # check if 'tmp/migrated-from-to.csv' exists
    links_file = 'tmp/migrated-from-to.csv'
    unless File.exist? links_file
      abort 'FAILED. Missing "tmp/migrated-from-to.csv" file. Make sure that your _config.local.yml file contains the "migrated_log: generate_file" parameter.'
    end
    # check if the provided directory ('dir') exist
    dir = File.expand_path(ENV['dir'])
    unless dir
      abort 'FAILED. Missing argument "dir". Provide a directory to check the links. Example: rake update:migrated_links_at dir=path/to/codebase'
    end
    unless Dir.exist?(dir)
      abort "FAILED. Check the path provided through the 'dir' argument. The provide directory does not exist: #{dir}"
    end
    exclude = ENV['exclude']
    # parse 'tmp/migrated-from-to.csv'
    links = CSV.read links_file
    # for each file in dir, find and replace all links
    puts 'Work in progress...'.magenta
    dir_glob_pattern = File.join(dir, '**', '*')
    full_file_list = Dir[dir_glob_pattern]
    # exclude paths by pattern from the file list if the 'exclude' argument was added
    if exclude
      exclude_glob_pattern = File.join(dir, exclude)
      excluded_file_list = Dir[exclude_glob_pattern]
      final_file_list = full_file_list - excluded_file_list
    else
      final_file_list = full_file_list
    end

    final_file_list.each do |file|
      # ignore directory paths
      next if File.directory? file
      # ignore symlinks
      next if File.symlink? file
      # ignore empty files
      next if File.zero? file
      # ignore binary files
      next if RDoc::Parser.binary? file

      # read the file
      content = File.read file
      # iterate through the array of links
      links.each do |redirect|
        # replace first link from the array with the second links
        content.gsub!(redirect[0], redirect[1])
      end
      # write the update content back to the file
      File.write(file, content)
    end
    puts 'Done!'.green
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
