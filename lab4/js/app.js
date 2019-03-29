class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("🚀👀");
        this.initialize();
    }

    initialize() {
        this.getMyLocation();
    }

    getMyLocation() {
        console.log("Getting location ☀️");
        navigator.geolocation.getCurrentPosition(position => {
            console.log("found you");
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            console.log(position);
            this.getWeather(lat, lng);
        }, err =>{
            console.log(err)
        });
    }

    getWeather(lat, lng) {
        //AJAX CALL / XHR
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json.currently.summary);
        });
    }
}

let app = new Weather('99fc788f5b715f9a75262427d4da53aa');