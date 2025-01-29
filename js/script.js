function configurarTemaOscuro() {
    const html = document.documentElement
    const temaActual = html.getAttribute("data-theme")
    const nuevoTema = temaActual === "light" ? "dark" : "light"
    html.setAttribute("data-theme", nuevoTema)
  
    const botonTema = document.getElementById("botonTema")
    botonTema.innerHTML = nuevoTema === "light" ? "🌞" : "🌙"
  
    localStorage.setItem("tema", nuevoTema)
  }
  
  function cargarTemaPreferido() {
    const temaGuardado = localStorage.getItem("tema")
    if (temaGuardado) {
      document.documentElement.setAttribute("data-theme", temaGuardado)
      const botonTema = document.getElementById("botonTema")
      botonTema.innerHTML = temaGuardado === "light" ? "🌞" : "🌙"
    }
  }
  
  document.addEventListener("DOMContentLoaded", cargarTemaPreferido)