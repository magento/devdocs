# frozen_string_literal: true

# This Jekyll hook runs Markdown linter (https://github.com/markdownlint/markdownlint)
# on .md files that git tracks as 'modified' ('git ls-files -m').
# '_checks/styles/style-rules-dev' sets a style (https://github.com/markdownlint/markdownlint/blob/master/docs/creating_styles.md)
# that is a set of rules to be applied when linting (https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md).
# '.mdlrc' sets linting configuration (https://github.com/markdownlint/markdownlint/blob/master/docs/configuration.md).
#
# The plugin runs in serving mode only.
#
Jekyll::Hooks.register :site, :post_write do |site|
  next unless site.config['serving']

  staged_files = `git ls-files -m`.split("\n")
  staged_md_files = staged_files.select { |file| File.extname(file) == '.md' }
  next if staged_md_files.empty?

  puts 'Checking Markdown syntax...'.blue
  staged_md_files_as_a_string = staged_md_files.join(' ')
  report = `bin/mdl #{staged_md_files_as_a_string}`
  puts report.yellow
  puts 'The style is defined in _checks/styles/style-rules-dev'.yellow
end
