---
layout: page
title: Publications
permalink: /publications/
---

## Conference Publications

{% include pub-list.html items=site.data.publications.papers %}

{% if site.data.publications.workshops.size > 0 %}
## Workshop Publications

{% include pub-list.html items=site.data.publications.workshops %}
{% endif %}

{% if site.data.publications.posters.size > 0 %}
## Posters

{% include pub-list.html items=site.data.publications.posters %}
{% endif %}

{% if site.data.publications.preprints.size > 0 %}
## Pre-prints

{% include pub-list.html items=site.data.publications.preprints %}
{% endif %}
