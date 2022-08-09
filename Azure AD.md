Integration of [Azure AD](https://portal.azure.com) Login
Azure Active Directory OAuth Single Sign-On) with Magento using OAuth
2.0 Protocol. The Magento OAuth / OpenID Connect Single Sign-On (SSO)
extension makes it easy to use OAuth2 to set up Azure AD Login on
Magento (Azure AD Single Sign on).

The extension can be set up using other Social Media sources, as well as
custom OAuth and OIDC providers. It contains a lot of Single Sign-On
(SSO) features, like Attribute Mapping for user profiles, Role Mapping,
and so on. In this guide, we\'ll go over how to set up SSO between
Magento and Azure AD. At the end of this article, users should be able
to log into Magento using Azure AD. [Click
here](/magento-oauth-single-sign-sso) to read more about
the Magento OAuth Single Sign-On (OAuth & OpenID Connect Client)
extensions extra features.

The Magento OAuth & OpenID Connect Single Sign-On (SSO) extension makes
it possible to log into Magento securely using Azure AD as an OAuth and
OpenID Connect provider. You can also use alternative OAuth providers,
such as Azure B2C, Office 365, and other custom providers, to configure
the plugin. Advanced Single Sign-On features such as user profile
Attribute Mapping, Role Mapping, and so on are supported. We\'ll go over
how to set up SSO between Magento and Azure AD in this article. Users
should be able to log in to Magento through Azure AD by the end of this
guide.

[Click here](/magento-oauth-single-sign-sso) to know more
about other features we provide in Magento OAuth Single Sign-On ( OAuth
& OpenID Connect Client ) extension

### Steps to configure Azure AD OAuth & OpenID Single Sign-On (SSO) Login into Magento

### 1. Setup Azure Active Directory as OAuth Provider

Follow the steps below to configure Azure AD as OAuth Provider

###### Configure Azure AD as OAuth Provider

- Sign in to [Azure portal](https://portal.azure.com).

-   ```
    ![Azure AD SSO](https://plugins.miniorange.com/wp-content/uploads/2021/06/click-on-ad.webp)
    ```

- Select **Azure Active Directory**.

-   In the left-hand navigation pane, click the **App registrations**
    service, and click **New registration**.
    
- Enter the **Name** of your application.

- Select the **supported account types** checkbox.

- Select the **platform** as **Web**.

-   Copy Callback URL from the miniOrange OAuth Client plugin (Configure
    OAuth tab) and save it under the Redirect URL textbox.
    
-   Make sure the **\"Grant admin consent to openid and offline\_access
    permissions\"** option is enabled. When finished, click
    **Register**.
    
-   Azure AD assigns a unique Application ID to your application. The
    **Application ID** is your **Client ID** and the **Directory ID** is
    your **Tenant ID**, keep these values handy as you will need them to
    configure the miniOrange OAuth Client plugin.
    
-   Copy the Application (Client) ID and paste it as **Client ID** in
    miniOrange OAuth Client plugin.
    
-   Now, Go to **Certificates and Secrets** from the left navigaton pane
    and click on **New Client Secret**. Enter description and expiration
    time and click on **ADD** option.
    
-   Copy the secret key **\"value\"** and paste it as **Client Secret**
    under the miniOrange Magento OAuth Client Plugin.
    
-   Navigate to **API Permission** tab from the left pane and click on
    **Add a permission** option.
    
- Click on **Microsoft Graph**.

- Select **Delegated Permission** option.

-   Enable permissions for **Email**, **OpenID**, and **Profile** and
    click on **Add permission** button.

### 2. Configuring Magento 2 as OAuth Client {#step2 .listas-sub .saml_heading_font navtext="2. Configuring Magento 2 as OAuth Client"}

-   After successfully configuring OAuth Provider, go to OAuth Provider
    tab and configure **OAuth Provider Name**, **Client ID**, **Client
    Secret**, **Scope** and provided endpoints.
    
    **Please refer below Endpoints to configure the OAuth client**
    
    ----------------------------- -----------------------------------------------------------------------
      **Scope:**                    openid email profile
      **Authorize Endpoint:**       https://login.microsoftonline.com/\[tenant-id\]/oauth2/v2.0/authorize
      **Access Token Endpoint:**    https://login.microsoftonline.com/\[tenant-id\]/oauth2/v2.0/token
      **Get User Info Endpoint:**   https://graph.microsoft.com/oidc/userinfo
    
    
    
-   Click on the **Save** button to save the settings.

-   Click on the **Test Configuration** button.

-   You will see all the values returned by your OAuth Provider to
    Magento in a table. If you don\'t see value for First Name, Last
    Name, Email or Username, make the required settings in your OAuth
    Provider to return this information.

-   The miniOrange Premium Plugin also provides you the the feature to
    **auto redirect your user to the IdP Login Page**.

-   Go to the Sign In Settings tab and check options to enable SSO on
    your Magento site.

-   You have successfully configured your Magento 2 as an OAuth Client.
    You will see the SSO button on your frontend. Click on the button
    and test the SSO.

### 3: Attribute / Custom Mapping (Optional). \*This is Premium feature.

-   You can map attributes in the Attribute Mapping tab. Only username
    and email are allowed to be mapped in free version of the plugin.
    However, in the premium version of the plugin, you can map various
    attributes coming from your OAuth Provider to the attributes present
    in your Magento site.

### 4: Role Mapping (Optional). \*This is Premium feature.

-   You can specify a default role in the free plugin that will be
    allocated to all non-admin users when they conduct SSO.
-   Go to Attribute/Role mapping tab and navigate to Role Mapping
    section.
-   Select the Default Role and click on the Save button.

By configuring **Azure AD** as an **OAuth Provider** and **Magento** as
an **OAuth Client** using our Magento OAuth Client plugin, you have
successfully installed Magento Azure AD (Active Directory) Single
Sign-On (SSO). Within minutes, you\'ll be able to provide safe access to
your Magento site utilising Azure AD login credentials thanks to this
solution.

### Additional Resources 

-   [What is Single Sign-On (SSO)
    Login?](https://www.miniorange.com/single-sign-on-sso)
-   [Azure AD SSO \| Azure Single Sign-On (SSO)
    Login](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-single-sign-on)
-   [Azure AD -
    Overview](https://www.varonis.com/blog/azure-active-directory/)
-   [What is OAuth 2.0?](https://oauth.net/2/)
-   [How OAuth
    works?](https://docs.miniorange.com/articles/what-is-oauth)
-   [Azure AD - What is Azure Active
    Directory?](https://docs.miniorange.com/what-is-azure-active-directory)
-   [Magento SAML Single Sign On (SSO)
    Plugin.](/magento-saml-single-sign-on-sso)

If you are looking for anything which you cannot find, please drop us an
email on **<magentosupport@xecurify.com>**
