---
layout: default
title: Home
full_width: true
description: "Karl Reger is a data scientist and statistician specializing in healthcare analytics, machine learning, and applied statistics. View projects and connect."
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-7">
        <p class="text-uppercase fw-semibold mb-2" style="letter-spacing: 0.1em; font-size: 0.875rem; color: var(--color-accent);">Data Scientist &amp; Statistician</p>
        <h1 class="display-4 fw-bold mb-3">Turning complex data into actionable insights</h1>
        <p class="lead mb-4">
          I'm a graduate statistics student at Northern Arizona University with a Python-first approach to machine learning and deep roots in R-based statistical modeling. From healthcare systems to production ML pipelines, I build solutions that create measurable business impact.
        </p>
        <div class="d-flex flex-wrap gap-2">
          <a href="/projects/" class="btn btn-primary btn-lg">
            <i class="fas fa-folder-open me-2"></i>View Projects
          </a>
          <a href="/assets/files/Karl_Reger_Resume.pdf" class="btn btn-outline-secondary btn-lg" target="_blank">
            <i class="fas fa-download me-2"></i>Resume
          </a>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 text-center mt-5 mt-lg-0">
        <div class="hero-headshot d-inline-block">
          <img src="/assets/img/headshot.jpg" alt="Karl Reger"
               class="rounded-circle img-fluid"
               style="max-width: 280px;">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- At a Glance Section -->
<section class="py-5 bg-alt">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="glance-card h-100">
          <div class="icon-wrapper">
            <i class="fas fa-code fa-2x"></i>
          </div>
          <h5 class="fw-semibold">Python &amp; R</h5>
          <p class="text-muted small mb-0">Bilingual in ML engineering and statistical modeling</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="glance-card h-100">
          <div class="icon-wrapper">
            <i class="fas fa-heartbeat fa-2x"></i>
          </div>
          <h5 class="fw-semibold">Healthcare Focus</h5>
          <p class="text-muted small mb-0">Published researcher in health services and biostatistics</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="glance-card h-100">
          <div class="icon-wrapper">
            <i class="fas fa-graduation-cap fa-2x"></i>
          </div>
          <h5 class="fw-semibold">Graduate Research</h5>
          <p class="text-muted small mb-0">MS Statistics with focus on applied ML methods</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="glance-card h-100">
          <div class="icon-wrapper">
            <i class="fas fa-users fa-2x"></i>
          </div>
          <h5 class="fw-semibold">Teaching &amp; Communication</h5>
          <p class="text-muted small mb-0">Trained 25+ data scientists with 92% placement rate</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Methods & Expertise Section -->
<section class="py-5">
  <div class="container">
    <div class="row justify-content-center mb-5">
      <div class="col-lg-8 text-center">
        <h2 class="fw-bold mb-3">Statistical &amp; ML Foundations</h2>
        <p class="text-muted">From classical inference to modern machine learning—I bridge rigorous statistical theory with practical implementation.</p>
      </div>
    </div>
    <div class="row g-4">

      <!-- Statistical Inference -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-chart-bar text-primary me-2"></i>Statistical Inference
          </h5>
          <div class="math-display mb-3">
            $$\hat\theta = \arg\max_\theta \mathcal{L}(\theta \mid X)$$
          </div>
          <p class="text-muted small">Maximum likelihood estimation, hypothesis testing, confidence intervals, and Bayesian inference for rigorous uncertainty quantification.</p>
        </div>
      </div>
      
      <!-- Regression & GLMs -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-project-diagram text-primary me-2"></i>Regression &amp; GLMs
          </h5>
          <div class="math-display mb-3">
            $$g(E[Y]) = \beta_0 + \beta_1 X_1 + \cdots + \beta_p X_p$$
          </div>
          <p class="text-muted small">Linear and generalized linear models, mixed effects, regularization (Ridge, LASSO), and model diagnostics for interpretable predictions.</p>
        </div>
      </div>
      
      <!-- Machine Learning -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-brain text-primary me-2"></i>Machine Learning
          </h5>
          <div class="math-display mb-3">
            $$\min_\theta \frac{1}{n}\sum_{i=1}^{n} L(y_i, f_\theta(x_i)) + \lambda R(\theta)$$
          </div>
          <p class="text-muted small">Ensemble methods, gradient boosting, neural networks, and cross-validation for predictive modeling at scale.</p>
        </div>
      </div>
      
      <!-- Time Series -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-chart-line text-primary me-2"></i>Time Series
          </h5>
          <div class="math-display mb-3">
            $$Y_t = \phi_1 Y_{t-1} + \cdots + \theta_q \varepsilon_{t-q} + \varepsilon_t$$
          </div>
          <p class="text-muted small">ARIMA, state-space models, seasonality decomposition, and forecasting for temporal data analysis.</p>
        </div>
      </div>
      
      <!-- Experimental Design -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-flask text-primary me-2"></i>Experimental Design
          </h5>
          <div class="math-display mb-3">
            $$\tau = E[Y(1) - Y(0)]$$
          </div>
          <p class="text-muted small">A/B testing, causal inference, power analysis, and randomization strategies for measuring treatment effects.</p>
        </div>
      </div>
      
      <!-- Dimensionality Reduction -->
      <div class="col-md-6 col-lg-4">
        <div class="method-card h-100">
          <h5 class="fw-semibold mb-3">
            <i class="fas fa-compress-arrows-alt text-primary me-2"></i>Dimensionality Reduction
          </h5>
          <div class="math-display mb-3">
            $$X \approx U_k \Sigma_k V_k^\top$$
          </div>
          <p class="text-muted small">PCA, SVD, factor analysis, and embedding methods for feature extraction and visualization.</p>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- Featured Projects Section -->
