const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const mensagem = document.getElementById("msg");
const btnEntrar = document.getElementById("login");
const sair = document.getElementById("logout");

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/login.html";
}

btnEntrar.addEventListener("click", () => {
  fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  })
    .then((res) => res.json())

    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);

        mensagem.innerText = "Login Ok!";
      } else {
        mensagem.innerText = data.erro;
      }
    });
});

sair.addEventListener("click", () => {
  localStorage.removeItem("token");
  alert("Sessao Encerrada.");
  window.location.href = "/login.html";
});
