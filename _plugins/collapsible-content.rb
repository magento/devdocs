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

      if defined? site.find_converter_instance
        converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      else
        converter = site.getConverterImpl(::Jekyll::Converters::Markdown)
      end

      content = super.strip
      content = converter.convert(content)
      "<div class=\"collapsible\"><b class=\"collapsible-title\">"+@title+"</b><div class=\"collapsible-content\">"+content+"</div></div>"
    end
  end
end

Liquid::Template.register_tag('collapsible', Jekyll::Collapsible)
