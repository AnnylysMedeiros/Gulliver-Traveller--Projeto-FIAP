// const encuentrame = () => {
//    // todo o processo de localização

//     const success = (position) => {
//         const divCoordenadas = document.getElementById("coordenadas");
//         const divMapa = document.getElementById("mapa");
//         console.log(position);
//         const { latitude , longitude } = position.coords;
//         console.log(latitude, longitude);

//         divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;
    
//         //mapa
//         // https://www.mapquestapi.com/staticmap/v5/map?key=KEY&locations=LOCATION&size=WIDTH,HEIGHT
//         const mapa = new Image();
//         mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=jT0QRLARruiIO5jNjuNQZxb4G7AAmi5b&locations=${latitude},${longitude}&size=700,300`;
//         divMapa.appendChild(mapa);
//     };
//   //  AjDlDSYRo393ah_QeRYxKK7BG0dcbCkyuQJ07GIi49QEjzSaQszaqga--ysNp1df

//     const errorPosicion = (error) => {
//         const divCoordenadas = document.getElementById("coordenadas");
//         divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
//     };

//     navigator.geolocation.getCurrentPosition( success , errorPosicion );
// };

// const verificarGeo = () => {
//     if(!navigator.geolocation){
//   //  não suporta localização
//     const divCoordenadas = document.getElementById("coordenadas");
//     divCoordenadas.innerHTML ="<p>localização não suportada pelo navegador</>";
//     return;
//     }
//  //Se suportar, chamar a localização
//   encuentrame();
// };

// verificarGeo();


///////////////////////



var x=document.getElementById("demo");
        function getLocation()
          {
          if (navigator.geolocation)
            {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
            }
          else{x.innerHTML="Geolocalização não é suportada nesse browser.";}
          }
         
        function showPosition(position)
          {
          lat=position.coords.latitude;
          lon=position.coords.longitude;
          latlon=new google.maps.LatLng(lat, lon)
          mapholder=document.getElementById('mapholder')
          mapholder.style.height='20rem';
          mapholder.style.width='40rem';
         
          var myOptions={
          center:latlon,zoom:14,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          mapTypeControl:false,
          navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
          };
          var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
          var marker=new google.maps.Marker({position:latlon,map:map,title:"Você está Aqui!"});
          }
         
        function showError(error)
          {
          switch(error.code)
            {
            case error.PERMISSION_DENIED:
              x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
              break;
            case error.POSITION_UNAVAILABLE:
              x.innerHTML="Localização indisponível."
              break;
            case error.TIMEOUT:
              x.innerHTML="O tempo da requisição expirou."
              break;
            case error.UNKNOWN_ERROR:
              x.innerHTML="Algum erro desconhecido aconteceu."
              break;
            }
          }



//api google
// let map;
// let service;
// let infowindow;

// function initMap() {
//     const saoPaulo = new google.maps.LatLng(-23.4157393, -46.5475598);

//     infowindow = new google.maps.InfoWindow();
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: saoPaulo,
//         zoom: 15,
//     });

//     const request = {
//         query: "Museum of Contemporary Art Australia",
//         fields: ["name", "geometry"],
//     };

//     service = new google.maps.places.PlacesService(map);
//     service.findPlaceFromQuery(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//             for (let i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//             }

//             map.setCenter(results[0].geometry.location);
//         }
//     });
// }

// function createMarker(place) {
//     if (!place.geometry || !place.geometry.location) return;

//     const marker = new google.maps.Marker({
//         map,
//         position: place.geometry.location,
//     });

//     google.maps.event.addListener(marker, "click", () => {
//         infowindow.setContent(place.name || "");
//         infowindow.open(map);
//     });
// }







// ANTIGO CARROSSEL DO SITE 
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("slides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }