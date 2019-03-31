class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.initialize();
    } 
 
 initialize() {
     this.getMyLocation();
     this.getFact();
 }
 getMyLocation(){
   //console.log("get location"); 
   navigator.geolocation.getCurrentPosition(position => {
     //console.log (position);
     let lat = position.coords.latitude;
     let long = position.coords.longitude;
 
     this.getWeather(lat, long);
   }, err => {
     console.log(err);
   });
 }
 getWeather(lat, long){
     let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${long}?units=si`;
     fetch(url)
     .then(response =>{
         return response.json();
     })
     .then(json =>{
         let temp = document.createElement("h1");
         temp.innerHTML = `Today is ${json.currently.summary}`;
         document.querySelector("body").appendChild(temp);
     });
 }
 
 getFact(){

    let url = `https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;
        fetch(url)
        
        .then(response =>{
            return response.json();
            console.log(json);
        })
        .then(json =>{
            console.log(json);
            console.log(json.text);
            document.querySelector("body").innerHTML += `<p>${json.text}</p>`;
        });
 } 
  
 }
 
 let app = new Weather('99fc788f5b715f9a75262427d4da53aa');