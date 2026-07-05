const dialog = document.getElementById("dialog-eliminar");
const form = document.getElementById("form-eliminar");
const motivoInput = document.getElementById("motivo");
const errorEl = document.getElementById("dialog-error");
const cancelBtn = document.getElementById("dialog-cancelar");

function abrirDialogoEliminar(fotoId) {
  form.action = "/admin-fotos/" + fotoId + "/eliminar";
  motivoInput.value = "";
  errorEl.hidden = true;
  dialog.showModal();
  motivoInput.focus();
}

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

form.addEventListener("submit", (e) => {
  const motivo = motivoInput.value.trim();
  if (motivo.length < 5 || motivo.length > 200) {
    e.preventDefault();
    errorEl.textContent = "El motivo debe tener entre 5 y 200 caracteres.";
    errorEl.hidden = false;
  }
});
