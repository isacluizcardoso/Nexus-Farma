
const trackingData = {
    "NF12346": [
        { status: "Pedido Entregue", date: "19/10/2025", time: "10:15", location: "Entregue ao destinatário" },
        { status: "Saiu para Entrega", date: "19/10/2025", time: "08:00", location: "Americana, SP" },
        { status: "Em Rota de Transferência", date: "18/10/2025", time: "14:30", location: "Centro de Distribuição de São Paulo" },
        { status: "Pedido em Separação", date: "17/10/2025", time: "16:00", location: "Armazém Principal" },
        { status: "Pagamento Confirmado", date: "17/10/2025", time: "10:00", location: "Sistema de Processamento" }
    ],
    "NF12347": [
        { status: "Pedido em Separação", date: "19/10/2025", time: "10:00", location: "Armazém Principal" },
        { status: "Pagamento Confirmado", date: "18/10/2025", time: "15:45", location: "Sistema de Processamento" }
    ]
};



const trackingPanel = document.querySelector('.tracking-panel');
const closePanelBtn = document.getElementById('closePanelBtn');
const panelOrderId = document.getElementById('panelOrderId');
const trackingTimeline = document.getElementById('trackingTimeline');
const trackButtons = document.querySelectorAll('.track-btn');


/**
 * Cria os elementos da linha do tempo com base nos dados.
 * @param {Array} events - Lista de eventos do rastreamento.
 */
function renderTimeline(events) {
    // Inverte a ordem para que o mais recente fique no topo
    const reversedEvents = [...events].reverse();
    
    trackingTimeline.innerHTML = reversedEvents.map(event => `
        <div class="timeline-event">
            <h3>${event.status}</h3>
            <p>${event.date} - ${event.time}</p>
            <p>${event.location}</p>
        </div>
    `).join('');
}

/**
 * Abre o painel e carrega os dados de um pedido.
 * @param {string} orderId - O ID do pedido a ser rastreado.
 */
function openTrackingPanel(orderId) {
    const events = trackingData[orderId];
    
    if (events) {
        panelOrderId.textContent = `Rastreamento Pedido #${orderId}`;
        renderTimeline(events);
        trackingPanel.classList.add('active');
        trackingPanel.classList.remove('hidden');
    } else {
        alert(`Dados de rastreamento para o pedido ${orderId} não encontrados.`);
    }
}

trackButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Encontra o elemento pai (order-card) para pegar o data-order-id
        const orderCard = event.target.closest('.order-card');
        const orderId = orderCard.getAttribute('data-order-id');
        openTrackingPanel(orderId);
    });
});

// 2. Lida com o fechamento do painel
closePanelBtn.addEventListener('click', () => {
    trackingPanel.classList.remove('active');
    // Adiciona a classe 'hidden' após a transição para acessibilidade
    setTimeout(() => {
        trackingPanel.classList.add('hidden');
    }, 400); 
});

function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}