# Test GH Pages for preview.readme.io

### To Do
- [ ] Add a GH Pages-specific Webpack config
  (Probs in a separate file for the sake of everyones ability to read thru our shit which is already confusing af)
- [ ] Add new "Build Preview Site" action
  (Run our git subtree shit)
- [ ] Commit `PageNotFound` link tag changes

### Git Subtree Shit

```bash
cd packages/react
NODE_ENV=local npm run build --if-present
git add ./public/dist/web/
git commit -m "BUILD PREVIEW SITE"
git push origin `git subtree split --prefix docs HEAD`:gh-pages --force
```