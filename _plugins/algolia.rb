module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
        # Do not index records larger than 20000 bytes
        return nil if record.to_s.bytesize > 20000
        
        record
      end
    end
  end
end
