---
group: ui-components-guide
subgroup: components
title: Columns component
menu_title: Columns component
---

The Columns component is a collection of columns. It renders the `<table>` element and displays the records of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) in this table.

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
      <code>displayMode</code>
    </td>
    <td>
      Initial display mode.
    </td>
    <td>
      String
    </td>
    <td>
      <code>'grid'</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>displayModes</code>
    </td>
    <td>
      List of available display modes.
    </td>
    <td>
      {<br />
      [name: string]: <a href="#displaymode">DisplayMode</a><br />
      }
    </td>
    <td>
      <code>{<br />
      value: 'grid',<br />
      label: 'Grid',<br />
      template: 'ui/grid/listing'<br />
      }</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>dndConfig</code>
    </td>
    <td>
      Configuration of the DragAndDrop component.
    </td>
    <td>
      Object
    </td>
    <td>
      Specified in the <a href=
      "{{ page.baseurl }}/ui_comp_guide/components/ui-draganddrop.html">
      DragAndDrop component configuration</a>.
    </td>
  </tr>
  <tr>
    <td>
      <code>stickyTmpl</code>
    </td>
    <td>
      Path to the <code>.html</code> template used for the <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-toolbar.html"> Toolbar component</a> when it receives a fixed position.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/grid/sticky/listing</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      Path to the component’s <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/grid/listing</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>editorConfig</code>
    </td>
    <td>
      Configuration of the InlineEditing component.
    </td>
    <td>
      Object
    </td>
    <td>
      Specified in the <a href= "{{ page.baseurl }}/ui_comp_guide/components/ui-insertlisting.html"> InlineEditing component configuration</a>.
    </td>
  </tr>
  <tr>
    <td>
      <code>viewSwitcherTmpl</code>
    </td>
    <td>
      Path to the .html template for rendering the list of
      available display modes. By default this list is not
      displayed.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/grid/view-switcher</code>
    </td>
  </tr>
</table>

### DisplayMode interface {#displaymode}

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
      Required
    </th>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      Label for the list of available modes.
    </td>
    <td>
      String
    </td>
    <td>
      Optional
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      Path to the <code>.html</code> template used to render
      listing in the selected mode.
    </td>
    <td>
      String
    </td>
    <td>
      Optional
    </td>
  </tr>
  <tr>
    <td>
      <code>value</code>
    </td>
    <td>
      Mode's identifier.
    </td>
    <td>
      String
    </td>
    <td>
      Optional
    </td>
  </tr>
</table>
