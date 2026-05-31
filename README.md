# Kushan Dimantha — Interactive 3D Portfolio

My personal portfolio: a fast, self-contained, SEO-optimized **single-page site**
with interactive 3D animations, built with vanilla HTML/CSS/JS and **Three.js**.
Live at **[https://kushan00.github.io/](https://kushan00.github.io/)**

![Kushan Dimantha — Portfolio](assets/og-cover.png)

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Author

I'm Kushan Dimantha, a Full-Stack Software Engineer from Sri Lanka.

- [GitHub](https://www.github.com/kushan00)
- [LinkedIn](https://www.linkedin.com/in/kushan-dimantha/)

## The Project

A single-page experience that brings together everything — **About, Experience,
Education & Research, Skills, Projects and Contact** — into one scrollable page
with an engineer-themed, interactive **3D distributed-systems network** (connected
service nodes orbiting a morphing compute core) rendered with Three.js.

It is built content-first: all text is real HTML (no client-side rendering), so it
loads instantly and is fully crawlable. The 3D layer is progressive enhancement and
degrades gracefully when WebGL is unavailable.

### Highlights

- **Interactive 3D scene** — draggable network graph + morphing core + particle field (Three.js)
- **Single page**, anchor-navigated, with a custom cursor, scroll reveals and tilt cards
- **3D skill tag-sphere** and animated proficiency bars
- **17 projects** with live category filtering (Web / Mobile / Blockchain / Backend / DevOps)
- **SEO** — meta + Open Graph + Twitter tags, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- **Theme** — dark base with an electric-lime accent (`#07070b` / `#d7ff3e`)

## Tech

- HTML5 / CSS3 (no framework)
- Vanilla JavaScript
- [Three.js](https://threejs.org/) (r128, via CDN)
- Google Fonts: Syne, Instrument Sans, Space Mono

## Run locally

It's a static site — no build step. Just serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Every push to `main` triggers a **build-free** GitHub Actions workflow
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that assembles the
static files and publishes them to the `gh-pages` branch — deploys in seconds.

## License

MIT — see [LICENSE](LICENSE).
