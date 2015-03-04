require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "Magento/devdocs_internal"


namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
  end


  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do

    branches = `git branch`
    if branches.match("gh-pages")
      system "git checkout gh-pages" or raise "Error: could not checkout gh-pages"
    else
      system "git checkout --track origin/gh-pages" or raise "Error: could not checkout gh-pages"
    end

    cp_r "_site/.", "."
    rm_r "_site"

    system "git add -A"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin gh-pages"
    system "git checkout pubs-ux-common"

  end
end

