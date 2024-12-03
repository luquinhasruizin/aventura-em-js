const story = {
    0: {
        text: "Você acorda em uma floresta escura. O que deseja fazer?",
        options: [
            { text: "Explorar a floresta", next: 1 },
            { text: "Seguir um caminho iluminado", next: 2 }
        ]
    },
    1: {
        text: "Você encontra um lobo feroz! O que você faz?",
        options: [
            { text: "Correr de volta", next: 0 },
            { text: "Tentar domar o lobo", next: 3 }
        ]
    },
    2: {
        text: "O caminho leva a um rio calmo. Você pode atravessá-lo ou seguir a margem.",
        options: [
            { text: "Atravessar o rio", next: 4 },
            { text: "Seguir a margem", next: 5 }
        ]
    },
    3: {
        text: "O lobo se torna seu amigo! Você agora tem um guia leal.",
        options: [{ text: "Continuar a aventura", next: 0 }]
    },
    4: {
        text: "Você encontra um tesouro escondido! Parabéns, você venceu!",
        options: [{ text: "Reiniciar", next: 0 }]
    },
    5: {
        text: "Você se perde e a aventura termina. Tente novamente!",
        options: [{ text: "Reiniciar", next: 0 }]
    }
};

const storyText = document.getElementById("story-text");
const optionsContainer = document.getElementById("options");

function startGame() {
    showStory(0);
}

function showStory(index) {
    const currentStory = story[index];
    storyText.classList.add("fade-out");

    setTimeout(() => {
        storyText.innerText = currentStory.text;
        storyText.classList.remove("fade-out");
        storyText.classList.add("fade-in");

        optionsContainer.innerHTML = "";
        currentStory.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.classList.add("option");
            button.onclick = () => showStory(option.next);
            optionsContainer.appendChild(button);
        });
    }, 500);
}

startGame();
