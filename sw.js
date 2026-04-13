self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // الكود ده فاضي بس ضروري عشان المتصفح يقبل التثبيت
});