require 'html-proofer'
require 'kramdown'
require 'find'
require 'launchy'
require 'colorator'

task default: %w[preview]

task test: %w[test:links:report]

###   Preview

desc "Preview the devdocs locally"
task preview: %w[install cleanup] do

    print "Generating devdocs locally ... ".magenta
    if File.exists?('_config.local.yml')
      print "enabled the additional configuration parameters from _config.local.yml: $ ".magenta
      preview_local
    else
      print "enabled the default configuration; generating the entire devdocs $ ".magenta
      preview
    end
end

namespace :preview do
    task all: %w[install cleanup] do
        puts "Generating the entire devdocs locally ... ".magenta
        preview
    end
end

desc "Remove the generated content"
task :cleanup do
    print "Cleaning after the last site generation: $ ".magenta
    jekyll 'clean'
    puts "Clean!".green
end

desc "Install gems listed in the Gemfile"
task :install do
    print "Install gems listed in the Gemfile: $ ".magenta
    sh 'bundle install'
    puts "Installed!".green
end

desc "Build the entire web site"
task build: %w[cleanup] do
  print 'Building the site with Jekyll: $ '.magenta
  jekyll 'build'
  puts 'Built!'.green
end

namespace :update do
  desc "Update the devdocs theme"
  task :theme do
    print 'Updating the devdocs theme gem dependency: $ '.magenta
    sh 'bundle update devdocs --conservative'
    print 'Updated! Here is the Gemfile.lock diff: $ '.green
    sh 'git diff Gemfile.lock'
  end
end

## Run Jekyll
def jekyll(options)
    sh "bundle exec jekyll #{options}"
end

## Jekyll preview
def preview(options = '')
    jekyll('serve -I -o ' + options)
end

## Include local config to preview
def preview_local
    preview('--config _config.yml,_config.local.yml')
end

desc "Checkout to the master branch"
task :to_master do
  print 'Checking out the branch to master: $'.magenta
  sh 'git checkout master'
end

namespace :test do

################
#   Validate   #
################

    # Run htmlproofer to check for broken links
    desc "Check for broken links"
    task links: %w[build] do
      begin
        # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
        # Wrapping task in a begin-rescue block prevents rake from aborting.
        # Seems to prevent printing an error count though.

        puts 'Checking links with htmlproofer...'.magenta

        # If you're running this for the first time, create the tmp/.htmlproofer directory first or the script fails.
        mkdir_p dir_name unless Dir.exists?(dir_name)

        # Write console output (stderr only) to a file.
        # Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
        $stderr.reopen(md_report_path, "w")

        # Configure htmlproofer parameters:
        options = {
          log_level: :info,
          only_4xx: true,
          # external_only: true, # Check external links only
          checks_to_ignore: ["ScriptCheck", "ImageCheck"],
          allow_hash_ref: true,
          alt_ignore: [/.*/],
          file_ignore: [/videos/, /swagger/, /guides\/m1x/, /search.html/, /404.html/, /codelinks/, /magento-third-party.html/, /magento-techbull.html/, /magento-release-notes.html/, /magento-release-information.html/, /index.html/, /template.html/, /magento-devdocs-whatsnew.html/],
          url_ignore: [/guides\/v2.0/],
          error_sort: :desc, # Sort by invalid link instead of affected file path (default). This makes it easier to see how many files the broken link affects.
          parallel: { :in_processes => 3 },
          typhoeus: { :followlocation => true, :connecttimeout => 10, :timeout => 30 },
          hydra: { :max_concurrency => 50 },
          cache: { :timeframe => '30d' }
        }
        HTMLProofer.check_directory("./_site", options).run

      # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the convert task (https://stackoverflow.com/a/10048406).
      # Wrapping task in a begin-rescue block prevent rake from aborting.
      # Seems to prevent printing an error count though.
      rescue
        size_in_lines(md_report_path)
      end
    end

    # Count the number of lines in the given file
    def size_in_lines(filepath)
        f = File.new(filepath)
        f.readlines[-1]
        count = f.lineno.to_s

        puts "#{count} lines in the #{File.basename(filepath)} file.".blue
    end

    # Read the current git branch
    def current_branch
        `git symbolic-ref --short HEAD`.strip
    end

    # Name the directory for the link checker reports
    def dir_name
      'tmp/.htmlproofer/'
    end

    # Name the file for the link checker report
    def file_name
       "broken-links-in-#{current_branch}"
    end

    # Relative path for the link checker report
    def file_path
       dir_name + file_name
    end

    def md_report_path
        file_path + '.md'
    end

    namespace :links do
      desc "Checkout to the master branch and check the links"
      task on_master: %w[to_master links]
    end

    #################
    #   convert   #
    #################

    # Make 'tmp/.htmlproofer/broken-links-in.md' easier to read by converting it to HTML and applying some CSS.

    # We created this task to help us resolve the initial set of errors on the devdocs site.
    # It shouldn't be necessary after we resolve all outstanding errors because we shouldn't expect a large number of errors after initial clean up.
    desc "Convert the link check reports to HTML"
    task :convert do
      puts 'Converting the link check reports to HTML...'.magenta

      # Define the Kramdown method to convert markdown to HTML.
      def kramdown( text )
        Kramdown::Document.new( text ).to_html
      end

      # Read content in the given path
      def content(path)
        File.read(path)
      end

      # The CSS to append to the HTML report with broken links
      def css
            <<-CSS.gsub(/[[:blank:]]+/, " ")
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
              <style>

              /* Lists
              –––––––––––––––––––––––––––––––––––––––––––––––––– */

              ul {
                list-style: disc;
                font-family: \'Roboto\', sans-serif;
                color: red; }
              ol {
                list-style: decimal inside; }css
              ol, ul {
                padding-left: 0;
                margin-top: 0; }
              ul ul,
              ul ol,
              ol ol,
              ol ul {
                margin: 1.5rem 0 1.5rem 3rem;
                font-size: 90%;
                color: black;}
              li {
                margin-bottom: 1rem;
                font-weight: bold;}

              </style>
              CSS
      end

      # Automatically open the HTML report in a browser.
      def open_in_browser(path)
          Launchy.open( path ) do |exception|
            puts "Attempted to open #{path} and failed because #{exception}".red
          end
      end

        # Locate the output directory, iterate over markdown files inside it, and convert those files to HTML.
        Find.find(dir_name) do |path|
            if File.extname(path) == '.md'              # e.g. ./index.md => .md
              html_file = path.ext('html')
              File.open( html_file , 'w') do |file|
                file.write kramdown( content(path) )
                file.write css
              end
              open_in_browser(html_file)
            end
        end
    end

    namespace :links do
        desc "Report about broken links in HTML"
        task report: %w[links convert]
    end
end