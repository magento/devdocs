# frozen_string_literal: true

namespace :test do
  # Run htmlproofer to check for broken links
  desc 'Build devdocs and check for broken links'
  task links: %w[build links_no_build]

  desc 'Check the existing _site for broken links on Jenkins'
  task :cicd do
    puts 'Checking links with htmlproofer...'.magenta

    LinkChecker.check_site
  end

  desc 'Check the existing _site for broken links'
  task :links_no_build do
    begin
      # Write console output (stderr only) to a file.
      # Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
      report = LinkChecker.md_report_path
      $stderr.reopen(report, 'w+')

      puts 'Checking links with htmlproofer...'.magenta
      LinkChecker.check_site

      # We're expecting link validation errors, but unless we rescue from
      # StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
      # Wrapping task in a begin-rescue block prevent rake from aborting.
      # Seems to prevent printing an error count though.
    rescue StandardError => msg
      # Show how many lines contains the Markdown report
      puts msg.to_s.red
      puts "To see the report, open the #{report} file.".red
    end
  end

  desc 'Report about broken links in HTML'
  task report: %w[links] do
    puts 'Converting the link check report to HTML...'.magenta
    Converter.to_html
  end
end
