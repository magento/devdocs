namespace :test do

    # Run htmlproofer to check for broken links
    desc "Build devdocs and check for broken links"
    task links: %w[build links_no_build]

    desc "Check the existing _site for broken links"
    task :links_no_build do

        puts 'Checking links with htmlproofer...'.magenta

        HTMLProofer.check_directory("_site", options).run

    end

    desc "Checkout to the master branch and check the links"
    task on_master: %w[to_master links]

    desc "Report about broken links in HTML"
    task report: %w[links] do

        puts 'Converting the link check reports to HTML...'.magenta

        # Locate the output directory, iterate over markdown files inside it, and convert those files to HTML.
        Find.find(dir_name) do |path|
            # Filter .md files only
            if File.extname(path) == '.md'
                print "Reading the #{path} ... ".magenta
                # Change a file extension to .html
                html_file = path.ext('html')
                File.open( html_file , 'w') do |file|
                    print "converting to HTML ... ".magenta
                    file.write kramdown( content(path) )
                    file.write css
                end
                # Open the HTML reports in browser
                print "opening the converted report in browser ... ".magenta
                open_in_browser(html_file)
                puts "Done!".green
            end
        end
    end
end