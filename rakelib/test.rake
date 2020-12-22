# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

namespace :test do
  # Run html-proofer to check for broken links
  desc 'Build site, check for broken links, write report to a file'
  task links: %w[build links_no_build]

  desc 'Check the existing _site for broken EXTERNAL links'
  task :external_links do
    puts 'Testing external links'
    system 'bin/htmlproofer _site/ --external_only'
  end

  desc 'Check the existing _site for broken INTERNAL links'
  task :html do
    puts 'Checking HTML ...'.magenta

    LinkChecker.check_site
  end

  desc 'Check the existing _site for broken links and report to a separate file'
  task :links_no_build do
    # Write console output (stderr only) to a file.
    # Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
    report = LinkChecker.md_report_path
    $stderr.reopen(report, 'w+')

    Rake::Task['test:html'].invoke

    # We're expecting link validation errors, but unless we rescue from
    # StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
    # Wrapping task in a begin-rescue block prevent rake from aborting.
    # Seems to prevent printing an error count though.
  rescue StandardError => e
    # Show how many lines contains the Markdown report
    puts e.to_s.red
    puts "To see the report, open the #{report} file.".red
  end

  desc 'Report about broken links in HTML'
  task report: %w[links] do
    puts 'Converting the link check report to HTML...'.magenta
    Converter.to_html
  end

  desc 'Test Markdown style with mdl'
  task :md do
    puts 'Testing Markdown style with mdl ...'.magenta
    print 'List the rules: $ '.magenta
    sh 'bin/mdl -l --style=_checks/styles/style-rules-prod'
    puts 'Linting ...'.magenta
    output =
      `bin/mdl \
      --style=_checks/styles/style-rules-prod \
      --ignore-front-matter \
      --git-recurse \
      -- .`
    puts output.yellow
    abort 'Fix the reported issues'.red unless output.empty?
    puts 'No issues found'.green
  end
end
