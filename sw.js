if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://static.safer.plus/sw.js')
    .then(function(registration) {
      console.log('Service Worker registered successfully.');
    })
    .catch(function(error) {
      console.error('Service Worker registration failed:', error);
    });
}
