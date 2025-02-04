"use strict";
class Prodotto {
    constructor(tipo, id, taglia, colore) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.ordinato = false;
    }
    assegnaCliente(cliente) {
        this.ordinato = true;
        console.log(`prodotto ${this.tipo} ${this.taglia} ${this.colore} assegnato al cliente ${cliente.nome} ${cliente.cognome}`);
    }
}
class Cliente {
    constructor(nome, cognome, email, pagamentoPreferito) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamentoPreferito = pagamentoPreferito;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.ordinato == false) {
            prodotto.assegnaCliente(this);
        }
        else {
            console.log(`il prodotto ${prodotto.tipo} ${prodotto.taglia} ${prodotto.colore} non è disponibile`);
        }
    }
}
class ProcessoProduzione {
    constructor(nomeProcesso, descrizioneProcesso, prodottiInProduzione) {
        this.nomeProcesso = nomeProcesso;
        this.descrizioneProcesso = descrizioneProcesso;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log(`aggiunto alla produzione il prodotto:  ${prodotto.tipo} ${prodotto.taglia} ${prodotto.colore}`);
    }
}
const costumeA = new Prodotto("costume", "a568sbgsiau", "L", "blu");
const costumeB = new Prodotto("costume", "a568sbgsiau", "S", "nero");
const cliente1 = new Cliente("Fabio", "Rossi", "fabiorossi@gmail.com", "Carta");
const cliente2 = new Cliente("Mario", "Bianchi", "mariobianchi@gmail.com", "Contanti");
const cliente3 = new Cliente("Lisa", "Gialli", "lisagialli@gmail.com", "Carta");
const processoProduzione = new ProcessoProduzione("riciclo plastica pescherecci", "Con la plastica acquistata dai pescherecci creiamo i nostri costumi. In questo modo aiutiamo economicamente i pescatori, puliamo il mare e creiamo i nostri capi riciclati e non inquinanti", [costumeA, costumeB]);
console.log(costumeB);
cliente1.ordinaProdotto(costumeB);
console.log(costumeB);
cliente2.ordinaProdotto(costumeB);
console.log(costumeA);
cliente2.ordinaProdotto(costumeA);
console.log(costumeA);
const cuffiaA = new Prodotto("cuffia", "a568sbgsiau", "S", "nero");
processoProduzione.aggiungiProdotto(cuffiaA);
console.log(processoProduzione);
console.log(cuffiaA);
cliente3.ordinaProdotto(cuffiaA);
console.log(cuffiaA);
