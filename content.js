// content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'quote') {
        // Display the quote in an alert
// Example usage of SweetAlert
        Swal.fire({
            title: 'Hello!',
            text: message.content,
        });
    } else if (message.type === 'image') {
        // Display the image URL in an alert
        // Example usage of SweetAlert
        Swal.fire({
            imageUrl: message.url
        });

    }
});
