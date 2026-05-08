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