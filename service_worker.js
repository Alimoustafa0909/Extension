chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'form_detected') {
        // Fetch a random quote from the API
        fetchRandomQuote().then(quote => {
            // Send the quote back to the content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'quote', content: quote });
        });
    } else if (message.action === 'no_form_detected') {
        // Fetch a random image from the link
        fetchRandomImage().then(imageUrl => {
            // Send the image URL back to the content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'image', url: imageUrl });
        });
    }
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
