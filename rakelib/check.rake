# frozen_string_literal: true

namespace :check do
  desc 'Optimize images in modified files, or by path (rake image_optim path=path/to/dir/or/file).'
  task :image_optim do
    puts 'Running image optimizer...'.magenta
    path = ENV['path']
    unless path
      modified_files = `git ls-files --modified --others --exclude-standard`.split("\n")
      abort 'Didn\'t find any modified files.'.blue if modified_files.empty?
      path = modified_files.join(' ')
    end
    system "bin/image_optim --no-pngout --no-svgo --recursive #{path}"
  end

  desc 'Check Markdown syntax in modified files or in a particular file or directory by path (e.g. path=mftf)'
  task :mdl do
    puts 'Running Markdown linter ...'.magenta

    path = ENV['path']
    unless path
      modified_files = `git ls-files --modified --others --exclude-standard`.split("\n")
      modified_md_files = modified_files.select { |file| File.extname(file) == '.md' }
      abort 'Cannot find any modified .md files.'.magenta if modified_md_files.empty?
      path = modified_md_files.join(' ')
    end
    report = `mdl #{path}`
    puts report.yellow
    puts 'The rules are defined in _checks/styles/style-rules-dev'.magenta
  end
end
