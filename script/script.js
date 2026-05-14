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

const btnCaptura = document.getElementById("btn-captura");
if (btnCaptura) {
    btnCaptura.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}

const btnCamera = document.getElementById("btn-camera");
if (btnCamera) {
    btnCamera.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}

const btnCategoria = document.querySelectorAll(".categoria");
if (btnCategoria) {
    btnCategoria.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Categoria adicionada com sucesso!")

            setTimeout(() => {
                window.location.href = "cam.html";
            })
            
        });
    });
}

const btnResumo = document.getElementById("resumo-card");
if (btnResumo) {
    btnResumo.addEventListener("click", () => {
        window.location.href = "summary.html";
    });
}

const btnBacktoOrganize = document.getElementById("btn-summary-voltar");
if (btnBacktoOrganize) {
    btnBacktoOrganize.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}

const summaryForm = document.getElementById("summary-form");
if (summaryForm) {
    summaryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Recurso não está disponível no momento.");

        summaryForm.reset()
    });
}

const btnResumoCard = document.getElementById("resumo-card");
if (btnResumoCard) {
    btnResumoCard.addEventListener("click", () => {
        window.location.href = "summary.html";
    });
}

const btnSummaryVoltar = document.getElementById("btn-summary-voltar");
if (btnSummaryVoltar) {
    btnSummaryVoltar.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}

const btnCameraSummary = document.getElementById("btn-camera");
if (btnCameraSummary) {
    btnCameraSummary.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}

const summarySend = document.getElementById("summary-send");
if (summarySend) {
    const summaryInput    = document.getElementById("summary-input");
    const summaryConteudo = document.getElementById("summary-conteudo");
    const summaryRodape   = document.getElementById("summary-rodape");

    const textoResumo = `As gimnospermas são um grupo de plantas vasculares que se caracterizam principalmente por produzirem sementes "nuas", ou seja, não envolvidas por frutos (diferente das angiospermas). Essas sementes se desenvolvem geralmente em estruturas chamadas cones ou estróbilos, que podem ser masculinos (produtores de pólen) ou femininos (onde se formam as sementes).

    Elas não possuem flores verdadeiras nem frutos, e sua reprodução ocorre por meio da polinização pelo vento (anemófila). O grão de pólen é levado até o cone feminino, onde ocorre a fecundação sem necessidade de água — uma importante adaptação evolutiva em relação a grupos mais antigos, como as briófitas e pteridófitas.

    As gimnospermas possuem tecidos condutores bem desenvolvidos (xilema e floema), o que permite o transporte eficiente de água e nutrientes. Suas folhas costumam ser em forma de agulha (aciculadas) ou escamas, ajudando a reduzir a perda de água, o que as torna bem adaptadas a ambientes frios, secos ou de solo pobre.`;

    function mostrarResumo() {
        summaryConteudo.innerHTML = "";

        const pensando = document.createElement("p");
        pensando.className = "topicos-pensando";
        pensando.textContent = "Pensando...";
        summaryConteudo.appendChild(pensando);

        setTimeout(() => {
            summaryConteudo.innerHTML = "";

            const bloco = document.createElement("div");
            bloco.className = "topicos-bloco";

            const texto = document.createElement("p");
            texto.style.fontSize = "13px";
            texto.style.color = "#c0c0c0";
            texto.style.lineHeight = "1.7";
            texto.style.whiteSpace = "pre-line";
            texto.textContent = textoResumo;
            bloco.appendChild(texto);

            const audioBtn = document.createElement("button");
            audioBtn.className = "topicos-audio-btn flash-audio";
            audioBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072"/>
                </svg>`;
            bloco.appendChild(audioBtn);

            summaryConteudo.appendChild(bloco);
            setTimeout(() => bloco.classList.add("visivel"), 100);
            summaryRodape.style.display = "flex";
        }, 1500);
    }

    summarySend.addEventListener("click", () => {
        if (summaryInput.value.trim() !== "") mostrarResumo();
    });

    summaryInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && summaryInput.value.trim() !== "") mostrarResumo();
    });
}