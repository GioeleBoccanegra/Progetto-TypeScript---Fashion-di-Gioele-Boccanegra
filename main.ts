interface IProdotto {
  tipo: string;
  id: string;
  taglia: string;
  colore: string;
  stato: boolean;
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