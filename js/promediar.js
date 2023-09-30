/**
 * @author Pedro Castillo 26628013
 * Este script realiza la validación de la operacion APP.
 */
const dataTotal = [];
function agregarNotas() {
  let nom = document.getElementById("nombre").value;
  let not1 = document.getElementById("nota1").value;
  let not2 = document.getElementById("nota2").value;
  let not3 = document.getElementById("nota3").value;
  let not4 = document.getElementById("cedula").value;
  //Validadr el campo nombre
  if (nom === "") {
    swal(
      "Ingrese el nombre del Estudiante",
      "El campo de nombre no puede ser vacio",
      "warning"
    );
    return false;
  }
  // Validar las notas si estan vacias
  if (not1 === "" || not2 === "" || not3 === "") {
    swal(
      "Ingese las notas por favor",
      "La notas no pueden ser vacios",
      "warning"
    );
    return false;
  }
  //Validar las notas, no mayor de 21 puntos, solo asta 20
  if (not1 >= 21 || not2 >= 21 || not3 >= 21) {
    alert("la nota no puede ser mas de 20");
    return false;
  }

  //Promediar la suma de las notas entre 3
  var prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

  //Variable obserbacion
  var obs = 0;
  //Promedio menor o igual a 10.0 entonces aprobado, caso ocntrario aprobado
  if (prom >= 10.0) {
    obs = value = "!Aprobado¡ &#x2714";
  } else {
    obs = value = "!Desaprobado¡ &#x274c";
  }

  const tabla = document.getElementById("addtabla");

  const fila = document.createElement("tr");

  fila.innerHTML = `<td> ${nom} </td><td> ${not4} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${obs} </td>`;

  tabla.appendChild(fila);

  if (prom > 10.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(5)"
    ).style.background = "#B3DEBA";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(5)"
    ).style.background = "#FFCABA";
  }
  if (not1 > 10.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "red";
  }
  if (not2 > 10.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "red";
  }
  if (not3 > 10.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "red";
  }

  dataTotal.push({
    nota1: parseFloat(not1),
    nota2: parseFloat(not2),
    nota3: parseFloat(not3),
    aprobado: prom >= 10,
  });

  document.getElementById("nombre").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";

  totals(dataTotal);
}

function totals(data) {
  const tabla = document.getElementById("addtabla2");
  const fila1 = document.createElement("tr");
  const fila2 = document.createElement("tr");
  const fila3 = document.createElement("tr");
  const fila4 = document.createElement("tr");
  const fila5 = document.createElement("tr");
  const fila6 = document.createElement("tr");
  const fila7 = document.createElement("tr");

  tabla.innerHTML = "";

  const promedios = {
    nota1: (
      data.map((item) => item.nota1).reduce((prev, curr) => prev + curr, 0) /
      data.length
    ).toFixed(2),
    nota2: (
      data.map((item) => item.nota2).reduce((prev, curr) => prev + curr, 0) /
      data.length
    ).toFixed(2),
    nota3: (
      data.map((item) => item.nota3).reduce((prev, curr) => prev + curr, 0) /
      data.length
    ).toFixed(2),
  };

  const aprobados = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
  };
  const aplazados = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
  };

  let todas = 0;
  let una = 0;
  let dos = 0;

  data.forEach((n) => {
    let apr = 0;

    if (n.nota1 >= 10) {
      aprobados.nota1++;
      apr++;
    } else aplazados.nota1++;

    if (n.nota2 >= 10) {
      aprobados.nota2++;
      apr++;
    } else aplazados.nota2++;

    if (n.nota3 >= 10) {
      aprobados.nota3++;
      apr++;
    } else aplazados.nota3++;

    if (apr == 1) una = apr;
    else if (apr == 2) dos = apr;
    else if (apr == data.length) todas = apr;

    apr = 0;
  });

  const notaMaxima = {
    nota1: Math.max(...data.map((n) => n.nota1)),
    nota2: Math.max(...data.map((n) => n.nota2)),
    nota3: Math.max(...data.map((n) => n.nota3)),
  };

  fila1.innerHTML = `<td>Promedios</td><td>--</td><td> ${promedios.nota1} </td><td> ${promedios.nota2} </td><td> ${promedios.nota3} </td><td>-</td>`;

  fila2.innerHTML = `<td>Aprobados</td><td>--</td><td> ${aprobados.nota1} </td><td> ${aprobados.nota2} </td><td> ${aprobados.nota3} </td><td>-</td>`;

  fila3.innerHTML = `<td>Reprobados</td><td>--</td><td> ${aplazados.nota1} </td><td> ${aplazados.nota2} </td><td> ${aplazados.nota3} </td><td>-</td>`;

  fila4.innerHTML = `<td>Nota Maxima</td><td>--</td><td> ${notaMaxima.nota1} </td><td> ${notaMaxima.nota2} </td><td> ${notaMaxima.nota3} </td><td>-</td>`;

  fila5.innerHTML = `<td>Aprobaron una</td><td>--</td><td> ${una} </td><td>-</td><td>-</td><td>-</td>`;

  fila6.innerHTML = `<td>Aprobaron dos</td><td>--</td><td> ${dos} </td><td>-</td><td>-</td><td>-</td>`;

  fila7.innerHTML = `<td>Aprobaron todas</td><td>--</td><td> ${todas} </td><td>-</td><td>-</td><td>-</td>`;

  tabla.appendChild(fila1);
  tabla.appendChild(fila2);
  tabla.appendChild(fila3);
  tabla.appendChild(fila4);
  tabla.appendChild(fila5);
  tabla.appendChild(fila6);
  tabla.appendChild(fila7);
}
