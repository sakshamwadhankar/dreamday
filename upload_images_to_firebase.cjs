const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const fs = require('fs');
const path = require('path');

const serviceAccount = require('./dream-day-events-sw-firebase-adminsdk-fbsvc-3a98558d69.json');

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'dream-day-events-sw.firebasestorage.app'
});

const bucket = getStorage().bucket();
const imagesDir = path.join(__dirname, 'public', 'images');

async function uploadImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    console.log(`Found ${files.length} files in public/images`);
    
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile()) {
        console.log(`Uploading ${file}...`);
        await bucket.upload(filePath, {
          destination: `images/${file}`,
          // Making the file publicly accessible
          public: true,
          metadata: {
            cacheControl: 'public, max-age=31536000',
          }
        });
        console.log(`Successfully uploaded ${file}`);
      }
    }
    console.log('All images uploaded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error uploading images:', error);
    process.exit(1);
  }
}

uploadImages();
