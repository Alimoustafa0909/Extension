// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'quote') {
        // Display the quote in an alert
        alert('Random Quote: ' + message.content);
    } else if (message.type === 'image') {
        // Display the image URL in an alert
        alert('Random Image: ' + message.url);
    }
});
