const reRegistrar = () => {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get("nombre");
    const email = params.get("email");
    const rol = params.get("rol");

    window.location.href = `./registro.html?nombre=${nombre}&email=${email}&rol=${rol}`
}