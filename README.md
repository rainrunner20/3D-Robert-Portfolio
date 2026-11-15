# 3D Software Engineering Portfolio

An interactive portfolio built with **React, Vite, Three.js and Framer Motion**, featuring real engineering projects and the associated GitHub repositories. The 3D scenes are decorative; core information and repository links are regular HTML text and remain accessible without interacting with the canvas.

## Local setup (Windows PowerShell)

```powershell
git clone https://github.com/rainrunner20/3D-Robert-Portfolio.git
cd 3D-Robert-Portfolio
git switch test1
cd my-portfolio
npm ci
npm run dev
```

Open the URL Vite prints (normally http://localhost:5173). For a production build, run `npm run build`.

## Included

- Interactive Three.js computer and globe scenes, with model licenses preserved under `my-portfolio/public`.
- Personal summary, genuine work and graduate studies **without invented job dates or endorsements**.
- Repository cards for Process-Pilot, IceBrAIker, TweetInsights, NYC Coordinate Reprojector, Nature's Call, and sensor forecasting.
- Email and LinkedIn links that don't depend on an unconfigured mail API.
- Automated Vite production build checks on GitHub Actions.

## Verification and boundaries

The selected projects link to sources whose tests and limitations are documented in their own repos. A successful portfolio build does not prove every app has an active cloud deployment.

The original scaffold contained sample employers, testimonials, and fake project descriptions; those were not the owner's biography and are deliberately omitted from the live page. This source also preserves the licensed 3D scene assets from the earlier template. The core portfolio is a static site; no sign-in, contact submission, or database is necessary.

Before publishing a custom domain, verify keyboard/mobile interactions and review the license/attribution files for the 3D models.
