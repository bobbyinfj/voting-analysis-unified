#!/bin/bash

# Quick deploy script - run this after making changes
cd /Users/bob/Projects/voting-analysis-unified

echo "🚀 Quick Deploy..."

# Get last commit timestamp
LAST_COMMIT_TIME=$(git log -1 --format=%cd --date=format:'%Y-%m-%d %H:%M:%S')
LAST_COMMIT_HASH=$(git log -1 --format=%h)

# Create timestamp JSON file
cat > timestamp.json << EOF
{
  "lastUpdated": "$LAST_COMMIT_TIME",
  "commitHash": "$LAST_COMMIT_HASH",
  "timestamp": $(date +%s)
}
EOF

git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')" 2>&1
git push 2>&1 | tail -3
echo ""
echo "✅ Deployed! Live at: https://bobbyinfj.github.io/voting-analysis-unified/"
echo "⏱️  Usually takes 30-60 seconds to update"
echo "📅 Last updated: $LAST_COMMIT_TIME"

