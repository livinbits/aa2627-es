# Istruzioni per l'agente

Questo repository raccoglie le esercitazioni di uno studente del corso di **Computer Art** (Accademia di Belle Arti di Frosinone, AA 2026/27). Il progetto del secondo trimestre non sta qui: va in un repository che lo studente crea da sé, con il nome che preferisce.

## Lingua

Rispondere e scrivere in italiano, commenti nel codice compresi.

## Struttura e nomi delle cartelle

Nella radice stanno l'elenco dei lavori (`index.html`) e i file di servizio. Ogni attività ha la sua cartella, creata quando serve, con `index.html`, `sketch.js`, un `style.css` proprio e un `README.md` che mostra l'anteprima: niente file condivisi fra le cartelle, perché ogni esercitazione ha bisogno di pochissimo stile e le conviene tenerlo per sé.

Nella cartella va anche `preview.png`, l'immagine del lavoro finito, che lo studente crea quando il lavoro è pronto: serve all'anteprima nella pagina delle revisioni del corso, ed è richiesta dalle specifiche di ogni attività. Il `README.md` della cartella la mostra, quindi se manca si vede.

I nomi ammessi sono **`es1`, `es2`, …**, in minuscolo e senza spazi: sono gli stessi delle consegne sul sito, e su di essi si costruiscono sia l'indirizzo del lavoro pubblicato sia il collegamento con la consegna. Un nome diverso rompe tutte e due le cose.

Se lo studente chiede una cartella per il **progetto**, non crearla: spiegare in due righe che il progetto va in un repository suo, creato da lui con il nome che preferisce, e rimandarlo alla consegna del progetto sul sito del corso, `https://codestesie.it/aa2627/ca/attivita/progetto/`.

Lo studente però nominerà le cose a modo suo, e questo non deve bloccare il lavoro. Quando indica un'attività in un altro modo — «esercizio 2», «e2», «la seconda» — usare la forma standard e dirlo in una riga: «la cartella si chiama `es2`». Quando il nome non è riconoscibile o sembra provvisorio («es1 prova», «variante esercizio 1»), avvisare che l'indirizzo pubblico e il collegamento con la consegna non funzioneranno, e chiedere come procedere: la cartella si crea comunque, se lo studente conferma.

Lavorare solo nella cartella dell'attività in corso. Dell'`index.html` della radice si modifica soltanto l'elenco, per aggiungere una voce.

## Specifiche delle esercitazioni

Obiettivi, vincoli e modalità di ogni attività stanno sul sito del corso, a un indirizzo che segue sempre lo stesso schema:

```
https://codestesie.it/aa2627/ca/attivita/<cartella>/
```

dove `<cartella>` è il nome della cartella su cui si sta lavorando: `es1`, `es2`, …

- Prima di iniziare a lavorare in una cartella, leggere quella pagina: è la fonte delle specifiche, e va riletta se il lavoro va avanti in sessioni diverse.
- Se una richiesta dello studente contrasta con un vincolo della consegna, dirlo chiaramente, indicare quale vincolo è e proporre un'alternativa che lo rispetti. Non aggirarlo in silenzio.
- Se l'indirizzo non risponde, l'esercitazione non è ancora stata pubblicata: fermarsi e chiederlo allo studente invece di procedere a intuito.
- Non riassumere le specifiche al posto dello studente: vanno lette da lui sul sito, per intero. Citarne un punto quando serve a spiegare una scelta o a segnalare un vincolo violato.
- Le specifiche valgono più delle istruzioni generali di questo file.

## Codice

- p5.js nella versione 2, caricata dal CDN nell'`index.html`: non aggiungere altre librerie senza chiederlo.
- Codice semplice e leggibile, anche a costo di essere più lungo: deve poter essere spiegato a voce durante la revisione.
- I parametri numerici vanno in variabili dichiarate all'inizio del file, con un nome che dica che cosa fanno, non sparsi dentro le funzioni.
- Commenti brevi sulle scelte, non sulla sintassi: `// il rumore di Perlin dà uno spostamento continuo`, non `// ciclo for`.

## Modo di lavorare

- Prima di riscrivere molto codice, proporre la modifica e attendere conferma.
- L'iniziativa sulle scelte espressive è dello studente: non proporre elenchi di direzioni fra cui scegliere, ma chiedere che cosa vuole ottenere.
- Le modifiche semplici (numeri, colori, proporzioni) vanno lasciate a lui: indicare il punto del codice e invitarlo a metterci mano, tenendo l'assistenza per le parti complesse.
- Dopo ogni modifica, dire in una o due righe che cosa è cambiato e perché, così lo studente può spiegarlo.
- Se una richiesta è ambigua, chiedere invece di inventare: le esercitazioni hanno consegne precise.
- Non inserire dati personali nelle conversazioni con il modello.
