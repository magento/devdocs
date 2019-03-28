namespace :multirepo do
  desc 'Add content from external repositories'
  task :init do
    # sh './scripts/docs-from-code.sh mftf git@github.com:magento/magento2-functional-testing-framework.git master'
    # sh './scripts/docs-from-code.sh page-builder git@github.com:magento/magento2-page-builder.git master'
    sh './scripts/docs-from-code.sh mbi git@github.com:magento/devdocs-mbi.git master'
    sh './scripts/docs-from-code.sh page-builder git@github.com:magento-devdocs/magento2-page-builder.git develop'

    # The last argument 'false' disables content filtering by sparse checkout.
    # It covers cases when we need entire repository, not only the '/docs/' directory.
    sh './scripts/docs-from-code.sh guides/m1x git@github.com:magento/devdocs-m1.git master false'
  end

  desc 'Add multirepo docs providing shell arguments "dir=<directory where to init a repo>", "repo=<SSH URL>", "branch=<branch to checkout>", "filter=<true/false>" ("true" by default) to 1) filter content if "true" or 2) add content from the entire repository if "false".'
  task :add do
    dir = ENV['dir']
    repo = ENV['repo']
    branch = ENV['branch']
    filter = ENV['filter']

    abort 'Provide a directory name for the multirepo docs. Example: dir=mftf' unless dir
    abort "'#{dir}' directory already exists" if Dir.exist? dir
    abort 'Provide a repository cloning URL (SSH).Example: repo=git@github.com:magento-devdocs/magento2-functional-testing-framework.git' unless repo
    abort 'Provide a branch name for the multirepo docs. Example: branch=master' unless branch

    sh "./scripts/docs-from-code.sh #{dir} #{repo} #{branch} #{filter}"
  end
end
