// service_worker.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startActivity') {
        // Get all form elements on the webpage
        const forms = document.querySelectorAll('form');
        // Check if any form elements are found
        if (forms.length > 0) {
            // If forms are found, send 'field_found' message to content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'field_found' });
        } else {
            // If no forms are found, send 'no_field_found' message to content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'no_field_found' });
        }
    }
    // Ensure sendResponse is called asynchronously
    return true;
});

// Function to fetch a random quote from the API
function fetchRandomQuote() {
    return fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => data.content)
        .catch(error => console.error('Error fetching quote:', error));
}

// Function to fetch a random image from the link
function fetchRandomImage() {
    return fetch('https://random.imagecdn.app/500/150')
        .then(response => response.url)
        .catch(error => console.error('Error fetching image:', error));
}
