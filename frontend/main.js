const h1 = document.querySelector("h1");

async function pegarFakes() {
    const res = await fetch("http://localhost:8080/fakes/get");
    const fakes = await res.json();
    return fakes;
}

function quiz(fake) {
    document.querySelector("#p1").textContent = fake.conteudo;
    return new Promise(res => {
        function avaliar(palpite) {
            res([fake.fake != palpite, fake.fake]);
        }

        document.querySelector("#btn1").onclick = () => avaliar(1);
        document.querySelector("#btn2").onclick = () => avaliar(0);
    });

}

function Popup() {
    const popup = document.createElement("div");
    popup.className = "popup";
    document.body.appendChild(popup);
    
    document.querySelectorAll("h1, .container").forEach(el => el.style.filter = "blur(5px)");
    document.querySelectorAll("#btn1, #btn2").forEach(btn => btn.style.cursor = "default");
    return popup;

}

function gameOver(eraFake) {
    const popup = Popup();
    popup.innerHTML = `
        <p>${eraFake ? "infelizmente era uma fake" : "a notícia era verdadeira"}</p>
        <button href="index.html">voltar ao menu</button>    
    `
    
}

function ganhou() {
    const popup = Popup();
    popup.innerHTML = "ebaa voce ganhou :3"
}

async function main() {
    const fakes = await pegarFakes();
    for (let i = 0; i < fakes.length; i++) {
        document.querySelector("#p2").textContent = `${i+1}/${fakes.length}`
        const [acertou, eraFake] = await quiz(fakes[i]);

        if (!acertou) {
            gameOver(eraFake);
            return;
        }
    }   

    ganhou()
}

window.onload = main;