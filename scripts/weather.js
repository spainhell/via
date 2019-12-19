function getFromYrNo() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        let xmlDoc;
        let parser;
        if (this.readyState == 4 && this.status == 200) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");

            //let root = xmlDoc.getRootNode();
            let forecast = xmlDoc.getElementsByTagName("forecast")[0];
            let tabular = forecast.getElementsByTagName("tabular")[0];
            let time = tabular.getElementsByTagName("time")[0];

            let cloudy = time.getElementsByTagName("symbol")[0];
            let windDirection = time.getElementsByTagName("windDirection")[0];
            let windSpeed = time.getElementsByTagName("windSpeed")[0];
            let temperature = time.getElementsByTagName("temperature")[0];
            let pressureTag = time.getElementsByTagName("pressure")[0];

            $("#cloudiness").html(cloudy.getAttribute("name"));
            $("#wind").html(windDirection.getAttribute("name") + " " + windSpeed.getAttribute("mps") + " m/s");
            $("#temperature").html(temperature.getAttribute("value") + "°C");
            $("#pressure").html(pressureTag.getAttribute("value") + " " + pressureTag.getAttribute("unit"));
            $("#weather").show();
        }
    };

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.yr.no/place/Czech_Republic/Zl%C3%ADn/Vizovice/forecast.xml", true);
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.send();

}

