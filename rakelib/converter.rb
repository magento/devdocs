module Converter
    # Define the Kramdown method to convert markdown to HTML.
    def kramdown( text )
        Kramdown::Document.new( text ).to_html
    end

    # Read content in the given path
    def content(path)
        File.read(path)
    end

    # The CSS to append to the HTML report with broken links
    def css
    <<-CSS.gsub(/[[:blank:]]+/, " ")
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
        CSS
    end

    # Automatically open the HTML report in a browser.
    def open_in_browser(path)
        Launchy.open( path ) do |exception|
        puts "Attempted to open #{path} and failed because #{exception}".red
        end
    end
end
