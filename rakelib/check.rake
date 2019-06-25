namespace :check do
  desc 'Optimize images in modified files, or by path (rake image_optim path=path/to/dir/or/file).'
  task :image_optim do
    puts 'Running image optimizer...'.magenta
    path = ENV['path']
    unless path
      staged_files = `git ls-files --modified --others --exclude-standard`.split("\n")
      # staged_md_files = staged_files.select { |file| File.extname(file) == '.md' }
      abort 'Didn\'t find any modified files.'.blue if staged_files.empty?
      path = staged_files.join(' ')
    end
    system "bin/image_optim --no-pngout --no-svgo --recursive #{path}"
  end
end
