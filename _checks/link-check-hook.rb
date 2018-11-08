require 'html-proofer'
Jekyll::Hooks.register :site, :post_write do |site|
  @site = site

  # Read file_ignore and url_ignore for html_proofer in configuration files
  def file_ignore
    array = @site.config.dig('html_proofer', 'file_ignore')
    return [] if array.nil?
    array_to_re(array)
  end

  def url_ignore
    url_ignore = @site.config.dig('html_proofer', 'url_ignore') || []
    exclude = @site.exclude || []
    array = url_ignore.concat(exclude).uniq
    return [] if array.empty?
    array_to_re(array)
  end

  # Conver array of strings into array of regular expressions
  def array_to_re(array)
    array.map { |item| /#{item}/ } unless array.nil?
  end

  # Configure options for html-proofer
  options = {
    log_level: :info,
    only_4xx: true,
    # external_only: true, # Check external links only
    checks_to_ignore: %w[ScriptCheck ImageCheck],
    allow_hash_ref: true,
    alt_ignore: [/.*/],
    file_ignore: file_ignore,
    url_ignore: url_ignore,
    error_sort: :desc, # Sort by invalid link instead of affected file path (default). This makes it easier to see how many files the broken link affects.
    parallel: { in_processes: 3 },
    typhoeus: { followlocation: true, connecttimeout: 10, timeout: 30 },
    hydra: { max_concurrency: 50 }
    # cache: { :timeframe => '30d' }
  }

  # Run html-proofer on jekyll destination directory with the configured options
  HTMLProofer.check_directory(@site.dest, options).run
end
