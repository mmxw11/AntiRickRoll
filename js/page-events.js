
var detailsOpen = false;

function backToPreviousPage() {
    this.detailsOpen = false;
    window.history.back();
}

function accessSite() {
    this.detailsOpen = false;
    document.location.reload(true);
}

function toggleDetails() {
    var delement = document.getElementById('details-div');
    var dbutton = document.getElementById('details-button');
    if (detailsOpen) {
        delement.style.display = "none";
        dbutton.value = "DETAILS";
    } else {
        delement.style.display = "block";
        dbutton.value = "HIDE DETAILS";
    }
    this.detailsOpen = !detailsOpen;
}