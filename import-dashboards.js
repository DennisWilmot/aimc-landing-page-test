#!/usr/bin/env node

// PostHog Dashboard Import Script
// This script imports the pre-configured dashboards into your PostHog instance

const fs = require('fs');
const path = require('path');

// Configuration - UPDATE THESE VALUES
const POSTHOG_API_KEY = process.env.REACT_APP_POSTHOG_API_KEY || 'phc_vDsxIKejnQF5pFseJuMb2DhUmbOlMVAQ69x3HD8uU03';
const POSTHOG_HOST = process.env.REACT_APP_POSTHOG_HOST || 'https://us.posthog.com';

// Dashboard files to import
const DASHBOARDS = [
  'posthog-dashboards/1-magic-link-funnel.json',
  'posthog-dashboards/2-course-engagement.json',
  'posthog-dashboards/3-user-journey.json'
];

async function importDashboard(dashboardPath) {
  try {
    const dashboardData = JSON.parse(fs.readFileSync(dashboardPath, 'utf8'));

    console.log(`📊 Importing dashboard: ${dashboardData.name}`);

    // PostHog API endpoint for creating dashboards
    const response = await fetch(`${POSTHOG_HOST}/api/projects/@current/dashboards/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${POSTHOG_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: dashboardData.name,
        description: dashboardData.description,
        pinned: dashboardData.pinned,
        items: [], // We'll create insights separately
        tags: dashboardData.tags || []
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const dashboard = await response.json();
    console.log(`✅ Created dashboard: ${dashboard.name} (ID: ${dashboard.id})`);

    // Import insights for this dashboard
    await importInsights(dashboard.id, dashboardData.items);

    return dashboard;
  } catch (error) {
    console.error(`❌ Failed to import dashboard ${dashboardPath}:`, error.message);
    return null;
  }
}

async function importInsights(dashboardId, insights) {
  for (const insight of insights) {
    try {
      console.log(`  📈 Creating insight: ${insight.name}`);

      const response = await fetch(`${POSTHOG_HOST}/api/projects/@current/insights/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${POSTHOG_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: insight.name,
          description: insight.description,
          query: insight.filters,
          dashboard: dashboardId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(`    ✅ Created insight: ${result.name} (ID: ${result.id})`);

    } catch (error) {
      console.error(`    ❌ Failed to create insight ${insight.name}:`, error.message);
    }
  }
}

async function main() {
  console.log('🚀 Starting PostHog Dashboard Import');
  console.log(`📡 Using PostHog instance: ${POSTHOG_HOST}`);
  console.log('');

  if (!POSTHOG_API_KEY || POSTHOG_API_KEY === 'your_api_key_here') {
    console.error('❌ Please set your REACT_APP_POSTHOG_API_KEY in the .env file or update the script');
    process.exit(1);
  }

  const importedDashboards = [];

  for (const dashboardPath of DASHBOARDS) {
    if (fs.existsSync(dashboardPath)) {
      const dashboard = await importDashboard(dashboardPath);
      if (dashboard) {
        importedDashboards.push(dashboard);
      }
    } else {
      console.error(`❌ Dashboard file not found: ${dashboardPath}`);
    }
  }

  console.log('');
  console.log('🎉 Import Complete!');
  console.log(`📊 Imported ${importedDashboards.length} dashboards:`);

  importedDashboards.forEach(dashboard => {
    console.log(`  - ${dashboard.name} (${POSTHOG_HOST}/dashboard/${dashboard.id})`);
  });

  console.log('');
  console.log('💡 Next Steps:');
  console.log('  1. Visit your PostHog dashboards');
  console.log('  2. Run through your course flow to see data populate');
  console.log('  3. Enable session recordings in Settings');
  console.log('  4. Set up alerts for key metrics');
}

// Run the script
main().catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});


