// District data for Proposition 50 analysis
const districtData = [
  {
    id: 1,
    number: "CA-1",
    representative: "Doug LaMalfa",
    party: "Republican",
    region: "Northern California",
    currentLean: "Republican-leaning",
    projectedLean: "More competitive/Democratic-leaning",
    changes: [
      "Would lose Republican-leaning areas in the Sacramento Valley",
      "Would gain Democratic-leaning regions around Santa Rosa",
    ],
    impact: "high",
    voteShareChange: "+8.5% Democratic",
    competitiveness: "Significantly more competitive",
  },
  {
    id: 27,
    number: "CA-27",
    representative: "George Whitesides",
    party: "Democratic",
    region: "Northern L.A. County",
    currentLean: "Democratic-leaning",
    projectedLean: "More Democratic",
    changes: [
      "District boundaries would see alterations",
      "Could affect political landscape",
    ],
    impact: "medium",
    voteShareChange: "+3.2% Democratic",
    competitiveness: "Less competitive (safer Democratic)",
  },
  {
    id: 41,
    number: "CA-41",
    representative: "Ken Calvert",
    party: "Republican",
    region: "Riverside County",
    currentLean: "Republican stronghold",
    projectedLean: "Competitive/Democratic-leaning",
    changes: [
      "Would transform from Republican stronghold to competitive area",
      "Boundary adjustments to incorporate more Democratic-leaning areas",
    ],
    impact: "high",
    voteShareChange: "+12.1% Democratic",
    competitiveness: "Much more competitive",
  },
  {
    id: 45,
    number: "CA-45",
    representative: "Derek Tran",
    party: "Democratic",
    region: "L.A. and Orange Counties",
    currentLean: "Democratic-leaning",
    projectedLean: "More Democratic",
    changes: [
      "District modifications potentially enhancing Democratic advantages",
      "Boundary adjustments in L.A. and Orange Counties",
    ],
    impact: "medium",
    voteShareChange: "+5.8% Democratic",
    competitiveness: "Less competitive (safer Democratic)",
  },
  {
    id: 47,
    number: "CA-47",
    representative: "Dave Min",
    party: "Democratic",
    region: "Orange County",
    currentLean: "Democratic-leaning",
    projectedLean: "More Democratic",
    changes: [
      "District adjustments could solidify Democratic leanings",
      "Orange County boundary modifications",
    ],
    impact: "low",
    voteShareChange: "+2.5% Democratic",
    competitiveness: "Slightly less competitive",
  },
  {
    id: 48,
    number: "CA-48",
    representative: "Darrell Issa",
    party: "Republican",
    region: "San Diego",
    currentLean: "Republican-leaning",
    projectedLean: "More favorable to Democratic candidates",
    changes: [
      "Would shift from Republican-leaning areas in Temecula Valley",
      "Would gain Democratic-leaning cities in Coachella Valley and north San Diego County",
    ],
    impact: "high",
    voteShareChange: "+10.3% Democratic",
    competitiveness: "Much more competitive",
  },
  {
    id: 9,
    number: "CA-9",
    representative: "Josh Harder",
    party: "Democratic",
    region: "Central Valley",
    currentLean: "Swing district",
    projectedLean: "More Democratic",
    changes: [
      "Democratic advantage could increase by 13.1 percentage points",
      "Inclusion of more East Bay cities",
    ],
    impact: "high",
    voteShareChange: "+13.1% Democratic",
    competitiveness: "Much less competitive (safer Democratic)",
  },
  {
    id: 13,
    number: "CA-13",
    representative: "Adam Gray",
    party: "Democratic",
    region: "Central Valley",
    currentLean: "Swing district",
    projectedLean: "More Democratic",
    changes: [
      "Republican advantage may decrease by 5.5 percentage points",
      "Effectively eliminating Republican advantage",
      "Incorporation of strongly Democratic areas in Stockton",
    ],
    impact: "medium",
    voteShareChange: "+5.5% Democratic",
    competitiveness: "Less competitive (safer Democratic)",
  },
  {
    id: 23,
    number: "CA-23",
    representative: "Kevin McCarthy",
    party: "Republican",
    region: "Central Valley",
    currentLean: "Safe Republican",
    projectedLean: "Even safer Republican",
    changes: [
      "Would absorb Republican voters removed from CA-41 and CA-48",
      "Boundary adjustments to incorporate more Republican-leaning areas",
      "Packing effect: district becomes more reliably Republican",
    ],
    impact: "high",
    voteShareChange: "-8.2% Democratic (more Republican)",
    competitiveness: "Much less competitive (safer Republican)",
  },
  {
    id: 50,
    number: "CA-50",
    representative: "Scott Peters",
    party: "Democratic",
    region: "San Diego County",
    currentLean: "Safe Democratic",
    projectedLean: "Safe Democratic (slight shift)",
    changes: [
      "Would absorb some Republican voters from neighboring CA-48",
      "Maintains Democratic advantage but becomes slightly more competitive",
      "Minor boundary adjustments",
    ],
    impact: "low",
    voteShareChange: "-2.1% Democratic (slightly more competitive)",
    competitiveness: "Slightly more competitive",
  },
  {
    id: 3,
    number: "CA-3",
    representative: "Kevin Kiley",
    party: "Republican",
    region: "Northern California",
    currentLean: "Safe Republican",
    projectedLean: "Even safer Republican",
    changes: [
      "Would absorb Republican voters removed from CA-1",
      "Gains more Republican-leaning areas from Sacramento Valley",
      "Packing effect: becomes more reliably Republican",
    ],
    impact: "medium",
    voteShareChange: "-6.5% Democratic (more Republican)",
    competitiveness: "Less competitive (safer Republican)",
  },
  {
    id: 25,
    number: "CA-25",
    representative: "Raul Ruiz",
    party: "Democratic",
    region: "Inland Empire",
    currentLean: "Safe Democratic",
    projectedLean: "Safe Democratic",
    changes: [
      "Would gain some Democratic-leaning areas from CA-41",
      "Maintains strong Democratic advantage",
      "Minor boundary adjustments",
    ],
    impact: "low",
    voteShareChange: "+1.8% Democratic",
    competitiveness: "Slightly less competitive",
  },
];

