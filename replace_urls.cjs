const fs = require('fs');
const path = require('path');
const baseUrl = 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace 'images/...' or "images/..." with Firebase URL
      // regex matches quotes, "images/", and anything that is not a quote
      const regex = /(['"])images\/([^'"]+)\1/g;
      const newContent = content.replace(regex, (match, p1, p2) => {
        return p1 + baseUrl + p2 + p1;
      });
      
      // Also need to handle url('images/...') or url("images/...") or url(images/...)
      const regexUrl = /url\(['"]?images\/([^'"\)]+)['"]?\)/g;
      const newContent2 = newContent.replace(regexUrl, (match, p1) => {
        return `url('${baseUrl}${p1}')`;
      });

      if (content !== newContent2) {
        fs.writeFileSync(fullPath, newContent2, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

replaceInDir('./src');
