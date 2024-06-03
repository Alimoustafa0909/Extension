// content.js
console.log('hello from another world ')
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if(message.type === 'detecting') {
        detectForms()
    }

   else if (message.type === 'quote') {
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

function detectForms() {
    // Add your code to detect forms here
    console.log("button pressed")
    const forms = document.querySelectorAll('form');
    if (forms.length > 0) {
        // If forms are detected, send a message to the service worker
        chrome.runtime.sendMessage({ action: 'form_detected' });
    } else {
        // If no forms are found, send a message to the service worker
        chrome.runtime.sendMessage({ action: 'no_form_detected' });
    }
}
