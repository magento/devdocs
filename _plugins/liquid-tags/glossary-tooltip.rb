# Author: jcalcaben@magento.com
#
# This custom plugin creates the appropriate html block to convert text
# into a tooltip link.
#
module Jekyll
  # Extending the Block class of the Liquid module
  class GlossaryTooltip < Liquid::Block
    def initialize(tag_name, uuid, tokens)
      super
      @uuid = uuid.to_s.strip
    end

    def render(context)
      content = super.strip
      <<-HTML
  <span term-uuid="#{@uuid}" class="glossary-term" data-toggle="popover">#{content}</span>
      HTML
    end
  end
end

Liquid::Template.register_tag('glossarytooltip', Jekyll::GlossaryTooltip)
