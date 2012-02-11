jQuery.geolocation is a plugin for jQuery based on a recent geolocation draft. It basically works as a wrapper for all your geolocation demands.

Supported Devices

    Apple iPhone (OS 3.0)
    Mozilla Firefox (3.5) 

Usage example

Checking jquery.geolocation support:

$.geolocation.support() // or by calling built-in jquery.support-method: jquery.support.geolocation();

Please browse jQuery documentation for more on jQuery.support.

A basic jquery.geolocation request:

$.geolocation.find(function(location){
   alert(location.latitude+", "+location.longitude);
});

Extending jquery.geolocation request to handle errors:

$.geolocation.find(function(location){
   alert(location.latitude+", "+location.longitude);
}, function(){
   alert("Your device doesn't support jquery.geolocation.js");
});

About the author

NoMoreSleep is a Berlin based studio. 