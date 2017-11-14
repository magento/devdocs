require 'html-proofer'

# Write console output (stderr only) to a file. Use this if you need to also capture stdout: https://stackoverflow.com/a/2480439
$stderr.reopen("tmp/bad-links.txt", "w")

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

# Run htmlproofer to check for broken links

desc "Validate links"
task :check_links do
  # First, generate the devdocs site.
  Rake::Task['build'].invoke
  # Then, run the link checker.
  puts 'Checking links with htmlproofer...'
  # Link checker parameters:
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
end
