# Justonclick-new-website

## Deploy to GitHub Pages

This project deploys with the `gh-pages` package using `npm run deploy`.
The custom domain `justonclick.in` is published from `public/CNAME`. The build
also publishes a `404.html` app-shell fallback so nested routes such as
`/contact` and `/careers` work when opened directly or refreshed on GitHub Pages.

1. In GitHub, open **Settings > Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select the `gh-pages` branch and `/ (root)` folder, then set the custom domain
   to `justonclick.in`.
4. Deploy the project:

```bash
gh auth switch
gh auth setup-git
npm run deploy
```

The site will be available at:

`https://justonclick-org.github.io/Justonclick-new-website/`

The selected Git/GitHub account must have **Write** access to this repository. `npm run deploy` builds the app first, then publishes the `build` folder to the `gh-pages` branch.
