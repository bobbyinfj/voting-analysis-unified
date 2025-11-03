# Voting Analysis Hub - Quick Deploy Guide

## Quick Deploy (Recommended)
After making any changes, run:
```bash
./deploy.sh
```

Or manually:
```bash
git add .
git commit -m "Your message"
git push
```

## Auto-Deploy (Watcher)
For automatic deployment on every save:
```bash
./auto-deploy.sh
```
(Requires fswatch: `brew install fswatch`)

## GitHub Pages Auto-Deploy
GitHub Pages automatically deploys when you push to `main` branch.
- Usually takes 30-60 seconds
- Check status at: https://github.com/bobbyinfj/voting-analysis-unified/settings/pages

## Live Sites
- **Main Hub:** https://bobbyinfj.github.io/voting-analysis-unified/
- **Prop 50:** https://bobbyinfj.github.io/voting-analysis-unified/prop50.html
- **King County:** https://bobbyinfj.github.io/voting-analysis-unified/king-county.html
- **Larimer County:** https://bobbyinfj.github.io/voting-analysis-unified/larimer-county.html

## Fast Workflow
1. Edit files
2. Run `./deploy.sh`
3. Wait 30-60 seconds
4. Changes are live!

