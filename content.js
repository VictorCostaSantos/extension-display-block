function transformarForumEmLink() {
    const titulo = document.querySelector(".main-banner-title__container h2.container__title");

    if (titulo && titulo.textContent.trim() === "Fórum") {
        const link = document.createElement("a");
        link.href = "https://cursos.alura.com.br/forum/todos/1";
        link.textContent = "Fórum";
        link.target = "_self";
        link.style.color = "white";
        link.style.textDecoration = "underline";
        link.style.transition = "color 0.3s ease"; // Transição suave

        // Adiciona efeito de hover dinamicamente
        link.addEventListener("mouseover", () => {
            link.style.color = "#60DBFB"; // Amarelo dourado no hover
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white"; // Retorna ao branco quando o mouse sai
        });

        titulo.innerHTML = "";
        titulo.appendChild(link);
        console.log("Fórum transformado em link automaticamente!");
    }
}

// Garante que o script rode após o carregamento da página
window.addEventListener("load", transformarForumEmLink);
