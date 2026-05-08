---
home: true
---

<style>
.landing-hero {
  padding: 86px 0 74px;
  background: radial-gradient(circle at 12% 12%, rgba(20, 124, 117, 0.18), rgba(0, 0, 0, 0) 34%),
              radial-gradient(circle at 86% 18%, rgba(9, 109, 217, 0.18), rgba(0, 0, 0, 0) 32%),
              linear-gradient(135deg, rgb(248, 251, 255), rgb(238, 245, 251) 48%, rgb(247, 239, 229));
  border-radius: 12px;
  margin-bottom: 2rem;
}

.landing-hero h1 {
  font-size: 2.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  line-height: 1.25;
  margin-bottom: 1rem;
}

.landing-hero .hero-subtitle {
  font-size: 1.1rem;
  color: rgb(107, 114, 128);
  margin-bottom: 2rem;
}

.landing-hero .hero-tags {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.landing-hero .hero-tag {
  background: rgba(9, 109, 217, 0.1);
  color: rgb(9, 109, 217);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.landing-hero .hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.landing-hero .hero-actions a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.landing-hero .hero-actions .btn-primary {
  background: rgb(9, 109, 217);
  color: white;
}

.landing-hero .hero-actions .btn-primary:hover {
  background: rgb(7, 89, 178);
}

.landing-hero .hero-actions .btn-secondary {
  background: rgba(9, 109, 217, 0.1);
  color: rgb(9, 109, 217);
}

.landing-hero .hero-actions .btn-secondary:hover {
  background: rgba(9, 109, 217, 0.2);
}

.landing-section {
  padding: 60px 0;
}

.landing-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 0.5rem;
}

.landing-section .section-label {
  font-size: 0.85rem;
  color: rgb(156, 163, 175);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.landing-section .section-desc {
  color: rgb(107, 114, 128);
  margin-bottom: 2rem;
  max-width: 600px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: rgba(9, 16, 30, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  padding: 1.5rem;
  color: white;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card .card-number {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
}

.product-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.product-card p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.blog-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.blog-links a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(9, 109, 217, 0.1);
  color: rgb(9, 109, 217);
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.blog-links a:hover {
  background: rgba(9, 109, 217, 0.2);
}

.series-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.series-card {
  display: block;
  padding: 1.5rem;
  border-radius: 8px;
  background: rgb(249, 250, 251);
  border: 1px solid rgb(229, 231, 235);
  text-decoration: none;
  transition: all 0.2s;
}

.series-card:hover {
  background: rgb(243, 244, 246);
  border-color: rgb(209, 213, 219);
}

.series-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 0.3rem;
}

.series-card p {
  font-size: 0.85rem;
  color: rgb(107, 114, 128);
}

.oss-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.oss-card {
  display: block;
  padding: 1.5rem;
  border-radius: 8px;
  background: rgb(249, 250, 251);
  border: 1px solid rgb(229, 231, 235);
  text-decoration: none;
  transition: all 0.2s;
}

.oss-card:hover {
  background: rgb(243, 244, 246);
}

.oss-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 0.5rem;
}

.oss-card p {
  font-size: 0.9rem;
  color: rgb(107, 114, 128);
}

.cta-section {
  padding: 60px 0;
  text-align: center;
}

.cta-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 1rem;
}

.cta-section a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: rgb(9, 109, 217);
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.cta-section a:hover {
  background: rgb(7, 89, 178);
}

.about-section {
  padding: 60px 0;
  text-align: center;
}

.about-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(17, 24, 39);
  margin-bottom: 1rem;
}

.about-section a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: rgba(9, 109, 217, 0.1);
  color: rgb(9, 109, 217);
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.about-section a:hover {
  background: rgba(9, 109, 217, 0.2);
}
</style>

<div class="landing-hero">

# 理解世界，然后用 AI 改造它

<p class="hero-subtitle">Developer · Builder · Writer</p>

<div class="hero-tags">
  <span class="hero-tag">工程实践</span>
  <span class="hero-tag">编程工作流</span>
  <span class="hero-tag">公开项目</span>
</div>

<div class="hero-actions">
  <a href="/membership/" class="btn-primary">加入会员</a>
  <a href="/products/" class="btn-secondary">查看产品</a>
  <a href="/article/" class="btn-secondary">阅读内容</a>
</div>

</div>

<div class="landing-section">

<p class="section-label">Products</p>

## 产品不是展示柜，是我把经验交付出去的方式。

<div class="product-grid">
  <a href="/products/" class="product-card">
    <div class="card-number">01</div>
    <h3>实战项目</h3>
    <p>围绕项目管理、后端工程和业务建模，把"能写代码"推进到"能交付产品"。</p>
  </a>
  <a href="/products/" class="product-card">
    <div class="card-number">02</div>
    <h3>AI 编程实践</h3>
    <p>记录 AI 辅助开发的工具、提示词、工作流和工程场景。</p>
  </a>
  <a href="/products/" class="product-card">
    <div class="card-number">03</div>
    <h3>独立开发实验</h3>
    <p>从想法、验证、上线到迭代，持续整理小产品的方法论。</p>
  </a>
</div>

</div>

<div class="landing-section">

<p class="section-label">Blog</p>

## 内容分两种：深度长文，和高频短帖。

<p class="section-desc">长文负责完整表达，短帖负责记录观察。你可以先读文章建立判断，再决定是否继续看产品、专栏或会员内容。</p>

<div class="blog-links">
  <a href="/article/">全部文章</a>
  <a href="/blog/longform/">长文（公众号）</a>
  <a href="/blog/x/">短帖（X）</a>
</div>

</div>

<div class="landing-section">

<p class="section-label">Series</p>

## 专栏把散落的文章，变成可以连续阅读的路径。

<div class="series-grid">
  <a href="/series/" class="series-card">
    <h4>技术进阶</h4>
    <p>工程能力、项目经验、面试与成长路径</p>
  </a>
  <a href="/series/" class="series-card">
    <h4>AI 编程</h4>
    <p>工具、工作流、案例和效率系统</p>
  </a>
  <a href="/series/" class="series-card">
    <h4>独立开发</h4>
    <p>产品想法、验证、上线与运营复盘</p>
  </a>
  <a href="/series/" class="series-card">
    <h4>程序人生</h4>
    <p>职业选择、长期主义和个人叙事</p>
  </a>
</div>

</div>

<div class="landing-section">

<p class="section-label">Open Source</p>

## 项目是最直接的信任入口。

<div class="oss-grid">
  <a href="/oss/" class="oss-card">
    <h4>开源项目</h4>
    <p>看我维护、参与或推荐的公开项目，用代码和长期痕迹建立信任。</p>
  </a>
  <a href="https://github.com/WildChen" target="_blank" class="oss-card">
    <h4>GitHub 公开仓库</h4>
    <p>从仓库、提交和项目组织方式，理解我做事的风格。</p>
  </a>
  <a href="/products/" class="oss-card">
    <h4>Build Log</h4>
    <p>把项目经验沉淀成产品与服务，持续迭代。</p>
  </a>
</div>

</div>

<div class="cta-section">

## 如果你想系统跟进我的实践，从会员开始。

<a href="/membership/">了解会员计划</a>

</div>

<div class="about-section">

## 我是 aronchen，一个喜欢把技术、产品和表达串起来的程序员。

<a href="/about/">了解更多</a>

</div>
