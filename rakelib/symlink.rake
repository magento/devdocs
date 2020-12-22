# frozen_string_literal: true

namespace :symlink do
  desc 'Create a 2.4 symlink from the corresponding 2.3 file. Example: rake symlink:create_from path=src/guides/v2.3/release-notes/packages-cloud.md'
  task :create_from do
    path = Pathname.new ENV['path']

    unless path.to_path.start_with? 'src/guides/v2.3'
      abort "Failed: Provide the path that starts with 'src/guides/v2.3'".red
    end
    unless path.exist?
      abort "Failed: Couldn't find the file at the provided path: #{path}\nTip: Use auto-completion to enter the path.".red
    end

    new_path = path.sub('/v2.3/', '/v2.4/')

    puts "Creating the #{new_path} symlink from the #{path} file".magenta

    if new_path.exist? || new_path.symlink?
      abort "Failed: Couldn't create a symlink, because '#{new_path}' is already there.".red
    end

    new_path.dirname.mkpath
    relative_path = path.relative_path_from new_path.dirname
    new_path.make_symlink(relative_path)

    puts "Finished: the new symlink is '#{new_path}'".green
  end

  desc 'Replace a 2.4 symlink with a copy of the 2.3 file. Example: rake symlink:replace_at path=src/guides/v2.4/release-notes/packages-cloud.md'
  task :replace_at do
    path = Pathname.new ENV['path']

    unless path.to_path.start_with? 'src/guides/v2.4'
      abort "Failed: Provide the path that starts with 'src/guides/v2.4'".red
    end

    new_path = path.sub('/v2.4/', '/v2.3/')

    puts "Replacing the #{new_path} symlink with a copy of the #{path} file".magenta

    abort "Failed: The file '#{path}' is not a symlink or missing".red unless path.exist? && path.symlink?

    abort "Failed: Couldn't find the '#{new_path}' file to copy from".red unless path.exist?

    sh "git rm #{path}"
    sh "cp #{new_path} #{path}"

    puts "Finished: replaced symlink with file at '#{path}'".green
  end
end
