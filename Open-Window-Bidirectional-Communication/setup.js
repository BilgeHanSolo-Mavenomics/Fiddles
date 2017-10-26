window.testVar = 5;
window.childWindow = "";
window.openChildWindow = function(button) {
    window.myButton = button;
    let newWindow = window.open("childWindow.html", '_blank', 'location=no,height=570,width=520,scrollbars=yes,status=yes');
    newWindow.parentWindow = window;
    newWindow.testVar = 6;
    newWindow.onbeforeunload = childWindowClosed;
    window.childWindow = newWindow;
    window.myButton.disabled = true;
}
window.readFromChildWindow = function() {
    let whatToRead = document.getElementById("whatToRead").value;
    alert(whatToRead + " is " + window[whatToRead] + " on this doc, " +
        childWindow[whatToRead] + " on the other doc.");
}
window.childWindowClosed = function() {
    alert("Child closed");
    window.childWindow = "";
    window.myButton.disabled = false;
}