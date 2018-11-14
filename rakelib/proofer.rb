# Configure html-proofer parameters
module Proofer
  # Read options from the '_config.checks.yml'
  # Ignore baseurl if $branch is available in environment
  def options
    config = YAML.load_file('_config.checks.yml')
    return config['html-proofer'] unless ENV['branch']
    url_swap = { :url_swap => { %r{\A/#{ENV['branch']}} => '' } }
    cicd_config = config['html-proofer'].merge(url_swap)
  end

  # Count the number of lines in the given file
  def size_in_lines(filepath)
    f = File.new(filepath)
    f.readlines[-1]
    count = f.lineno.to_s
    puts "The link check report contains #{count} lines.".blue
    puts "To see the report, open the #{filepath} file.".blue
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
    prefix = 'broken-links-in-'
    timestamp = Time.now.strftime('_%m-%d_%H-%M-%S')
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
