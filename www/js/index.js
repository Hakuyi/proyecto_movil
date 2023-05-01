let listaAlumnos = [];


const objAlumno = {
    id: '',
    nombre: '',
    apellido: ''

}

var editando = false;

const formulario = document.querySelector('#formul')
const nombreInput = document.querySelector('#nombre')
const apellidoInput = document.querySelector('#apellido')
const btnguardar = document.querySelector('#guardar')


formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {

    e.preventDefault()

    if (nombreInput.value === '' || apellidoInput.value === '') {
        alert('Esto debe ir con valores, no sea sapo, haga lo que se le pide.')
        return;

    }
    if (editando) {
        editarAlumno();
        editando = false;

    } else {
        objAlumno.id = Date.now()
        objAlumno.nombre = nombreInput.value;
        objAlumno.apellido = apellidoInput.value;

        agregarAlumno();

    }
    function agregarAlumno() {
        listaAlumnos.push({ ...objAlumno })

        mostrarAlumnos();
        formulario.reset();
        limpiarObjeto();
    }

    function limpiarObjeto() {

        objAlumno.id = '';
        objAlumno.nombre = '';
        objAlumno.apellido = '';
    }

    function mostrarAlumnos() {

        limpiarHTML();


        const divAlumnos = document.querySelector('.alumnos');
        listaAlumnos.forEach(alumno => {
            const { id, nombre, apellido } = añumno;
            const parrafo = document.createElement('p');

            parrafo.textContent = `${id} - ${nombre} - ${apellido} -`;
            parrafo.dataset.id = id;

            const editarBoton = document.createElement('button');
            editarBoton.onclick = () => cargarAlumno(alumno);
            editarBoton.textContent = 'Editar';
            editarBoton.classList.add('btn', 'btn-edictar');
            parrafo.append(editarBoton);

            const eliminarBoton = document.createElement('button');
            eliminarBoton.onclick = () =>


    })
    }


    function cargarAlumno(alumno) {
const{id,nombre,apellido}=alumno;

        nombreInput.value=nombre;
        apellidoInput.value=apellido;

        

    }


}