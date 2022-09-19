function StartAlert() {
    $("#status").removeClass("clear");
    $("#status").addClass("alert");
}

function EndAlert() {
    $("#status").removeClass("alert");
    $("#status").addClass("clear");
}