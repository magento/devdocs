namespace :lint do
  desc 'Check Markdown syntax in a file or directory by path (e.g. path=mftf)'
  task :md do
    path = ENV['path']
    unless path
      staged_files = `git ls-files -m`.split("\n")
      staged_md_files = staged_files.select { |file| File.extname(file) == '.md' }
      abort 'Cannot find any modified .md files.' if staged_md_files.empty?
      path = staged_md_files.join(' ')
    end
    # require 'pry'
    # binding.pry
    report = `mdl #{path}`
    puts report.yellow
    puts 'The rules are defined in _checks/md_style'
  end
end
