class Weather {
    constructor(API_KEY, API_KEY_IMG) {
        this.API_KEY = API_KEY;
        this.API_KEY_IMG = API_KEY_IMG;
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
            console.log("This is your current position");
            console.log(position);
            this.getWeather(lat, lng);
        }, err =>{
            console.log(err)
        });
    }

    getWeather(lat, lng) {
        //API_KEY for weather
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json.currently.summary);
            let img = json.currently.icon;
            this.getImage(img);
            let app = new Image('e59jizvvHYSZ3rKBBk0xLWmE4ElKZ4on');
        });
    }

    getImage(img) {
        //API_KEY for image
        let url = ``;
    }

}
//let app = new Weather(API_KEY, API_KEY_IMG);
let app = new Weather('99fc788f5b715f9a75262427d4da53aa', 'e59jizvvHYSZ3rKBBk0xLWmE4ElKZ4on');