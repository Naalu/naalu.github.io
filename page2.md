---
title: Page Two
author: Karl Reger
layout: default
---

<img src="{{ site.baseurl }}/images/Aspens-Refsnider.jpg" class="img-responsive img-rounded" img style="margin-bottom: 10px" />

<i class="fas fa-camera fa-lg"></i>&nbsp; Photo by <a href="https://www.ultramtb.net/about-kurt-refsnider.html#/" target="_blank">Kurt Refsnider</a>

## Making Lists ##

Making lists is super easy.

- Just do this.
- Yeah, it's that easy.
- Fun, right?
- Another item

Boom!

## Mathematics! ##

We can typeset mathematics using snippets of [LaTeX](https://en.wikipedia.org/wiki/LaTeX) together with [MathJax](https://www.mathjax.org/).  For instance, this sentence -- which includes the equation $x^{2}+y^{2} = r^{2}$ -- is typeset as

<pre><code> For instance, this sentence -- which includes the equation $x^{2}+y^{2} = r^{2}$ -- is typeset as</code></pre>

You can also have your mathematical expressions separated from the text and placed on their own line for emphasis. For instance, if you wanted to type:

Here's some fancy mathematics that I don't really understand
\\[\log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.\\]
Man, that's complicated!

then you'd use the code:

<pre><code> Here's some fancy mathematics that I don't really understand
 \\[
 \log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.
 \\]
 Man, that's complicated!
</code></pre>

Notice that we had to use two backslashes as opposed to one when displaying mathematics!