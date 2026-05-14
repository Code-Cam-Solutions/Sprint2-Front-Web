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

const flashSend = document.getElementById("flash-send");
if (flashSend) {
    const flashInput    = document.getElementById("flash-input");
    const flashConteudo = document.getElementById("flash-conteudo");
    const flashRodape   = document.getElementById("flash-rodape");

    const dadosFlash = [
        { pergunta: "O que são gimnospermas?",                     resposta: "Plantas que produzem sementes 'nuas', sem fruto." },
        { pergunta: "As gimnospermas possuem flores?",             resposta: "Não, elas formam estróbilos (cones)." },
        { pergunta: "Como ocorre a reprodução das gimnospermas?",  resposta: "Principalmente pelo vento (polinização anemófila)." },
        { pergunta: "Qual o agente polinizador das gimnospermas?", resposta: "Pelo vento (anemófila)." },
    ];

    function criarCardFlash(item, delay) {
        const wrapper = document.createElement("div");
        wrapper.className = "flash-card-wrapper";

        wrapper.innerHTML = `
            <div class="flash-card-inner">
                <div class="flash-card-frente pergunta">
                    <p>${item.pergunta}</p>
                    <button class="flash-audio">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072"/>
                        </svg>
                    </button>
                </div>
                <div class="flash-card-verso resposta">
                    <p>${item.resposta}</p>
                    <button class="flash-audio">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        wrapper.addEventListener("click", () => {
            wrapper.classList.toggle("virado");
        });

        flashConteudo.appendChild(wrapper);
        setTimeout(() => wrapper.classList.add("visivel"), delay);
    }

    function mostrarFlashcards() {
        flashConteudo.innerHTML = "";

        const pensando = document.createElement("p");
        pensando.className = "flash-pensando";
        pensando.textContent = "Pensando...";
        flashConteudo.appendChild(pensando);

        setTimeout(() => {
            flashConteudo.innerHTML = "";
            dadosFlash.forEach((item, i) => criarCardFlash(item, i * 180));
            flashRodape.style.display = "flex";
        }, 1500);
    }

    flashSend.addEventListener("click", () => {
        if (flashInput.value.trim() !== "") mostrarFlashcards();
    });

    flashInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && flashInput.value.trim() !== "") mostrarFlashcards();
    });
}

const btnFlashcards = document.getElementById("btn-flashcards");
if (btnFlashcards) {
    btnFlashcards.addEventListener("click", () => {
        window.location.href = "flashcards.html";
    });
}

const btnVoltarFlash = document.getElementById("btn-voltar-flashcards");
if (btnVoltarFlash) {
    btnVoltarFlash.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}

const btnCameraFlash = document.getElementById("btn-camera-flash");
if (btnCameraFlash) {
    btnCameraFlash.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}

const btnTopicos = document.getElementById("btn-topicos");
if (btnTopicos) {
    btnTopicos.addEventListener("click", () => {
        window.location.href = "topicos.html";
    });
}

const btnVoltarTopicos = document.getElementById("btn-voltar-topicos");
if (btnVoltarTopicos) {
    btnVoltarTopicos.addEventListener("click", () => {
        window.location.href = "organize.html";
    });
}

const btnCameraTopicos = document.getElementById("btn-camera-topicos");
if (btnCameraTopicos) {
    btnCameraTopicos.addEventListener("click", () => {
        window.location.href = "cam.html";
    });
}