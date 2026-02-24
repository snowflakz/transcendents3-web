#!/usr/bin/env node

/**
 * Sitemap Generator for Transcendents3 Website
 * This script generates a sitemap.xml file based on the application routes
 */

const fs = require('fs');
const path = require('path');

// Application routes configuration
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'Homepage - Expert QuickBooks, Bookkeeping & Tax Preparation'
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'monthly',
    description: 'Services - Bookkeeping, Insurance & Retirement Planning'
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'About Us - Meet our team and company story'
  },
  {
    path: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Contact Us - Get in touch for consultation'
  },
  {
    path: '/blog',
    priority: '0.7',
    changefreq: 'weekly',
    description: 'Blog - Financial tips and business insights'
  },
  {
    path: '/faq',
    priority: '0.6',
    changefreq: 'monthly',
    description: 'Frequently Asked Questions'
  },
  {
    path: '/resources',
    priority: '0.6',
    changefreq: 'monthly',
    description: 'Resources - Financial guides and tools'
  },
  {
    path: '/privacy-policy',
    priority: '0.3',
    changefreq: 'yearly',
    description: 'Privacy Policy'
  },
  {
    path: '/terms-of-service',
    priority: '0.3',
    changefreq: 'yearly',
    description: 'Terms of Service'
  },
  {
    path: '/cookie-policy',
    priority: '0.3',
    changefreq: 'yearly',
    description: 'Cookie Policy'
  }
];

// Base URL
const baseUrl = 'https://transcendents3.com';

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully at:', sitemapPath);
  console.log(`📊 Generated sitemap for ${routes.length} pages`);
}

// Run the generator
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };
