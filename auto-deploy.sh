#!/bin/bash

# Auto-deploy script for voting-analysis-unified
# Watches for file changes and auto-commits/pushes

cd /Users/bob/Projects/voting-analysis-unified

echo "🚀 Starting auto-deploy watcher..."
echo "📁 Watching: /Users/bob/Projects/voting-analysis-unified"
echo "⏱️  Auto-committing and pushing on file changes..."
echo ""

# Function to commit and push
commit_and_push() {
    echo ""
    echo "📝 Changes detected! Committing..."
    git add .
    git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')" 2>&1 | grep -v "nothing to commit"
    if [ $? -eq 0 ]; then
        echo "📤 Pushing to GitHub..."
        git push 2>&1 | tail -2
        echo "✅ Deployed! Check https://bobbyinfj.github.io/voting-analysis-unified/"
        echo ""
    fi
}

# Initial commit
commit_and_push

# Watch for changes and auto-commit/push
fswatch -o . | while read f; do
    commit_and_push
done

