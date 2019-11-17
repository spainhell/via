function getFromYrNo() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        let xmlDoc;
        let parser;
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            console.log("Response from YR.NO length:", xhttp.responseText.length);
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");

            let location = xmlDoc.getRootNode();
            let loc2 = location.getElementsByName("location");
            console.log("location:", loc2)
        }
    };

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.yr.no/place/Czech_Republic/Zl%C3%ADn/Vizovice/forecast.xml", true);
    //xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    //xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();

    //return xhttp.responseText;
}

