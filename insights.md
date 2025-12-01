---
layout: default
title: Insights
permalink: /insights/
description: "Articles and insights on applied data science, statistical methods, healthcare analytics, and machine learning by Karl Reger."
---

# Insights

Occasional writing on applied data science, statistical methods, healthcare analytics, and lessons from teaching. I write to clarify my own thinking and share perspectives that might help others navigating similar problems.

---

{% for post in site.posts %}
<article class="mb-5">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="text-muted small">{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <a href="{{ post.url }}" class="text-decoration-none">Read more →</a>
</article>
{% endfor %}

{% if site.posts.size == 0 %}
*Posts coming soon. In the meantime, check out my [projects](/projects/).*
{% endif %}
