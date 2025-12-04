function falar() {
    const texto = document.getElementById('texto').value;
    const velocidade = parseFloat(document.getElementById('velocidade').value);

    if (!texto.trim()) return alert('Digite algum texto');

    const msg = new SpeechSynthesisUtterance(texto)
    msg.rate = velocidade;
    speechSynthesis.speak(msg)
}

function limparTexto() {
    document.getElementById('texto').value = '';
    }

function usarFrase(frase) {
    document.getElementById(texto).value = frase;
    falar('Bom dia, tudo bem?');
}    