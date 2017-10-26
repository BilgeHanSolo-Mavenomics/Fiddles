window.readFromParentWindow = function() {
    let whatToRead = document.getElementById("whatToRead").value;
    alert(whatToRead + " is " + window[whatToRead] + " on this doc, " +
        parentWindow[whatToRead] + " on the other doc.");
}