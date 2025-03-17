// Consumo de API con fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error en la petición", error));


// Uso de async/await para consumo de APIs
async function obtenerUsuarios() {
    try {
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log("Error en la solicitud", error);
    }
}
obtenerUsuarios();