// Summary statistics
const summaryStats = {
  totalDistricts: 52,
  districtsChanged: 25,
  republicanDistrictsTargeted: 5,
  democraticAdvantageIncrease: "Average of +7.2%",
  latinoMajorityDistricts: 16,
  latinoInfluenceDistricts: {
    current: 6,
    projected: 8,
  },
  fiscalImpact: {
    counties: "Up to a few million dollars",
    state: "$200,000",
  },
};

// Vote share data for charts
const voteShareData = {
  labels: [
    "CA-1",
    "CA-3",
    "CA-9",
    "CA-13",
    "CA-23",
    "CA-25",
    "CA-27",
    "CA-41",
    "CA-45",
    "CA-47",
    "CA-48",
    "CA-50",
  ],
  current: [42, 58, 52, 51, 38, 62, 55, 48, 53, 54, 46, 64],
  projected: [
    50.5, 64.5, 65.1, 56.5, 46.2, 63.8, 58.2, 60.1, 58.8, 56.5, 56.3, 61.9,
  ],
  changes: [8.5, -6.5, 13.1, 5.5, -8.2, 1.8, 3.2, 12.1, 5.8, 2.5, 10.3, -2.1],
};

// Competitiveness data
const competitivenessData = {
  labels: [
    "Safe Democratic",
    "Likely Democratic",
    "Lean Democratic",
    "Toss-up",
    "Lean Republican",
    "Likely Republican",
    "Safe Republican",
  ],
  current: [12, 8, 5, 8, 6, 7, 6],
  projected: [15, 10, 4, 5, 3, 3, 12],
};

// Party control data
const partyControlData = {
  current: {
    democratic: 42,
    republican: 10,
  },
  projected: {
    democratic: 45,
    republican: 7,
  },
};

// Districts that become more Republican (packing)
const packingDistricts = [23, 3, 50];

// Districts that become more Democratic (cracking)
const crackingDistricts = [1, 9, 13, 27, 41, 45, 47, 48];
