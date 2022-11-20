window.addEventListener('DOMContentLoaded', init);

let prezzo, nome, immagine, user, quantita, datiCarrello, numeroCarrello, quantitaPrezzo;

fetch('http://localhost:3000/carrello')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    numeroCarrello = document.getElementById('numeroCarrello');
    numeroCarrello.innerHTML = data.length;
  });


function aggiungi() {
  prezzo = document.getElementById('prezzo').getAttribute('value');
  nome = document.getElementById('nome').getAttribute('value');
  immagine = document.getElementById('immagine').getAttribute('value');
  quantita = document.getElementById('form1').value;
  user = new ArticoloCarrello(nome, prezzo, immagine, quantita)
  // datiCarrello = {
  //   id: 1,
  //   nome: nome,
  //   prezzo: prezzo,
  //   immagine: immagine,
  //   quantita: quantita
  // };
  carrello(user);
}

//al click di aggiungi vanno inserite nel local storage la quantità il prezzo e il nome e l'immagine (valori)//
class ArticoloCarrello {
  constructor(_nome, _prezzo, _immagine, _quantita) {
    this.nome = _nome,
      this.prezzo = _prezzo,
      this.immagine = _immagine,
      this.quantita = _quantita
  }
}

async function carrello(user) {

  let response = await fetch('http://localhost:3000/carrello',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(user),
    }
  ).then(() => {
    sessionStorage.setItem("registration", "true");
  })
}

// POPOLAZIONE PAGINA CARRELLO

let listaCarrello, stringaCarrello, totaleCar, totaleCar2, somma = [], sum = 0;

myGetCarrello = () => {
    return fetch('http://localhost:3000/carrello')
        .then((response) => {
            return response.json();
        });
};

myStringCarrello = (immagine, nome, quantita, prezzo) => {
    return stringaCarrello = `<tr>
    <th scope="row">
        <div class="d-flex align-items-center">
            <img src="${immagine}"
                class="img-fluid rounded-3" style="width: 120px;" alt="Book">
            <div class="flex-column ms-4">
                <p class="mb-2">${nome}</p>
            </div>
        </div>
    </th>
    <td class="align-middle">
        <p class="mb-0" style="font-weight: 500;"></p>
    </td>
    <td class="align-middle">
        <div class="d-flex flex-row">
            <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" value="${quantita}" onchange="aggiorna()" type="number"
                class="form-control form-control-sm" style="width: 50px;" />

            <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </td>
    <td class="align-middle">
        <p class="mb-0" style="font-weight: 500;">&euro;${prezzo}</p>
    </td>
</tr>`
}

function init() {
  listaCarrello = document.getElementById('prodottoCarrello');
  totaleCar = document.getElementById('totaleCarrello');
  totaleCar2 = document.getElementById('totaleCarrello2');
  printDataCarrello();
  totaleCarrello()
}

printDataCarrello = () => {
  listaCarrello.innerHTML = '';
  myGetCarrello().then((data) => {
      if (data.length > 0) {
          data.map(function (element) {
            quantitaPrezzo = element.quantita * element.prezzo;
            listaCarrello.innerHTML += myStringCarrello(element.immagine, element.nome, element.quantita, quantitaPrezzo);
              return
          });
      } else {
          // da aggiungere
      }
  });
}

/*
function aggiorna() {
  data = 
aggiornaQuantita(data);
  printDataCarrello();

}


async function aggiornaQuantita(data) {
	let response = await fetch('http://localhost:3000/elenco/' + n, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}*/

totaleCarrello = () => {
  totaleCar.innerHTML = '';
  myGetCarrello().then((data) => {
      if (data.length > 0) {
          data.map(function (element) {
            somma.push(element.prezzo);
              return
          });
      } else {
          // da aggiungere
      };
      for (i=0; i<somma.length; i++) {
        sum = sum + Number(somma[i]);
      }
      totaleCar.innerHTML = sum;
      totaleCar2.innerHTML = sum;
  });
};
