let shopListContainer, elenco, stringa;

myGet = (categoria) => {
    return fetch('http://localhost:3000/' + categoria)
        .then((response) => {
            return response.json();
        });
};

window.addEventListener('DOMContentLoaded', init);

myString = (src, prezzo, nome, descrizione, categoria, id) => {
    return stringa = `<!---PRODOTTO--->
    <div class="col-12 col-md-6 mb-4">
    <!---PRODOTTO 1--->
    <a href="prodotto.html?${categoria}/${id-1}" value="" class="card">
        <img src="${src}" class="card__image" alt="Cassettiera Fjord" />
        <div class="card__overlay">
            <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                </svg>
                <div class="container-fluid card__header-text d-flex flex-row justify-content-between align-items-baseline">
                    <h3 class="card__title text-dark">${nome}</h3>
                    <h3 class="card__status text-success">${prezzo} &euro;</h3>
                </div>
            </div>
            
            <p class="card__description">${descrizione}</p>
        </div>
    </a>
</div>`;
}

function init() {
    shopListContainer = document.getElementById('shop-list-container');
    shopListContainer = document.getElementById('shop-list-container');
    if (window.location.href.includes('shop.html?cassettiere')) {
        categoriaCassettiere();
    } else if (window.location.href.includes('shop.html?sedie')) {
        categoriaSedie();
    } else if (window.location.href.includes('shop.html?tavoli')) {
        categoriaTavoli();
    } else if (window.location.href.includes('shop.html?letti')) {
        categoriaLetti();
    } else if (window.location.href.includes('shop.html?lampade')) {
        categoriaLampade();
    } else if (window.location.href.includes('shop.html?decorazioni')) {
        categoriaDecorazioni();
    } else {
        printData();
    }

}

printData = () => {
    categoriaCassettiere();
    categoriaTavoli();
    categoriaSedie();
    categoriaLampade();
    categoriaDecorazioni();
    categoriaLetti();
}

categoriaTavoli = () => {
    shopListContainer.innerHTML = '';
    myGet('tavoli').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'tavoli', element.id);
                return
            });
        } else {
            // da aggiungere
        }
    });
}

categoriaCassettiere = () => {
    shopListContainer.innerHTML = '';
    myGet('cassettiere').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'cassettiere', element.id);
            });
        } else {
            // da aggiungere
        }
    });
}

categoriaSedie = () => {
    shopListContainer.innerHTML = '';
    myGet('sedie').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'sedie', element.id);
            });
        } else {
            // da aggiungere
        }
    });
}

categoriaLetti = () => {
    shopListContainer.innerHTML = '';
    myGet('letti').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'letti', element.id);
            });
        } else {
            // da aggiungere
        }
    });
}

categoriaLampade = () => {
    shopListContainer.innerHTML = '';
    myGet('lampade').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'lampade', element.id);
            });
        } else {
            // da aggiungere
        }
    });
}

categoriaDecorazioni = () => {
    shopListContainer.innerHTML = '';
    myGet('decorazioni').then((data) => {
        if (data.length > 0) {
            data.map(function (element) {
                shopListContainer.innerHTML += myString(element.immagine, element.prezzo, element.nome, element.descrizione, 'decorazioni', element.id);
            });
        } else {
            // da aggiungere
        }
    });
}