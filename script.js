const validarRegistro = () => {
    alert("test")
    window.location.href = "./index.html";
}

// Código de filtrado original extraido de https://www.w3schools.com/howto/howto_js_filter_table.asp
const filtradoTabla = () => {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filtro-tipo");
  filter = input.value.toUpperCase();
  table = document.getElementById("entradas");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.innerText.toUpperCase();
      if (txtValue === filter) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}