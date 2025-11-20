---
title: Page Three
author: Karl Reger
layout: default
---

## Playground

Edit this page to include either the Fundamental Theorem of Calculus, the First Isomorphism Theorem for Groups, or the Central Limit Theorem.  Use correct mathematical typesetting.

An attempt:
Here's some fancy mathematics that I don't really understand
\\[\log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.\\]
Man, that's complicated!

## Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus consists of two parts that connect differentiation and integration.

**Part 1:** If $f$ is continuous on $[a,b]$ and we define

\\[F(x) = \int_a^x f(t) \, dt\\]

for $x \in [a,b]$, then $F$ is differentiable on $(a,b)$ and

\\[F'(x) = f(x)\\]

**Part 2:** If $f$ is continuous on $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then

\\[\int_a^b f(x) \, dx = F(b) - F(a)\\]

---

**Note:** Make sure your GitHub Pages site has MathJax or KaTeX enabled. For MathJax, add this to your HTML `<head>`:
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```