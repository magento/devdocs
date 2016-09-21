---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Bookmark Component
menu_title: Bookmark Component
menu_node:
menu_order: 9
version: 2.0
github_link: ui-components/ui-secondary-bookmark.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-bookmark.html

---

<h3 id="bookmark">UI Bookmark component</h3>

Bookmark Component is responsible for storing active and changed states of data grids. It includes state of filters, columns position, applied sorting, pagination, and so on.

Bookmark Component use DB as persistence storage for grid`s state.

<table>
<tbody>
<tr>
    <th>Field name</th>
    <th>Type</th>
    <th>Description</th>
</tr>
<tr>
    <td>(PK) bookmark_id</td>
    <td>int(10)</td>
    <td>Bookmark identifier</td>
</tr>
<tr>
    <td>(UX1) user_id</td>
    <td>int(10)</td>
    <td>User Id</td>
</tr>
<tr>
    <td>(UX1) namespace</td>
    <td>varchar(255)</td>
    <td>Bookmark namespace</td>
</tr>
<tr>
    <td>(UX1) identifier</td>
    <td>varchar(255)</td>
    <td>Bookmark identifier</td>
</tr>
<tr>
    <td>current</td>
    <td>smallint(6)</td>
    <td>Mark current bookmark per user, namespace and identifier</td>
</tr>
<tr>
    <td>title</td>
    <td>varchar(255)</td>
    <td>Bookmark title</td>
</tr>
<tr>
    <td>config</td>
    <td>longtext</td>
    <td>Bookmark config (JSON config for Js Bookmark component)</td>
</tr>
<tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>Bookmark created at time</td>
</tr>
<tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>Bookmark updated at time</td>
</tr>
</tbody>
</table>

PK - increment Id

UX1 - unique key

#### Bookmarks JS Component Structure

Bookmark component consists of

* Collection of bookmarks located at `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\bookmarks.js`

    Template for collection at `app\code\Magento\Ui\view\base\web\templates\grid\controls\bookmarks\bookmarks.html`
    
* Child elements which represent a separate view located at `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\view.js`

    Template for child element at `app\code\Magento\Ui\view\base\web\templates\grid\controls\bookmarks\view.html`

Bookmarks use `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\storage.js`
custom data storage which allows saving bookmark state externally (saved bookmarks are available on any device and in any browser).

The Bookmark component provides the following options:

* template option
* component option

<pre>
templates: {
    view: {
        component: 'Magento_Ui/js/grid/controls/bookmarks/view'
        template: 'path/to/template'
    },
    newView: {
        label: 'New View',
        index: '${ Date.now() }'
    }
}
</pre>

* storageConfig option

<pre>
storageConfig: {
    saveUrl: 'path/to/save',
    deleteUrl: 'path/to/delete',
    namespace: 'namespace'
}
</pre>
