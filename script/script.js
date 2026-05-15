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

const btnGallery = document.getElementById("btn-gallery");
if (btnGallery) {
    btnGallery.addEventListener("click", () => {
        window.location.href = "gallery.html";
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
function setupSalvarMateria(btnSalvarId) {
    const btnSalvar = document.getElementById(btnSalvarId);
    if (!btnSalvar) return;

    const caixaMaterias = document.getElementById("caixa-materias");
    const overlayMaterias = document.getElementById("overlay-materias");
    const popupSucesso = document.getElementById("popup-sucesso");

    if (!caixaMaterias || !overlayMaterias || !popupSucesso) return;

    btnSalvar.addEventListener("click", () => {
        caixaMaterias.classList.add("visivel");
        overlayMaterias.classList.add("visivel");
    });

    overlayMaterias.addEventListener("click", () => {
        caixaMaterias.classList.remove("visivel");
        overlayMaterias.classList.remove("visivel");
    });

    const btnsMaterias = document.querySelectorAll(".btn-materia");
    btnsMaterias.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const materia = btn.getAttribute("data-materia");
            
            caixaMaterias.classList.remove("visivel");

            popupSucesso.classList.add("visivel");

            setTimeout(() => {
                overlayMaterias.classList.remove("visivel");
                window.location.href = "cam.html";
            }, 1000);
        });
    });
}

setupSalvarMateria("btn-salvar");
setupSalvarMateria("btn-salvar-topicos");
setupSalvarMateria("btn-salvar-summary");
setupSalvarMateria("btn-salvar-flashcards");
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

const topicosSend = document.getElementById("topicos-send");
if (topicosSend) {
    const topicosInput    = document.getElementById("topicos-input");
    const topicosConteudo = document.getElementById("topicos-conteudo");
    const topicosRodape   = document.getElementById("topicos-rodape");

    const dadosTopicos = [
        {
            emoji: "🌿",
            titulo: "O que são as gimnospermas?",
            itens: [
                "Plantas que produzem sementes 'nuas', sem fruto",
                "Não têm flores de verdade 🌸",
                "As sementes ficam em estruturas chamadas cones (ou estróbilos)",
            ]
        },
        {
            emoji: "♻️",
            titulo: "Como elas se reproduzem?",
            itens: [
                { texto: "Usam o vento para transportar o pólen", subitens: [] },
                {
                    texto: "Possuem:",
                    subitens: [
                        "🌲 Cones masculinos → produzem pólen",
                        "🌲 Cones femininos → formam as sementes",
                    ]
                },
                "Não precisam de água para a fecundação 💧",
            ]
        },
        {
            emoji: "🌲",
            titulo: "Características principais",
            itens: [
                "Têm vasos condutores (xilema e floema) 🌿",
                "Geralmente são árvores grandes e duradouras 🏔️",
                {
                    texto: "Folhas em forma de:",
                    subitens: [
                        "Agulha (tipo pinheiro)",
                        "Escamas",
                    ]
                },
                {
                    texto: "Adaptadas a:",
                    subitens: [
                        "❄️ Climas frios",
                        "🏜️ Ambientes secos",
                    ]
                },
            ]
        },
    ];

    function criarBlocoTopico(dado, delay) {
        const bloco = document.createElement("div");
        bloco.className = "topicos-bloco";

        const titulo = document.createElement("div");
        titulo.className = "topicos-bloco-titulo";
        titulo.innerHTML = `<span class="emoji">${dado.emoji}</span> ${dado.titulo}`;
        bloco.appendChild(titulo);

        const ul = document.createElement("ul");
        ul.className = "topicos-lista";

        dado.itens.forEach(item => {
            const li = document.createElement("li");
            if (typeof item === "string") {
                li.textContent = item;
            } else {
                li.textContent = item.texto;
                if (item.subitens && item.subitens.length) {
                    const subUl = document.createElement("ul");
                    item.subitens.forEach(sub => {
                        const subLi = document.createElement("li");
                        subLi.textContent = sub;
                        subUl.appendChild(subLi);
                    });
                    li.appendChild(subUl);
                }
            }
            ul.appendChild(li);
        });

        bloco.appendChild(ul);

        const audioBtn = document.createElement("button");
        audioBtn.className = "topicos-audio-btn flash-audio";
        audioBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072"/>
            </svg>`;
        bloco.appendChild(audioBtn);

        topicosConteudo.appendChild(bloco);
        setTimeout(() => bloco.classList.add("visivel"), delay);
    }

    function mostrarTopicos() {
        topicosConteudo.innerHTML = "";

        const pensando = document.createElement("p");
        pensando.className = "topicos-pensando";
        pensando.textContent = "Pensando...";
        topicosConteudo.appendChild(pensando);

        setTimeout(() => {
            topicosConteudo.innerHTML = "";
            dadosTopicos.forEach((dado, i) => criarBlocoTopico(dado, i * 220));
            topicosRodape.style.display = "flex";
        }, 1500);
    }

    topicosSend.addEventListener("click", () => {
        if (topicosInput.value.trim() !== "") mostrarTopicos();
    });

    topicosInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && topicosInput.value.trim() !== "") mostrarTopicos();
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