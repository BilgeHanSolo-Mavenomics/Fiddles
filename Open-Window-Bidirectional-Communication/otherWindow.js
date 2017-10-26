window.readFromOtherWindow = function() {
    let whatToRead = document.getElementById("whatToRead").value;
    alert(whatToRead + " is " + window[whatToRead] + " on this doc, " +
        otherWindow[whatToRead] + " on the other doc.");
}