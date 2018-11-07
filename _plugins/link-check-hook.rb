# require 'pry'
require 'html-proofer'
Jekyll::Hooks.register :site, :post_write do |site|
  HTMLProofer.check_directory(site.dest).run
end
