(function() {
    const temaGuardado = localStorage.getItem("tema") || "light";
    document.documentElement.setAttribute("data-theme", temaGuardado);
  })();