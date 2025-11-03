#!/bin/bash

# Quick deploy script - run this after making changes
cd /Users/bob/Projects/voting-analysis-unified

echo "🚀 Quick Deploy..."
git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')" 2>&1
git push 2>&1 | tail -3
echo ""
echo "✅ Deployed! Live at: https://bobbyinfj.github.io/voting-analysis-unified/"
echo "⏱️  Usually takes 30-60 seconds to update"

