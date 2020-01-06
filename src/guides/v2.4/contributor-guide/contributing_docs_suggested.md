---
group: contributor-guide
title: Suggested topics for contribution
---

Our goal is to provide the Magento community with comprehensive and quality technical documentation. We believe that to accomplish that goal we need developer experts from the community to contribute to the documentation.

If you are interested in working on one of these projects, open a [pull request on this page]({{ site.githuburl23 }}contributor-guide/contributing_docs_suggested.md){:target="_blank"}. You can also email us at <DL-Magento-Doc-Feedback@magento.com>, chat us at [Community Engineering Slack channel](https://magentocommeng.slack.com/messages/CAN932A3H){:target="_blank"} , or post a comment in the GitHub issue linked to the project title.

The following GitHub issues are a great place to start:

*  [Help Wanted](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22){:target="_blank"}
*  [Good First Issue](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22){:target="_blank"}

If you take the issue and provide a PR to resolve it, make sure to add the link to the issue in the description. You can earn Contribution Points for every submitted to and merged into DevDocs.

{% include note.html type="info" content="All of the following suggestions come directly from the community." %}

<table>
   <colgroup>
      <col width="15%" />
      <col width="15%" />
      <col width="55%" />
      <col width="15%" />
   </colgroup>
   <thead>
      <tr>
         <th>Project</th>
         <th>Size</th>
         <th>Requirements</th>
         <th>Contributor</th>
      </tr>
   </thead>
   <tbody>
      <tr>
        <td><a href="https://github.com/magento/devdocs/issues/1276" target="_blank">Menu widgets</a></td>
        <td>Small</td>
        <td>
          <p>Help us improve the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_menu.html">Menu widget topic</a> by contributing working code samples and better descriptions of menu options.</p>
          <p><strong>Acceptance criteria:</strong></p>
            <ul>
              <li>Sample code showing the use of the menu widget.</li>
              <li>Sample code showing the use of other widgets that are not documented, including <code><a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_dialog.html">dropdowndialog</a></code> and <code><a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_list.html">list</a></code>.</li>
            </ul>
        </td>
        <td />
      </tr>
      <tr>
        <td><a href="https://github.com/magento/devdocs/issues/1465" target="_blank">Admin grids</a></td>
        <td>Small</td>
        <td>
          <p>Help us improve DevDocs by creating a new topic that explains how to create a grid in the Admin interface.</p>
          <p><strong>Acceptance criteria:</strong></p>
            <ul>
              <li>New content must be in the form of a tutorial or how-to.</li>
              <li>New content must list the steps needed to create a simple Admin grid.</li>
              <li>New content must contain working code samples with explanations.</li>
            </ul>
        </td>
        <td />
      </tr>
      <tr>
        <td><a href="https://github.com/magento/devdocs/issues/1437" target="_blank">Price adjustments</a></td>
        <td>Medium</td>
        <td>
          <p>Help us improve DevDocs by creating a new topic about price adjustments.</p>
          <p><strong>Acceptance criteria:</strong></p>
            <ul>
              <li>Describe how priced adjustments work.</li>
              <li>Describe what areas price adjustments affect.</li>
            </ul>
        </td>
        <td />
      </tr>
      <tr>
        <td><a href="https://github.com/magento/devdocs/issues/1637" target="_blank">Category attributes</a></td>
        <td>Medium</td>
        <td>
          <p>Help us improve the <a href="{{ page.baseurl }}/ui_comp_guide/howto/add_category_attribute.html">How to add a category attribute</a> topic by providing details about how to extend attributes.</p>
          <p><strong>Acceptance criteria:</strong></p>
            <ul>
              <li>Provide an extended explanation of the parameters <code>(key => value)</code> for the <code>addAttribute</code> function.
              <p>For example, <code>'type' => 'int'</code> and a list of all possible keys and their corresponding possible values.</p></li>
              <li>Provide an extended explanation of the XML tags inside the tag. For example:
                <ul>
                  <li>What basic structure should always be applied?</li>
                  <li>What inner tags should be added depending on the type of attribute being added?</li>
                  <li>What values and attributes should these tags include?</li>
                </ul></li>
            </ul>
        </td>
        <td />
      </tr>
      <tr>
        <td><a href="https://github.com/magento/devdocs/issues/434" target="_blank">Logging</a></td>
        <td>Large</td>
        <td>
          <p>Help us improve the <a href="{{ page.baseurl }}/config-guide/log/log-intro.html">Custom logging</a> topic by adding more details and examples.</p>
          <p><strong>Acceptance criteria:</strong></p>
            <ul>
              <li>Describe what you can do with Magento's stock logger implementation and when you should extend it or implement your own.</li>
              <li>Explain how to log a message to the system.log file.</li>
              <li>Explain how to log a message to a custom log file.</li>
              <li>Provide working sample code for each of the scenarios listed in the topic, including what code to run and where to look in the file system for the log message:
                <ul>
                  <li>Log to files and syslog</li>
                  <li>Send alerts and emails</li>
                  <li>Log specific servers and networked logging</li>
                  <li>Logging in development</li>
                </ul></li>
              <li>Differentiate between versions of Magento, if applicable.</li>
            </ul>
        </td>
        <td />
      </tr>
   </tbody>
</table>
