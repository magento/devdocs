# DevDocs maintainer guidelines

In general, the same [guidelines](https://devdocs.magento.com/guides/v2.3/contributor-guide/maintainers.html) for [`magento/magento2`](https://github.com/magento/magento2) maintainers apply to DevDocs maintainers. However, there are some additional guidelines specific to DevDocs that will help you as a maintainer.

## General expectations

-  Self assign issues/pull requests (mostly pull requests)
   -  Review and approve or request changes
   -  Enforce the use of the issue/pull requests template
   -  Ask contributors to link to the code base to validate documentation updates when applicable
   -  Ask contributors not to contribute to unsupported versions of documentation (for example, 2.0, 2.1, 2.2)
-  If a DevDocs maintainer creates a pull request, it must be reviewed by another maintainer or DevDocs admin

## Labels

Labels are important because they help us identify pull requests by type and ensure that contributors receive points and recognition. See [DevDocs awards and points](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#devdocs-awards-and-points).

Here is a brief summary of the most important labels:

-  `New Topic`: Entirely new documents
-  `Major Update`: Significant new info (for example, a new section in an existing topic)
-  `Technical`: Minor changes to technical content, code, processes, naming conventions
-  `Editorial`: Typos, grammatical inconsistencies, or minor rewrites
-  `small changes`: See [Small changes workflow](#small-changes-workflow)

We also use version labels when appropriate (for example, 2.3.x).

As a maintainer, we expect you to add or remove labels according to these guidelines.

See https://github.com/magento/devdocs/labels for all labels and their descriptions.

## Testing

We use a private CI/CD stack and do not provide access to it.

Every pull request to the `master` branch must pass tests before it can be merged. When a pull request is ready for tests, a member of the [`devdocs-admins`](https://github.com/orgs/magento/teams/devdocs-admins) team must add the test trigger phrase to the pull request as a comment. The trigger phrase is "_running tests_". By approving a pull request, you are signalling to an admin that the pull request is ready for tests.

## Projects

We use several projects to help organize issues and pull requests. You can add existing issues and pull requests to these projects as you see fit.

https://github.com/magento/devdocs/projects

## Style

We prefer Markdown over HTML (in most cases). You can use [kramdown](https://kramdown.gettalong.org/syntax.html) syntax for more markup features and [Liquid](https://jekyllrb.com/docs/liquid/) for in-topic scripting.

## Small changes workflow

Before merging a pull request to the `master` branch, it must pass automated testing. Testing takes about 10 minutes to complete for each pull request, so we created a workflow to save time for small changes.

-  **Individual pull requests to `master`**—15 individual pull requests to `master` x 10 minutes per pull request = 2.5 hrs of testing time
-  **Multiple pull requests using `small_changes`**—1 `small_changes` pull request (containing 15 individual pull requests) to `master` x 10 minutes = 10 minutes of testing time

This workflow is for typos, formatting issues, and minor text additions or deletions. It is not for substantial new content, changes to tables, new files, or files that have been moved.

Periodically, we will create a pull request from the `small_changes` branch to the `master` branch and then run tests on that pull request to save time.

### Process

1. Review the pull request and either approve it or request changes.
1. Apply the `small changes` label if one of the following labels should also be applied:

   -  `Editorial`
   -  `Technical`

1. That's it! A DevDocs admin will run tests and merge.
