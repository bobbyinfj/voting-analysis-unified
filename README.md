# Voting Analysis Hub

**A repository for brainstorming ideas on making voting easier and better.**

This project explores voting and election processes across three diverse jurisdictions to identify patterns, challenges, and opportunities for improving democratic participation.

## Purpose

This repository serves as a **brainstorming and research hub** for analyzing voting systems, ballot measures, and electoral processes. By examining three distinct counties with different political contexts, we aim to:

- **Understand** how voting works in different jurisdictions
- **Identify** barriers to participation and access
- **Explore** solutions for making voting easier and more accessible
- **Document** voting processes and ballot measure analysis
- **Share** insights and data-driven recommendations

## Jurisdictions Covered

This project gives **equal weight** to three counties:

### 🏛️ California (Los Angeles County)
- **Focus**: California Proposition 50 (Congressional Redistricting)
- **Context**: Large, diverse state with complex redistricting processes
- **Analysis**: How redistricting affects representation and voter impact

### 🌲 King County, Washington
- **Focus**: Proposition 1 (Automated Fingerprint Identification System funding)
- **Context**: Major metropolitan county with robust voting infrastructure
- **Analysis**: Local funding measures and voter participation patterns

### ⛰️ Larimer County, Colorado
- **Focus**: Transportation funding measures and local elections
- **Context**: Rapidly growing county in the Mountain West
- **Analysis**: Local ballot measures and election processes

## Repository Structure

```
voting-analysis-unified/
├── index.html              # Main hub page with interactive map
├── prop50.html            # California Proposition 50 analysis
├── king-county.html       # King County, WA analysis
├── larimer-county.html    # Larimer County, CO analysis
├── styles.css             # Unified styling
├── app.js                 # Application logic and interactivity
├── data.js                # District and election data
├── deploy.sh              # Quick deployment script
├── timestamp.json         # Auto-generated timestamp file
└── README.md              # This file
```

## Features

### 📊 Comprehensive Analysis
- Detailed breakdowns of ballot measures and elections
- District-by-district impact analysis
- Demographic and geographic context
- Arguments for and against from multiple perspectives

### 🗺️ Interactive Visualizations
- Interactive US map showing coverage areas
- Charts and graphs using Chart.js
- Vote share analysis and competitiveness metrics
- Filterable data tables

### 📚 Research & Documentation
- Comprehensive source citations
- Links to official government resources
- Academic research and news coverage
- Verified data with transparency about limitations

### 🔄 Auto-Updating Content
- Dynamic timestamps with multi-timezone support (PST/MST/UTC)
- Auto-refresh functionality
- Real-time deployment updates

### 📝 Voter Guide Creator
- Tool for creating personalized voter guides
- LocalStorage-based guide sharing
- Accurate ballot information by jurisdiction

## How to Use

### Viewing the Site
Visit the live site: **https://bobbyinfj.github.io/voting-analysis-unified/**

Or run locally:
```bash
# Clone the repository
git clone git@github.com:bobbyinfj/voting-analysis-unified.git
cd voting-analysis-unified

# Open index.html in your browser
open index.html
```

### Contributing Ideas
This is a brainstorming repository. Ideas for improving voting include:

- **Accessibility**: Making voting easier for all voters
- **Transparency**: Improving ballot language and information
- **Education**: Better voter guides and resources
- **Technology**: Leveraging tech to improve participation
- **Process**: Streamlining voting procedures
- **Representation**: Ensuring fair representation

### Deployment
```bash
# Quick deploy to GitHub Pages
./deploy.sh
```

## Data Sources

All data is compiled from publicly available sources:

- **Official Government Sources**: Secretary of State offices, county election departments, legislative analyst offices
- **News & Media**: AP News, LAist, Seattle Times, local news organizations
- **Academic Research**: University studies on redistricting and voting patterns
- **Interactive Tools**: Ballotpedia, Politizen, official voter guide websites

See the Sources sections in each analysis page for complete citations with links.

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS
- **Chart.js** - Data visualizations
- **GitHub Pages** - Hosting and deployment

## Goals & Vision

This repository aims to:

1. **Document** how voting works across different jurisdictions
2. **Analyze** ballot measures and their real-world impacts
3. **Identify** barriers to voting and participation
4. **Brainstorm** solutions for making voting easier and better
5. **Share** insights and data-driven recommendations

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is for informational and educational purposes only. All data is compiled from publicly available sources. This repository is intended for research, analysis, and brainstorming ideas to improve voting systems.

## Contributing

This is a brainstorming repository. Ideas, suggestions, and contributions are welcome. Please ensure all data and sources are properly cited and verified.

---

**Last Updated**: November 2025  
**Live Site**: https://bobbyinfj.github.io/voting-analysis-unified/
