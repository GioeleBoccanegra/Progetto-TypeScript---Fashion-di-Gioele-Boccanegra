# Progetto TypeScript - Fashion di Gioele Boccanegra

## Descrizione

Questo progetto è una simulazione di un'applicazione che gestisce il ciclo di vita di un prodotto, dalla creazione del prodotto fino alla sua assegnazione a un cliente. Il progetto include classi che implementano interfacce in TypeScript, insieme alla gestione dei prodotti, dei clienti e dei processi di produzione. Il codice TypeScript è compilato in JavaScript per l'esecuzione nel browser.

## File principali del progetto

- **main.ts**: Questo è il file TypeScript principale che contiene la logica del progetto. In questo file sono definite le interfacce `IProdotto`, `ICliente`, e `IProcessoProduzione`, insieme alle relative classi `Prodotto`, `Cliente` e `ProcessoProduzione`. Inoltre, vengono eseguite alcune operazioni di esempio per vedere l'interazione tra i vari componenti.
  
- **tsconfig.json**: Questo file è la configurazione di TypeScript che definisce le opzioni di compilazione e altre impostazioni per il progetto. È utilizzato per compilare il file TypeScript in JavaScript.
  
- **index.html**: Un file HTML semplice che viene utilizzato per caricare il codice compilato e eseguirlo nel browser. Questo file serve anche per visualizzare i log della console direttamente nel browser, rendendo più comodo il debugging.

## Setup e Esecuzione

1. **Installazione delle dipendenze**
   
   Se non hai già installato TypeScript, puoi farlo eseguendo il seguente comando:

   ```bash
   npm install -g typescript
    ```

2. **Compilazion del codice TyopeScript**
   Dopo aver creato il file tsconfig.json, puoi compilare il codice TypeScript con il comando:
   
   ```tsc
    ```

   Questo genererà il file main.js, che sarà eseguito nel browser.

3. **Esecuzione nel browser**
   Per eseguire l'applicazione nel browser, apri il file index.html in un browser compatibile. I log della console TypeScript saranno visibili direttamente nel browser.

## Struttura del progetto
```/project-root
  ├── index.html            # File HTML per il browser
  ├── main.ts               # Codice TypeScript principale
  ├── main.js               # Codice JavaScript compilato
  ├── tsconfig.json         # Configurazione di TypeScript
 ```
## Esempio di esecuzione

Nel file `main.ts`, sono definiti alcuni esempi di prodotti, clienti e processi di produzione. Quando esegui il codice, vedrai i seguenti messaggi nella console del browser:

- **Assegnazione di un prodotto al cliente**: Quando un cliente ordina un prodotto, verrà stampato un messaggio che conferma l'assegnazione del prodotto al cliente, indicando il tipo, la taglia e il colore del prodotto, insieme al nome del cliente.
  
- **Messaggi di errore quando un prodotto non è disponibile**: Se un prodotto è già stato ordinato da un altro cliente, verrà stampato un messaggio che informa che il prodotto non è disponibile.

- **Aggiunta di nuovi prodotti al processo di produzione**: Quando un nuovo prodotto viene aggiunto al processo di produzione, verrà stampato un messaggio che conferma l'aggiunta del prodotto, mostrando tipo, taglia e colore.

## Contribuire

Se desideri contribuire a questo progetto, fai un fork del repository e invia una pull request con le tue modifiche. Assicurati di testare il codice prima di inviarlo.

# Sviluppato da Gioele Boccanegra





