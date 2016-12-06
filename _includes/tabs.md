{% if page.tabgroup %}
{% assign tabs = site.pages | where: "tabgroup", page.tabgroup | where: "guide_version", page.guide_version | sort: "tabweight" %}
<div class="tabs-container">
    {% for tab in tabs %}
    <div class="tab {%if tab.url == page.url%}current-tab{% endif %}" id="{{tab.id}}">
        <a href="{{site.toc_baseurl}}{{tab.url}}">{%if tab.tablabel %}{{tab.tablabel}}{% else %}{{tab.title}}{% endif %}</a>
    </div>
    {% endfor %}
</div>
{% endif %}
