# frozen_string_literal: true

module LinkChecker
  # Custom check for html-proofer to find double forward slashes in URLs.
  class DoubleSlashCheck < ::HTMLProofer::Check
    def slash?
      return false if @link.href.nil?

      @link.href.match %r{\w//}
    end

    def run
      @html.css('a').each do |node|
        @link = create_element(node)
        line = node.line

        if slash?
          return add_issue('Remove double forward slashes from URLs', line: line)
        end
      end
    end
  end
end
