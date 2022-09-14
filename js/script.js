async function perrito(){
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson = await response.json();
    var img = responseJson.message;
    var contenedor = document.querySelector(".contenedorPerrito");
    contenedor.innerHTML = "<img src = '" + img + "' alt = 'perrito'/>";
}