function getTimeToYearEnd() {
    var startDate = new Date();
    var endDate   = new Date("2019-12-31T23:59:59");

    var delta = Math.abs(endDate - startDate) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = Math.floor(delta);

    document.getElementById("yearend").innerHTML = days + " dní " + hours + " hodin " + minutes + " minut " + seconds + " vteřin";
}
