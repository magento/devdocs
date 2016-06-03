# Author: jcalcaben@magento.com
#
# This custom plugin adds a block tag that wraps the content in a jquery-ui accordian
# widget.
# 

module Jekyll
  class Collapsible < Liquid::Block

    def initialize(tag_name, title, tokens)
      super
      @title = title.to_s
    end

    def render(context)
      site = context.registers[:site]
      converter = site.getConverterImpl(Jekyll::Converters::Markdown)
      content = super.strip
      content = converter.convert(content)
      "<div class=\"collapsible\"><h4 class=\"collapsible-title\">"+@title+"</h4><div class=\"collapsible-content\">"+content+"</div></div>"
    end
  end
end

Liquid::Template.register_tag('collapsible', Jekyll::Collapsible)
