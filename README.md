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
