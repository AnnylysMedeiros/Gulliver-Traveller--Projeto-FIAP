const encuentrame = () => {
    //todo o processo de localização

    const success = (position) => {
        const divCoordenadas = document.getElementById("coordenadas");
        const divMapa = document.getElementById("mapa");
        console.log(position);
        const { latitude , longitude } = position.coords;
        console.log(latitude, longitude);

        divCoordenadas.innerHTML = `lat: ${latitude}, lng: ${longitude}`;
    
        //mapa
        // https://www.mapquestapi.com/staticmap/v5/map?key=KEY&locations=LOCATION&size=WIDTH,HEIGHT
        const mapa = new Image();
        mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=jT0QRLARruiIO5jNjuNQZxb4G7AAmi5b&locations=${latitude},${longitude}&size=400,300`;
        divMapa.appendChild(mapa);
    };

    const errorPosicion = (error) => {
        const divCoordenadas = document.getElementById("coordenadas");
        divCoordenadas.innerHTML = `Erro ao obter localização:<br> Error ${error.code}: ${error.message}`;
    };

    navigator.geolocation.getCurrentPosition( success , errorPosicion );
};

const verificarGeo = () => {
    if(!navigator.geolocation){
    //não suporta localização
    const divCoordenadas = document.getElementById("coordenadas");
    divCoordenadas.innerHTML ="<p>localização não suportada pelo navegador</>";
    return;
    }
 //Se suportar, chamar a localização
  encuentrame();
};

verificarGeo();







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