module Proofer
  # Constants to be used in options
  FILE_IGNORE = %w[
    404.html
    action-groups.html
    cloud-fastly.html
    codelinks
    contributing.html
    css-preprocess.html
    es-overview.html
    guides/m1x
    index.html
    magento-third-party.html
    magento-techbull.html
    pattern-library
    release-notes
    search.html
    swagger
    template.html
    theme_dictionary.html
    videos
    whats-new.html
  ].freeze

  URL_IGNORE = %w[
    account.magento.com
    docs.magento.com
    extension-dev-guide
    frontend-dev-guide
    github.com
    guides/v2.0
    howdoi
    mariadb.com
    mrg
    navigation
    pattern-library
    release-notes
    rest
    ui_comp_guide
    www.thegeekstuff.com
    yatil.net
  ].freeze

  # Configure htmlproofer parameters:
  def options
    {
      log_level: :info,
      only_4xx: true,
      # external_only: true, # Check external links only
      checks_to_ignore: %w[ScriptCheck ImageCheck],
      allow_hash_ref: true,
      alt_ignore: [/.*/],
      file_ignore: array_to_re(FILE_IGNORE),
      url_ignore: array_to_re(URL_IGNORE),
      error_sort: :desc, # Sort by invalid link instead of affected file path (default). This makes it easier to see how many files the broken link affects.
      parallel: { in_processes: 3 },
      typhoeus: { followlocation: true, connecttimeout: 10, timeout: 30 },
      hydra: { max_concurrency: 50 },
      # cache: { :timeframe => '30d' }
    }
  end

  # Convert array of strings to array of regular expressions
  def array_to_re(array)
    array.map { |item| /#{item}/ }
  end

  # Count the number of lines in the given file
  def size_in_lines(filepath)
    f = File.new(filepath)
    f.readlines[-1]
    count = f.lineno.to_s
    puts "#{count} lines in the #{File.basename(filepath)} file.".blue
  end

  # Read the current Git branch
  def current_branch
    `git symbolic-ref --short HEAD`.strip
  end

  # Name the directory for the link checker reports
  def dir_name
    'tmp/.htmlproofer/'
  end

  # Name the file for the link checker report
  def file_name
    prefix = "broken-links-in-"
    timestamp = Time.now.strftime("_%m-%d_%H-%M-%S")
    prefix + current_branch + timestamp
  end

  # Relative path for the link checker report
  def file_path
    dir_name + file_name
  end

  def md_report_path
    file_path + '.md'
  end
end
