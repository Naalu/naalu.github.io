---
layout: default
title: Insights
permalink: /insights/
---

<div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">

# Insights

Occasional writing on applied data science, statistical methods, healthcare analytics, and lessons from teaching. I write to clarify my own thinking and share perspectives that might help others navigating similar problems.

<hr class="my-5">

{% for post in site.posts %}
<article class="mb-5">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="text-muted small">{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
  <a href="{{ post.url }}" class="text-decoration-none">Read more →</a>
</article>
{% endfor %}

{% if site.posts.size == 0 %}
<p class="text-muted">Posts coming soon. In the meantime, check out my <a href="/projects/">projects</a>.</p>
{% endif %}

    </div>
  </div>
</div>
