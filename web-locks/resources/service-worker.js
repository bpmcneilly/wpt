self.addEventListener('fetch', e => {
  if (new URL(e.request.url).pathname === '/clientId') {
    e.respondWith(new Response(JSON.stringify({clientId: e.clientId})));
    return;
  }
});
