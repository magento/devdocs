We are thankful for all contributions, and we always recognize our most active members. Our aim is to find and recognize our top contributors according to points awarded during a given time period (monthly/quarterly/yearly). Contributors can earn points in numerous ways with a focus on pull requests (PR) to the backlog and special projects.

The Community Engineering team assesses each PR and determines the best awards for the submitted work. Contribution points are calculated according to the assessment results. We award points when the PR is merged.

### How points are awarded
{:.no_toc}

Every merged PR receives one [base achievement](#base-achievements) and potentially one, or more, [additional achievements](#additional-achievements). These achievements are applied to PRs during review and assessment. [Contributors](contributors.html) and [maintainers](maintainers.html) receive points after the PR is merged.

Due to the level of work required for developing and reviewing a PR, contributors and maintainers receive the same amount of points.

For instance, see this calculated reward points example:

1. When a contributor submits a PR with complex code contributions, they receive a total of 30 points:
      *  Improvement (base achievement) = 10 points
      *  Complex (additional achievement) = 20 points
1. When a contributor submits a PR with complex code and tests, they receive a total of 40 points:
      *  Improvement (base achievement) = 10 points
      *  Complex (additional achievement) = 20 points
      *  Test coverage (additional achievement) = 10 points
1. When a contributor submits a PR port of an existing merged PR, they receive a total of 35 points:
      *  Improvement (base achievement) = 10 points
      *  Complex (additional achievement) = 20 points
      *  Author of ported issue = 5 points
1. When a maintainer reviews and approves a PR with complex code and tests, they receive a total of 40 points:
      *  Improvement (base achievement) = 10 points
      *  Complex (additional achievement) = 20 points
      *  Test coverage (additional achievement) = 10 points

Earned achievements display as labels in each PR in GitHub and for each contributor, partner, and maintainer on [magento.com](https://magento.com/magento-contributors).

{:.bs-callout-info}
Multiple minor editorial fixes should be combined into a single PR, for the sake of efficiency.

### Base achievements
{:.no_toc}

Every merged PR receives one base achievement.

Achievement | Points | Description
| ------------ | --- | --- |
Improvement| 10 | Contribution contains code improvements, refactoring, or a bug fix.
Port | 5 | Contribution ports an existing solution between release lines. The author of the original PR receives an additional 5 points when another person contributes the ported PR.
Code Cleanup | 1 | Contribution contains code cleanup, such as typos, inline documentation, coding style, remove unused code, and minor style/design fixes.

### Additional achievements
{:.no_toc}

Every PR may receive several additional achievements during assessment.

Achievement | Points | Description
| ------------ | --- | --- |
Advanced | 30 | Contribution provides new features, such as introducing a new CLI command or integration with the new payment or shipping methods.
Complex | 20 | Contribution contains complete refactoring of legacy code, improvements to application design, or updates to libraries.
Special achievement | 20 | Contribution earns recognition in a specific category, such as for extensive tests coverage, improved framework design, improved APIs or API coverage, and improved customizability.
Test coverage | 10 | Contribution contains a fix or improvement and new tests or test cases.
MFTF test coverage| 10 | Contribution contains MFTF tests.
Bug fix | 10 | Contribution fixes one or more known GitHub issues.
Author of Ported Issue | 5 | Additional points for a contribution that ports (up port or back port) a previous PR across release lines by another contributor.
Category of Expertise | 5 | Additional points for a contribution that required deeper investigation and expertise.
Issue Triage: Confirmed | 5 | A public issue report is verified and confirmed. The description contains all the required information needed to easily reproduce the issue with the provided steps.
Issue Triage: Rejected/Closed | 4 | A public issue report is verified and closed/rejected because it is not a bug or cannot be reproduce using the provided steps in the description on the supported Magento versions.

## Docs awards and points

Contributors and maintainers can also earn rewards for pull requests (PRs) that are merged in the [DevDocs](https://github.com/magento/devdocs) and [MerchDocs](https://github.com/magento/merchdocs) repositories. These earned points add to contributor totals. Like code contributions, the Docs team assesses the PRs and applies labels (which may vary between repositories) to determine the level of work and achievements. Each PR receives one base achievement and potentially additional achievements.

{:.bs-callout-info}
Some documentation projects, such as MFTF and PWA, are published on the DevDocs site, but the source repositories exist outside of the DevDocs repository. The teams that maintain these projects have discretion over defining points for documentation contributions.

These examples show how reward points are calculated:

*  A contributor who submits a PR that reformats HTML into markdown or fixes typos will receive an Editorial (base achievement) label = 1 point
*  A contributor who submits a PR with a code sample update and new parameter descriptions will receive an Improvement (base achievement) label =  10 points _and_ either a Major update (additional achievement) label = 20 points _OR_ a Technical label (additional achievement) = 10 points

### Base achievements
{:.no_toc}

Every merged PR to the [DevDocs repository](https://github.com/magento/devdocs) receives one base achievement. If you enter a PR with editorial fixes and new content, you receive the Improvement and additional achievements.

Achievement | Points | Description
| ------------ | --- | --- |
Improvement | 10 | Contribution contains document improvements, adding missing features of inconsistency between code base and documentation, and similar.
Editorial | 1 | Contribution contains fixes for typos, grammatical inconsistencies, or minor rewrites to correct inaccuracies.

### Additional achievements
{:.no_toc}

Each PR can earn one of the following additional achievements. If you entered an editorial PR, you may not receive an additional achievement.

Achievement | Points | Description
| ------------ | --- | --- |
New topic | 30 | New topic submissions for content that has never existed in DevDocs, such as tutorials, references, instructions, and other relevant content.
Major update | 20 | Significant updates to existing content.
Technical | 10 | Updates to code or processes that alter the technical content of the document, such as code snippets, reference documentation, parameter names and values, and other relevant content.

If the PR earns recognition for significant updates and additions to the documentation, it may also receive a Special Achievement label, which garners an additional 20 points. This is determinable at the time of internal assessment. Certain issues may already be labeled as Special Achievement in an effort to prompt contribution---the PRs that fix these issues will receive the extra 20 points.

### Contribution programs
{:.no_toc}

Both DevDocs and MerchDocs have contribution programs for publicly recognizing and thanking contributors for their hard work and contributions to documentation.

The top monthly contributors and new contributors are thanked on [Twitter](https://twitter.com/MagentoDevDocs) and in Slack ([DevDocs](https://magentocommeng.slack.com/archives/CAN932A3H) and [MerchDocs](https://magentocommeng.slack.com/archives/CJP33CEKY)) each month. The top quarterly contributor will also be recognized through these channels each quarter.

Stay tuned for updates and improvements to the contributor programs for both DevDocs and MerchDocs.
