function inicializarMapa() {
  var coordenadas = { lat: -23.550520, lng: -46.633308 }; // Coordenadas de São Paulo, por exemplo
  var mapa = new google.maps.Map(document.getElementById('map'), {
    center: coordenadas,
    zoom: 15 // Define o nível de zoom
  });

  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Minha Localização'
  });
}
