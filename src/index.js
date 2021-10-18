
/*map*/
function initMap() {
    const uluru = { lat: 51.509865, lng: -0.118092 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }