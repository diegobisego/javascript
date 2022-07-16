let alumnos = '';

for (let i = 1; i <= 10; i++) {
    let alumno = prompt('Inregese el alumno numero ' + i);
    alumnos += alumno + ' ';
}

alert('Los alumnos son: ' + alumnos)