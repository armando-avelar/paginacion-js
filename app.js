//--------Inicialización de variables

let paginasView = document.querySelector('.pagination');
let totalPaginas = 0;
let cantidad = 5;
let paginaActiva = 1;

//---------funcion para obtener la data
function getData() {
    return { ok: true, paginas: 30 }
}

//funcion para inicializar las paginas
function initPaginas() {
    let data = getData();
    totalPaginas = data.paginas;
    paginasView.innerHTML = '';
    for (let i = 1; i <= totalPaginas; i++) {
        if (i == 6) {
            break;
        }
        llenarPaginas(i)
    }
    if (totalPaginas > 1) {
        siguiente = true;
        paginasView.innerHTML += `
        <li class="page-item">
            <a class="page-link" href="#" name="pagina" data-page="${paginaActiva + 1}">Siguiente</a>
        <li>
        `;
    }
}

//funcion para escribir la etiqueta html
function llenarPaginas(i) {
    let elemento = document.createElement('li');
    elemento.setAttribute('class', `${paginaActiva == i ? 'page-item active' : ''}`)
    elemento.innerHTML = `<a class="page-link" href="#" name="pagina" data-page="${i}">${i}</a>`;
    paginasView.appendChild(elemento)
}

//funcion para cambiar de pagina
function pagina(numPagina) {
    paginaActiva = numPagina;
    paginasView.innerHTML = '';
    if (paginaActiva > 1) {
        anterior = true;
        paginasView.innerHTML += `<li class="page-item"><a class="page-link" href="#" name="pagina" data-page="${paginaActiva - 1}">
                        Anterior
                    </a><li>`;
    }

    if (numPagina >= 3 && numPagina < totalPaginas - 1 && totalPaginas >= 5) {
        for (let i = numPagina - 2; i <= numPagina + 2; i++) {
            llenarPaginas(i)
        }
    }
    if (numPagina == 2 && numPagina < totalPaginas - 1 && totalPaginas >= 5) {
        for (let i = numPagina - 1; i <= numPagina + 3; i++) {
            llenarPaginas(i)
        }
    }
    if (numPagina == 1 && numPagina < totalPaginas - 1 && totalPaginas >= 5) {
        for (let i = numPagina; i <= numPagina + 4; i++) {
            llenarPaginas(i)
        }
    }
    if (numPagina == totalPaginas - 1 && numPagina <= totalPaginas - 1 && totalPaginas >= 5) {
        for (let i = numPagina - 3; i <= numPagina + 1; i++) {
            llenarPaginas(i)
        }
    }
    if (numPagina == totalPaginas && totalPaginas >= 5) {
        for (let i = numPagina - 4; i <= numPagina; i++) {
            llenarPaginas(i)
        }
    }
    if (totalPaginas <= 5) {
        for (let i = 1; i <= totalPaginas; i++) {
            if (i == 6) {
                break;
            }
            llenarPaginas(i)
        }
    }
    if (paginaActiva < totalPaginas) {
        siguiente = true;
        paginasView.innerHTML += `<li class="page-item"><a class="page-link" href="#" name="pagina" data-page="${paginaActiva + 1}">
                        Siguiente
                    </a><li>`;
    }
}

//------Evento al hacer click en una pagina
paginasView.addEventListener('click', (e) => {
    if (e.target.getAttribute('name') == 'pagina') {
        pagina(parseInt(e.target.getAttribute('data-page')))
    }
});


initPaginas();


