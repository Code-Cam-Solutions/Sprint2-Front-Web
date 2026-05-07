if (window.location.pathname.includes("index.html")) {
    setTimeout(() => {
        window.location.href = "pages/cam.html";
    }, 2000);
}

const btnVoltar = document.getElementById("btn-voltar");
if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}

const btnCaptura = document.getElementById("btn-captura");
if (btnCaptura) {
    btnCaptura.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}