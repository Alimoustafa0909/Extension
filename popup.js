// popup.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startActivity').addEventListener('click', function() {
        // Query the currently active tab
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            // Ensure a tab is found
            if (tabs && tabs.length > 0) {
                // Get the tabId of the active tab
                const tabId = tabs[0].id;
                // Execute the content script in the active tab
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    function: detectForms
                });
            } else {
                console.error("No active tab found.");
            }
        });
    });
});

function detectForms() {
    // Add your code to detect forms here
    // For example:
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
