const VALORTCKT = 200;

/*Referencias a objetos HTML DOM */
const btnResumen = document.getElementById("btn-resumen");
const cantTicketsInput = document.getElementById("InputCant");
const categoriaInput = document.getElementById("InputCat");
const spanTotalAPagar = document.getElementById("totalAPagar");


const renderPrecio = (precio) => {
    spanTotalAPagar.textContent = precio;
}

const getDescuento = (categoria) => {
    switch (categoria){
        case "estudiante":
            return 0.20;
        case "trainee":
            return 0.5;
        case "junior":
            return 0.85;
        default:
            return 1;
    }
}

const resumenHandler = () => {
    let cantTckts = cantTicketsInput.value;
    let categoria = categoriaInput.value;

    let descuento = getDescuento(categoria);

    let precio = cantTckts*VALORTCKT*descuento;

    renderPrecio(precio);

}

btnResumen.addEventListener('click', resumenHandler);