// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {
    text: "Oh, tus ojos, tus ojos<br/>Hacen parecer que las estrellas no brillan",
    time: 1,
  },
  {
    text: "Tu cabello, tu cabello<br/>Cae perfecto sin que lo intentes",
    time: 5.1,
  },
  { text: "Eres tan hermosa<br/>Y lo pienso todos los días", time: 10 },
  {
    text: "Sí, lo sé, lo sé<br/>Cuando te digo que te quiero, no me crees",
    time: 18,
  },
  { text: "Y es tan, es tan triste<br/>Que no veas como yo te veo", time: 23 },
  {
    text: "Pero cada vez que me dices: 'No me quieres >:v'<br/>Yo digo:",
    time: 27,
  },
  { text: "♫♫♫", time: 35 },
  // { text: "Cuando veo tu rostro<br/>No hay nada que cambiaría", time: 30 },
  // { text: "Porque eres asombrosa<br/>Así como eres", time: 35 },
  // {
  //   text: "Y cuando sonríes<br/>El mundo entero se detiene a mirarte por un momento",
  //   time: 40,
  // },
  // { text: "Porque Fran, eres increíble, <br/>Así como eres", time: 47 },
  // { text: "Sí", time: 54 },
  // {
  //   text: "Sus labios, sus labios<br/>Podría besarlos todo el día si me dejaras",
  //   time: 55,
  // },
  // { text: "Su risa, su risa<br/>La amo y creo que es la más sexy", time: 60 },
  // { text: "Eres es tan hermosa<br/>Y lo pienso todos los días", time: 65 },
  // { text: "Oh, sabes, sabes, sabes<br/> Que nunca te pediría que cambies", time: 70 },
  // {
  //   text: "Si la perfección es lo que buscas<br/>Entonces simplemente no cambies",
  //   time: 75,
  // },
  // {
  //   text: "Así que ni te molestes en preguntar cómo te ves<br/>Sabes que pienso",
  //   time: 80,
  // },
  { text: "Cuando veo tu rostro<br/>No hay nada que cambiaría", time: 88 },
  { text: "Cuando veo tu rostro<br/>No hay nada que cambiaría", time: 93 },
  { text: "Porque eres asombrosa<br/>Así como eres Fran ", time: 98 },
  {
    text: "♫♫♫",
    time: 106,
  },
  {
    text: "Te quiero mucho<3",
    time: 110,
  },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    lyrics.style.opacity = 1; // Aparece
    lyrics.style.transform = "translateY(0)"; // Vuelve a la posición original
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0; // Desaparece
    lyrics.style.transform = "translateY(10px)"; // Desciende ligeramente
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
