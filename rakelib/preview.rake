namespace :preview do
    desc 'Preview the entire devdocs locally'
    task all: %w[install clean] do
        puts "Generating the entire devdocs locally ... ".magenta
        preview
    end
end