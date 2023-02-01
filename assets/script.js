// 2 fetchs for 2 apis
//  second fetch url nested as a return in the first api
//  as we are pulling in the Lat and Lon data from the first api and serving the second

//searcch btn
let subBtn = document.querySelector("#search-button");
let searchVal = document.querySelector("#search-input");
let humidSpan = document.querySelector('#humid');
let windSpan = document.querySelector('#wind');
let tempSpan = document.querySelector('#temp');
let todayWeather = document.querySelector('#today');
let forecast= document.querySelector('#forecast')

function getCity(){
    let city = searchVal.value
}


//event listner
subBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let value = searchVal.value;
    let geoUrl =
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=9ab119af6766e8df29b96e1e7e46bac0`;


    //   console.log(searchVal);
    fetch(geoUrl)
        .then((response) => response.json())
        .then((citiesFound) => {
            let firstCity = citiesFound[0];

            let lonLatUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=9ab119af6766e8df29b96e1e7e46bac0`;

            return fetch(lonLatUrl);
        })

        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let dataList = data.list;
            console.log(dataList);

           


            

            
        });

    /// to clear the search value
    searchVal.value = "";
});


/*
 fetch1(geo)
.then()res
.then(that gives me stuff){
    build up second fetchurl based off the stuff i got


    fetch2(newly created)
}

fn doesf1(searchterm){
    fetch(off seazrachterm)
    .then(response => response.json())
    .then(data=>console.log(data)) gives stuff
    call doesf2(lat, lon)
}

fn doesf2(lat,lon){
    queryurl + lat + lon
    fetch query
}

*/

///moment.js skiping the indexes to give snapshots of the following days
