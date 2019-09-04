# frozen_string_literal: true

namespace :test do
  # Run html-proofer to check for broken links
  desc 'Build devdocs and check for broken links'
  task links: %w[build links_no_build]

  desc 'Check the entire _site for broken links and invalid HTML'
  task :html do
    puts 'Checking links with html-proofer...'.magenta

    LinkChecker.check_site
  end

  desc 'Check the existing _site for broken links'
  task :links_no_build do
    begin
      # Write console output (stderr only) to a file.
      # Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
      report = LinkChecker.md_report_path
      $stderr.reopen(report, 'w+')

      puts 'Checking links with html-proofer...'.magenta
      LinkChecker.check_site

      # We're expecting link validation errors, but unless we rescue from
      # StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
      # Wrapping task in a begin-rescue block prevent rake from aborting.
      # Seems to prevent printing an error count though.
    rescue StandardError => e
      # Show how many lines contains the Markdown report
      puts e.to_s.red
      puts "To see the report, open the #{report} file.".red
    end
  end

  desc 'Report about broken links in HTML'
  task report: %w[links] do
    puts 'Converting the link check report to HTML...'.magenta
    Converter.to_html
  end

  desc 'Test Markdown style with mdl'
  task :md do
    puts 'Testing Markdown style with mdl ...'.magenta
    output = `bin/mdl --style=_checks/styles/style-rules-prod --ignore-front-matter --git-recurse -- .`
    puts output.yellow
    abort "The Markdown linter has found #{output.lines.count} issues".red unless output.empty?
    puts 'No issues found'.magenta
  end

  task style: %w[md]
  task cicd: %w[html]
end
