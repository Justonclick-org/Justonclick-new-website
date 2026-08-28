# Justonclick-new-website

## Deploy to GitHub Pages

This project deploys automatically with GitHub Actions when `main` is pushed.

1. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.
2. Push the project to `main`:

```bash
git add .
git commit -m "Deploy React app to GitHub Pages"
git push origin main
```

The site will be available at:

`https://justonclick-org.github.io/Justonclick-new-website/`

To run the deployment manually with GitHub CLI:

```bash
gh workflow run deploy-pages.yml
```
