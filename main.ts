interface IProdotto {
  tipo: string;
  id: string;
  taglia: string;
  colore: string;
  ordinato: boolean;
  assegnaCliente(cliente: ICliente): void;
}



interface ICliente {
  nome: string
  cognome: string
  email: string
  pagamentoPreferito: string

  ordinaProdotto(prodotto: IProdotto): void
}


interface IProcessoProduzione {
  nomeProcesso: string
  descrizioneProcesso: string
  prodottiInProduzione: IProdotto[]
  aggiungiProdotto(prodotto: IProdotto): void
}

class Prodotto implements IProdotto {
  tipo: string;
  id: string;
  taglia: string;
  colore: string;
  ordinato: boolean;
  constructor(tipo: string, id: string, taglia: string, colore: string) {
    this.tipo = tipo;
    this.id = id;
    this.taglia = taglia;
    this.colore = colore;
    this.ordinato = false;
  }

  assegnaCliente(cliente: ICliente): void {
    this.ordinato = true

    console.log("prodotto assegnato al cliente " + cliente.nome + cliente.cognome)
  }
}

class Cliente implements ICliente {
  nome: string
  cognome: string
  email: string
  pagamentoPreferito: string
  constructor(nome: string, cognome: string, email: string, pagamentoPreferito:
    string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.pagamentoPreferito = pagamentoPreferito;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.ordinato == false) {
      prodotto.assegnaCliente(this)
    } else {
      console.log("il prodotto non è disponibile")
    }
  }
}



class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string
  descrizioneProcesso: string
  prodottiInProduzione: IProdotto[]
  constructor(nomeProcesso: string, descrizioneProcesso: string, prodottiInProduzione: IProdotto[]) {
    this.nomeProcesso = nomeProcesso;
    this.descrizioneProcesso = descrizioneProcesso;
    this.prodottiInProduzione = prodottiInProduzione;
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto)
    console.log("aggiunto alla produzione il prodotto: " + prodotto)
  }
}


const costumeA: Prodotto = new Prodotto("costume", "a568sbgsiau", "L", "blu")
const costumeB: Prodotto = new Prodotto("costume", "a568sbgsiau", "S", "nero")
const cuffiaA: Prodotto = new Prodotto("cuffia", "a568sbgsiau", "S", "nero")


const cliente1: Cliente = new Cliente("Fabio", "Rossi", "fabiorossi@gmail.com", "Carta")
const cliente2: Cliente = new Cliente("Mario", "Bianchi", "mariobianchi@gmail.com", "Contanti")
const cliente3: Cliente = new Cliente("Lisa", "Gialli", "lisagialli@gmail.com", "Carta")

const processoProduzione: ProcessoProduzione = new ProcessoProduzione("riciclo plastica pescherecci", "Con la plastica acquistata dai pescherecci creiamo i nostri costumi. In questo modo aiutiamo economicamente i pescatori, puliamo il mare e creiamo i nostri capi riciclati e non inquinanti", [costumeA, costumeB])