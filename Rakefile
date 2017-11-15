require 'html-proofer'
require 'kramdown'
require 'find'
require 'launchy'

##############
#   Build    #
##############

# Generate the site

desc "build the site"
task :build do
  puts 'Building the site with Jekyll...'
  system "bundle exec jekyll build"
end

################
#   Validate   #
################

# Run htmlproofer to check for broken linkss

desc "Validate links"
task :check_links do

  # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the transform task (https://stackoverflow.com/a/10048406). Wrapping task in a begin-rescue block prevents rake from aborting.
  begin

  puts 'Checking links with htmlproofer...'

  # Write console output (stderr only) to a file. Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
  $stderr.reopen("tmp/.htmlproofer/bad-links.md", "w")

  # Configure htmlproofer parameters:
  options = {
    log_level: :info,
    only_4xx: true,
    # external_only: true, # Check external links only
    checks_to_ignore: ["ScriptCheck", "ImageCheck"],
    allow_hash_ref: true,
    alt_ignore: [/.*/],
    file_ignore: [/videos/, /swagger/, /search.html/, /404.html/, /codelinks/, /magento-third-party.html/, /magento-techbull.html/, /magento-release-notes.html/, /magento-release-information.html/, /index.html/, /template.html/, /magento-devdocs-whatsnew.html/],
    url_ignore: [/guides\/v2.3/],
    error_sort: :desc, # Sort by invalid link instead of affected file path (default). This makes it easier to see how many files the bad link affects.
    parallel: { :in_processes => 3 },
    typhoeus: { :followlocation => true, :connecttimeout => 10, :timeout => 30 },
    hydra: { :max_concurrency => 50 },
    cache: { :timeframe => '30d' }
  }
  HTMLProofer.check_directory("./_site", options).run

  # We're expecting link validation errors, but unless we rescue from StandardError, rake will abort and won't run the transform task (https://stackoverflow.com/a/10048406). Wrapping task in a begin-rescue block prevents rake from aborting.
  rescue StandardError => e
    #lifeboats
  end
end

#################
#   Transform   #
#################

# Make 'tmp/.htmlproofer/bad-links.md' easier to read by transforming it to HTML and applying some CSS.

# We created this task to help us resolve the initial set of errors on the devdocs site. It shouldn't be necessary after we resolve all outstanding errors because we shouldn't expect a large number of errors after initial clean up.

desc "transform link validation error output to HTML"
task :transform do

  # Define the output directory.
  SITE_PATH = './tmp/.htmlproofer'

  # Create the output directory if it doesn't already exist.
  Dir.mkdir( SITE_PATH ) unless File.exist?( SITE_PATH )

  # Define the Kramdown method to convert markdown to HTML.
  def markdown( text )
    Kramdown::Document.new( text ).to_html
  end

    # Locate the output directory, iterate over markdown files inside it, and convert those files to HTML.
    Find.find('./tmp/.htmlproofer') do |path|
    if File.extname(path) == '.md'              # e.g. ./index.md => .md
      basename = File.basename(path, '.md')     # e.g. ./index.md => index
      File.open( "#{SITE_PATH}/#{basename}.html", 'w') do |file|
        file.write markdown( File.read( path ) )
      end
    end
  end

  # Automatically open the HTML report in a browser.
  uri = './tmp/.htmlproofer/bad-links.html'
  Launchy.open( uri ) do |exception|
    puts "Attempted to open #{uri} and failed because #{exception}"
  end

end

###############
#   Report   #
###############

# Generate an HTML report of all link validation errors.

desc "generate link validation html report"
task :link_report => [:check_links, :transform] do
  puts "generating link validation HTML report..."
end
