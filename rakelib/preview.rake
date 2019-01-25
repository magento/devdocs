# frozen_string_literal: true

namespace :preview do
  desc 'Preview the entire devdocs locally'
  task all: %w[install clean] do
    print 'Enabled the default configuration: $ '.magenta
    sh 'bundle exec jekyll serve --incremental \
                                 --open-url \
                                 --livereload \
                                 --trace \
                                 --plugins _plugins,_checks'
  end
end
