(window.AMP = window.AMP || []).push(function (AMP) {
    // AMP is now available.
    // This can be any DOM element
    var container = document.getElementById('container');

    // The AMP page you want to display
    var url = "https://myk77.github.io/TravelAmp/index.html";

    // Use our fetchDocument method to get the doc
    fetchDocument(url).then(function (doc) {
        // Let AMP take over and render the page
        var ampedDoc = AMP.attachShadowDoc(container, doc, url);
    });
});



function fetchDocument(url) {

    // unfortunately fetch() does not support retrieving documents,
    // so we have to resort to good old XMLHttpRequest.
    var xhr = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        xhr.open('GET', url, true);
        xhr.responseType = 'document';
        xhr.setRequestHeader('Accept', 'text/html');
        xhr.onload = function () {
            // .responseXML contains a ready-to-use Document object
            resolve(xhr.responseXML);
        };
        xhr.send();
    });
}


