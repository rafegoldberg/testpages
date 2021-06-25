# Test GH Pages for preview.readme.io


```bash
cd packages/react
NODE_ENV=local npm run build --if-present
git add ./public/dist/web/
git commit -m "BUILD PREVIEW SITE"
git push origin `git subtree split --prefix docs HEAD`:gh-pages --force
```