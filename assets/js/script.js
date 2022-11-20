//BLACKFRIDAY//
// Imposta la data
var countDownDate = new Date("Nov 25, 2022 00:00:00").getTime();
// Aggiorna il countdown ogni secondo
var x = setInterval(function () {

  // Imposta la data di oggi
  var now = new Date().getTime();

  // Trova la distanza tra la data di oggi e quella finale
  var distance = countDownDate - now;

  // Calcola il tempo in giorni, ore, minuti e secondi
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra il risultato nell'elemento con id 'countdown'
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // Se il countdown finisce mostra un messaggio
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Il Black Friday si è concluso";
  }
}, 1000);


