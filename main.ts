interface IProdotto {
  tipo: string;
  id: string;
  taglia: string;
  colore: string;
  stato: boolean;
  assegnaCliente(cliente: ICliente): void;
}



interface ICliente {

}