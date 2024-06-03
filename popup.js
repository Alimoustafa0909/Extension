document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startActivity').addEventListener('click', startActivity);
});


function startActivity() {
    // Query the currently active tab
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        // Ensure a tab is found
        if (tabs && tabs.length > 0) {
            // Get the tabId of the active tab
            const tabId = tabs[0].id;
            // Execute the content script in the active tab
            chrome.tabs.sendMessage(tabId, {type: 'detecting'});
        } else {
            console.error("No active tab found.");
        }


    });
}