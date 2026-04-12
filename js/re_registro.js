const reRegistrar = () => {
    const params = new URLSearchParams(window.location.search);
    const nombre = encodeURIComponent(params.get("nombre"));
    const email = encodeURIComponent(params.get("email"));
    const rol = encodeURIComponent(params.get("rol"));

    window.location.href = `./registro.html?nombre=${nombre}&email=${email}&rol=${rol}`
}