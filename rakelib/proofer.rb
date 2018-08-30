module Proofer
    
    # Configure htmlproofer parameters:
    def options
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
end    