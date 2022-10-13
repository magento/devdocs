# frozen_string_literal: true

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, _node, _context)
        # Do not index records larger than 20000 bytes
        return nil if record.to_s.bytesize > 20_000

        record
      end
    end
  end
end
