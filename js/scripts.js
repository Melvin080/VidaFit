//Se crea el objeto conteniendo los horiarios
const horarioDeClase = {
    Lunes: [
        {hora: "7:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "8:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "9:00 AM", nombre: "Spinning", cupos: 30},
        {hora: "10:00 AM", nombre: "Spinning", cupos: 30},
        {hora: "11:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "12:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "2:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "3:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "4:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "8:00 PM", nombre: "Yoga", cupos: 20}
    ],
    Martes: [
        {hora: "7:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "8:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "9:00 AM", nombre: "Spinning", cupos: 30},
        {hora: "10:00 AM", nombre: "Spinning", cupos: 30},
        {hora: "11:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "12:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "2:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "3:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "4:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "8:00 PM", nombre: "Yoga", cupos: 20}
    ],
    Miercoles: [
        {hora: "7:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "9:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "10:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "11:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "12:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "2:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "3:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "4:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 PM", nombre: "Entrenamiento", cupos: 30}
    ],
    Jueves: [
        {hora: "7:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "9:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "10:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "11:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "12:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "2:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "3:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "4:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 PM", nombre: "Entrenamiento", cupos: 30}
    ],
    Viernes: [
        {hora: "7:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "9:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "10:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "11:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "12:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "2:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "3:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "4:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 PM", nombre: "Entrenamiento", cupos: 30}
    ],
    Sabado: [
        {hora: "7:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "9:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "10:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "11:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "12:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "2:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "3:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "4:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 PM", nombre: "Entrenamiento", cupos: 30}
    ],
    Domingo: [
        {hora: "7:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "9:00 AM", nombre: "Entrenamiento", cupos: 30},
        {hora: "10:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "11:00 AM", nombre: "Yoga", cupos: 20},
        {hora: "12:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "2:00 PM", nombre: "Yoga", cupos: 20},
        {hora: "3:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "4:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "5:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "6:00 PM", nombre: "Spinning", cupos: 30},
        {hora: "7:00 PM", nombre: "Entrenamiento", cupos: 30},
        {hora: "8:00 PM", nombre: "Entrenamiento", cupos: 30}
    ]
};
//se crea la ejecusion luego de que carge el html
document.addEventListener('DOMContentLoaded', function() {
    for (const dia in horarioDeClase){
        const diaClases = horarioDeClase[dia];
        const contenedorDia = document.getElementById(dia);
        const listaDeClases = contenedorDia.querySelector('.diaClases');
        if(listaDeClases){
            diaClases.forEach(clase => {
                const ObjetoLista = document.createElement('li');
                ObjetoLista.textContent = `${clase.hora} - ${clase.nombre} (cupos: ${clase.cupos})`;
                const botonReservar = document.createElement('button');
                botonReservar.textContent = 'Reservar';
                botonReservar.addEventListener('click', function(){
                    //una alerta porque no creo que tenga tiempo para relacionar las llamadas y conexion a base de datos
                    alert(`Se reservo la clase de ${clase.nombre} para el ${dia} a las ${clase.hora}`);
                });
                ObjetoLista.appendChild(botonReservar);
                listaDeClases.appendChild(ObjetoLista);
            })
        }
    }
})