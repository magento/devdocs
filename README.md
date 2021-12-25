# What's this fork about

**Do not refer to <https://dshevtsov.github.io/devdocs/> as to official documentation.**

For official documentation, refer to <https://devdocs.magento.com/>.

This project is a personal effort to help the Community with missing docs.

This fork deploys archived Magento documentation for the following versions:

- 1.18 CE, 1.13 EE
- 1.19 CE, 1.14 EE
- 2.0.18
- 2.1.16
- 2.2.7
- 2.3.0

The branch that contains the deployed content is `archived-docs`.

To build locally, you need Ruby 2, Bundler, and the following commands:

- to set up the project:

  ```
  bundle install
  ```

- to build and preview locally:


  ```
  rake preview:all
  ```
