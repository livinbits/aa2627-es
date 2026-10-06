# Computer Art 2026/27: le esercitazioni

Lavori pubblicati: https://livinbits.github.io/aa2627-es/

Repository personale per le esercitazioni del corso di **Computer Art**, Accademia di Belle Arti di Frosinone.

Le consegne, con obiettivi, vincoli e modalità di realizzazione, si trovano nella sezione [Attività](https://codestesie.it/aa2627/ca/attivita/) del sito del corso: sono quelle il riferimento, e vanno lette per intero prima di iniziare.

## Prima di iniziare

Servono **Visual Studio Code**, **Git**, **OpenCode** e due estensioni, OpenCode e Live Server. L'installazione, passo per passo e con le immagini, sta in due guide del sito del corso, una per sistema:

- [Visual Studio Code e OpenCode su Windows](https://codestesie.it/guide/vscode-opencode-windows/)
- [Visual Studio Code e OpenCode su macOS](https://codestesie.it/guide/vscode-opencode-macos/)

Una cosa le guide non la dicono, perché riguarda solo il corso: al primo avvio l'agente sceglie da sé un modello gratuito, e per cambiarlo si scrive `/models` nella conversazione e si sceglie dall'elenco; per usare modelli a pagamento occorre prima collegare un account con `/connect`.

Le scorciatoie da tastiera indicate qui e più avanti sono quelle di Windows: su macOS, al posto di `Ctrl`, si usa `Cmd`.


## Come si prepara il repository

Una volta sola, all'inizio del corso. I primi cinque passaggi si fanno **sul sito di GitHub**, con il browser; gli ultimi due in **Visual Studio Code**.

1. Creare un profilo su [github.com](https://github.com/signup), se non se ne ha già uno. Il nome utente scelto comparirà negli indirizzi dei propri lavori, quindi conviene sceglierlo breve e leggibile. Registrandosi con la posta dell'Accademia si può poi chiedere il [GitHub Student Developer Pack](https://education.github.com/pack), che dà gratuitamente il piano Pro.
2. Creare la propria copia del modello: nella pagina del repository del corso, premere **Use this template › Create a new repository**, dare al proprio repository il nome `aa2627-es`, lasciarlo **Public** e premere *Create repository*. La copia è indipendente e resta sul proprio profilo.
3. Attivare GitHub Pages, che pubblica i lavori: *Settings › Pages › Source: Deploy from a branch › main › / (root) › Save*.
4. Aggiungere il docente come collaboratore, per le revisioni dirette: *Settings › Collaborators › Add people*.
5. Copiare l'indirizzo del **proprio** repository, quello appena creato, che GitHub mostra subito dopo la creazione: pulsante verde **Code**, scheda *HTTPS*, icona della copia.
6. Scaricare il repository sul proprio computer: in VS Code, *Visualizza › Riquadro comandi* (`Ctrl+Shift+P`), scrivere `clona` e scegliere *Git: Clona*; poi incollare l'indirizzo e indicare la cartella dove metterlo. Alla domanda se aprire il repository clonato, rispondere di sì.
7. Con la cartella aperta, aprire l'estensione di OpenCode e dare il comando `/inizio`, che scrive il proprio nome nelle pagine e l'indirizzo pubblico in questo file.

## Come si lavora

Da qui in avanti si lavora **in Visual Studio Code**, nella cartella scaricata sul proprio computer: sul sito di GitHub non c'è più niente da fare a mano.

1. Creare la cartella dell'esercitazione con il comando `/crea es1`.
2. Scrivere il codice in `sketch.js`, dentro quella cartella.
3. Vedere il risultato: tasto destro su `index.html` della cartella › *Open with Live Server*.

   > Conviene attivare il salvataggio automatico, *File › Salvataggio automatico*: con Live Server il browser si aggiorna a ogni salvataggio, quindi le modifiche si vedono mentre si scrive, senza premere ogni volta `Ctrl+S`.

4. Pubblicare il lavoro: aprire *Visualizza › Controllo del codice sorgente* (`Ctrl+Shift+G`), **scrivere un messaggio** che dica che cosa è stato fatto, premere **Commit** e poi **Sincronizza**.

   > Il messaggio non è facoltativo: senza, il pulsante *Commit* non conclude niente, ed è il motivo per cui a volte sembra che non funzioni. Bastano poche parole, come «prima versione di es1» o «colori più scuri e sfondo nero».

Dopo circa un minuto il lavoro è online all'indirizzo `https://livinbits.github.io/aa2627-es/es1/`, con il proprio nome utente di GitHub al posto di `livinbits` e la cartella giusta al posto di `es1`.

Le cartelle si chiamano `es1`, `es2` e così via: sono gli stessi nomi delle consegne sul sito, e non sono nomi liberi, perché su quelli si costruiscono l'indirizzo del lavoro pubblicato e il collegamento con la consegna.

## Come si consegna

Il primo passaggio si fa **in Visual Studio Code**, il secondo **nel browser**.

1. Dare all'agente il comando **`/consegna es1`**, con il nome della cartella: controlla che sia completa, fa commit e sincronizzazione, e poi compone e mostra **l'indirizzo pubblico del lavoro**.
2. Aprire il [modulo delle consegne](INDIRIZZO-DEL-MODULO) e compilarlo: l'esercitazione, cognome e nome, l'indirizzo appena mostrato dal comando ed eventuali note.

<!-- Da sostituire con l'indirizzo del modulo di Google, quello precompilato per questo corso. -->

Non serve nessun account per compilare il modulo. Nelle note conviene scrivere su che cosa si vogliono osservazioni, o che cosa non ha funzionato: è la parte che rende utile la revisione.

**La revisione arriva nella chat di Teams**, non qui. Se dopo la consegna si continua a lavorare sulla stessa esercitazione, si rifà la consegna: vale l'ultima.

> **Se l'indirizzo serve senza passare dal comando.** Si pubblica il lavoro con Commit e Sincronizza, si apre nel browser il proprio elenco dei lavori, `https://livinbits.github.io/aa2627-es/`, si entra nella cartella dell'esercitazione e si copia l'indirizzo dalla barra. È lo stesso che compone `/consegna`. Non va confuso con quello di Live Server, che comincia per `127.0.0.1` e funziona solo sul proprio computer.

## I comandi di OpenCode

Quattro comandi sono stati scritti per questo corso e funzionano solo in questo repository:

- `/inizio`: scrive il proprio nome e l'indirizzo pubblico del repository;
- `/crea es1`: crea la cartella dell'esercitazione, leggendo la consegna dal sito del corso;
- `/verifica es1`: confronta il lavoro con i vincoli della consegna e dice quali non sono rispettati;
- `/consegna es1`: controlla, pubblica e ricorda l'indirizzo da segnalare.

Gli altri sono di OpenCode e funzionano in qualsiasi cartella. I più utili:

- `/help`: elenco completo dei comandi;
- `/models`: cambia il modello linguistico in uso;
- `/connect`: collega un account, per usare modelli a pagamento;
- `/undo`: annulla l'ultima richiesta e le modifiche ai file che ha prodotto (`/redo` le rimette);
- `/new`: comincia una conversazione nuova, quando si cambia argomento;
- `/sessions`: riprende una conversazione precedente;
- `/init`: rilegge il progetto e aggiorna il file `AGENTS.md`;
- `/export`: salva la conversazione in un file di testo.
