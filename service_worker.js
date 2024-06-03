// service_worker.js

chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
    if (message.action === 'form_detected') {
        try {
            console.log('form being detected Correctly')
            // Fetch a random quote from the API
            const quote = await fetchRandomQuote();
            // Send the quote back to the content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'quote', content: quote });
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    } else if (message.action === 'no_form_detected') {
        try {
            // Fetch a random image from the link
            const imageUrl = await fetchRandomImage();
            // Send the image URL back to the content script
            chrome.tabs.sendMessage(sender.tab.id, { type: 'image', url: imageUrl });
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }
});

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        throw error; // Propagate the error to the caller
    }
}

// Function to fetch a random image from the link
async function fetchRandomImage() {
    try {
        const response = await fetch('https://random.imagecdn.app/500/150');
        return response.url;
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error; // Propagate the error to the caller
    }
}
