
function atualizarRelogio() {
    const dataAtual = new Date();

    const hora = dataAtual.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    const data = dataAtual.toLocaleDateString('pt-BR', {
        weekday: 'long', 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric'
    });

    const elementoData = document.getElementById('relogio-data');
    const elementoHora = document.getElementById('relogio-hora');
    
    if (elementoData && elementoHora) {
        elementoData.textContent = data.charAt(0).toUpperCase() + data.slice(1);
        elementoHora.textContent = hora;
    }
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);

