const render = () => {
    const formulario = document.querySelector("#formulario");

    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const edad = document.querySelector("#edad");
    const parrafo = document.querySelector("#parrafo");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombreValue = nombre.value;
        const apellidoValue = apellido.value;
        const edadValue = edad.value;
        parrafo.innerHTML = `El nombre de la persona es ${nombreValue}, su apellido es ${apellidoValue} y su edad es ${edadValue} años.`;
    });
};
document.addEventListener("DOMContentLoaded", render);