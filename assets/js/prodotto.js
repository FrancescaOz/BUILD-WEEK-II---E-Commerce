let stringa, prodotto, index;

prodotto = document.querySelector('#prodotto');

myGet = (prodotto) => {
    return fetch('http://localhost:3000/' + prodotto)
        .then((response) => {
            return response.json();
        });
};

window.addEventListener('DOMContentLoaded', init);

myString = (prezzo, nome, immagine, descrizione) => {
    return stringa = `
    <div class="col-12 col-md-8">
        <ul>
            <li class="list-inline-item"><a class="nav-link" href="index.html">Home ></a></li>
            <li class="list-inline-item"><a class="nav-link" href="index.html">Categoria ></a></li>
            <li class="list-inline-item"><a class="nav-link" href="">${nome}</a></li>
        </ul>
        <img src="${immagine}" alt="" class="img-fluid pb-3" value="${immagine}" id="immagine">
    </div>
    <div class="col-12 col-md-4 d-md-flex vh-100 align-items-center ps-3">
        <ul class="list-unstyled">
            <li>
                <div class="container-fluid justify-content-between d-flex flex-row">
                    <p class="fs-2 fw-bold" value="${nome}" id="nome">${nome}</p>
                    <p class="fs-2 text-success" value="${prezzo}" id="prezzo">&euro; ${prezzo}</p>
                </div>
            </li>
            <li>
                <p class="pb-4">${descrizione}</p>
            </li>
            <li class="d-flex flex-row align-items-baseline justify-content-between">
                <div class="d-flex flex-row">
                    <button class="btn btn-success" type="submit" onclick="aggiungi()"><i
                            class="fa-solid fa-cart-shopping me-2 text text-white link-success"></i>Aggiungi</button>
                    <div class="d-flex flex-row">
                        <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                        </button>
    
                        <input id="form1" min="0" name="quantity" value="1" type="number"
                            class="form-control form-control-sm" style="width: 50px;" />
    
                        <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>`
}

function init() {

    if (window.location.href.includes('cassettiere')) {
        categoriaCassettiere();
    } else if (window.location.href.includes('sedie')) {
        categoriaSedie();
    } else if (window.location.href.includes('tavoli')) {
        categoriaTavoli();
    } else if (window.location.href.includes('letti')) {
        categoriaLetti();
    } else if (window.location.href.includes('lampade')) {
        categoriaLampade();
    } else if (window.location.href.includes('decorazioni')) {
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

categoriaCassettiere = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('cassettiere').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
}

categoriaTavoli = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('tavoli').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
};

categoriaSedie = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('sedie').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
};

categoriaLampade = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('lampade').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
};

categoriaDecorazioni = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('decorazioni').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
};

categoriaLetti = () => {
    index = window.location.href.slice(-1);
    console.log(index)
    myGet('letti').then((data) => {
        prodotto.innerHTML += myString(data[index].prezzo, data[index].nome, data[index].immagine, data[index].descrizione);
    });
};