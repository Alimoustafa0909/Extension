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
    const forms = document.querySelectorAll('form');
    if (forms.length > 0) {
        alert('Forms detected!');
    } else {
        alert('No forms found.');
    }
}
