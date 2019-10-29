---
group: admin-style-guide
subgroup: Writing and Content
title: Admin Buttons and Links Usage
menu_title: Buttons and Links Usage
menu_order: 3
menu_node:
---
Buttons are primarily used for task-based navigation, and links are primarily used for site navigation.

However, both buttons and links can function as calls to action (CTAs). Whether button or link, a CTA is used to encourage a user to take an action. CTA labels use title case and active verbs, should be short, and should use labels consistently across the Admin panel.

For more details, see [Title Case standards]({{ page.baseurl }}/design-styleguide/capitalization/capitalization.html#title-case) in Capitalization.

*Examples:*

<ul style="list-style-type:none">
  <li><strong>No</strong> – “Free Demo”</li>
  <li>Yes – “Sign Up for Free Demo”</li>
</ul>

<ul style="list-style-type:none">
  <li><strong>No</strong> – “New Rule”</li>
  <li>Yes – “Add Rule”</li>
</ul>

## Buttons

Buttons are calls to action, and their labels should be limited to three words (four words maximum, if including a short verb or word).

Buttons can be used for:

*  Calls to action for task flows: to begin, continue, or submit a task

*  Navigation in featured modules of content, like banners and content teasers

Button types are primary, secondary, and tertiary. Each page should have a maximum limit of one primary button. Split buttons include multiple actions. Button counts in a Button Bar or any array of buttons should be limited to four buttons, maximum.

**For design specs,** see [Buttons]({{ page.baseurl }}/pattern-library/controls/buttons/buttons.html) and [Button Bar]({{ page.baseurl }}/pattern-library/controls/button-bar/button-bar.html) patterns.

## Links

Minimize the amount of words — within 2-5 words, ideally — in a link label and use best practices in finding optimal keywords.

Other links guidance includes:

*  **Avoid spawning new windows / tabs.** As a general rule, new tabs and windows can confuse users and cause them to close their browser windows. However, exceptions for usage do exist.

*  **External-link icon.** Only use when linking to a non-Magento page. ... *Correct example:* Go to [Wikipedia](https://www.wikipedia.org/)

Links can be used as content links (for site navigation) and non-primary CTAs. When used as CTAs, link labels should be long enough to be understood, but as short as possible. However, a link CTA's label may sometimes stretch a few words longer than a button label.

**For link typography specs,** see [Legal and Link Text]({{ page.baseurl }}/design-styleguide/typography/typography.html#legal-and-link-text) in Typography standards.

## Accessibility

*  **Never use “click here” as a label.** Labels should identify and describe the target of the link.

*  **Avoid using file names or URLs as link labels.**

*  **Clearly identify file download links.** Indicate in the label that the user is about to "download" a file.

*  **For anchor links, use "Jump to" before the link.** This identifies the link as an anchor and that it won't navigate users to another page.

*  **Use linked icons with care.** Users may not know what the icon means, so for icons that aren't globally recognized, pair a linked label with a linked icon. See [Iconography standards]({{ page.baseurl }}/design-styleguide/iconography/iconography.html).

## Labels Best Practices

<ul>
  <li><strong>Parallelism.</strong> When linking to a page with a direct reference, match the exact wording of the page title or, for anchor tags, the section heading title.</li>
  <li><strong>PDFs and other file formats.</strong>
    <ul>
      <li>Append the document-type acronym after the link label and link only the document title.</li>
      <li>Use all caps case and do not add a period to the acronym. See <span markdown="1">[All Caps case standards]({{ page.baseurl }}/design-styleguide/capitalization/capitalization.html#all-caps)</span> in Capitalization.</li>
      <li>Do not use the file name or URL in the content &#8212; use the title of the document.</li>
    </ul>
    <em>Example:</em>
      <ul style="list-style-type:none">
        <li><strong>No</strong> – “<a href="javascript:void(0);">Download FAQs (.PDF)</a>”</li>
        <li><strong>No</strong> – “<a href="javascript:void(0);">Download FAQs (.pdf)</a>”</li>
        <li><strong>No</strong> – “<a href="javascript:void(0);">Download faqs-bh-v1.pdf</a>”</li>
        <li>Yes – “<a href="javascript:void(0);">Download FAQs (PDF)</a>”</li>
      </ul>
  </li>
</ul>

## When to Verify a Call to Action

For actions like “Delete” and “Cancel”, always consider the possibility that the user took the action by mistake.

If the user will lose a lot of work — or if the user's task is not easily recoverable — after taking the action, create an interstitial verify step that happens first when the action is selected.

### Label and Content Format

Use the following template to create content for a verify step:

*  **Title:** Before you [ Task Label ]

*  **Explainer content:** [ Specify the full implications for the action the user wants to take. ]

*  **Verification content:** Are you sure you want to continue?

*  **Calls to action:** [ Task Label ], Cancel ... *Note:* The "Task Label" is the primary call to action and matches the Title's Task Label.

## Button Labels Used in Admin

**Specify actions in buttons:** Appending a specific label to a call to action’s verb clarifies the action that the user is taking. ... *Example:* "Add Row" is more contextual and understandable than "Add".

The following labels are the standards for Admin labels. Refer to these footnotes for call-to-action hierarchy:
<ul style="list-style-type:none">
  <li><strong>*</strong> — A primary call to action.</li>
  <li><strong>**</strong> — In specific contexts, can be used as a primary call to action.</li>
</ul>

<table>
  <tbody>
    <tr>
      <th style="width:30%">Label</th>
      <th style="width:70%">Usage Guideline</th>
    </tr>
    <tr>
      <td>Add<strong>*</strong><br />Add [ + Label ]<strong>*</strong></td>
      <td>Use to create a new object or to add an existing object. As a primary call to action, the label usually matches the page title.<br /><br />
      “Create [ + Label ]” is also used, but only as an action for creating a new object, not adding an existing one.</td>
    </tr>
    <tr>
      <td>Cancel<br />Cancel [ + Label ]</td>
      <td>In Admin, "Cancel" is used as a link in the Button Bar. Use "Cancel" to end a task flow, with changes unsaved. If the cancellation is not easily recoverable, then include a verify step.</td>
    </tr>
    <tr>
      <td>Clear Form</td>
      <td>Use to erase all entries on a form, not to be confused with “Reset [ + Label ]”.
      <br /><br />For actions that are not easily recoverable, include a verify step.</td>
    </tr>
    <tr>
      <td>Delete<br />Delete [ + Label ]</td>
      <td>Use to permanently remove an object.<br /><br />
      If the removal is not easily recoverable, then include a verify step.</td>
    </tr>
    <tr>
      <td>Edit<br />Edit [ + Label ]</td>
      <td>When to use "Edit" vs. "Change":<br /><br />
        <ul>
          <li>Use "Edit" when an object's information is edited.</li>
          <li>Use “Change” when switching from one object to another.</li>
          <li><em>What's the difference?</em> When users want to change a payment method, they don’t want to “Edit” the information for the specified payment method.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Continue<strong>*</strong></td>
      <td>Use to navigate linear task flows.</td>
    </tr>
    <tr>
      <td>Filter<br />Apply Filter</td>
      <td>For “Filter”, use to select categories to narrow a data set. For “Apply Filter”, use to activate the selected filters in the data set. Do not confuse with “Sort”.</td>
    </tr>
    <tr>
      <td>Get Started<strong>*</strong></td>
      <td>Use for a task-entry step (setting expectations and providing prerequisites), before a user has entered a task.</td>
    </tr>
    <tr>
      <td>Reset [ + Label ]</td>
      <td>Indicate to users what data is being reset and how the data will reset.
      <br /><br />For actions that are not easily recoverable, include a verify step.<br /><br />
      <em>Example:</em> “Reset to Defaults”. Do not confuse with “Clear Form”. </td>
    </tr>
    <tr>
      <td>Save<strong>**</strong><br />Save [ + Label ]<strong>**</strong></td>
      <td>Use to capture changes or to submit an entry. "Save" is usually use a secondary task, when a user wants to save changes and not continue, but “Save” can be used as a primary call to action, in Admin.</td>
    </tr>
    <tr>
      <td>Search<strong>*</strong></td>
      <td>Use for search tasks, not filter tasks.</td>
    </tr>
    <tr>
      <td>Sort</td>
      <td>Use to select a category from which to sort data, not to be confused with “Filter”.</td>
    </tr>
    <tr>
      <td>Submit<strong>*</strong><br />Submit [ + Label ]<strong>*</strong></td>
      <td>Use to complete a task or to submit it for completion. Insert the specific name of task as the label to clarify for users what they are submitting.</td>
    </tr>
  </tbody>
</table>
