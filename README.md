# Archived DevDocs

This branch contains the archived Magento documentation for the following versions:

- 1.8 CE, 1.13 EE
- 1.9 CE, 1.14 EE
- 2.0.18
- 2.1.16
- 2.2.7
- 2.3.0

## View online

The branch is built and pushed to the gh-pages branch manually.
The gh-pages branch is deployed through GitHub pages to <http://magento.github.io/devdocs/>.

## Build locally

To build locally, you need Ruby 2, Bundler 1, and the following commands:

- to set up the project:

  ```
  bundle install
  ```

- to build and preview locally:


  ```
  rake preview:all
  ```

## Deployment

This branch is built and pushed to the gh-pages branch manually.

To build and deploy the branch, run:

```
rake build_and_deploy
```

This command runs the build, moves the generated content to the gh-pages branch, and pushes it to GitHub.
Note, that you need to set up a remote named `public` that points to https://github.com/magento/devdocs.

The task creates a commit like `Deploy 7gjj0dkh`, where `7gjj0dkh` is an SHA of the source commit from the `archived-docs` branch. This will help in future debugging in case of any issues.
After you push the updated gh-pages branch, it is deployed automatically through the GitHub pages environment to <http://magento.github.io/devdocs/>.
You can track progress and status of deployment in [deployment history](https://github.com/magento/devdocs/deployments/activity_log?environment=github-pages) of the github-pages environment.
