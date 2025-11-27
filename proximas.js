// Dados de farmácias fictícias (mantidos)
const fakePharmacies = [
    { id: 101, name: "Farmacia Drogal", address: "Rua A, 123", mapX: 30, mapY: 20 },
    { id: 102, name: "Droga Raia", address: "Av. Principal, 456", mapX: 75, mapY: 55 },
    { id: 103, name: "Droga Pires 24hs | Unidade Centro", address: "Travessa Rápida, 789", mapX: 50, mapY: 85 },
    { id: 104, name: "Drogaria São Paulo", address: "Rua do Centro, 100", mapX: 15, mapY: 70 },
    { id: 105, name: "Farmácia Mais", address: "Praça da Paz, 20", mapX: 60, mapY: 35 }
];

document.addEventListener('DOMContentLoaded', () => {
    populateMarkers();
    populateSidebarList();
});

// FUNÇÕES DE POPULAÇÃO (Mantidas)
// ------------------------------------------------------------------

function populateMarkers() {
    const markersArea = document.getElementById('markers-area');
    markersArea.innerHTML = ''; 

    fakePharmacies.forEach(pharmacy => {
        const marker = document.createElement('div');
        marker.className = 'fake-marker';
        marker.style.left = `${pharmacy.mapX}%`;
        marker.style.top = `${pharmacy.mapY}%`;
        
        // CHAMA A FUNÇÃO DE REDIRECIONAMENTO
        marker.addEventListener('click', () => {
            openProdutosPage(pharmacy.name, pharmacy.id);
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
        item.innerHTML = `<div class="pharmacy-name">${pharmacy.name}</div>
                          <small>${pharmacy.address}</small>`;
                          
        // CHAMA A FUNÇÃO DE REDIRECIONAMENTO
        item.addEventListener('click', () => {
            openProdutosPage(pharmacy.name, pharmacy.id);
        });
        list.appendChild(item);
    });
}

// FUNÇÃO CHAVE PARA ABRIR A NOVA PÁGINA NA MESMA JANELA
// ------------------------------------------------------------------

/**
 * Abre o arquivo 'produtos.html' substituindo o conteúdo da página atual (mesma janela).
 * * @param {string} name Nome da farmácia.
 * @param {number} id ID da farmácia.
 */
function openProdutosPage(name, id) {
    // Cria a URL com os parâmetros
    const detailURL = `produtos.html?farmacia_id=${id}&nome=${encodeURIComponent(name)}`;
    
    // REDIRECIONA A JANELA ATUAL para a nova URL
    window.location.href = detailURL; 
}

function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}


