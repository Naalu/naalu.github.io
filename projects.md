---
layout: default
title: Projects
permalink: /projects/
---

<div class="container py-5">

# Projects

A selection of work that demonstrates my approach to solving real problems with data. Each project includes the business context, methodology, tools used, and measurable outcomes.

<div class="row mt-5">
  {% for project in site.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>

</div>
