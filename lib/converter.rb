# Copyright © Magento, Inc. All rights reserved.
# See COPYING.txt for license details.

# frozen_string_literal: true

# Helper methods to convert markdown reports to HTML and open them in a browser.
module Converter
  # The CSS to append to the HTML report with broken links
  CSS = %q(
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
          <style>

          /* Lists
          –––––––––––––––––––––––––––––––––––––––––––––––––– */

          ul {
          list-style: disc;
          font-family: \'Roboto\', sans-serif;
          color: red; }
          ol {
          list-style: decimal inside; }css
          ol, ul {
          padding-left: 0;
          margin-top: 0; }
          ul ul,
          ul ol,
          ol ol,
          ol ul {
          margin: 1.5rem 0 1.5rem 3rem;
          font-size: 90%;
          color: black;}
          li {
          margin-bottom: 1rem;
          font-weight: bold;}

          </style>
      )

  # Define the Kramdown method to convert markdown to HTML.
  def self.kramdown(text)
    Kramdown::Document.new(text).to_html
  end

  # Read content in the given path
  def self.content(path)
    File.read(path)
  end

  # Automatically open the HTML report in a browser.
  def self.open_in_browser(path)
    Launchy.open(path) do |exception|
      warn "Attempted to open #{path} and failed because #{exception}".red
    end
  end

  # Locate the output directory, and convert the latest markdown file to HTML.
  def self.to_html
    latest_md =
      FileList["#{LinkChecker::DIR}/*.md"].max_by { |file| File.mtime file }

    print "Reading the #{latest_md} ... ".magenta
    # Change a file extension to .html
    html_file = latest_md.ext('html')
    File.open(html_file, 'w') do |file|
      print 'converting to HTML ... '.magenta
      file.write kramdown(content(latest_md))
      file.write CSS
    end

    # Open the HTML report in browser
    print 'opening the converted report in browser ... '.magenta
    open_in_browser(html_file)
    puts 'Done!'.green
  end
end
