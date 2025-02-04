document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: toggleMenu
            });
        });
    });

    function toggleMenu() {
        let elemento = document.querySelector(".task-menu-header-search");
        if (elemento) {
            // Verifica o estado atual e alterna entre 'block' e 'none'
            if (elemento.style.display === "none" || elemento.style.display === "") {
                elemento.style.setProperty("display", "block", "important");
                console.log("Elemento ativado!");
            } else {
                elemento.style.setProperty("display", "none", "important");
                console.log("Elemento ocultado!");
            }
        } else {
            console.log("Elemento não encontrado!");
        }
    }
});
