{% assign mftf = site.data.codebase.mftf.functional-tests | group_by: "module" | sort: "name"  %}
