const fs = require('fs');

console.log('🔄 Starting bullet point replacement script...');

// Read the current file
let content = fs.readFileSync('src/App.jsx', 'utf8');

console.log('📖 File loaded successfully');

// Store original bullet count
const originalBullets = (content.match(/•/g) || []).length;
console.log(`🎯 Found ${originalBullets} bullet points to replace`);

// Replace all bullet points in testimonials
// Pattern: "Treatment • X years ago" -> "Treatment<br />X years ago"
content = content.replace(/(\w+(?:\s+\w+)*)\s*•\s*(\d+\s+years?\s+ago)/g, '$1<br />$2');

// Count bullets after replacement
const remainingBullets = (content.match(/•/g) || []).length;
const replacedCount = originalBullets - remainingBullets;

console.log(`✅ Replaced ${replacedCount} bullet points with line breaks`);
console.log(`📋 Remaining bullets: ${remainingBullets}`);

// Write the updated content back
fs.writeFileSync('src/App.jsx', content);

console.log('💾 File updated successfully!');
console.log('🎉 Testimonial formatting completed!');
