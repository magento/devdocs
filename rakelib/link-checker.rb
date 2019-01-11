# frozen_string_literal: true

# Custom class to find double forward slashes in URLs.

class DoubleSlashCheck < ::HTMLProofer::Check

  def slash?
    return false if @link.href.nil?
    @link.href.match /\w\/\//
  end

  def run
    @html.css('a').each do |node|
      @link = create_element(node)
      line = node.line

      if slash?
        return add_issue("Remove double forward slashes from URLs", line: line)
      end
    end
  end
end

# Helper methods to configure  and run html-proofer
module LinkChecker
  # Run html-proofer to check the generated HTML pages
  def self.check_site
    HTMLProofer.check_directory('_site', options).run
  end

  # Read options from the '_config.checks.yml'
  # Ignore baseurl if $branch is available in environment
  def self.options
    config = YAML.load_file('_config.checks.yml')
    return config['html-proofer'] unless ENV['branch']
    url_swap = { url_swap: { %r{\A/#{ENV['branch']}} => '' } }
    config['html-proofer'].merge(url_swap)
  end

  # Relative path for the link checker report
  def self.md_report_path
    # Create the directory if it doesn't exist
    FileUtils.mkdir_p DIR
    File.join DIR, file_name
  end

  # Name the directory for the link checker reports
  DIR = File.join 'tmp', '.htmlproofer'

  # Read the current Git branch
  def self.current_branch
    `git symbolic-ref --short HEAD`.strip
  end

  # Name the file for the link checker report
  def self.file_name
    prefix = 'broken-links-in-'
    timestamp = Time.now.strftime('_%m-%d_%H-%M-%S')
    prefix + current_branch + timestamp + '.md'
  end
end
