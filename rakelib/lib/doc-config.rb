# Read Docfile file and get configuration data for adding subrepositories
class DocConfig
  attr_reader :config
  def initialize(config_file = 'Docfile')
    @config_data = File.readlines(config_file)
    @config = []
    parse_file
  end

  def parse_file
    @config =
      @config_data.map do |string|
        {
          'directory' => string[/(?<=")[^"]+(?="\sdirectory)/],
          'repository' => string[/(?<=")[^"]+(?="\srepository)/],
          'branch' => string[/(?<=")[^"]+(?="\sbranch)/],
          'filter' => string.match?(/(?<=")[^"]+(?="\scontent)/)
        }
      end
  end
end
