{% assign mftf = site.data.mftf | group_by: "module" | sort: "name"  %}
