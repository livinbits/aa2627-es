// E1. Cinetismi e interattività
//
// Obiettivo: disegnare configurazioni geometriche complesse usando un
// "pennello" dinamico, che cambia fotogramma dopo fotogramma.
//
// Vincoli ricavati dalle specifiche:
// - la pennellata è costituita da una o più forme geometriche (qui una linea)
// - la pennellata cambia a ogni fotogramma, in modo progressivo (qui ruota)
// - le dimensioni del canvas si adattano all'area disponibile e lo sfondo
//   deve sempre occupare tutta l'area, anche quando la finestra viene ridimensionata
// - si disegna tenendo premuto il mouse

// lunghezza della pennellata, in pixel
const LUNGHEZZA = 180;
// fotogrammi per un giro completo di rotazione
const FOTOGRAMMI_PER_GIRO = 10;
// trasparenza della pennellata: più è bassa e più le tracce si sovrappongono
const TRASPARENZA = 64;
// colore dello sfondo, in scala di grigi
const SFONDO = 0;
// colore della pennellata, in scala di grigi
const PENNELLATA = 255;
// radianti di seno per fotogramma: più è alta e più la pulsazione è rapida
const VELOCITA_PULSAZIONE = 0.05;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
  background(SFONDO);
  stroke(PENNELLATA, TRASPARENZA);
}

function draw() {
    translate(mouseX, mouseY);
    rotate(frameCount / FOTOGRAMMI_PER_GIRO);
    const lunghezza = LUNGHEZZA * (0.5 + 0.5 * sin(frameCount * VELOCITA_PULSAZIONE));
    line(0, 0, lunghezza, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(SFONDO);
}
