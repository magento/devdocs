# frozen_string_literal: true

source 'https://rubygems.org'

gem 'devdocs', git: 'https://github.com/magento-devdocs/devdocs-theme.git'
gem 'jekyll'

gem 'wdm' if Gem.win_platform?

group :test do
  gem 'html-proofer'
  gem 'launchy'
end

group :jekyll_plugins do
  gem 'jekyll-algolia', '~> 1.0'
  gem 'jekyll-redirect-from'
  gem 'jekyll-sitemap'
  gem 'jekyll-titles-from-headings'
  gem 'jekyll-relative-links'
  gem 'jekyll-optional-front-matter'
end
