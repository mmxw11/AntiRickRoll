
var dangerousVideoURL = "www.youtube.com/watch?v=dQw4w9WgXcQ";

chrome.tabs.onUpdated.addListener(onTabUpdate);

function onTabUpdate(tabId, changeInfo, tab) {
    var url = changeInfo.url;
    if (url == undefined) {
        return;
    }
    url = new String(url);
    var curl = removeProtocolFromUrl(url);
    var detected = curl.includes(dangerousVideoURL);
    if (detected) {
        var script = "window.stop();"
            + "displayWarningScreen();"
            + "function displayWarningScreen() {"
            + "var request = new XMLHttpRequest();"
            + "request.onreadystatechange = function() {"
            + "if (request.readyState == 4 && request.status == 200) {"
            + "document.write(request.responseText);"
            + "}"
            + "};"
            + "request.open('GET', chrome.runtime.getURL('../view/index.html'), true);"
            + "request.send();"
            + "document.close();"
            + "}";
        chrome.tabs.executeScript(tabId, {
            code: script,
            runAt: "document_start"
        });
        console.log("RickRoll attempt detected! Displaying a warning screen.");
    }
}

function removeProtocolFromUrl(url) {
    var prefix = /^https?:\/\//;
    url = url.replace(prefix, "");
    return url;
}