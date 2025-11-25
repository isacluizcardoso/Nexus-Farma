// Dados de farmácias fictícias com posições de mapa em porcentagem (0-100%)
const fakePharmacies = [
    { id: 101, name: "Droga Bem Estar", address: "Rua A, 123", mapX: 30, mapY: 20 },
    { id: 102, name: "Farma Popular", address: "Av. Principal, 456", mapX: 75, mapY: 55 },
    { id: 103, name: "Saúde & Cia", address: "Travessa Rápida, 789", mapX: 50, mapY: 85 },
    { id: 104, name: "Rede Max", address: "Rua do Centro, 100", mapX: 15, mapY: 70 },
    { id: 105, name: "Farmácia Mais", address: "Praça da Paz, 20", mapX: 60, mapY: 35 }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Popula o mapa com os marcadores
    populateMarkers();
    
    // 2. Popula a barra lateral com a lista
    populateSidebarList();
});

/**
 * Cria os marcadores falsos na área do mapa.
 */
function populateMarkers() {
    const markersArea = document.getElementById('markers-area');
    markersArea.innerHTML = ''; // Limpa qualquer conteúdo anterior

    fakePharmacies.forEach(pharmacy => {
        const marker = document.createElement('div');
        marker.className = 'fake-marker';
        marker.id = `marker-${pharmacy.id}`;
        
        // Posiciona o marcador usando os valores de porcentagem (mapX e mapY)
        marker.style.left = `${pharmacy.mapX}%`;
        marker.style.top = `${pharmacy.mapY}%`;

        // Adiciona a função de clique
        marker.addEventListener('click', () => {
            simulateDetailPage(pharmacy.name, pharmacy.id);
        });

        markersArea.appendChild(marker);
    });
}


function populateSidebarList() {
    const list = document.getElementById('pharmacies-list');
    list.innerHTML = ''; 

    fakePharmacies.forEach(pharmacy => {
        const item = document.createElement('div');
        item.className = 'pharmacy-item';
        item.id = `list-item-${pharmacy.id}`;
        item.innerHTML = `<div class="pharmacy-name">${pharmacy.name}</div>
                          <small>${pharmacy.address}</small>`;

        // Adiciona a função de clique
        item.addEventListener('click', () => {
            simulateDetailPage(pharmacy.name, pharmacy.id);
        });

        list.appendChild(item);
    });
}

function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}

/**
 * Simula a abertura de uma página de detalhes em uma nova aba/janela,
 * apontando para 'produtos.html'.
 * * @param {string} name Nome da farmácia.
 * @param {number} id ID da farmácia.
 */
function simulateDetailPage(name, id) {
    
    const detailURL = `produtos.html?farmacia_id=${id}&nome=${encodeURIComponent(name)}`;
    

    window.open(detailURL, '_blank');
}

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
