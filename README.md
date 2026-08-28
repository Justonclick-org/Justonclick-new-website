# Justonclick-new-website

## Deploy to GitHub Pages

This project deploys with the `gh-pages` package using `npm run deploy`.

1. In GitHub, open **Settings > Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Select the `gh-pages` branch and `/ (root)` folder.
4. Deploy the project:

```bash
gh auth switch
gh auth setup-git
npm run deploy
```

The site will be available at:

`https://justonclick-org.github.io/Justonclick-new-website/`

The selected Git/GitHub account must have **Write** access to this repository. `npm run deploy` builds the app first, then publishes the `build` folder to the `gh-pages` branch.
