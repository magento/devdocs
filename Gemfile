source 'https://rubygems.org'

gem 'github-pages'
gem 'devdocs', :git => 'https://github.com/magento-devdocs/devdocs-theme.git', :branch => 'devdocs-stable'

gem 'wdm' if Gem.win_platform?

group :test do
  gem 'html-proofer'
  gem 'launchy'
end

group :jekyll_plugins do
  gem 'jekyll-algolia', '~> 1.0'
end

if RUBY_VERSION =~ /2.5.3/
  Encoding.default_external = Encoding::UTF_8
  Encoding.default_internal = Encoding::UTF_8
end