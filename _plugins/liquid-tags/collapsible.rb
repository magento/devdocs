# frozen_string_literal: true

# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# Author: jcalcaben@magento.com
#
# This custom plugin adds a block tag that wraps the content in
# a jquery-ui accordion widget.
#
module Jekyll
  # Collapsibility for regular blocks
  class Collapsible < Liquid::Block
    def initialize(tag_name, title, tokens)
      super
      @title = title.to_s
    end

    def render(context)
      site = context.registers[:site]

      converter = if defined? site.find_converter_instance
                    site.find_converter_instance(Jekyll::Converters::Markdown)
                  else
                    site.getConverterImpl(::Jekyll::Converters::Markdown)
                  end

      content = super.strip
      content = converter.convert(content)
      <<-HTML
  <div class="collapsible">
    <b class="collapsible-title">#{@title}</b>
    <div class="collapsible-content">#{content}</div>
  </div>
      HTML
    end
  end

  ## TODO: Come up with cleaner solution
  # Collapsibility as headings of level 2
  class CollapsibleH2 < Liquid::Block
    def initialize(tag_name, title, tokens)
      super
      @title = title.to_s
    end

    def render(context)
      site = context.registers[:site]

      converter = if defined? site.find_converter_instance
                    site.find_converter_instance(Jekyll::Converters::Markdown)
                  else
                    site.getConverterImpl(::Jekyll::Converters::Markdown)
                  end

      content = super.strip
      content = converter.convert(content)
      <<-HTML
  <div class="collapsible collapsible-h2">
    <h2 class="collapsible-title">#{@title}</h2>
    <div class="collapsible-content">#{content}</div>
  </div>
      HTML
    end
  end

  # Collapsibility as headings of level 3
  class CollapsibleH3 < Liquid::Block
    def initialize(tag_name, title, tokens)
      super
      @title = title.to_s
    end

    def render(context)
      site = context.registers[:site]

      converter = if defined? site.find_converter_instance
                    site.find_converter_instance(Jekyll::Converters::Markdown)
                  else
                    site.getConverterImpl(::Jekyll::Converters::Markdown)
                  end

      content = super.strip
      content = converter.convert(content)
      <<-HTML
  <div class="collapsible collapsible-h3">
    <h3 class="collapsible-title">#{@title}</h3>
    <div class="collapsible-content">#{content}</div>
  </div>
      HTML
    end
  end
end

Liquid::Template.register_tag('collapsible', Jekyll::Collapsible)
Liquid::Template.register_tag('collapsibleh2', Jekyll::CollapsibleH2)
Liquid::Template.register_tag('collapsibleh3', Jekyll::CollapsibleH3)
