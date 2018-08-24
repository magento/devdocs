namespace :preview do
    desc 'Preview the entire devdocs locally'
    task all: %w[install cleanup] do
        puts "Generating the entire devdocs locally ... ".magenta
        preview
    end
end