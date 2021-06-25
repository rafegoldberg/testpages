# Test GH Pages for preview.readme.io

### To Do

- [x] Add a dedicated `ghpages.js` entry script for our GH Pages root component.
- [x] Change output path to `public/dist/ghpages` for the GH Pages build (duh...)
- [x] Add a GH Pages-specific Webpack config (Probs in a separate file for the sake of everyones ability to read thru it)
- [x] Add a `ghpages` env variable and mock it to `local` in the main config + `useEnvInfo` hook
- [x] Add a `build.ghpages` script to the react app
- [ ] Add new "Build Preview Site" GH action, i.e. run the follow `git subtree` shit.
- [ ] Copy `index.html` to ghpages dist (install and use CopyWebpackPlugin; not sure if we can?)
  ```
  { from: './index.html', to: './public/dist/preview/index.html' },
  ```
- [ ] ~Update how the local preview routes work with `PageNotFound`~

### Git Subtree Shit

```bash
cd packages/react
NODE_ENV=local npm run build --if-present
git add ./public/dist/web/
git commit -m "BUILD PREVIEW SITE"
git push origin `git subtree split --prefix docs HEAD`:gh-pages --force
```