// Live Reload Script
// This script works with live-server for automatic page refresh
// If you're using live-server (npm run dev), it handles reload automatically
// This script is a fallback for other local servers

(function() {
    // Only enable in development (when running locally)
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:') {
        // Check if live-server is being used (it has built-in reload)
        if (typeof window.liveServer !== 'undefined') {
            console.log('Live-server detected - auto-reload enabled');
            return;
        }
        
        // Fallback: Simple polling for file changes
        let lastModified = null;
        const checkInterval = 2000; // Check every 2 seconds
        
        function checkForChanges() {
            const currentModified = new Date(document.lastModified).getTime();
            if (lastModified && currentModified > lastModified) {
                console.log('File changed, reloading...');
                window.location.reload();
            }
            lastModified = currentModified;
        }
        
        // Start checking after page load
        setTimeout(() => {
            lastModified = new Date(document.lastModified).getTime();
            setInterval(checkForChanges, checkInterval);
            console.log('Live reload enabled - checking for changes every ' + checkInterval/1000 + ' seconds');
        }, 1000);
    }
})();

