# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# Read Docfile file and get configuration data for adding subrepositories
class DocConfig
  attr_reader :config
  def initialize(config_file = 'Docfile.yml')
    @config = YAML.load_file(config_file)
  end

  def content_map
    @config['content_map']
  end
end
