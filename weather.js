function weather(){
    var from =document.getElementById("forcast").value;
    var xtp = new XMLHttpRequest();
    var url ="https://api.openweathermap.org/data/2.5/weather?q="+from+"&APPID=7688ed8a7fafab5786578af8a53ea38e";
    xtp.open("GET",url,true);
    xtp.send();
    xtp.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            var result = this.responseText;
            var jsonresult =JSON.parse(result);
            console.log(jsonresult);
            let output="";
                output +=`<h3><b>Current weather is :${Math.round(jsonresult.main.temp-273)} &#176C</b></h3>
                <h4>Description :${jsonresult.weather[0].description}</b></h4>
                <h4>Wind Speed :${jsonresult.wind.speed}"Km/h</b></h4>
                <h4>Humidity :${jsonresult.main.humidity} %</h4>
                <h4>Pressure :${jsonresult.main.pressure}mb</h4>
                <h4>Longitude :${jsonresult.coord.lon} and latitude :${jsonresult.coord.lat}</b></h4>`;
                
            if(output!==""){
                $("#fetched").html(output);
            }
        }
    }
}