<section class="py-5 bg-alt">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold mb-0">Featured Projects</h2>
      <a href="/projects/" class="text-decoration-none">View all <i class="fas fa-arrow-right ms-1"></i></a>
    </div>
    <div class="row g-4">

      <!-- Project 1: Cancer Research -->
      <div class="col-md-6 col-lg-4">
        <a href="/projects/cancer-research/" class="text-decoration-none">
          <div class="card h-100 project-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="project-icon me-3">
                  <i class="fas fa-microscope fa-lg text-primary"></i>
                </div>
                <h5 class="card-title mb-0">Health Services Research</h5>
              </div>
              <p class="card-text">First-author statistical research analyzing patient outcomes, currently under peer review in <em>Cancers</em>.</p>
              <div class="mt-3">
                <span class="tag">R</span>
                <span class="tag">Statistical Modeling</span>
                <span class="tag">Healthcare</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      
      <!-- Project 2: Opioid Analysis -->
      <div class="col-md-6 col-lg-4">
        <a href="/projects/opioid-analysis/" class="text-decoration-none">
          <div class="card h-100 project-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="project-icon me-3">
                  <i class="fas fa-pills fa-lg text-primary"></i>
                </div>
                <h5 class="card-title mb-0">Medicare Opioid Analysis</h5>
              </div>
              <p class="card-text">Identified prescription abuse patterns in Medicare data using ensemble ML methods with an ethical AI framework.</p>
              <div class="mt-3">
                <span class="tag">Python</span>
                <span class="tag">Machine Learning</span>
                <span class="tag">Healthcare</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      
      <!-- Project 3: NZ Tax Authority -->
      <div class="col-md-6 col-lg-4">
        <a href="/projects/nz-address-validation/" class="text-decoration-none">
          <div class="card h-100 project-card">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="project-icon me-3">
                  <i class="fas fa-map-marker-alt fa-lg text-primary"></i>
                </div>
                <h5 class="card-title mb-0">ML Address Validation</h5>
              </div>
              <p class="card-text">Built a production ML pipeline for New Zealand's tax authority, saving NZ$100,000+ annually.</p>
              <div class="mt-3">
                <span class="tag">Python</span>
                <span class="tag">Production ML</span>
                <span class="tag">Government</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      
    </div>
  </div>
</section>

<!-- Contact CTA Section -->
<section class="py-5">
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-lg-8">
        <h2 class="fw-bold mb-3">Let's Connect</h2>
        <p class="text-muted mb-4">
          I'm open to data scientist and ML engineer roles, research collaborations, and interesting conversations about statistics and machine learning.
        </p>
        <div class="d-flex flex-wrap justify-content-center gap-2">
          <a href="mailto:k.c.reger@gmail.com" class="btn btn-primary">
            <i class="fas fa-envelope me-2"></i>Email Me
          </a>
          <a href="https://linkedin.com/in/chris-reger" target="_blank" class="btn btn-outline-secondary">
            <i class="fab fa-linkedin me-2"></i>LinkedIn
          </a>
          <a href="https://github.com/naalu" target="_blank" class="btn btn-outline-secondary">
            <i class="fab fa-github me-2"></i>GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
