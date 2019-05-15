# DevDocs maintainer guidelines

In general, the same [guidelines](https://devdocs.magento.com/guides/v2.3/contributor-guide/maintainers.html) for [`magento/magento2`](https://github.com/magento/magento2) maintainers apply to devdocs maintainers. However, there are some additional guidelines specific to devdocs that will help you as a maintainer.

## General expectations

- Self assign issues/pull requests (mostly pull requests)
  - Review and approve or request changes
  - Enforce the use of the issue/pull requests template
  - Ask contributors to link to the code base to validate documentation updates when applicable
  - Ask contributors not to contribute to v2.0 docs
- If a maintainer creates a pull request, it should be reviewed by another maintainer or DevDocs staff member

## Labels

Labels are important because they help us identify pull requests and ensure that contributors receive points and recognition. See [devdocs awards and points](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#devdocs-awards-and-points).

Here is a brief summary of the most important labels:

- `New Topic`: Entirely new documents
- `Major Update`: Significant new info: new section in existing topic, etc.
- `Technical`: Changes to technical content/code/processes/naming conventions (any change to technical content)
- `Editorial`: Typos, grammatical inconsistencies, or minor rewrites
- `small changes`: See [Small changes workflow](#small-changes-workflow)

We also use version labels when appropriate.

As a maintainer, we expect you to add or remove labels when appropriate.

See https://github.com/magento/devdocs/labels for all labels and their descriptions.

## Testing

Currently, we only test internal links. In the future, we plan to expand tests to include markdown linting and spell checking.

We use Jenkins to build, test, and deploy the devdocs site. Unfortunately, our Jenkins host is behind the corporate firewall (per Adobe security policy) and is not accessible to non-employees.

Every pull request to the `master` branch must pass tests before it can be merged. When a pull request is ready for tests, a member of the [`devdocs-admins`](https://github.com/orgs/magento/teams/devdocs-admins) team must add the test trigger phrase to the pull request as a comment. The trigger phrase is "_running tests_". By approving a pull request, you are signalling an admin that the pull request is ready for tests.

## Projects

We use several projects to help organize issues and pull requests. You can add existing issues and pull requests to these projects as you see fit.

https://github.com/magento/devdocs/projects

## Style

We plan to explain style in depth in the repository wiki soon, but for now, use the following guidance on markdown syntax:

- Pull requests should contain simple, clean markdown syntax and not HTML (in most cases)
- We use non-standard syntax in some places for templating (liquid) and accessing Jekyll variables
- We sometimes use HTML for _complex_ tables, but we prefer markdown formatting in most cases

## Small changes workflow

Whenever we merge a pull request, we must first run tests on the branch. Our build and test pipeline:

- Merges the pull reB
- Builds the devdocs site
- Checks all internal links to ensure none are broken

This process takes about 30 minutes to run and does the following:

- Each build must be tested with the latest version of the `master` branch.
- Every merged pull request updates the `master` branch, so the next pull request must be updated from `master` before testing
- We can only test one pull request at a time.

The `small_changes` branch is for small text changes, including:

- Typos
- Formatting
- Minor text additions or deletions

Basically, small changes are "safe" at a glance; they will not fail tests.

It is not for:

- Substantial new content
- Changes to tables
- New files or moved files

Periodically, we will create a pull request from `small_changes` to `master` and then run tests on that pull request to save time.

For example:

- **Old method**—15 individual pull requests to `master` x 30 minutes per pull request = 7.5 hrs of testing time
- **Small Changes method**—1 `small_changes` pull request (containing 15 individual pull requests) to `master` x 30 minutes = 30 minutes of testing time

This means:

- Pull requests will show as merged, but will not be live on the devdocs site until the `small_changes` pull request is merged to `master`.
- The point system remains the same. Credit is awarded when a pull request is merged, regardless of where it was merged.

### Process

1. Review the pull request and either approve it or request changes.
1. Apply the `Small changes` label if the following labels should also be applied:

   - `Editorial`
   - `Technical`

1. Apply the `Editorial` or `Technical` label so the contributor will receive points.

1. That's it! A devdocs-admin will run tests and merge the it.