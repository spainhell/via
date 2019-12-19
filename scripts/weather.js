function getFromYrNo() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        let xmlDoc;
        let parser;
        if (this.readyState == 4 && this.status == 200) {

            console.log("Response from YR.NO length:", xhttp.responseText.length);
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

            let oblacnost = cloudy.getAttribute("name");
            let vitr = windDirection.getAttribute("name") + " " + windSpeed.getAttribute("mps") + " m/s";
            let teplota = temperature.getAttribute("value") + "°C";
            let tlak = pressureTag.getAttribute("value") + " " + pressureTag.getAttribute("unit");

            document.getElementById("weather").innerHTML = oblacnost + "<br>" + vitr + "<br>" + teplota + "<br>" + tlak;
        }
    };

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.yr.no/place/Czech_Republic/Zl%C3%ADn/Vizovice/forecast.xml", true);
    xhttp.send();

}

