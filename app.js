// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDistricts();
    initializeTable();
    initializeCharts();
    initializeFilters();
    initializeSmoothScroll();
});

// Initialize district cards
function initializeDistricts() {
    const container = document.getElementById('districtsContainer');
    container.innerHTML = '';
    
    districtData.forEach(district => {
        const card = createDistrictCard(district);
        container.appendChild(card);
    });
}

// Create a district card element
function createDistrictCard(district) {
    const card = document.createElement('div');
    card.className = `district-card ${district.party.toLowerCase()} ${district.impact}-change`;
    card.dataset.party = district.party.toLowerCase();
    card.dataset.impact = district.impact;
    
    card.innerHTML = `
        <div class="district-header">
            <div>
                <div class="district-number">${district.number}</div>
                <div class="district-representative">${district.representative}</div>
            </div>
            <div>
                <span class="district-party ${district.party.toLowerCase()}">${district.party}</span>
            </div>
        </div>
        <div class="district-info">
            <p><strong>Region:</strong> ${district.region}</p>
            <p><strong>Current Lean:</strong> ${district.currentLean}</p>
            <p><strong>Projected Lean:</strong> ${district.projectedLean}</p>
            <p><strong>Vote Share Change:</strong> ${district.voteShareChange}</p>
        </div>
        <div class="district-changes">
            <h4>Key Changes:</h4>
            ${district.changes.map(change => `
                <div class="change-item">${change}</div>
            `).join('')}
        </div>
        <div>
            <span class="impact-badge ${district.impact}">${district.impact.toUpperCase()} IMPACT</span>
        </div>
    `;
    
    return card;
}

// Initialize district table
function initializeTable() {
    const tbody = document.getElementById('districtTableBody');
    tbody.innerHTML = '';
    
    districtData.forEach(district => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${district.number}</strong></td>
            <td>${district.representative}</td>
            <td><span class="district-party ${district.party.toLowerCase()}">${district.party}</span></td>
            <td>${district.changes.join('; ')}</td>
            <td>${district.projectedLean}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize charts
function initializeCharts() {
    initializePartyChangeChart();
    initializeVoteShareChart();
    initializeCompetitivenessChart();
}

// Party change chart
function initializePartyChangeChart() {
    const ctx = document.getElementById('partyChangeChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Current', 'Projected'],
            datasets: [
                {
                    label: 'Democratic Seats',
                    data: [partyControlData.current.democratic, partyControlData.projected.democratic],
                    backgroundColor: '#4285f4',
                    borderColor: '#3367d6',
                    borderWidth: 2
                },
                {
                    label: 'Republican Seats',
                    data: [partyControlData.current.republican, partyControlData.projected.republican],
                    backgroundColor: '#e63946',
                    borderColor: '#c92a2a',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 52,
                    ticks: {
                        stepSize: 5
                    }
                }
            }
        }
    });
}

// Vote share change chart
function initializeVoteShareChart() {
    const ctx = document.getElementById('voteShareChart').getContext('2d');
    
    // Color code: blue for Democratic gains, red for Republican gains
    const backgroundColors = voteShareData.changes.map(change => {
        if (change > 0) {
            // Democratic gain
            if (change >= 10) return '#2a9d8f';
            if (change >= 5) return '#4285f4';
            return '#90caf9';
        } else {
            // Republican gain (negative change means more Republican)
            if (change <= -5) return '#c92a2a';
            return '#e63946';
        }
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: voteShareData.labels,
            datasets: [
                {
                    label: 'Democratic Vote Share Change (%)',
                    data: voteShareData.changes,
                    backgroundColor: backgroundColors,
                    borderColor: '#1a5490',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const change = context.parsed.y;
                            if (change > 0) {
                                return `Change: +${change}% Democratic`;
                            } else {
                                return `Change: ${change}% Democratic (${Math.abs(change)}% more Republican)`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Percentage Point Change'
                    },
                    ticks: {
                        callback: function(value) {
                            return value > 0 ? '+' + value + '%' : value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Competitiveness chart
function initializeCompetitivenessChart() {
    const ctx = document.getElementById('competitivenessChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: competitivenessData.labels,
            datasets: [
                {
                    label: 'Current Districts',
                    data: competitivenessData.current,
                    backgroundColor: 'rgba(74, 144, 226, 0.7)',
                    borderColor: '#4a90e2',
                    borderWidth: 2
                },
                {
                    label: 'Projected Districts',
                    data: competitivenessData.projected,
                    backgroundColor: 'rgba(42, 157, 143, 0.7)',
                    borderColor: '#2a9d8f',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Districts'
                    }
                }
            }
        }
    });
}

// Initialize district filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const districtCards = document.querySelectorAll('.district-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filter districts
            districtCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'republican') {
                    card.style.display = card.dataset.party === 'republican' ? 'block' : 'none';
                } else if (filter === 'democratic') {
                    card.style.display = card.dataset.party === 'democratic' ? 'block' : 'none';
                } else if (filter === 'major') {
                    card.style.display = card.dataset.impact === 'high' ? 'block' : 'none';
                }
            });
        });
    });
}

// Initialize smooth scroll for navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    }
});

