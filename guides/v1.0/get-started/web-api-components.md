---
layout: default
title: The components of a web API request
---

<div class="container bs-docs-container">
  <div class="row">
    <div class="jumbotron">
      <h1 class="api1" id="api-services">{{ page.title }}</h1>
    </div>
    <div class="col-xs-3">
      <p>
        &nbsp;
      </p>
    </div>
    <div class="col-xs-9" role="main">
      <div class="bs-docs-section">
        <p><a href="{{ site.githuburl }}get-started-with-apis/web-api-components.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;
          <img src="{{ site.baseurl }}common/images/newWindow.gif" />
        </p>
        <p>Each Magento web API call contains of a combination of these components:</p>
        <table style="width:100%">
          <tr bgcolor="lightgray">
            <th>Call component</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <p>Authentication token</p>
            </td>
            <td>
              <p>A token proves that you are the owner of a Magento
                account.</p>
                <p>See <a href="#authentication">Authentication</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td><p>Endpoint</p></td>
            <td><p>A URI that includes the server that handles your request, the resource name, and any template parameters.</p>
            <p>For example, <code>http://magento.ll/index.php/rest/V1/customerGroups/:id</code>.</p>
            </td>
          </tr>
          <tr>
            <td><p>Call payload</p></td>
            <td><p>A set of input fields that you supply with the request.
          API operations have both
          <em>required</em> and
          <em>optional</em> inputs.
        </p>
            </td>
          </tr>
          <tr>
            <td><p>Call formats</p></td>
            <td><p>Magento supports REST calls. In addition, you can send JSON-formatted call
              payloads.</p>
            </td>
          </tr>
          <tr>
            <td><p>HTTP headers</p></td>
            <td><p>Headers specify authentication credentials, the call request and response formats,
              and other information.</p>
            </td>
          </tr>
          </tbody>
        </table>


      </div>
    </div>
  </div>
</div>






