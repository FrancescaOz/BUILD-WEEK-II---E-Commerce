let nomeCheck, cognomeCheck, emailCheck, indirizzoCheck, paeseCheck, statoCheck, capCheck;

checkout = () => {
    nomeCheck = document.querySelector('#nome'); 
    cognomeCheck = document.querySelector('#cognome'); 
    emailCheck = document.querySelector('#email'); 
    indirizzoCheck = document.querySelector('#indirizzo'); 
    paeseCheck = document.querySelector('#paese'); 
    statoCheck = document.querySelector('#stato'); 
    capCheck = document.querySelector('#cap');
    let dataCheckout = {
        nome: nomeCheck.value,
        cognome: cognomeCheck.value,
        email: emailCheck.value,
        indirizzo: indirizzoCheck.value,
        paese: paeseCheck.value,
        stato: statoCheck.value,
        cap: capCheck.value
    };
    addDataCheckout(dataCheckout);
    alert('Grazie per aver scelto MODO, Il tuo ordine è stato preso in carico.')
}


async function addDataCheckout(dataCheckout) {

    let response = await fetch('http://localhost:3000/checkout',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(dataCheckout),
        }
    ).then(() => {
        sessionStorage.setItem("registration", "true");
    })

}