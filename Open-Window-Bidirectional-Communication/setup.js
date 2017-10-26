window.testVar = 5;
window.otherWindow = "";
window.openNewWindow = function() {
    let newWindow = window.open("otherWindow.html", '_blank', 'location=no,height=570,width=520,scrollbars=yes,status=yes');
    newWindow.otherWindow = window;
    newWindow.testVar = 6;
    window.otherWindow = newWindow;
}
window.readFromOtherWindow = function() {
    let whatToRead = document.getElementById("whatToRead").value;
    alert(whatToRead + " is " + window[whatToRead] + " on this doc, " +
        otherWindow[whatToRead] + " on the other doc.");
}