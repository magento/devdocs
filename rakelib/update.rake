namespace :update do
    desc "Update the devdocs theme"
    task :theme do
        print 'Updating the devdocs theme gem dependency: $ '.magenta
        sh 'bundle update devdocs --conservative'
        print "Let's see the changes in Gemfile.lock: $ ".blue
        sh 'git diff Gemfile.lock'
    end
end