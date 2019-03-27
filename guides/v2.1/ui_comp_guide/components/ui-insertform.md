---
group: ui-components-guide
subgroup: components
title: InsertForm component
menu_title: InsertForm component
---

The InsertForm component inserts the [Form component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) into other components.

## Configuration options

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default
    </th>
  </tr>
  <tr>
    <td>
      <code>autoRender</code>
    </td>
    <td>
      When set to true, the Form component is automatically
      rendered during Insertform initialization. Otherwise,
      insertListing's <code>render</code> method should be called
      to render the Form.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>component</code>
    </td>
    <td>
      The path to the component’s JS constructor file in terms of
      RequireJS.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/form/components/insert-form</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>dataLinks</code>
      <ul>
        <li>
          <code>imports</code>
        </li>
        <li>
          <code>exports</code>
        </li>
      </ul>
    </td>
    <td>
      Flags that enable linking between insertForm's externalValue
      (the object that stores Form information) and Form value.
      <ul>
        <li>Enable import from the inserted Form value to the
        insertForm's externalValue.
        </li>
        <li>Enable export from the insertForm's externalValue to
        the inserted Form aggregated value.
        </li>
      </ul>
    </td>
    <td>
      Object
      <ul>
        <li>Boolean
        </li>
        <li>Boolean
        </li>
      </ul>
    </td>
    <td>
      <code>false<br />
      false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>externalProvider</code>
    </td>
    <td>
      DataSource of the inserted Form.
    </td>
    <td>
      String
    </td>
    <td>
      <code>''</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>formSubmitType</code>
    </td>
    <td>
      Expect that Form will save data using AJAX. Links
      responseData and responseStatus with form. Export to form
      submit type.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>ns</code>
    </td>
    <td>
      Namespace of the inserted form.
    </td>
    <td>
      String
    </td>
    <td>
      <code>''</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>realTimeLink</code>
    </td>
    <td>
      Enables link between insertForms's externalValue and value.
      Here 'link' means the two-way <a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html#links">
      links property</a> of UI components, which allows immediate
      update.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>render_url</code>
    </td>
    <td>
      With default <code>render_url(mui/index/render)</code> form
      will be without form buttons. To get Form with buttons, url
      must be changed to <code>mui/index/render_handle</code> and
      next GET parameters:
      <ul>
        <li>buttons=1 (flag to get buttons)
        </li>
        <li>handle=%layout namespace%/ (buttons scope)
        </li>
      </ul>
    </td>
    <td>
      Url
    </td>
    <td>
      <code>mui/index/render</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>showSpinner</code>
    </td>
    <td>
      Show spinner while the Form is rendered.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>toolbarContainer</code>
    </td>
    <td>
      Path to component that has toolbarSection property with
      reference to HTML element. Component will insert Form buttons
      to this section.
    </td>
    <td>
      String
    </td>
    <td>
      <code>''</code>
    </td>
  </tr>
</table>
