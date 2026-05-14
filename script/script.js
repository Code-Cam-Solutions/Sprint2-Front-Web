const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "index.html" || currentPage === "") {
    setTimeout(() => {
        window.location.href = "pages/login.html";
    }, 2000);
}
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("Informe um email válido.");
            return;
        }
        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        window.location.href = "cam.html";
    });
}
const btnVoltar = document.getElementById("btn-voltar");
if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}
const btnFechar = document.getElementById("btn-fechar");
if (btnFechar) {
    btnFechar.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}
const btnCaptura = document.getElementById("btn-captura");
if (btnCaptura) {
    btnCaptura.addEventListener("click", () => {
        window.location.href = "transcricao.html";
    });
}
const btnTranscricao = document.getElementById("btn-transcricao");
if (btnTranscricao) {
    btnTranscricao.addEventListener("click", () => {
        window.location.href = "transcricao.html";
    });
}
const btnOrganizar = document.getElementById("btn-organizar");
if (btnOrganizar) {
    btnOrganizar.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}
const btnIrOrganizar = document.getElementById("btn-ir-organizar");
if (btnIrOrganizar) {
    btnIrOrganizar.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}
const btnCategoria = document.querySelectorAll(".categoria");
if (btnCategoria.length) {
    btnCategoria.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Categoria adicionada com sucesso!");
            setTimeout(() => {
                window.location.href = "cam.html";
            });
        });
    });
}
const textoEl = document.getElementById("texto-transcricao");
if (textoEl) {
    const transcricao =
        "Fotossíntese: processo pelo qual as plantas produzem " +
        "seu próprio alimento. A luz solar e a clorofila convertem " +
        "dióxido de carbono e água em glicose e oxigênio.";

    let i = 0;
    const velocidade = 28;

    function digitar() {
        if (i < transcricao.length) {
            textoEl.textContent += transcricao.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else {
            mostrarAnotacoes();
        }
    }

    setTimeout(digitar, 400);
}
function mostrarAnotacoes() {
    const lista = document.getElementById("lista-anotacoes");
    if (!lista) return;

    const itens = [
        "Processo essencial para a vida",
        "Clorofila captura luz solar",
        "Glicose — energia para a planta",
    ];

    itens.forEach((texto, index) => {
        const li = document.createElement("li");
        li.textContent = texto;
        lista.appendChild(li);

        setTimeout(() => {
            li.classList.add("visivel");
        }, 100 + index * 250);
    });
}
const btnAudio = document.getElementById("btn-audio");
if (btnAudio) {
    btnAudio.addEventListener("click", () => {
        btnAudio.classList.toggle("tocando");
    });
}