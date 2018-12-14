namespace :test do
  # Run htmlproofer to check for broken links
  desc 'Build devdocs and check for broken links'
  task links: %w[build links_no_build]

  desc 'Check the existing _site for broken links on Jenkins'
  task :cicd do
    puts 'Checking links with htmlproofer...'.magenta

    HTMLProofer.check_directory('_site', options).run
  end

  desc 'Check the existing _site for broken links'
  task :links_no_build do
    begin
      # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
      # Wrapping task in a begin-rescue block prevents rake from aborting.
      # Seems to prevent printing an error count though.

      puts 'Checking links with htmlproofer...'.magenta

      # If you're running this for the first time, create the tmp/.htmlproofer directory first or the script fails.
      mkdir_p dir_name unless Dir.exist?(dir_name)

      # Write console output (stderr only) to a file.
      # Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
      report = md_report_path
      $stderr.reopen(report, 'w+')

      HTMLProofer.check_directory('_site', options).run

    # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
    # Wrapping task in a begin-rescue block prevent rake from aborting.
    # Seems to prevent printing an error count though.
    rescue StandardError
      # Show how many lines contains the Markdown report
      size_in_lines(report)
    end
  end

  desc 'Checkout to the master branch and check the links'
  task on_master: %w[to_master links]

  desc 'Report about broken links in HTML'
  task report: %w[links] do
    puts 'Converting the link check reports to HTML...'.magenta

    # Locate the output directory, iterate over markdown files inside it, and convert those files to HTML.
    Find.find(dir_name) do |path|
      # Filter .md files only
      next unless File.extname(path) == '.md'
      print "Reading the #{path} ... ".magenta
      # Change a file extension to .html
      html_file = path.ext('html')
      File.open(html_file, 'w') do |file|
        print 'converting to HTML ... '.magenta
        file.write kramdown(content(path))
        file.write css
      end
      # Open the HTML reports in browser
      print 'opening the converted report in browser ... '.magenta
      open_in_browser(html_file)
      puts 'Done!'.green
    end
  end
end
