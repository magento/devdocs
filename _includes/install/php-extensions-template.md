{% for item in platform-req %}
  {% unless item[0] == 'php' %}
* {{ item[0] }}
  {% endunless %}
{% endfor %}