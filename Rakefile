require 'html-proofer'

##############
#   Build    #
##############

# Generate the site

desc "build the site"
task :build do
  system "bundle exec jekyll build"
end

################
#   Validate   #
################

# Run htmlproofer to check for broken links

desc "Validate links"
task :check_links do
  # First, generate the site.
  # Rake::Task['build'].invoke
  puts 'Checking links with htmlproofer...'
  options = {
    log_level: "debug",
    only_4xx: true,
    # external_only: true, # Check external links only
    checks_to_ignore: ["ScriptCheck", "ImageCheck"],
    allow_hash_ref: true,
    alt_ignore: [/.*/],
    file_ignore: [/videos/, /swagger/, /search.html/, /404.html/, /codelinks/, /magento-third-party.html/, /magento-techbull.html/, /magento-release-notes.html/, /magento-release-information.html/, /index.html/, /template.html/, /magento-devdocs-whatsnew.html/],
    url_ignore: [/guides\/v2.3/],
    parallel: { :in_processes => 3 },
    typhoeus: { :followlocation => true, :connecttimeout => 10, :timeout => 30 },
    hydra: { :max_concurrency => 50 },
    cache: { :timeframe => '30d' }
  }
  HTMLProofer.check_directory("./_site", options).run
end
