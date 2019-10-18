# DevDocs maintainer guidelines

In general, the same [guidelines](https://devdocs.magento.com/guides/v2.3/contributor-guide/maintainers.html) for [`magento/magento2`](https://github.com/magento/magento2) maintainers apply to devdocs maintainers. However, there are some additional guidelines specific to devdocs that will help you as a maintainer.

## General expectations

-  Self assign issues/pull requests (mostly pull requests)
   -  Review and approve or request changes
   -  Enforce the use of the issue/pull requests template
   -  Ask contributors to link to the code base to validate documentation updates when applicable
   -  Ask contributors not to contribute to v2.0 docs
-  If a maintainer creates a pull request, it should be reviewed by another maintainer or DevDocs staff member

## Labels

Labels are important because they help us identify pull requests and ensure that contributors receive points and recognition. See [devdocs awards and points](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#devdocs-awards-and-points).

Here is a brief summary of the most important labels:

-  `New Topic`: Entirely new documents
-  `Major Update`: Significant new info: new section in existing topic, etc.
-  `Technical`: Changes to technical content/code/processes/naming conventions (any change to technical content)
-  `Editorial`: Typos, grammatical inconsistencies, or minor rewrites
-  `small changes`: See [Small changes workflow](#small-changes-workflow)

We also use version labels when appropriate.

As a maintainer, we expect you to add or remove labels when appropriate.

See https://github.com/magento/devdocs/labels for all labels and their descriptions.

## Testing

Currently, we only test internal links. In the future, we plan to expand tests to include external links, markdown linting, and spell checking.

We use private CI/CD stack and do not provide access to it.

Every pull request to the `master` branch must pass tests before it can be merged. When a pull request is ready for tests, a member of the [`devdocs-admins`](https://github.com/orgs/magento/teams/devdocs-admins) team must add the test trigger phrase to the pull request as a comment. The trigger phrase is "_running tests_". By approving a pull request, you are signalling an admin that the pull request is ready for tests.

## Projects

We use several projects to help organize issues and pull requests. You can add existing issues and pull requests to these projects as you see fit.

https://github.com/magento/devdocs/projects

## Style

We prefer Markdown over HTML (in most cases). You can use [kramdown](https://kramdown.gettalong.org/syntax.html) syntax for more markup features and [Liquid](https://jekyllrb.com/docs/liquid/) for in-topic scripting.

## Small changes workflow

Before merging a pull request to the `master` branch, it must pass automated testing. Testing takes about 30 minutes to complete for each pull request, so we created a workflow to save time for small changes.

-  **Individual pull requests to `master`**—15 individual pull requests to `master` x 30 minutes per pull request = 7.5 hrs of testing time
-  **Multiple pull requests using `small_changes`**—1 `small_changes` pull request (containing 15 individual pull requests) to `master` x 30 minutes = 30 minutes of testing time

This workflow is for typos, formatting issues, and minor text additions or deletions. It is not for substantial new content, changes to tables, new files, or files that have been moved.

Periodically, we will create a pull request from `small_changes` to `master` and then run tests on that pull request to save time.

### Process

1. Review the pull request and either approve it or request changes.
1. Apply the `Small changes` label if one of the following labels should also be applied:

   -  `Editorial`
   -  `Technical`

1. That's it! A devdocs-admin will run tests and merge.
