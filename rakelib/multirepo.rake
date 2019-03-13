namespace :multirepo do
  desc 'Add docs from external repositories (mftf, page-builder)'
  task :init do
    # sh './scripts/docs-from-code.sh mftf git@github.com:magento/magento2-functional-testing-framework.git master'
    # sh './scripts/docs-from-code.sh page-builder git@github.com:magento/magento2-page-builder.git master'
    sh './scripts/docs-from-code.sh mbi git@github.com:magento/devdocs-mbi.git master'
    sh './scripts/docs-from-code.sh guides/m1x git@github.com:magento/devdocs-m1.git master false'
    sh './scripts/docs-from-code.sh page-builder git@github.com:magento-devdocs/magento2-page-builder.git develop'
  end

  desc 'Add multirepo docs providing arguments "dir", "repo", and "branch". Example: rake multirepo:add dir=mftf repo=git@github.com:magento-devdocs/magento2-functional-testing-framework.git branch=docs-in-code'
  task :add do
    dir = ENV['dir']
    repo = ENV['repo']
    branch = ENV['branch']

    abort 'Provide a directory name for the multirepo docs. Example: dir=mftf' unless dir
    abort "'#{dir}' directory already exists" if Dir.exist? dir
    abort 'Provide a repository cloning URL (SSH).Example: repo=git@github.com:magento-devdocs/magento2-functional-testing-framework.git' unless repo
    abort 'Provide a branch name for the multirepo docs. Example: branch=master' unless branch

    sh "./scripts/docs-from-code.sh #{dir} #{repo} #{branch}"
  end
end
