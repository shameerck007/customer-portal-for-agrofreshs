// Minimal service worker — its only job is to satisfy the browser's
// installability requirements so "Add to Home Screen" / the install
// prompt is offered. It doesn't cache anything or change network behavior.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => { /* pass-through, no caching */ });
