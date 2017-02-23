  /*var nombre = prompt("Ingresa tu nombre");
  document.getElementById('nombre').innerHTML= nombre;
  var apellido = prompt("Ingresa tu apellido");
  document.getElementById('apellido').innerHTML= apellido;
  var trabajo = prompt("A qué te dedicas?");
  document.getElementById('rol').innerHTML= trabajo;
  var cumpleanios = prompt("Cuándo es tu cumpleaños?");
  document.getElementById('cumple').innerHTML= cumpleanios;

*/
var arr = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ]

 var guardados = document.getElementById("datitos");

    datitos.innerHTML = "";

    arr.forEach(function(e){
      datitos.innerHTML+= "<div><ul><li>" + "Nombre: "+ e.nombre + "</li>"+
      "<li>"+ "Apellido: "  + e.apellido + "</li>"+
      "<li>" + "Rol: " + e.rol+ "</li>"+
      "<li>"+ "Cumpleaños: "+ e.cumpleanios +
      "</li><ul></div>";


    })
