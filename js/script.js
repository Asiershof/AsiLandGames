function configurarTemaOscuro() {
  const html = document.documentElement;
  const temaActual = html.getAttribute("data-theme");
  const nuevoTema = temaActual === "light" ? "dark" : "light";
  html.setAttribute("data-theme", nuevoTema);

  const botonTema = document.getElementById("botonTema");
  botonTema.innerHTML = nuevoTema === "light" ? "🌞" : "🌙";

  const imgEldrow = document.getElementById("imgEldrow");
  imgEldrow.src = nuevoTema === "dark" ? "img/EldrowBlack.png" : "img/Eldrow.png";

  const imgEkans = document.getElementById("imgEkans");
  imgEkans.src = nuevoTema === "dark" ? "img/EkansBlack.png" : "img/Ekans.png";

  localStorage.setItem("tema", nuevoTema);
}

function cargarTemaPreferido() {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado) {
    document.documentElement.setAttribute("data-theme", temaGuardado);
    const botonTema = document.getElementById("botonTema");
    botonTema.innerHTML = temaGuardado === "light" ? "🌞" : "🌙";

    const imgEldrow = document.getElementById("imgEldrow");
    imgEldrow.src = temaGuardado === "dark" ? "img/EldrowBlack.png" : "img/Eldrow.png";

    const imgEkans = document.getElementById("imgEkans");
    imgEkans.src = temaGuardado === "dark" ? "img/EkansBlack.png" : "img/Ekans.png";
  }
}

document.addEventListener("DOMContentLoaded", cargarTemaPreferido);