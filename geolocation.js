if("geolocation" in navigator){
    console.log('before');
    navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos.coords.longitude)
        console.log(pos.coords.latitude)
    }, error)
   
    function error() {
        alert("Localisation non réussit !")
    }
}
else{
    alert("Not found !");
}

document.body.append("Hello everyone.")
document.body.append("Bonjour à tous")